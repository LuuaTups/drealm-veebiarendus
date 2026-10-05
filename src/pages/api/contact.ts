import type { APIRoute } from 'astro';

export const prerender = false;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const field = (data: FormData, key: string, max = 500) => String(data.get(key) ?? '').trim().slice(0, max);

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  const reply = (ok: boolean, status = ok ? 200 : 400) =>
    wantsJson ? Response.json({ ok }, { status }) : redirect(ok ? '/kontakt?saadetud=1' : '/kontakt?viga=1', 303);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return reply(false);
  }

  // Spam protection: honeypot + minimum fill time
  const ts = Number(field(data, 'ts', 20));
  if (field(data, 'website') || (ts && Date.now() - ts < 2500)) return reply(true);

  const lead = {
    name: field(data, 'name', 120),
    email: field(data, 'email', 160),
    phone: field(data, 'phone', 40),
    company: field(data, 'company', 120),
    service: field(data, 'service', 120),
    budget: field(data, 'budget', 60),
    message: field(data, 'message', 5000),
    lang: field(data, 'lang', 5),
    page: field(data, 'page', 200),
  };

  if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return reply(false);

  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const to = import.meta.env.LEAD_EMAIL ?? process.env.LEAD_EMAIL;
  const from = import.meta.env.LEAD_FROM ?? process.env.LEAD_FROM ?? 'drealm <onboarding@resend.dev>';
  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or LEAD_EMAIL is not configured');
    return reply(false, 500);
  }

  const rows = Object.entries(lead)
    .filter(([k, v]) => v && k !== 'message')
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6b6158">${k}</td><td>${esc(v)}</td></tr>`)
    .join('');
  const html = `<h2 style="font-family:Georgia,serif">Uus päring: ${esc(lead.service || 'drealm.ee')}</h2>
<table>${rows}</table>
<p style="white-space:pre-wrap;border-left:3px solid #a85f35;padding-left:12px">${esc(lead.message)}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `Päring: ${lead.service || 'üldine'} – ${lead.name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return reply(false, 502);
  }
  return reply(true);
};
