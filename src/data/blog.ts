import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './types';
import { ROUTES } from './site';

export type Post = CollectionEntry<'blog'>;

export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/');
export const postUrl = (p: Post) => `${ROUTES.blog[postLang(p)]}/${postSlug(p)}`;

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog');
  return all.filter((p) => postLang(p) === lang).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
}

export async function getTranslation(p: Post, lang: Lang) {
  const all = await getCollection('blog');
  return all.find((x) => postLang(x) === lang && x.data.translationKey === p.data.translationKey);
}
