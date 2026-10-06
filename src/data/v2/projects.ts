// Completed projects (case studies). ET + EN. Only real facts — no invented numbers or quotes.
// URL: /tood/<slug>  and  /en/work/<slug>
import type { Lang } from './services';

interface ProjContent {
  slug: string;
  type: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  challengeH: string;
  challenge: string[];
  solutionH: string;
  solution: string[];
  features: { t: string; d: string }[];
}

export interface Project {
  id: string;
  name: string;
  /** public address, if the project is publicly viewable */
  url?: string;
  year: string;
  own: boolean;
  /** screenshots in src/assets/projects (desktop, mobile); empty → mock visual */
  shots: { desktop?: string; mobile?: string };
  services: string[];
  solutions: string[];
  tech: string[];
  et: ProjContent;
  en: ProjContent;
}

export const PROJECTS: Project[] = [
  {
    id: 'rebelle',
    name: 'Rebelle',
    url: 'https://rebellerent.ee',
    year: '2026',
    own: false,
    shots: { desktop: 'rebelle-d.jpg', mobile: 'rebelle-m.jpg' },
    services: ['platvormid', 'veebilehed', 'seo'],
    solutions: ['rendiplatvorm'],
    tech: ['Next.js', 'MariaDB', 'Montonio', 'Smartpost', 'next-intl', 'Zone'],
    et: {
      slug: 'rebelle-kleitide-rendiplatvorm',
      type: 'Rendiplatvorm',
      metaTitle: 'Rebelle: disainerkleitide rendiplatvorm | drealm tööd',
      metaDescription: 'Rebelle kolis WordPressist eraldi rendiplatvormile: saadavusmootor, Montonio maksed ja pakiautomaadid, kolm keelt ja haldus. Live aadressil rebellerent.ee.',
      h1: 'Rebelle: rendiplatvorm, kus topeltbroneering on võimatu.',
      lead: 'Disainerkleitide rent WordPressi asemel eraldi platvormil: saadavus kuupäevade kaupa, maksed, pakiautomaadid ja haldus ühes süsteemis.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Rebelle rendib disainerkleite ja aksessuaare üle Eesti. Leht töötas WordPressi ja WooCommerce’i peal, mis on tehtud müügiks, mitte rendiks. Päris saadavusmootorit polnud, mistõttu sama kleidi sai samaks ajaks broneerida kaks inimest.',
        'Tooteinfo (suurus, bränd, tagatisraha) oli peidetud kirjelduse sisse ja hinnad olid kirjas kolmes erinevas kohas, mis tähendas palju käsitööd ja vigu.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Ehitasime uue rendiplatvormi. Selle süda on saadavusmootor: klient valib ainult kättesaamise kuupäeva, tagastus ning puhastuse ja hoolduse aeg arvutatakse automaatselt. Nii ei saa sama kleiti kunagi topelt broneerida.',
        'Maksed ja pakiautomaadid käivad Montonio kaudu, tagatisraha ja tasuta proovimine on süsteemi sisse ehitatud. Halduses on tellimused, tooted, kliendid, päringud, sooduskoodid, arvustused ja statistika. Vana poe tooted impordisime automaatselt ning kõik vanad aadressid suunasime uutele, et Google’i nähtavus ei kaoks.',
      ],
      features: [
        { t: 'Saadavusmootor', d: 'Tagastus ja hooldus arvestatakse ise.' },
        { t: 'Montonio maksed', d: 'Pangalingid, kaardid ja tagastused.' },
        { t: 'Pakiautomaadid', d: 'Saatesildid otse halduses.' },
        { t: 'Kolm keelt', d: 'Eesti, vene ja inglise keel.' },
        { t: 'SEO sisu', d: 'Kategooria-, brändi- ja sündmuste lehed ning blogi.' },
        { t: 'Haldus', d: 'Tellimused, kliendid, koodid ja statistika.' },
      ],
    },
    en: {
      slug: 'rebelle-dress-rental-platform',
      type: 'Rental platform',
      metaTitle: 'Rebelle: designer dress rental platform | drealm work',
      metaDescription: 'Rebelle moved from WordPress to a dedicated rental platform: availability engine, Montonio payments and parcel lockers, three languages and admin. Live at rebellerent.ee.',
      h1: 'Rebelle: a rental platform where double booking is impossible.',
      lead: 'Designer dress rental on a dedicated platform instead of WordPress: availability by date, payments, parcel lockers and admin in one system.',
      challengeH: 'The starting point',
      challenge: [
        'Rebelle rents designer dresses and accessories across Estonia. The site ran on WordPress and WooCommerce, which are built for selling, not renting. There was no real availability engine, so two people could book the same dress for the same dates.',
        'Product details (size, brand, deposit) were buried in descriptions and prices lived in three different places, which meant lots of manual work and mistakes.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built a new rental platform around an availability engine: the customer picks only the delivery date, while return, cleaning and servicing time are calculated automatically. The same dress can never be double-booked.',
        'Payments and parcel lockers run through Montonio, with deposits and free try-on built in. The admin covers orders, products, customers, enquiries, discount codes, reviews and statistics. We imported the old store’s products automatically and redirected every old URL so Google visibility wasn’t lost.',
      ],
      features: [
        { t: 'Availability engine', d: 'Return and servicing calculated automatically.' },
        { t: 'Montonio payments', d: 'Bank links, cards and refunds.' },
        { t: 'Parcel lockers', d: 'Shipping labels straight from admin.' },
        { t: 'Three languages', d: 'Estonian, Russian and English.' },
        { t: 'SEO content', d: 'Category, brand and occasion pages plus a blog.' },
        { t: 'Admin', d: 'Orders, customers, codes and statistics.' },
      ],
    },
  },
  {
    id: 'teachai',
    name: 'TeachAI',
    url: 'https://teachai.com.au',
    year: '2026',
    own: true,
    shots: { desktop: 'teach-d.jpg', mobile: 'teach-m.jpg' },
    services: ['veebilehed', 'automatiseerimine', 'koolitused'],
    solutions: ['auto-paringud'],
    tech: ['HTML/CSS/JS', 'n8n', 'PostgreSQL', 'Docker', 'Caddy'],
    et: {
      slug: 'teachai-ai-koolituste-leht-ja-automatiseerimine',
      type: 'Maandumisleht + automatiseerimine',
      metaTitle: 'TeachAI: AI koolituste maandumisleht ja n8n | drealm tööd',
      metaDescription: 'TeachAI on meie oma AI koolituste bränd Austraalia turule: interaktiivne maandumisleht, mis näitab automatiseerimist ilma lugemata, ja oma n8n automatiseerimisserver.',
      h1: 'TeachAI: leht, mis näitab automatiseerimist, mitte ei räägi sellest.',
      lead: 'Meie oma AI koolituste bränd Austraalia turule: interaktiivne maandumisleht ja oma automatiseerimisserver klientide töövoogude jaoks.',
      challengeH: 'Eesmärk',
      challenge: [
        'TeachAI müüb ettevõtetele ühepäevaseid AI töötube, mille lõpuks jääb meeskonnale tööle vähemalt üks päris automatiseerimine. Probleem: „AI automatiseerimine“ on abstraktne ja enamik inimesi ei loe pikki selgitusi.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Tegime maandumislehe, mis näitab, mitte ei seleta. Avavaates liigub elav töövoog: päring saabub, AI loeb andmed välja, salvestab need ja kirjutab vastuse. Lehel on ajasäästu kalkulaator ja assistent, mida külastaja saab ise proovida.',
        'Klientide automatiseerimised jooksevad meie oma n8n serveris koos andmebaasiga, eraldi Dockeri keskkonnas ja HTTPS-iga. Nii jäävad töövood ja andmed meie kontrolli alla, ilma kuutasudeta võõrastele platvormidele.',
      ],
      features: [
        { t: 'Elav töövoo demo', d: 'Automatiseerimine on näha esimese sekundiga.' },
        { t: 'Ajasäästu kalkulaator', d: 'Külastaja näeb oma numbreid.' },
        { t: 'Proovitav assistent', d: 'Valmis küsimused, päris vastused.' },
        { t: 'Kõnede broneerimine', d: 'Aeg otse kalendrisse.' },
        { t: 'Oma n8n server', d: 'Töövood ja andmed meie kontrolli all.' },
        { t: 'Kiire staatiline leht', d: 'Ilma raskete raamistikuta.' },
      ],
    },
    en: {
      slug: 'teachai-ai-training-site-and-automation',
      type: 'Landing page + automation',
      metaTitle: 'TeachAI: AI training landing page and n8n | drealm work',
      metaDescription: 'TeachAI is our own AI training brand for the Australian market: an interactive landing page that shows automation without reading, plus our own n8n automation server.',
      h1: 'TeachAI: a page that shows automation instead of talking about it.',
      lead: 'Our own AI training brand for the Australian market: an interactive landing page and our own automation server for client workflows.',
      challengeH: 'The goal',
      challenge: [
        'TeachAI sells businesses one-day AI workshops that leave at least one real automation running for the team. The problem: “AI automation” is abstract and most people don’t read long explanations.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built a landing page that shows rather than explains. The hero runs a live workflow: an enquiry arrives, AI extracts the details, saves them and drafts a reply. The page has a time-saving calculator and an assistant visitors can try themselves.',
        'Client automations run on our own n8n server with a database, in an isolated Docker environment with HTTPS. Workflows and data stay under our control, without monthly fees to third-party platforms.',
      ],
      features: [
        { t: 'Live workflow demo', d: 'Automation visible in the first second.' },
        { t: 'Time-saving calculator', d: 'Visitors see their own numbers.' },
        { t: 'Try-it-yourself assistant', d: 'Preset questions, real answers.' },
        { t: 'Call booking', d: 'Slots straight into the calendar.' },
        { t: 'Own n8n server', d: 'Workflows and data under our control.' },
        { t: 'Fast static site', d: 'No heavy framework.' },
      ],
    },
  },
  {
    id: 'nutricoach',
    name: 'NutriCoach',
    year: '2026',
    own: true,
    shots: {},
    services: ['ettevotte-ai', 'platvormid'],
    solutions: [],
    tech: ['Next.js', 'Claude API', 'PWA', 'Docker', 'Caddy'],
    et: {
      slug: 'nutricoach-ai-toitumisrakendus',
      type: 'AI rakendus (PWA)',
      metaTitle: 'NutriCoach: AI toitumisrakendus iPhone’ile | drealm tööd',
      metaDescription: 'NutriCoach on AI toitumisrakendus: pildista toitu, AI arvutab kalorid ja valgu, nädala lõpus tuleb kokkuvõte. iPhone’i kodukuval ilma App Store’ita.',
      h1: 'NutriCoach: pildista toitu, AI teeb ülejäänu.',
      lead: 'Isiklik AI toitumistreener, mis töötab iPhone’i kodukuval nagu päris äpp, ilma App Store’ita.',
      challengeH: 'Eesmärk',
      challenge: [
        'Toitumise jälgimine kukub tavaliselt läbi, sest iga toidu käsitsi sisestamine on tüütu. Eesmärk oli teha rakendus, kus piisab ühest pildist ja kõik muu käib ise.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Kasutaja pildistab toidu, AI hindab kalorid ja valgu ning võrdleb neid päeva eesmärgiga. Rakendus hoiatab ka liiga suure kaloridefitsiidi eest, mitte ainult ülesöömise eest. Nädala lõpus koostab AI kokkuvõtte koos soovitustega.',
        'Rakendus on PWA: see paigaldatakse iPhone’i kodukuvale Safarist ja töötab nagu äpp, ilma App Store’i ja selle tasudeta. See jookseb meie serveris Dockeris, HTTPS-iga ning andmed jäävad privaatseks.',
      ],
      features: [
        { t: 'Toit pildilt', d: 'AI hindab kalorid ja valgu.' },
        { t: 'Päeva eesmärgid', d: 'Kalorid ja valk ühe pilguga.' },
        { t: 'Nädala kokkuvõte', d: 'AI analüüs ja soovitused.' },
        { t: 'Keha mõõdikud', d: 'Kaal ja trendid graafikul.' },
        { t: 'Äpp ilma App Store’ita', d: 'Paigaldus kodukuvale.' },
        { t: 'Privaatne', d: 'Andmed ainult kasutaja käes.' },
      ],
    },
    en: {
      slug: 'nutricoach-ai-nutrition-app',
      type: 'AI app (PWA)',
      metaTitle: 'NutriCoach: AI nutrition app for iPhone | drealm work',
      metaDescription: 'NutriCoach is an AI nutrition app: snap your food, AI calculates calories and protein, and a weekly summary follows. On the iPhone home screen without the App Store.',
      h1: 'NutriCoach: snap your food, AI does the rest.',
      lead: 'A personal AI nutrition coach that runs on the iPhone home screen like a real app, without the App Store.',
      challengeH: 'The goal',
      challenge: [
        'Food tracking usually fails because entering every meal by hand is tedious. The goal was an app where one photo is enough and everything else happens automatically.',
      ],
      solutionH: 'What we built',
      solution: [
        'The user snaps a meal, AI estimates calories and protein and compares them to the daily target. The app also warns about too large a calorie deficit, not just overeating. At the end of the week AI writes a summary with recommendations.',
        'The app is a PWA: installed on the iPhone home screen from Safari, it works like an app without the App Store or its fees. It runs on our server in Docker with HTTPS, and data stays private.',
      ],
      features: [
        { t: 'Food from a photo', d: 'AI estimates calories and protein.' },
        { t: 'Daily targets', d: 'Calories and protein at a glance.' },
        { t: 'Weekly summary', d: 'AI analysis and recommendations.' },
        { t: 'Body metrics', d: 'Weight and trends on a chart.' },
        { t: 'App without the App Store', d: 'Installed on the home screen.' },
        { t: 'Private', d: 'Data stays with the user.' },
      ],
    },
  },
];

export const projHref = (p: Project, lang: Lang) => (lang === 'en' ? `/en/work/${p.en.slug}` : `/tood/${p.et.slug}`);
export const projectsForService = (id: string) => PROJECTS.filter((p) => p.services.includes(id));
export const projectsForSolution = (id: string) => PROJECTS.filter((p) => p.solutions.includes(id));
