export type Lang = 'et' | 'en';

export type ServiceGroup = 'web' | 'realestate' | 'ai' | 'industry';

export interface ServiceContent {
  /** URL slug without slashes, e.g. "kodulehe-tegemine" */
  slug: string;
  /** Short label for menus and cards (2-4 words) */
  navLabel: string;
  /** <title>, max ~60 chars, primary keyword first, ends with " | drealm" */
  metaTitle: string;
  /** Meta description, 140-160 chars, includes keyword + benefit + call to action */
  metaDescription: string;
  /** Small label above the H1, e.g. "Veebilehed" */
  eyebrow: string;
  /** H1 – contains the primary keyword naturally */
  h1: string;
  /** 1-2 sentence lead paragraph under the H1 */
  lead: string;
  /** Card text on the home/services overview, ~20 words */
  cardText: string;
  /** Section: who this is for / the problems we solve (3-5 items) */
  problemsTitle: string;
  problems: string[];
  /** Section: what you get (4-6 items) */
  deliverablesTitle: string;
  deliverables: { title: string; text: string }[];
  /** Long-form SEO body: 2-4 paragraphs of genuinely useful, specific content. Plain text, paragraphs separated by \n\n */
  bodyTitle: string;
  body: string;
  /** Price, e.g. "alates 900 €" / "from €900" */
  priceFrom: string;
  /** One sentence on what affects the price / timeline */
  priceNote: string;
  /** Typical timeline, e.g. "2–4 nädalat" */
  timeline: string;
  /** 4-6 FAQs specific to this service (not generic) */
  faqs: { q: string; a: string }[];
}

export interface Service {
  id: string;
  group: ServiceGroup;
  /** ids of 2-3 related services for internal linking */
  related: string[];
  et: ServiceContent;
  en: ServiceContent;
}
