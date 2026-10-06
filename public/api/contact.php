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
    'timeline' => field('timeline', 60),
    'url' => field('url', 300),
    'lang' => $lang,
    'page' => field('page', 200),
];

// Free website review request: only URL + email are asked
if (field('type', 20) === 'audit') {
    $url = $lead['url'];
    if ($url === '') reply(false);
    if (!preg_match('~^https?://~i', $url)) $url = 'https://' . $url;
    $lead['service'] = 'Tasuta kodulehe ülevaade';
    $lead['name'] = $lead['name'] ?: 'Ülevaate soov';
    $lead['message'] = "Palun tee tasuta ülevaade: $url";
}

if ($lead['name'] === '' || $lead['message'] === '' || !filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) reply(false);

$esc = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$isAudit = field('type', 20) === 'audit';
$labels = [
    'name' => 'Nimi',
    'email' => 'E-post',
    'phone' => 'Telefon',
    'company' => 'Ettevõte',
    'service' => 'Teenus',
    'budget' => 'Eelarve',
    'timeline' => 'Ajakava',
    'url' => 'Koduleht',
    'lang' => 'Keel',
    'page' => 'Leht',
];
$rows = '';
foreach ($labels as $k => $label) {
    $v = $lead[$k] ?? '';
    if ($v === '') continue;
    if ($k === 'email') $v = '<a href="mailto:' . $esc($v) . '" style="color:#a21e02">' . $esc($v) . '</a>';
    elseif ($k === 'phone') $v = '<a href="tel:' . $esc(preg_replace('/[^+\d]/', '', $v)) . '" style="color:#a21e02">' . $esc($v) . '</a>';
    elseif ($k === 'url') $v = '<a href="' . $esc(preg_match('~^https?://~i', $v) ? $v : 'https://' . $v) . '" style="color:#a21e02">' . $esc($v) . '</a>';
    else $v = $esc($v);
    $rows .= '<tr><td style="padding:8px 16px 8px 0;color:#8a7468;font-size:13px;white-space:nowrap;vertical-align:top">' . $label . '</td>'
        . '<td style="padding:8px 0;color:#1b0200;font-size:15px">' . $v . '</td></tr>';
}
$title = $isAudit ? 'Tasuta kodulehe ülevaate soov' : 'Uus hinnapäring';
$html = '<div style="background:#ebe5db;padding:24px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">'
    . '<div style="max-width:620px;margin:0 auto;background:#fbf8f4;border-radius:16px;overflow:hidden">'
    . '<div style="background:#1b0200;color:#fff4ee;padding:22px 28px"><div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#ff9a68">drealm.ee</div>'
    . '<div style="font-size:22px;margin-top:6px">' . $title . '</div></div>'
    . '<div style="padding:24px 28px">'
    . '<p style="margin:0 0 18px;padding:14px 16px;background:#f3ece2;border-left:3px solid #a21e02;border-radius:8px;white-space:pre-wrap;font-size:15px;line-height:1.55;color:#1b0200">' . $esc($lead['message']) . '</p>'
    . "<table style=\"border-collapse:collapse\">$rows</table>"
    . '<p style="margin:22px 0 0"><a href="mailto:' . $esc($lead['email']) . '?subject=' . rawurlencode('Re: ' . ($isAudit ? 'kodulehe ülevaade' : 'sinu päring drealmile')) . '" style="display:inline-block;background:#1b0200;color:#fff;text-decoration:none;padding:12px 18px;border-radius:10px;font-size:14px">Vasta ' . $esc($lead['name']) . '</a></p>'
    . '</div></div></div>';

$subject = ($isAudit ? 'Ülevaate soov: ' . $lead['url'] : 'Hinnapäring: ' . ($lead['service'] ?: 'üldine') . ' – ' . $lead['name']);
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
