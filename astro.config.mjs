// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drealm.ee',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // hreflang lives in each page's <head> (slugs differ per language, so no sitemap i18n)
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    }),
  ],
});
