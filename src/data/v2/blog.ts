import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './services';
import { ROUTES } from './ui';

export type Post = CollectionEntry<'blog'>;

export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/');
export const postUrl = (p: Post) => `${ROUTES.blog[postLang(p)]}/${postSlug(p)}`;

/** blog front-matter `service` → v2 service id */
export const POST_SERVICE: Record<string, string> = {
  website: 'veebilehed',
  development: 'platvormid',
  'ai-automation': 'automatiseerimine',
  'local-seo': 'seo',
  'meta-ads': 'meta',
  seo: 'seo',
};

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog');
  return all.filter((p) => postLang(p) === lang).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
}

export async function getTranslation(p: Post, lang: Lang) {
  const all = await getCollection('blog');
  return all.find((x) => postLang(x) === lang && x.data.translationKey === p.data.translationKey);
}

export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 200));
