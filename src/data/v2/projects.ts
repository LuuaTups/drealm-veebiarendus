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
  /** English display name, when it differs */
  nameEn?: string;
  /** public address, if the project is publicly viewable */
  url?: string;
  year: string;
  own: boolean;
  /** images in src/assets/projects: desktop+mobile screenshots, a single photo, or phone screenshots; empty → app mock */
  shots: { desktop?: string; mobile?: string; photo?: string; phones?: string[]; mock?: 'leads' | 'flow' | 'social' | 'shop' | 'terminal' };
  /** illustrative (AI-generated) photo rather than a real screenshot */
  illustrative?: boolean;
  /** don't list on service/solution pages */
  hideOnServices?: boolean;
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
  {
    id: 'faceai',
    name: 'FaceAI',
    year: '2023–2025',
    own: false,
    shots: { phones: ['faceai-2.png', 'faceai-1.jpg'] },
    services: ['platvormid', 'ettevotte-ai'],
    solutions: [],
    tech: ['OpenAI Vision', 'React', 'Node.js', 'Stripe', 'Expo / React Native', 'Firebase', 'StoreKit'],
    et: {
      slug: 'faceai-ai-naoanaluusi-platvorm',
      type: 'AI platvorm + mobiiliäpp',
      metaTitle: 'FaceAI: AI näoanalüüsi platvorm ja äpp | drealm tööd',
      metaDescription: 'FaceAI: kasutaja laeb üles näopildi, AI hindab üle 10 näojoone ja annab isikliku soovituse. Veebiplatvorm Stripe’i maksetega ja hiljem iOS/Android äpp.',
      h1: 'FaceAI: pilt üles, AI analüüs ja soovitused sekunditega.',
      lead: 'AI näoanalüüsi platvorm, mis teenis tasulise teenusena üle 10 000 € ja jõudis hiljem mobiiliäppi.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Kui AI sai pilte reaalajas analüüsida, tekkis kliendil idee: inimene laeb üles näopildi ja saab hinnangu üle kümnele näojoonele (silmad, lõualuu, nahk, huuled) koos isiklike soovitustega. Vaja oli kogu toodet alates ideest kuni maksva kasutajani.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Ehitasime terve platvormi: pildi üleslaadimine, AI analüüs, hinded ja isiklikud soovitused, tulemuste vaade ning Stripe’i makse 4,99 € kasutaja kohta. Teenus tõi tasulise tootena üle 10 000 € müüki.',
        'Järgmise sammuna tegime toote mobiiliäpiks (iOS ja Android): kaamera ja galerii, kasutajakontod, tellimused Apple’i maksesüsteemiga koos serveripoolse kontrolliga ning teavitused.',
      ],
      features: [
        { t: 'AI pildianalüüs', d: 'Üle 10 näojoone hinde ja kirjeldusega.' },
        { t: 'Isiklikud soovitused', d: 'Iga tulemuse juurde selge nõuanne.' },
        { t: 'Stripe maksed', d: 'Tasuline analüüs ühe klõpsuga.' },
        { t: 'Mobiiliäpp', d: 'iOS ja Android, kaamera ja galerii.' },
        { t: 'Tellimused', d: 'Apple’i maksed ja serveripoolne kontroll.' },
        { t: 'Kasutajakontod', d: 'Sisselogimine ja tulemuste ajalugu.' },
      ],
    },
    en: {
      slug: 'faceai-ai-face-analysis-platform',
      type: 'AI platform + mobile app',
      metaTitle: 'FaceAI: AI face analysis platform and app | drealm work',
      metaDescription: 'FaceAI: users upload a face photo, AI rates 10+ facial features and gives personal advice. A web platform with Stripe payments, later an iOS/Android app.',
      h1: 'FaceAI: upload a photo, get AI analysis and advice in seconds.',
      lead: 'An AI face analysis platform that earned over €10,000 as a paid service and later became a mobile app.',
      challengeH: 'The starting point',
      challenge: [
        'When AI became able to analyse images in real time, the client had an idea: people upload a face photo and get ratings for more than ten facial features (eyes, jawline, skin, lips) with personal advice. The whole product was needed, from idea to paying users.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built the entire platform: photo upload, AI analysis, scores and personal advice, a results view and Stripe checkout at €4.99 per user. As a paid product it generated over €10,000 in sales.',
        'Next we turned the product into a mobile app (iOS and Android): camera and gallery, user accounts, subscriptions via Apple payments with server-side verification, and notifications.',
      ],
      features: [
        { t: 'AI image analysis', d: '10+ facial features with score and description.' },
        { t: 'Personal advice', d: 'Clear advice for every result.' },
        { t: 'Stripe payments', d: 'Paid analysis in one click.' },
        { t: 'Mobile app', d: 'iOS and Android, camera and gallery.' },
        { t: 'Subscriptions', d: 'Apple payments with server-side checks.' },
        { t: 'User accounts', d: 'Login and result history.' },
      ],
    },
  },
  {
    id: 'leadgen',
    name: 'AI leadide generaator',
    nameEn: 'AI lead generator',
    year: '2023',
    own: false,
    shots: { mock: 'leads' },
    services: ['automatiseerimine', 'ettevotte-ai'],
    solutions: ['auto-paringud'],
    tech: ['n8n', 'OpenAI', 'Web scraping', 'SMTP', 'Discord webhooks'],
    et: {
      slug: 'ai-leadide-generaator-inforegister-cv-keskus',
      type: 'Automatiseerimine (n8n)',
      metaTitle: 'AI leadide generaator: Inforegister ja CV-Keskus | drealm tööd',
      metaDescription: 'Automaatne müügileadide leidmine Inforegistrist, CV-Keskusest, Google Mapsist ja mujalt: AI leiab kontaktid, kirjutab isikliku e-kirja ja saadab selle ise.',
      h1: 'Uued kliendid leitakse ise, iga 15 minuti järel.',
      lead: 'n8n töövoog, mis otsib ettevõtteid Inforegistrist, CV-Keskusest ja teistest allikatest, leiab kontaktid ja saadab isikliku e-kirja.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Veebiagentuurid ja teenusettevõtted kulutavad uute klientide leidmiseks palju raha reklaamile või tunde käsitsi otsimisele. Eesmärk oli asendada see süsteemiga, mis leiab sobivad ettevõtted ise ja võtab nendega ühendust.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Ehitasime n8n töövoo, mis käivitub iga 15 minuti järel ja valib ühe kuuest allikast: Google Maps, äriregister ja Inforegister, CV-Keskus (värbavad ettevõtted), LinkedIn, Äripäev ja Google’i otsing. Iga leitud ettevõtte kohta otsitakse kontaktandmed.',
        'AI kirjutab igale ettevõttele eraldi isikliku e-kirja ja see saadetakse automaatselt. Kõik tulemused salvestatakse andmebaasi ning saatmisest või veast tuleb teade Discordi. Töövoog on ehitatud nii, et AI-kulu ja serveri koormus jääksid väikseks.',
      ],
      features: [
        { t: '6 allikat', d: 'Inforegister, CV-Keskus, Google Maps, LinkedIn jt.' },
        { t: 'Iga 15 minuti järel', d: 'Töötab ise, ööpäev läbi.' },
        { t: 'Kontaktide leidmine', d: 'E-post ja kontaktisik ettevõtte kohta.' },
        { t: 'Isiklik e-kiri', d: 'AI kirjutab iga kirja eraldi.' },
        { t: 'Andmebaas', d: 'Kõik leadid ja saatmised ühes kohas.' },
        { t: 'Teavitused', d: 'Saatmisest ja vigadest Discordi.' },
      ],
    },
    en: {
      slug: 'ai-lead-generator',
      type: 'Automation (n8n)',
      metaTitle: 'AI lead generator: Estonian registries and job portals | drealm work',
      metaDescription: 'Automatic sales lead generation from the Estonian business register, CV-Keskus, Google Maps and more: AI finds contacts, writes a personal email and sends it.',
      h1: 'New clients found automatically, every 15 minutes.',
      lead: 'An n8n workflow that finds companies in business registries, job portals and other sources, finds contacts and sends a personal email.',
      challengeH: 'The starting point',
      challenge: [
        'Web agencies and service businesses spend a lot on ads or hours of manual searching to find new clients. The goal was a system that finds suitable companies by itself and reaches out to them.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built an n8n workflow that runs every 15 minutes and picks one of six sources: Google Maps, the Estonian business register and Inforegister, CV-Keskus (companies that are hiring), LinkedIn, Äripäev and Google Search. Contact details are found for each company.',
        'AI writes a personal email for each company and it is sent automatically. All results are saved to a database and a Discord notification follows every send or error. The workflow is built to keep AI costs and server load low.',
      ],
      features: [
        { t: '6 sources', d: 'Business register, CV-Keskus, Google Maps, LinkedIn and more.' },
        { t: 'Every 15 minutes', d: 'Runs by itself, around the clock.' },
        { t: 'Contact finding', d: 'Email and contact person per company.' },
        { t: 'Personal email', d: 'AI writes each email individually.' },
        { t: 'Database', d: 'All leads and sends in one place.' },
        { t: 'Notifications', d: 'Sends and errors to Discord.' },
      ],
    },
  },
  {
    id: 'outreach',
    name: 'n8n automatiseerimised',
    nameEn: 'n8n automations',
    year: '2023–2026',
    own: false,
    shots: { mock: 'flow' },
    services: ['automatiseerimine', 'ettevotte-ai'],
    solutions: ['auto-paringud', 'auto-aruanded'],
    tech: ['n8n', 'OpenAI', 'Claude', 'CRM', 'SMTP', 'Docker', 'PostgreSQL'],
    et: {
      slug: 'n8n-automatiseerimised',
      type: 'Automatiseerimine (n8n)',
      metaTitle: 'n8n automatiseerimised ettevõtetele | drealm tööd',
      metaDescription: 'n8n automatiseerimised: isikustatud müügikirjad 300+ korda päevas, vastuste tuvastamine ja CRM-i kanded, oma n8n server. Käsitöö asemel töövood, mis käivad ise.',
      h1: 'Töövood, mis teevad tööd ka siis, kui keegi kontoris pole.',
      lead: 'Müügikirjad, uuringud, CRM-i kanded ja aruanded n8n töövoogudena, mis jooksevad meie oma serveris.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Üks B2B klient saatis käsitsi 25–30 isiklikku müügikirja päevas ja iga kiri võttis uurimise ja kirjutamisega 10–15 minutit. Sama mustrit näeme paljudes ettevõtetes: tunnid lähevad tööle, mida masin teeks kiiremini ja järjepidevamalt.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Asendasime käsitöö n8n süsteemiga, mis saadab üle 300 isikliku kirja päevas ilma käsitsi sisestamiseta. Süsteem leiab sobivad ettevõtted ja kontaktid, AI uurib iga ettevõtte tausta ja kirjutab sellele unikaalse avalause. Kolmeosaline kirjajada saadetakse ajastatult ning vastused tuvastatakse ja kantakse CRM-i, kus positiivsed vastused märgitakse kohe inimesele.',
        'Lisaks oleme ehitanud palju väiksemaid töövoogusid: päringute liigitus, aruanded, andmete sünkroniseerimine süsteemide vahel ja teavitused. Töövood jooksevad meie oma n8n serveris, nii et andmed jäävad kontrolli alla ja kuutasusid võõrastele platvormidele pole.',
      ],
      features: [
        { t: '300+ kirja päevas', d: 'Iga kiri isiklik, ilma käsitööta.' },
        { t: 'AI taustauuring', d: 'Ettevõtte kokkuvõte enne kirja.' },
        { t: 'Kirjajada', d: 'Kolm kirja, ajastatud vahedega.' },
        { t: 'Vastuste tuvastus', d: 'Positiivsed vastused kohe inimesele.' },
        { t: 'CRM-i kanded', d: 'Kõik liigub ise õigesse kohta.' },
        { t: 'Oma n8n server', d: 'Andmed kontrolli all, kuutasudeta.' },
      ],
    },
    en: {
      slug: 'n8n-automations',
      type: 'Automation (n8n)',
      metaTitle: 'n8n automations for businesses | drealm work',
      metaDescription: 'n8n automations: 300+ personalised sales emails a day, reply detection and CRM entries, our own n8n server. Workflows that run by themselves instead of manual work.',
      h1: 'Workflows that keep working when nobody is in the office.',
      lead: 'Sales emails, research, CRM entries and reports as n8n workflows running on our own server.',
      challengeH: 'The starting point',
      challenge: [
        'A B2B client was manually sending 25–30 personalised sales emails a day, each taking 10–15 minutes to research and write. We see the same pattern in many companies: hours go into work a machine would do faster and more consistently.',
      ],
      solutionH: 'What we built',
      solution: [
        'We replaced the manual work with an n8n system that sends over 300 personalised emails a day with no manual input. It finds suitable companies and contacts, AI researches each company and writes a unique opening line, a three-step sequence is sent on schedule, and replies are detected and logged to the CRM, with positive replies flagged for a person right away.',
        'We have also built many smaller workflows: enquiry classification, reports, data sync between systems and notifications. They run on our own n8n server, so data stays under control and there are no monthly fees to third-party platforms.',
      ],
      features: [
        { t: '300+ emails a day', d: 'Every email personal, no manual work.' },
        { t: 'AI research', d: 'A company summary before each email.' },
        { t: 'Email sequence', d: 'Three emails on a schedule.' },
        { t: 'Reply detection', d: 'Positive replies to a person instantly.' },
        { t: 'CRM entries', d: 'Everything lands in the right place.' },
        { t: 'Own n8n server', d: 'Data under control, no monthly fees.' },
      ],
    },
  },
  {
    id: 'social',
    name: 'Sotsiaalmeedia automaatrobot',
    nameEn: 'Social media robot',
    year: '2024',
    own: true,
    shots: { mock: 'social' },
    services: ['automatiseerimine', 'reklaampildid'],
    solutions: [],
    tech: ['n8n', 'OpenAI', 'Meta API'],
    et: {
      slug: 'sotsiaalmeedia-automaatrobot',
      type: 'Automatiseerimine',
      metaTitle: 'Sotsiaalmeedia automaatrobot: postitused AI-ga | drealm tööd',
      metaDescription: 'Sotsiaalmeedia automaatrobot, mis koostab AI abil postituste tekstid ja visuaalid ning avaldab need ajakava järgi. Sotsiaalmeedia käib ise, inimene ainult kinnitab.',
      h1: 'Sotsiaalmeedia, mis postitab ise.',
      lead: 'Robot, mis koostab AI abil postitused ja avaldab need ajakava järgi. Inimene vaatab üle ja kinnitab.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Väikeettevõttes jääb sotsiaalmeedia sageli soiku, sest regulaarne postitamine võtab aega ja keegi ei jõua sellega iga päev tegeleda. Eesmärk oli, et kanal püsiks aktiivne ka siis, kui kellelgi pole aega.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Ehitasime automaatroboti, mis koostab AI abil postituste tekstid ja sobivad visuaalid ning paneb need sisukalendrisse. Postitused avaldatakse ajakava järgi automaatselt.',
        'Inimene saab enne avaldamist postitused üle vaadata, muuta või tagasi lükata. Nii püsib kanal aktiivne, aga sisu jääb kontrolli alla.',
      ],
      features: [
        { t: 'AI tekstid', d: 'Postitused brändi toonis.' },
        { t: 'Visuaalid', d: 'Pildid igale postitusele.' },
        { t: 'Sisukalender', d: 'Nädala postitused ühe pilguga.' },
        { t: 'Automaatne avaldamine', d: 'Ajakava järgi, ilma käsitööta.' },
        { t: 'Inimene kinnitab', d: 'Üle vaatamine enne avaldamist.' },
        { t: 'Mitu kanalit', d: 'Sama sisu eri platvormidele.' },
      ],
    },
    en: {
      slug: 'social-media-autoposting-robot',
      type: 'Automation',
      metaTitle: 'Social media autoposting robot with AI | drealm work',
      metaDescription: 'A social media robot that creates post copy and visuals with AI and publishes them on schedule. Social media runs itself, a person just approves.',
      h1: 'Social media that posts by itself.',
      lead: 'A robot that creates posts with AI and publishes them on schedule. A person reviews and approves.',
      challengeH: 'The starting point',
      challenge: [
        'In small businesses social media often goes quiet because regular posting takes time and nobody manages it every day. The goal was to keep the channel active even when nobody has time.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built a robot that creates post copy and matching visuals with AI and places them in a content calendar. Posts are published automatically on schedule.',
        'Before publishing, a person can review, edit or reject posts. The channel stays active while the content stays under control.',
      ],
      features: [
        { t: 'AI copy', d: 'Posts in the brand’s tone.' },
        { t: 'Visuals', d: 'An image for every post.' },
        { t: 'Content calendar', d: 'The week’s posts at a glance.' },
        { t: 'Auto-publishing', d: 'On schedule, no manual work.' },
        { t: 'A human approves', d: 'Review before publishing.' },
        { t: 'Multiple channels', d: 'The same content across platforms.' },
      ],
    },
  },
  {
    id: 'woo',
    name: 'WordPressi e-poed',
    nameEn: 'WordPress stores',
    year: '2018–2024',
    own: false,
    shots: { mock: 'shop' },
    services: ['veebilehed'],
    solutions: [],
    tech: ['WordPress', 'WooCommerce', 'Montonio', 'PHP', 'Zone'],
    et: {
      slug: 'wordpressi-woocommerce-e-poed',
      type: 'E-poed',
      metaTitle: 'WordPressi ja WooCommerce e-poed | drealm tööd',
      metaDescription: 'WooCommerce e-poed Eesti ettevõtetele: tooted, ostukorv, Montonio maksed ja pakiautomaadid. Miks me tänapäeval eelistame WordPressi asemel kiiremaid lahendusi.',
      h1: 'Kümned e-poed ja kodulehed. Ja miks me enam WordPressi ei kasuta.',
      lead: 'WooCommerce e-poed koos Montonio maksete ja pakiautomaatidega. Tänapäeval ehitame kiiremaid ja turvalisemaid lahendusi.',
      challengeH: 'Lähteolukord',
      challenge: [
        'Üks esimesi töid oli Eesti disainibrändi e-pood, mis müüs käsitööna valminud keskkonnasõbralikke planeerijaid ja kalendreid. Vaja oli tervet poodi: tooted, ostukorv, kassa, maksed ja tarne. Pood töötas kasumlikult, kuni omanikud oma äri lõpetasid.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Ehitasime poe WordPressi ja WooCommerce’i peale: tootekataloog, ostukorv, Montonio maksed ja pakiautomaadid, majutus, domeen, SSL ja e-post. Sellele järgnesid kümned teised e-poed ja kodulehed: dropshipping-poed, kohalike ettevõtete lehed ja väiksemad e-kaubanduse lahendused.',
        'Tänapäeval me WordPressi enam ei kasuta. Pistikprogrammide kuhi teeb lehed aeglaseks, uuendused murravad asju ja turvaaugud on pidev mure. Ehitame e-poed ja lehed kiiremate, turvalisemate ja hooldusvabamate lahendustega, nagu näiteks Rebelle puhul.',
      ],
      features: [
        { t: 'Täielik e-pood', d: 'Tooted, ostukorv, kassa ja tellimused.' },
        { t: 'Montonio maksed', d: 'Pangalingid ja kaardimaksed.' },
        { t: 'Pakiautomaadid', d: 'Tarne üle Eesti.' },
        { t: 'Majutus ja domeen', d: 'SSL, e-post ja seadistus.' },
        { t: 'Kümned lehed', d: 'E-poed ja kohalike ettevõtete lehed.' },
        { t: 'Edasi kiiremale tehnoloogiale', d: 'Vähem hooldust, parem turvalisus.' },
      ],
    },
    en: {
      slug: 'wordpress-woocommerce-stores',
      type: 'Online stores',
      metaTitle: 'WordPress and WooCommerce online stores | drealm work',
      metaDescription: 'WooCommerce stores for Estonian businesses: products, cart, Montonio payments and parcel lockers. And why today we prefer faster solutions over WordPress.',
      h1: 'Dozens of stores and websites. And why we no longer use WordPress.',
      lead: 'WooCommerce stores with Montonio payments and parcel lockers. Today we build faster and more secure solutions.',
      challengeH: 'The starting point',
      challenge: [
        'One of the first projects was an online store for an Estonian design brand selling handcrafted eco-friendly planners and calendars. The whole store was needed: products, cart, checkout, payments and delivery. It ran profitably until the owners closed the business.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built the store on WordPress and WooCommerce: product catalogue, cart, Montonio payments and parcel lockers, hosting, domain, SSL and email. Dozens of other stores and websites followed: dropshipping stores, local business sites and smaller e-commerce setups.',
        'Today we no longer use WordPress. Piles of plugins make sites slow, updates break things and security holes are a constant worry. We build stores and sites with faster, more secure, low-maintenance technology, as with Rebelle.',
      ],
      features: [
        { t: 'Complete store', d: 'Products, cart, checkout and orders.' },
        { t: 'Montonio payments', d: 'Bank links and card payments.' },
        { t: 'Parcel lockers', d: 'Delivery across Estonia.' },
        { t: 'Hosting and domain', d: 'SSL, email and setup.' },
        { t: 'Dozens of sites', d: 'Stores and local business sites.' },
        { t: 'On to faster tech', d: 'Less maintenance, better security.' },
      ],
    },
  },
  {
    id: 'fivem',
    name: 'Savage RP',
    year: '2017–2019',
    own: true,
    shots: { photo: 'fivem.jpg' },
    hideOnServices: true,
    services: ['platvormid'],
    solutions: [],
    tech: ['Lua', 'MySQL / MariaDB', 'ESX', 'Linux', 'txAdmin', 'Blender', 'Discord'],
    et: {
      slug: 'savage-rp-fivem-rollimanguserver',
      type: 'Mänguserver (FiveM)',
      metaTitle: 'Savage RP: FiveM rollimänguserver | drealm tööd',
      metaDescription: 'Savage RP oli FiveM rollimänguserver, mis oli ühel nädalal Eesti enim mängitud FiveM server: oma tööd, majandus, politsei, kinnisvara, 3D-mudelid ja Discordi kogukond.',
      h1: 'Savage RP: Eesti enim mängitud FiveM server ühe nädala jooksul.',
      lead: 'GTA V rollimänguserver, mille kõik süsteemid kirjutasime ise: tööd, majandus, politsei, kinnisvara ja 3D-mudelid.',
      challengeH: 'Kust see algas',
      challenge: [
        'See on projekt, millest kõik alguse sai. FiveM rollimänguservereid mängides tekkis küsimus, kuidas need seestpoolt töötavad, ja vastuse leidmiseks tuli ise üks ehitada. Lua, andmebaasid ja Linuxi serverite haldus tuli selgeks õppida nullist.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Kirjutasime oma töösüsteemid, politsei- ja mehaanikuskriptid, mängusisese majanduse mängijate kujundatud hindadega ning kinnisvarasüsteemi. Sõidukite, riiete ja kaardi muudatused modelleerisime Blenderis. Server jõudis ühel nädalal Eesti enim mängitud FiveM serveriks.',
        'Lisaks koodile tuli hallata Discordi kogukonda, teha regulaarseid uuendusi, taastada server keset ööd tekkinud kokkujooksmistest ja tasakaalustada majandust mängijate käitumise järgi. Serverit pidasime üle pooleteise aasta ja müüsime seejärel Soome programmeerijale ja striimerile.',
      ],
      features: [
        { t: 'Oma töösüsteemid', d: 'Politsei, mehaanik ja teised ametid.' },
        { t: 'Mängusisene majandus', d: 'Hinnad ja tasakaal mängijate järgi.' },
        { t: 'Kinnisvarasüsteem', d: 'Majad ja omand mängus.' },
        { t: '3D-mudelid', d: 'Sõidukid, riided ja kaart Blenderis.' },
        { t: 'Linuxi server', d: 'Seadistus, jõudlus ja taastamine.' },
        { t: 'Discordi kogukond', d: 'Teated, tugi ja üritused.' },
      ],
    },
    en: {
      slug: 'savage-rp-fivem-roleplay-server',
      type: 'Game server (FiveM)',
      metaTitle: 'Savage RP: FiveM roleplay server | drealm work',
      metaDescription: 'Savage RP was a FiveM roleplay server that was Estonia’s most-played FiveM server for a week: custom jobs, economy, police, housing, 3D models and a Discord community.',
      h1: 'Savage RP: Estonia’s most-played FiveM server for a week.',
      lead: 'A GTA V roleplay server where we wrote every system ourselves: jobs, economy, police, housing and 3D models.',
      challengeH: 'Where it started',
      challenge: [
        'This is where it all began. Playing FiveM roleplay servers raised the question of how they work inside, and the only way to find out was to build one. Lua, databases and Linux server administration had to be learned from scratch.',
      ],
      solutionH: 'What we built',
      solution: [
        'We wrote custom job systems, police and mechanic scripts, an in-game economy with player-driven prices and a housing system. Vehicle, clothing and map modifications were modelled in Blender. For one week the server was the most-played FiveM server in Estonia.',
        'Beyond code there was the Discord community, regular updates, recovering from crashes at midnight and balancing the economy based on player behaviour. We ran the server for over a year and a half and then sold it to a Finnish programmer and streamer.',
      ],
      features: [
        { t: 'Custom jobs', d: 'Police, mechanic and other roles.' },
        { t: 'In-game economy', d: 'Prices and balance driven by players.' },
        { t: 'Housing system', d: 'Houses and ownership in game.' },
        { t: '3D models', d: 'Vehicles, clothing and map in Blender.' },
        { t: 'Linux server', d: 'Setup, performance and recovery.' },
        { t: 'Discord community', d: 'Announcements, support and events.' },
      ],
    },
  },
  {
    id: 'linux',
    name: 'Linuxi ja IT kursused',
    nameEn: 'Linux and IT courses',
    year: '2025',
    own: false,
    shots: { mock: 'terminal' },
    services: ['koolitused'],
    solutions: [],
    tech: ['Linux', 'Bash', 'Git', 'Võrgud', 'Docker', 'AI tööriistad'],
    et: {
      slug: 'linuxi-ja-it-kursused',
      type: 'Koolitused',
      metaTitle: 'Linuxi ja IT kursused | drealm tööd',
      metaDescription: 'Linuxi ja IT kursused kutsehariduskeskuses: Linuxi haldus, käsurida ja skriptid, võrgud, Git, küberturvalisus, veebiarendus ja AI tööriistad. Õppekava nullist.',
      h1: 'Linuxi ja IT kursused, kus õpitakse tegema, mitte testi läbima.',
      lead: 'Praktilised kursused kutsehariduskeskuses: Linuxist ja võrkudest kuni veebiarenduse ja AI tööriistadeni.',
      challengeH: 'Eesmärk',
      challenge: [
        'Kutsehariduskeskuse IT õpilased vajasid tunde, mis valmistavad ette päris tööks. Eesmärk oli, et õpilane oskaks istuda arvuti taha ja tööd teha, mitte ainult teste läbida.',
      ],
      solutionH: 'Mida tegime',
      solution: [
        'Koostasime õppekava nullist ja andsime tunde Linuxi halduses, käsureas ja skriptimises, võrkudes, Gitis, küberturvalisuses, veebiarenduses, andmebaasides ja tarkvara testimises.',
        'Kursustesse tõime ka AI tööriistade praktilise kasutamise ja töövoogude automatiseerimise. Sama lähenemist kasutame ettevõtete AI koolitustel: päris tööülesanded, mitte slaidid.',
      ],
      features: [
        { t: 'Linuxi haldus', d: 'Kasutajad, õigused, teenused ja logid.' },
        { t: 'Käsurida ja skriptid', d: 'Bash ja igapäevaste tööde automatiseerimine.' },
        { t: 'Võrgud', d: 'Põhimõtted ja seadistamine.' },
        { t: 'Git ja turvalisus', d: 'Versioonihaldus ja küberturvalisuse alused.' },
        { t: 'Veebiarendus', d: 'HTML, CSS, JavaScript, PHP ja andmebaasid.' },
        { t: 'AI tööriistad', d: 'Praktiline kasutus ja automatiseerimine.' },
      ],
    },
    en: {
      slug: 'linux-and-it-courses',
      type: 'Training',
      metaTitle: 'Linux and IT courses | drealm work',
      metaDescription: 'Linux and IT courses at a vocational school: Linux administration, command line and scripting, networking, Git, cybersecurity, web development and AI tools. Curriculum from scratch.',
      h1: 'Linux and IT courses where students learn to do, not just pass tests.',
      lead: 'Hands-on courses at a vocational school: from Linux and networking to web development and AI tools.',
      challengeH: 'The goal',
      challenge: [
        'IT students at a vocational school needed lessons that prepare them for real work. The goal was students who can sit down at a computer and work, not just pass tests.',
      ],
      solutionH: 'What we built',
      solution: [
        'We built the curriculum from scratch and taught Linux administration, command line and scripting, networking, Git, cybersecurity, web development, databases and software testing.',
        'The courses also covered practical use of AI tools and workflow automation. We use the same approach in company AI training: real work tasks, not slides.',
      ],
      features: [
        { t: 'Linux administration', d: 'Users, permissions, services and logs.' },
        { t: 'Command line and scripts', d: 'Bash and automating daily tasks.' },
        { t: 'Networking', d: 'Principles and configuration.' },
        { t: 'Git and security', d: 'Version control and cybersecurity basics.' },
        { t: 'Web development', d: 'HTML, CSS, JavaScript, PHP and databases.' },
        { t: 'AI tools', d: 'Practical use and automation.' },
      ],
    },
  },
];

const ORDER = ['rebelle', 'faceai', 'teachai', 'leadgen', 'outreach', 'nutricoach', 'social', 'woo', 'linux', 'fivem'];
PROJECTS.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

export const pName = (p: Project, lang: Lang) => (lang === 'en' && p.nameEn ? p.nameEn : p.name);

export const projHref = (p: Project, lang: Lang) => (lang === 'en' ? `/en/work/${p.en.slug}` : `/tood/${p.et.slug}`);
export const projectsForService = (id: string) => PROJECTS.filter((p) => !p.hideOnServices && p.services.includes(id)).slice(0, 4);
export const projectsForSolution = (id: string) => PROJECTS.filter((p) => !p.hideOnServices && p.solutions.includes(id));
