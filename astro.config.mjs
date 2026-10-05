// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drealm.ee',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/uus'),
      i18n: {
        defaultLocale: 'et',
        locales: { et: 'et-EE', en: 'en' },
      },
    }),
  ],
});
