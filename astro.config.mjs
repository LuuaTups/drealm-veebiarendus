// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drealm.ee',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'et',
        locales: { et: 'et-EE', en: 'en' },
      },
    }),
  ],
});
