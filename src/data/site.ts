import type { Lang, ServiceGroup } from './types';

export const SITE = {
  name: 'drealm',
  url: 'https://drealm.ee',
  email: 'info@drealm.ee',
  city: 'Tallinn',
  country: 'EE',
};

/** Static (non-service) pages and their path per language. */
export const ROUTES = {
  home: { et: '/', en: '/en' },
  services: { et: '/teenused', en: '/en/services' },
  pricing: { et: '/hinnad', en: '/en/pricing' },
  work: { et: '/tood', en: '/en/work' },
  futerno: { et: '/tood/marmi-futerno', en: '/en/work/marmi-futerno' },
  about: { et: '/meist', en: '/en/about' },
  contact: { et: '/kontakt', en: '/en/contact' },
  blog: { et: '/blogi', en: '/en/blog' },
  privacy: { et: '/privaatsus', en: '/en/privacy' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const r = (key: RouteKey, lang: Lang) => ROUTES[key][lang];

export const GROUPS: Record<ServiceGroup, Record<Lang, { title: string; text: string }>> = {
  web: {
    et: { title: 'Veebilehed', text: 'Kiired, ilusad ja otsingumootoritele valmis kodulehed, e-poed ja rakendused.' },
    en: { title: 'Websites', text: 'Fast, beautiful, search-ready websites, online stores and web apps.' },
  },
  realestate: {
    et: { title: 'Kinnisvara', text: 'Arendusprojektide ja maaklerite lehed, mis müüvad ruutmeetreid.' },
    en: { title: 'Real estate', text: 'Websites for developments and agents that help sell square metres.' },
  },
  ai: {
    et: { title: 'AI ja automatiseerimine', text: 'Vestlusrobotid ja automaatsed töövood, mis võtavad rutiini sinu õlult.' },
    en: { title: 'AI & automation', text: 'Chatbots and automated workflows that take routine work off your plate.' },
  },
  industry: {
    et: { title: 'Valdkonnad', text: 'Lahendused, mis on tehtud konkreetse äri vajadusi silmas pidades.' },
    en: { title: 'Industries', text: 'Websites built around the needs of a specific kind of business.' },
  },
};

export const UI = {
  et: {
    langName: 'Eesti',
    switchTo: 'English',
    skip: 'Liigu sisu juurde',
    nav: { services: 'Teenused', work: 'Tööd', pricing: 'Hinnad', blog: 'Blogi', about: 'Meist', contact: 'Kontakt' },
    cta: 'Küsi pakkumist',
    ctaShort: 'Alusta projekti',
    seeWork: 'Vaata töid',
    readMore: 'Loe lähemalt',
    allServices: 'Kõik teenused',
    priceFrom: 'Hind',
    timeline: 'Ajakava',
    faq: 'Korduma kippuvad küsimused',
    related: 'Seotud teenused',
    process: 'Kuidas me töötame',
    menu: 'Menüü',
    close: 'Sulge',
    footerTagline: 'Veebilehed, kinnisvaraplatvormid ja AI-lahendused, mis toovad päringuid.',
    rights: 'Kõik õigused kaitstud.',
    privacy: 'Privaatsus',
    breadcrumbHome: 'Avaleht',
    ctaBlock: {
      title: 'Räägime sinu projektist',
      text: 'Kirjelda lühidalt, mida vajad. Vastame ühe tööpäeva jooksul konkreetse ettepaneku ja hinnaga.',
    },
    form: {
      name: 'Nimi',
      email: 'E-post',
      phone: 'Telefon (valikuline)',
      company: 'Ettevõte (valikuline)',
      service: 'Mis sind huvitab?',
      servicePlaceholder: 'Vali teenus',
      other: 'Midagi muud',
      budget: 'Eelarve',
      budgetOptions: ['Alla 1000 €', '1000–3000 €', '3000–10 000 €', 'Üle 10 000 €', 'Ei tea veel'],
      message: 'Sõnum',
      messagePlaceholder: 'Räägi lühidalt oma ettevõttest ja sellest, mida soovid saavutada.',
      consent: 'Nõustun, et minu andmeid kasutatakse päringule vastamiseks.',
      submit: 'Saada päring',
      sending: 'Saadan…',
      success: 'Aitäh! Sinu päring jõudis meieni. Vastame ühe tööpäeva jooksul.',
      error: 'Midagi läks valesti. Proovi uuesti või kirjuta otse aadressile',
    },
    processSteps: [
      { title: 'Tutvumine', text: 'Lühike kõne või kohtumine: sinu eesmärgid, kliendid ja eelarve. Tasuta ja kohustusteta.' },
      { title: 'Pakkumine ja kavand', text: 'Saad selge hinnapakkumise, ajakava ja lehe struktuuri enne, kui midagi ehitama hakkame.' },
      { title: 'Disain ja arendus', text: 'Näed vahetulemusi elavalt lingilt ja annad tagasisidet kogu protsessi vältel.' },
      { title: 'Käivitus ja kasv', text: 'Lehe avaldamine, Google’i seadistus ja analüütika. Soovi korral jätkame hoolduse ja arendusega.' },
    ],
  },
  en: {
    langName: 'English',
    switchTo: 'Eesti',
    skip: 'Skip to content',
    nav: { services: 'Services', work: 'Work', pricing: 'Pricing', blog: 'Blog', about: 'About', contact: 'Contact' },
    cta: 'Get a quote',
    ctaShort: 'Start a project',
    seeWork: 'See our work',
    readMore: 'Learn more',
    allServices: 'All services',
    priceFrom: 'Price',
    timeline: 'Timeline',
    faq: 'Frequently asked questions',
    related: 'Related services',
    process: 'How we work',
    menu: 'Menu',
    close: 'Close',
    footerTagline: 'Websites, real estate platforms and AI solutions that bring in leads.',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    breadcrumbHome: 'Home',
    ctaBlock: {
      title: 'Let’s talk about your project',
      text: 'Tell us briefly what you need. We reply within one business day with a concrete proposal and price.',
    },
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      company: 'Company (optional)',
      service: 'What are you interested in?',
      servicePlaceholder: 'Choose a service',
      other: 'Something else',
      budget: 'Budget',
      budgetOptions: ['Under €1,000', '€1,000–3,000', '€3,000–10,000', 'Over €10,000', 'Not sure yet'],
      message: 'Message',
      messagePlaceholder: 'Tell us a little about your business and what you would like to achieve.',
      consent: 'I agree that my details are used to respond to this enquiry.',
      submit: 'Send enquiry',
      sending: 'Sending…',
      success: 'Thank you! Your enquiry reached us. We will reply within one business day.',
      error: 'Something went wrong. Please try again or email us directly at',
    },
    processSteps: [
      { title: 'Discovery', text: 'A short call or meeting about your goals, customers and budget. Free and with no obligation.' },
      { title: 'Proposal & plan', text: 'You get a clear quote, timeline and site structure before anything gets built.' },
      { title: 'Design & build', text: 'You follow progress on a live preview link and give feedback throughout.' },
      { title: 'Launch & growth', text: 'Go-live, Google setup and analytics. Ongoing care and improvements if you want them.' },
    ],
  },
} as const;
