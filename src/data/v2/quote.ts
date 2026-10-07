// "Küsi hinda" landing variants for ads: /kontakt?t=<topic>. Swaps the quote page hero per topic.
import { servicesFor } from './services';
import { TOPICS_ET, type QuoteTopic } from './quote-topics';

/** All topics for a language: the hand-written ones plus one per service id. */
export function quoteTopics(lang: 'et' | 'en'): Record<string, QuoteTopic> {
  const fromServices: Record<string, QuoteTopic> = {};
  for (const s of servicesFor(lang)) {
    fromServices[s.id] = {
      svc: s.id,
      h1: lang === 'et' ? `Küsi hinda: ${s.name.toLowerCase()}.` : `Get a quote: ${s.name.toLowerCase()}.`,
      lead: '',
      facts: [s.priceFrom && (lang === 'et' ? `Alates ${s.priceFrom}` : `From ${s.priceFrom}`), s.timeline].filter(Boolean) as string[],
    };
  }
  return lang === 'et' ? { ...fromServices, ...TOPICS_ET } : fromServices;
}

