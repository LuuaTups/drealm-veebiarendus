<?php
// Päringuvorm → e-post Zone'i serveri meiliga (PHP mail()).
// Seadistus: api/config.php (pole gitis), vt api/config.example.php.

$config = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$to = $config['lead_email'] ?? 'info@drealm.ee';
$from = $config['lead_from'] ?? 'drealm.ee <info@drealm.ee>';

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');
$lang = ($_POST['lang'] ?? '') === 'en' ? 'en' : 'et';

function reply(bool $ok, int $status = 0): never {
    global $wantsJson, $lang;
    if ($wantsJson) {
        http_response_code($status ?: ($ok ? 200 : 400));
        header('Content-Type: application/json');
        echo json_encode(['ok' => $ok]);
    } else {
        $page = $lang === 'en' ? '/en/contact' : '/kontakt';
        $q = $lang === 'en' ? ($ok ? 'sent=1' : 'error=1') : ($ok ? 'saadetud=1' : 'viga=1');
        header("Location: $page?$q", true, 303);
    }
    exit;
}

function field(string $key, int $max = 500): string {
    $v = trim((string)($_POST[$key] ?? ''));
    // no header injection via newlines in single-line fields
    if ($key !== 'message') $v = preg_replace('/[\r\n]+/', ' ', $v);
    return mb_substr($v, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(false, 405);

// Spam protection: honeypot + minimum fill time
$ts = (int)field('ts', 20);
if (field('website') !== '' || ($ts && (microtime(true) * 1000) - $ts < 2500)) reply(true);

$lead = [
    'name' => field('name', 120),
    'email' => field('email', 160),
    'phone' => field('phone', 40),
    'company' => field('company', 120),
    'service' => field('service', 120),
    'budget' => field('budget', 60),
    'message' => field('message', 5000),
    'lang' => $lang,
    'page' => field('page', 200),
];

if ($lead['name'] === '' || $lead['message'] === '' || !filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) reply(false);

$esc = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$rows = '';
foreach ($lead as $k => $v) {
    if ($v === '' || $k === 'message') continue;
    $rows .= '<tr><td style="padding:4px 12px 4px 0;color:#6b6158">' . $k . '</td><td>' . $esc($v) . '</td></tr>';
}
$html = '<h2 style="font-family:Georgia,serif">Uus päring: ' . $esc($lead['service'] ?: 'drealm.ee') . '</h2>'
    . "<table>$rows</table>"
    . '<p style="white-space:pre-wrap;border-left:3px solid #a85f35;padding-left:12px">' . $esc($lead['message']) . '</p>';

$subject = 'Päring: ' . ($lead['service'] ?: 'üldine') . ' – ' . $lead['name'];
$headers = [
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/html; charset=UTF-8',
    'From' => $from,
    'Reply-To' => $lead['email'],
];
$envelopeFrom = preg_match('/<([^>]+)>/', $from, $m) ? $m[1] : $from;

$ok = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $html, $headers, '-f' . $envelopeFrom);
if (!$ok) {
    error_log('Contact form: mail() failed');
    reply(false, 502);
}
reply(true);
