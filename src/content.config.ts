import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** shorter <title> when title + brand would exceed ~60 chars */
    seoTitle: z.string().optional(),
    /** 2–3 sentence direct answer shown at the top (and quotable by AI search) */
    summary: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    translationKey: z.string(),
    service: z.string(),
  }),
});

export const collections = { blog };
