// llms.txt: a plain-text map of the site for AI search engines and assistants.
import type { APIRoute } from 'astro';
import { SERVICES, serviceHref } from '../data/v2/services';
import { subHref, subsOf } from '../data/v2/subservices';
import { postUrl } from '../data/v2/blog';
import { SOLUTIONS, solHref } from '../data/v2/solutions';
import { EMAIL, SITE_URL } from '../data/v2/ui';
import { getCollection } from 'astro:content';

const u = (p: string) => new URL(p, SITE_URL).href;

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).filter((p) => p.id.startsWith('et/'));
  const lines: string[] = [
    '# drealm',
    '',
    '> drealm builds websites, online stores and web platforms, brings clients through SEO and Meta ads, creates ad visuals and AI video ads, automates business processes with AI and trains teams to use AI. Estonian and English. Fixed prices in writing.',
    '',
    `Contact: ${EMAIL} · Quote form: ${u('/kontakt')} · English site: ${u('/en')}`,
    '',
    '## Services',
    ...SERVICES.map((s) => `- [${s.name}](${u(serviceHref(s, 'et'))}): ${s.short}${s.priceFrom ? ` Alates ${s.priceFrom}.` : ''}`),
    '',
    '## Service details',
    ...SERVICES.flatMap((s) => subsOf(s.id).map((x) => `- [${x.et.name}](${u(subHref(x, 'et'))}): ${x.et.metaDescription}`)),
    '',
    '## Solutions',
    ...SOLUTIONS.map((x) => `- [${x.et.name}](${u(solHref(x, 'et'))}): ${x.et.metaDescription}`),
    '',
    '## Guides',
    ...posts.map((p) => `- [${p.data.title}](${u(postUrl(p))}): ${p.data.description}`),
    '',
    '## About',
    `- [Meist](${u('/meist')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
