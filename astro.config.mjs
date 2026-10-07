// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Real lastmod only where we know it (blog posts: pubDate). A build-time date on every URL is noise Google ignores.
const postDates = {};
for (const [lang, base] of [['et', '/blogi/'], ['en', '/en/blog/']]) {
  for (const f of readdirSync(`./src/content/blog/${lang}`)) {
    const d = readFileSync(`./src/content/blog/${lang}/${f}`, 'utf8').match(/^pubDate:\s*(\S+)/m);
    if (d) postDates[`https://drealm.ee${base}${f.replace(/\.md$/, '')}`] = new Date(d[1]).toISOString();
  }
}
// Solution pages that are noindex until their deep content is written (kept in sync by SolutionPage).
const noindexPaths = new Set(JSON.parse(readFileSync('./src/data/v2/noindex.json', 'utf8')));

export default defineConfig({
  site: 'https://drealm.ee',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // hreflang lives in each page's <head> (slugs differ per language, so no sitemap i18n)
      filter: (page) => !page.includes('/404') && !noindexPaths.has(new URL(page).pathname),
      serialize: (item) => (postDates[item.url] ? { ...item, lastmod: postDates[item.url] } : item),
    }),
  ],
});
