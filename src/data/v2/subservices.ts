// Sub-services: specific offerings under each of the nine services. ET + EN.
// URL: /teenused/<parent slug>/<slug>  and  /en/services/<parent slug>/<slug>
import type { IconName, Lang } from './services';
import { byId } from './services';

interface SubContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
}

export interface SubService {
  id: string;
  parent: string;
  icon: IconName;
  et: SubContent;
  en: SubContent;
}

export const SUBSERVICES: SubService[] = [
  // ---------- Veebilehed ----------
  {
    id: 'kodulehe-tegemine',
    parent: 'veebilehed',
    icon: 'web',
    et: {
      slug: 'kodulehe-tegemine',
      name: 'Kodulehe tegemine',
      metaTitle: 'Kodulehe tegemine ettevõttele | drealm',
      metaDescription: 'Kodulehe tegemine väike- ja keskmisele ettevõttele: oma disain, kiire telefonis, SEO sisse ehitatud, sisu muudad ise. Fikseeritud hind alates 900 €.',
      h1: 'Kodulehe tegemine, mis toob päringuid.',
      lead: 'Ettevõtte koduleht, mis selgitab 5 sekundiga, mida pakud, laeb telefonis hetkega ja viib külastaja päringuni.',
      body: [
        'Hea koduleht ei ole visiitkaart, vaid müügitööriist. Alustame sellest, kes on sinu klient ja mida ta lehelt otsib, ning ehitame struktuuri, mis viib teda samm-sammult päringu või kõneni. Kujundus tehakse sinu brändi järgi, mitte valmis malli pealt, ja näed kõiki vaateid enne, kui midagi ehitatakse.',
        'Tehniline pool on algusest korras: leht laeb kiiresti ka mobiilis, Google saab selle struktuurist aru ning igal lehel on õiged pealkirjad ja kirjeldused. Pärast avamist saad tekste, pilte ja pakkumisi ise muuta. Kui soovid, jääme ka hooldajaks.',
      ],
      includes: ['Kuni 6 lehte oma disainiga', 'Tekstide abi ja struktuur', 'Mobiilivaade ja kiirus', 'Tehniline SEO ja Google’i tööriistad', 'Kontaktvorm, mis jõuab sinuni', 'Halduse õpetus'],
      faqs: [
        { q: 'Mis maksab ettevõtte koduleht?', a: 'Kuni 6 lehega koduleht algab 900 eurost. Täpse fikseeritud hinna saad pärast lühikest kõnet.' },
        { q: 'Kui kiiresti leht valmib?', a: 'Tavaliselt 2–4 nädalaga. Kõige rohkem mõjutab ajakava see, kui kiiresti tekstid ja pildid olemas on.' },
      ],
    },
    en: {
      slug: 'business-websites',
      name: 'Business websites',
      metaTitle: 'Business Website Design | drealm',
      metaDescription: 'Websites for small and medium businesses: custom design, fast on mobile, SEO built in, you edit the content. Fixed price from €900.',
      h1: 'A business website that brings in enquiries.',
      lead: 'A company website that explains what you offer in 5 seconds, loads instantly on mobile and leads visitors to get in touch.',
      body: [
        'A good website is not a business card, it is a sales tool. We start with who your client is and what they look for, then build a structure that leads them step by step to an enquiry or a call. The design is made for your brand, not a template, and you see every view before anything is built.',
        'The technical side is right from day one: fast on mobile, easy for Google to understand, with proper titles and descriptions on every page. After launch you can edit text, images and offers yourself, and we can stay on as maintainers if you like.',
      ],
      includes: ['Up to 6 custom-designed pages', 'Help with copy and structure', 'Mobile view and speed', 'Technical SEO and Google tools', 'A contact form that reaches you', 'Editing walkthrough'],
      faqs: [
        { q: 'How much does a business website cost?', a: 'A website of up to 6 pages starts from €900. You get an exact fixed price after a short call.' },
        { q: 'How long does it take?', a: 'Usually 2–4 weeks. The biggest factor is how quickly copy and images are ready.' },
      ],
    },
  },
  {
    id: 'e-pood',
    parent: 'veebilehed',
    icon: 'stack',
    et: {
      slug: 'e-poe-tegemine',
      name: 'E-poe tegemine',
      metaTitle: 'E-poe tegemine | drealm',
      metaDescription: 'E-poe tegemine Shopify, WooCommerce või eraldi lahendusena: Eesti pangalingid, pakiautomaadid, kiire ostukorv ja tooted, mida haldad ise.',
      h1: 'E-pood, kus ostmine on lihtne.',
      lead: 'Ehitame e-poe, mis näeb välja nagu sinu bränd, laeb kiiresti ja kus ostukorvist maksmiseni jõuab mõne klõpsuga.',
      body: [
        'Valime platvormi vastavalt sinu vajadusele: Shopify, kui tahad lihtsat haldust ja kiiret starti, WooCommerce, kui on vaja paindlikkust, või eraldi lahendus, kui tooteid ja reegleid on palju. Kõigil juhtudel seadistame Eesti pangalingid, kaardimaksed ja pakiautomaadid.',
        'Suurim osa e-poe tulemusest sõltub tootelehtedest ja ostuprotsessist. Teeme tootelehed, mis vastavad ostja küsimustele, ja ostukorvi, kus ei ole midagi üleliigset. Lisaks seadistame mõõtmise, et näeksid, kust ostjad tulevad ja kus nad pooleli jätavad.',
      ],
      includes: ['Oma disain ja tooteleht', 'Pangalingid ja kaardimaksed', 'Pakiautomaadid ja kullerid', 'Toodete import', 'Ostude mõõtmine', 'Halduse õpetus'],
      faqs: [
        { q: 'Shopify või WooCommerce?', a: 'Shopify on lihtsam hallata, WooCommerce paindlikum. Soovitame pärast seda, kui oleme näinud sinu tooteid ja protsessi.' },
        { q: 'Kas saate olemasoleva poe ümber kolida?', a: 'Jah. Kolime tooted, kliendid ja vanad aadressid, et Google’i positsioonid ei kaoks.' },
      ],
    },
    en: {
      slug: 'online-stores',
      name: 'Online stores',
      metaTitle: 'Online Store Development | drealm',
      metaDescription: 'Online stores on Shopify, WooCommerce or custom: Estonian bank links, parcel lockers, a fast checkout and products you manage yourself.',
      h1: 'An online store where buying is easy.',
      lead: 'We build an online store that looks like your brand, loads fast and gets shoppers from cart to payment in a few clicks.',
      body: [
        'We choose the platform for your needs: Shopify for simple management and a quick start, WooCommerce when you need flexibility, or a custom build when products and rules are complex. Either way we set up Estonian bank links, card payments and parcel lockers.',
        'Most of a store’s results come from product pages and checkout. We build product pages that answer buyers’ questions and a checkout without clutter, and set up tracking so you see where buyers come from and where they drop off.',
      ],
      includes: ['Custom design and product page', 'Bank links and card payments', 'Parcel lockers and couriers', 'Product import', 'Purchase tracking', 'Editing walkthrough'],
      faqs: [
        { q: 'Shopify or WooCommerce?', a: 'Shopify is easier to manage, WooCommerce more flexible. We recommend one after seeing your products and process.' },
        { q: 'Can you migrate an existing store?', a: 'Yes. We move products, customers and old URLs so your Google rankings are not lost.' },
      ],
    },
  },
  {
    id: 'maandumisleht',
    parent: 'veebilehed',
    icon: 'target',
    et: {
      slug: 'maandumisleht',
      name: 'Maandumisleht',
      metaTitle: 'Maandumislehe tegemine reklaamile | drealm',
      metaDescription: 'Maandumisleht reklaamikampaaniale või uuele tootele: üks eesmärk, selge sõnum ja vorm, mis toob päringuid. Valmis kiiresti.',
      h1: 'Üks leht, üks eesmärk: päring.',
      lead: 'Maandumisleht kampaaniale, uuele tootele või üritusele, kus kõik viib ühe tegevuseni.',
      body: [
        'Kui reklaam viib avalehele, läheb külastaja kergesti kaduma. Maandumisleht räägib ainult sellest, mida reklaam lubas, ja viib ühe selge tegevuseni: päring, broneering või ost. Tekstid, pildid ja vorm on selle ümber üles ehitatud.',
        'Teeme lehe nii, et seda saab testida: kaks pealkirja, kaks pilti, ja näeme, kumb toob rohkem päringuid. Mõõtmine on seadistatud algusest, et iga reklaamieuro tulemus oleks näha.',
      ],
      includes: ['Disain ja tekstid ühe eesmärgi ümber', 'Päringu- või broneerimisvorm', 'Mõõtmine ja konversioonid', 'Kiire laadimine', 'A/B-testi võimalus'],
      faqs: [
        { q: 'Kui kiiresti maandumisleht valmib?', a: 'Tavaliselt 1–2 nädalaga, kui sõnum ja pakkumine on paigas.' },
        { q: 'Kas see töötab koos Meta reklaamidega?', a: 'Jah, see on kõige levinum kasutus. Saame teha nii lehe kui reklaamid.' },
      ],
    },
    en: {
      slug: 'landing-pages',
      name: 'Landing pages',
      metaTitle: 'Landing Pages for Campaigns | drealm',
      metaDescription: 'A landing page for an ad campaign or new product: one goal, a clear message and a form that brings enquiries. Ready fast.',
      h1: 'One page, one goal: an enquiry.',
      lead: 'A landing page for a campaign, new product or event, where everything leads to a single action.',
      body: [
        'When an ad points to your homepage, visitors get lost. A landing page talks only about what the ad promised and leads to one clear action: an enquiry, booking or purchase. Copy, images and the form are built around it.',
        'We build it to be tested: two headlines, two images, and we see which brings more enquiries. Tracking is set up from the start so every advertising euro shows its result.',
      ],
      includes: ['Design and copy around one goal', 'Enquiry or booking form', 'Tracking and conversions', 'Fast loading', 'A/B testing option'],
      faqs: [
        { q: 'How fast is a landing page ready?', a: 'Usually in 1–2 weeks once the message and offer are clear.' },
        { q: 'Does it work with Meta ads?', a: 'Yes, that is the most common use. We can build both the page and the ads.' },
      ],
    },
  },
  {
    id: 'kodulehe-uuendamine',
    parent: 'veebilehed',
    icon: 'flow',
    et: {
      slug: 'kodulehe-uuendamine',
      name: 'Kodulehe uuendamine',
      metaTitle: 'Kodulehe uuendamine ja ümbertegemine | drealm',
      metaDescription: 'Vana kodulehe uuendamine: uus disain, kiirus ja struktuur nii, et Google’i positsioonid ja vanad lingid ei kao.',
      h1: 'Vana koduleht uueks, ilma et midagi kaoks.',
      lead: 'Uuendame kujunduse, kiiruse ja struktuuri nii, et Google’i positsioonid, vanad lingid ja sisu jäävad alles.',
      body: [
        'Paljud ettevõtted lükkavad uuendamist edasi, sest kardavad Google’i positsioonide kadumist. Seda ei juhtu, kui ümberkolimine on läbi mõeldud. Kaardistame vana lehe sisu ja aadressid ning suuname iga vana lingi õigesse kohta uuel lehel.',
        'Samal ajal vaatame üle, mis vanal lehel ei töötanud: aeglane laadimine, segane menüü, peidus kontakt. Uus leht on kiirem, selgem ja toob rohkem päringuid samast liiklusest.',
      ],
      includes: ['Vana lehe audit', 'Uus disain ja struktuur', 'Sisu ülekolimine', 'Vanade aadresside suunamine', 'Kiiruse parandus'],
      faqs: [
        { q: 'Kas Google’i positsioonid kaovad?', a: 'Ei, kui vanad aadressid on õigesti suunatud. See on iga uuenduse kohustuslik osa.' },
        { q: 'Kas saab kasutada vana sisu?', a: 'Jah. Viime üle selle, mis on hea, ja kirjutame ümber selle, mis ei ole.' },
      ],
    },
    en: {
      slug: 'website-redesign',
      name: 'Website redesign',
      metaTitle: 'Website Redesign | drealm',
      metaDescription: 'Redesign your old website: new design, speed and structure without losing Google rankings, enquiries or the links that point to your site.',
      h1: 'Your old website made new, without losing anything.',
      lead: 'We refresh design, speed and structure so your Google rankings, old links and content stay intact.',
      body: [
        'Many companies postpone a redesign for fear of losing their Google rankings. That doesn’t happen if the move is planned. We map the old site’s content and URLs and redirect every old link to the right place on the new site.',
        'At the same time we look at what didn’t work: slow loading, a confusing menu, a hidden contact page. The new site is faster, clearer and brings more enquiries from the same traffic.',
      ],
      includes: ['Audit of the old site', 'New design and structure', 'Content migration', 'Redirects for old URLs', 'Speed improvements'],
      faqs: [
        { q: 'Will I lose my Google rankings?', a: 'Not if old URLs are redirected properly. That is a mandatory part of every redesign.' },
        { q: 'Can we reuse old content?', a: 'Yes. We move what is good and rewrite what isn’t.' },
      ],
    },
  },

  // ---------- Platvormid ----------
  {
    id: 'arenduse-koduleht',
    parent: 'platvormid',
    icon: 'plan',
    et: {
      slug: 'kinnisvaraarenduse-koduleht',
      name: 'Kinnisvaraarenduse koduleht',
      metaTitle: 'Kinnisvaraarenduse koduleht ja korterivalik | drealm',
      metaDescription: 'Uusarenduse koduleht interaktiivse korterivaliku, plaanide, staatuste ja päringutega. Müüb ruutmeetreid ka siis, kui müügimeeskond magab.',
      h1: 'Arenduse koduleht, mis müüb ka öösel.',
      lead: 'Interaktiivne korterivalik, plaanid, hinnad ja staatused ühes kohas, nii et ostja leiab sobiva korteri ise.',
      body: [
        'Uusarenduse ostja võrdleb plaane, arvutab ja näitab lehte perele. Ta tahab näha, mis on vaba, kui suur see on ja mis maksab, ilma et peaks helistama. Ehitame korterivaliku, mis töötab hoone vaate, korruste ja filtritega ning on telefonis sama mugav kui arvutis.',
        'Staatused ja hinnad uuenevad ühest kohast ning iga päring jõuab müüjani koos infoga, millise korteri vastu huvi tunti. Vajadusel sünkroniseerime objektid KV.ee ja City24-ga.',
      ],
      includes: ['Korterivalik hoone ja korruste vaatega', 'Plaanid ja PDF-id', 'Staatused ja hinnad ühest kohast', 'Päringud koos korteri infoga', 'Mitmekeelsus', 'Portaalidega sünkroniseerimine'],
      faqs: [
        { q: 'Millal tasub arenduse leht avada?', a: 'Võimalikult vara, juba enne müügi algust, et koguda huviliste kontakte.' },
        { q: 'Kas saame staatusi ise muuta?', a: 'Jah, halduses ühe klõpsuga ja muudatus on lehel kohe näha.' },
      ],
    },
    en: {
      slug: 'property-development-websites',
      name: 'Property development websites',
      metaTitle: 'Property Development Website & Apartment Selector | drealm',
      metaDescription: 'A new-development website with an interactive apartment selector, floor plans, statuses and enquiries. Sells square metres while your sales team sleeps.',
      h1: 'A development website that sells at night too.',
      lead: 'An interactive apartment selector with plans, prices and statuses in one place, so buyers find the right home themselves.',
      body: [
        'A new-build buyer compares plans, does the maths and shows the site to family. They want to see what is available, how big it is and what it costs without calling. We build an apartment selector with building view, floors and filters that works as well on a phone as on a desktop.',
        'Statuses and prices update from one place and every enquiry reaches sales with the apartment it was about. If needed we sync listings with KV.ee and City24.',
      ],
      includes: ['Apartment selector with building and floor views', 'Plans and PDFs', 'Statuses and prices from one place', 'Enquiries with apartment details', 'Multiple languages', 'Portal sync'],
      faqs: [
        { q: 'When should the development site go live?', a: 'As early as possible, before sales start, to collect interested buyers’ contacts.' },
        { q: 'Can we change statuses ourselves?', a: 'Yes, with one click in the admin and the change shows instantly.' },
      ],
    },
  },
  {
    id: 'maakleri-koduleht',
    parent: 'platvormid',
    icon: 'web',
    et: {
      slug: 'kinnisvara-maakleri-koduleht',
      name: 'Kinnisvara maakleri koduleht',
      metaTitle: 'Kinnisvara maakleri ja büroo koduleht | drealm',
      metaDescription: 'Koduleht kinnisvaramaaklerile või -büroole: objektid portaalidest automaatselt, maakleri profiil ja hindamispäringu vorm uute müüjate jaoks.',
      h1: 'Maakleri leht, mis toob uusi müüjaid.',
      lead: 'Objektid tulevad portaalidest automaatselt ja hindamispäringu vorm toob kontakte inimestelt, kes alles mõtlevad müümisele.',
      body: [
        'Maakleri suurim väljakutse ei ole ostjad, vaid uued müüjad. Kodulehe peamine ülesanne on näidata, et sa tunned oma piirkonda ja müüd edukalt, ning anda inimesele lihtne viis küsida oma kodu hinnangut.',
        'Objektid sünkroniseerime KV.ee või City24-ga, et sa ei peaks midagi kaks korda sisestama. Lisaks maakleri profiil, tehtud tehingud ja arvustused, mis loovad usaldust enne esimest kõnet.',
      ],
      includes: ['Objektid portaalidest automaatselt', 'Maakleri profiil ja tehingud', 'Hindamispäringu vorm', 'Piirkonna lehed Google’i jaoks', 'Arvustused'],
      faqs: [
        { q: 'Kas objektid uuenevad ise?', a: 'Jah, sünkroniseerimisega portaalist. Muudad objekti ühes kohas ja see uueneb ka lehel.' },
        { q: 'Kas sobib ka büroole?', a: 'Jah, mitme maakleri profiilide ja ühise objektinimekirjaga.' },
      ],
    },
    en: {
      slug: 'real-estate-agent-websites',
      name: 'Real estate agent websites',
      metaTitle: 'Real Estate Agent & Agency Websites | drealm',
      metaDescription: 'A website for an estate agent or agency: listings from portals automatically, agent profile and a valuation request form for new sellers.',
      h1: 'An agent website that brings new sellers.',
      lead: 'Listings come from the portals automatically and a valuation form brings contacts from people still thinking about selling.',
      body: [
        'An agent’s biggest challenge isn’t buyers, it’s new sellers. The website’s main job is to show you know your area and sell successfully, and to give people an easy way to ask for a valuation of their home.',
        'We sync listings with KV.ee or City24 so you never enter anything twice. Add an agent profile, completed deals and reviews that build trust before the first call.',
      ],
      includes: ['Listings from portals automatically', 'Agent profile and deals', 'Valuation request form', 'Area pages for Google', 'Reviews'],
      faqs: [
        { q: 'Do listings update themselves?', a: 'Yes, via portal sync. Change a listing in one place and it updates on the site.' },
        { q: 'Does it work for an agency?', a: 'Yes, with multiple agent profiles and a shared listing feed.' },
      ],
    },
  },
  {
    id: 'broneerimine',
    parent: 'platvormid',
    icon: 'doc',
    et: {
      slug: 'broneerimissusteem',
      name: 'Broneerimissüsteem',
      metaTitle: 'Broneerimissüsteem kodulehele | drealm',
      metaDescription: 'Broneerimissüsteem restoranile, salongile, kliinikule või rendile: vabad ajad, kinnitused ja meeldetuletused ilma telefonikõnedeta.',
      h1: 'Broneeringud ilma telefonikõnedeta.',
      lead: 'Klient näeb vabu aegu ja broneerib ise. Sina saad kinnituse, tema meeldetuletuse.',
      body: [
        'Kui broneeringud tulevad telefoni, e-kirja ja sõnumitega, lähevad need kergesti segamini ning osa kliente loobub, sest ei saa kohe vastust. Broneerimissüsteem näitab vabu aegu reaalajas ja kinnitab broneeringu kohe.',
        'Seadistame süsteemi sinu reeglite järgi: tööajad, teenuste kestused, töötajad, ettemaks või tühistamise tingimused. Meeldetuletused vähendavad tulemata jätmisi.',
      ],
      includes: ['Vabad ajad reaalajas', 'Kinnitused ja meeldetuletused', 'Töötajad ja teenused', 'Ettemaks soovi korral', 'Kalendri sünkroniseerimine'],
      faqs: [
        { q: 'Kas saab kasutada olemasolevat kalendrit?', a: 'Jah, Google’i või Outlooki kalendriga sünkroniseerimine on võimalik.' },
        { q: 'Kas sobib restoranile?', a: 'Jah, laudade ja kellaaegadega broneerimine on tavaline kasutus.' },
      ],
    },
    en: {
      slug: 'booking-systems',
      name: 'Booking systems',
      metaTitle: 'Online Booking System for Your Website | drealm',
      metaDescription: 'A booking system for restaurants, salons, clinics or rentals: available slots, confirmations and reminders without phone calls.',
      h1: 'Bookings without phone calls.',
      lead: 'Clients see available times and book themselves. You get a confirmation, they get a reminder.',
      body: [
        'When bookings arrive by phone, email and messages, they get mixed up and some clients give up because they can’t get an answer right away. A booking system shows available times in real time and confirms instantly.',
        'We set it up to your rules: opening hours, service durations, staff, deposits or cancellation terms. Reminders cut no-shows.',
      ],
      includes: ['Real-time availability', 'Confirmations and reminders', 'Staff and services', 'Deposits if needed', 'Calendar sync'],
      faqs: [
        { q: 'Can I use my existing calendar?', a: 'Yes, syncing with Google or Outlook calendars is possible.' },
        { q: 'Does it work for a restaurant?', a: 'Yes, table and time-slot booking is a common use.' },
      ],
    },
  },
  {
    id: 'veebirakendus',
    parent: 'platvormid',
    icon: 'stack',
    et: {
      slug: 'veebirakendus',
      name: 'Veebirakendus ja kliendiportaal',
      metaTitle: 'Veebirakenduse ja kliendiportaali arendus | drealm',
      metaDescription: 'Kliendiportaal või sisemine veebirakendus: sisselogimine, dokumendid, tellimused ja projekti seis ühes kohas. Ehitatud sinu protsessi järgi.',
      h1: 'Tööriist, mis on ehitatud sinu protsessi järgi.',
      lead: 'Kliendiportaal, tellimuste süsteem või sisemine tööriist, kui valmis tarkvara ei sobi.',
      body: [
        'Mõnikord ei sobi ükski valmis tarkvara, sest sinu protsess on teistsugune. Siis ehitame väikese veebirakenduse, mis teeb täpselt seda, mida vaja: kliendid logivad sisse ja näevad oma dokumente, tellimusi või projekti seisu.',
        'Alustame klõpsatavast prototüübist, et näeksid enne arendust, kuidas see töötab. Rakendus ühendatakse olemasolevate süsteemidega ja jääb meie hoolde.',
      ],
      includes: ['Prototüüp enne arendust', 'Sisselogimine ja õigused', 'Dokumendid ja failid', 'Liidesed teiste süsteemidega', 'Hooldus ja arendus edasi'],
      faqs: [
        { q: 'Kui palju veebirakendus maksab?', a: 'Sõltub mahust. Pärast kaardistust saad fikseeritud hinna esimesele versioonile.' },
        { q: 'Kas saab alustada väikselt?', a: 'Jah, soovitame alustada kõige olulisemast osast ja laiendada hiljem.' },
      ],
    },
    en: {
      slug: 'web-applications',
      name: 'Web apps and client portals',
      metaTitle: 'Web Application & Client Portal Development | drealm',
      metaDescription: 'A client portal or internal web app: login, documents, orders and project status in one place. Built around your process.',
      h1: 'A tool built around your process.',
      lead: 'A client portal, ordering system or internal tool when off-the-shelf software doesn’t fit.',
      body: [
        'Sometimes no ready-made software fits because your process is different. Then we build a small web app that does exactly what is needed: clients log in and see their documents, orders or project status.',
        'We start with a clickable prototype so you see how it works before development. The app connects to your existing systems and stays in our care.',
      ],
      includes: ['Prototype before development', 'Login and permissions', 'Documents and files', 'Integrations with other systems', 'Ongoing maintenance and development'],
      faqs: [
        { q: 'How much does a web app cost?', a: 'It depends on scope. After mapping you get a fixed price for the first version.' },
        { q: 'Can we start small?', a: 'Yes, we recommend starting with the most important part and expanding later.' },
      ],
    },
  },

  // ---------- SEO ----------
  {
    id: 'kohalik-seo',
    parent: 'seo',
    icon: 'target',
    et: {
      slug: 'kohalik-seo',
      name: 'Kohalik SEO ja Google’i kaardid',
      metaTitle: 'Kohalik SEO ja Google’i ettevõtteprofiil | drealm',
      metaDescription: 'Kohalik SEO: Google’i ettevõtteprofiil, kaardiotsing, arvustused ja piirkonna lehed, et lähedal olevad kliendid leiaksid sind esimesena.',
      h1: 'Lähedal olevad kliendid leiavad sind esimesena.',
      lead: 'Google’i ettevõtteprofiil, kaardiotsing ja arvustused korda, et „sinu teenus + linn“ otsingus oleksid sina.',
      body: [
        'Kohalikus otsingus otsustab suur osa kliente kaardi põhjal. Kui ettevõtteprofiil on poolik, pilte pole ja arvustusi vähe, valitakse konkurent. Täidame profiili, lisame teenused, pildid ja postitused ning loome lihtsa viisi rahulolevatelt klientidelt arvustusi küsida.',
        'Lisaks teeme kodulehele piirkonna- ja teenuselehed, mis aitavad Google’il aru saada, kus ja mida pakud. Iga kuu näed, mitu kõnet, teekonna päringut ja kodulehe külastust profiil tõi.',
      ],
      includes: ['Ettevõtteprofiili täitmine', 'Arvustuste kogumise süsteem', 'Piirkonna lehed', 'Kataloogid ja kontaktandmete ühtlustamine', 'Igakuine raport'],
      faqs: [
        { q: 'Kui kiiresti kohalik SEO mõjub?', a: 'Profiili parandused mõjuvad sageli mõne nädalaga, arvustused ja sisu järk-järgult.' },
        { q: 'Kas peab olema füüsiline asukoht?', a: 'Ei, ka teeninduspiirkonnaga ettevõtted saavad profiili, kus aadress on peidetud.' },
      ],
    },
    en: {
      slug: 'local-seo',
      name: 'Local SEO and Google Maps',
      metaTitle: 'Local SEO & Google Business Profile | drealm',
      metaDescription: 'Local SEO: Google Business Profile, Maps search, reviews and area pages so nearby clients find you first when they search for your service.',
      h1: 'Nearby clients find you first.',
      lead: 'Google Business Profile, Maps and reviews in order, so for “your service + town” it’s you.',
      body: [
        'In local search many clients decide from the map. If your profile is incomplete, without photos and with few reviews, they choose a competitor. We complete the profile, add services, photos and posts, and set up an easy way to ask happy clients for reviews.',
        'We also add area and service pages to your website that help Google understand where and what you offer. Every month you see how many calls, direction requests and website visits the profile brought.',
      ],
      includes: ['Business Profile completion', 'Review collection system', 'Area pages', 'Directories and consistent contact details', 'Monthly report'],
      faqs: [
        { q: 'How fast does local SEO work?', a: 'Profile fixes often take effect within weeks; reviews and content build up gradually.' },
        { q: 'Do I need a physical location?', a: 'No, service-area businesses can have a profile with the address hidden.' },
      ],
    },
  },
  {
    id: 'seo-audit',
    parent: 'seo',
    icon: 'search',
    et: {
      slug: 'seo-audit',
      name: 'SEO audit',
      metaTitle: 'SEO audit kodulehele | drealm',
      metaDescription: 'SEO audit: mis takistab sinu kodulehel Google’is ülespoole tõusmast ja mida parandada esimesena. Selge nimekiri, mitte 80-leheline raport.',
      h1: 'Mis takistab sind Google’is tõusmast?',
      lead: 'Selge nimekiri parandustest tähtsuse järjekorras, mitte 80-leheline automaatraport.',
      body: [
        'Automaatsed SEO-tööriistad annavad sadu hoiatusi, millest enamik ei loe. Audit vaatab sinu lehte nagu Google ja nagu klient: kiirus, struktuur, indekseerimine, sisu ja konkurendid. Tulemus on lühike nimekiri, mis ütleb, mida parandada esimesena ja miks.',
        'Soovi korral teeme parandused ise ära või anname nimekirja sinu arendajale. Paljudel juhtudel annavad suurima mõju mõned tehnilised parandused, mis võtavad vähe aega.',
      ],
      includes: ['Tehniline kontroll', 'Sisu ja märksõnad', 'Konkurentide võrdlus', 'Parandused tähtsuse järjekorras', 'Ülevaatekõne'],
      faqs: [
        { q: 'Kui kaua audit võtab?', a: 'Tavaliselt üks nädal, sõltuvalt lehe suurusest.' },
        { q: 'Kas saan parandused ise teha?', a: 'Jah, nimekiri on kirjutatud nii, et su arendaja saab sellega kohe tööle hakata.' },
      ],
    },
    en: {
      slug: 'seo-audit',
      name: 'SEO audit',
      metaTitle: 'Website SEO Audit | drealm',
      metaDescription: 'An SEO audit: what stops your website ranking higher on Google and what to fix first. A clear list, not an 80-page report.',
      h1: 'What stops you ranking on Google?',
      lead: 'A clear list of fixes in order of importance, not an 80-page automated report.',
      body: [
        'Automated SEO tools give hundreds of warnings, most of which don’t matter. An audit looks at your site the way Google and your clients do: speed, structure, indexing, content and competitors. The result is a short list that says what to fix first and why.',
        'We can make the fixes ourselves or hand the list to your developer. Often the biggest impact comes from a few technical fixes that take little time.',
      ],
      includes: ['Technical check', 'Content and keywords', 'Competitor comparison', 'Fixes in order of importance', 'Walkthrough call'],
      faqs: [
        { q: 'How long does the audit take?', a: 'Usually one week, depending on the size of the site.' },
        { q: 'Can I make the fixes myself?', a: 'Yes, the list is written so your developer can start right away.' },
      ],
    },
  },
  {
    id: 'sisuturundus',
    parent: 'seo',
    icon: 'doc',
    et: {
      slug: 'sisuturundus',
      name: 'Sisuturundus ja blogi',
      metaTitle: 'Sisuturundus ja blogiartiklid Google’i jaoks | drealm',
      metaDescription: 'Sisuturundus: artiklid ja juhendid teemadel, mida sinu kliendid Google’ist otsivad. Kirjutatud inimestele, optimeeritud otsingule.',
      h1: 'Vastused küsimustele, mida kliendid otsivad.',
      lead: 'Artiklid ja juhendid, mis toovad Google’ist inimesi, kes on juba ostmas.',
      body: [
        'Enne kui klient sinuga ühendust võtab, otsib ta vastuseid: mis see maksab, kuidas valida, mida jälgida. Kui need vastused on sinu lehel, oled esimene, keda ta usaldab. Teeme märksõnauuringu ja sisuplaani teemadel, mis on otseselt seotud sinu teenustega.',
        'Iga artikkel on kirjutatud inimesele, mitte robotile, ja lõppeb selge järgmise sammuga. Mõõdame, millised artiklid toovad päringuid, ja kirjutame neid teemasid juurde.',
      ],
      includes: ['Märksõnauuring', 'Sisuplaan', 'Artiklid ja juhendid', 'Sisemine linkimine', 'Tulemuste mõõtmine'],
      faqs: [
        { q: 'Mitu artiklit kuus?', a: 'Tavaliselt 2–4. Parem vähem ja põhjalikumalt kui palju ja pinnapealselt.' },
        { q: 'Kas kasutate AI-d?', a: 'Abivahendina uurimisel jah, aga iga artikkel on toimetatud ja faktikontrollitud inimese poolt.' },
      ],
    },
    en: {
      slug: 'content-marketing',
      name: 'Content marketing and blog',
      metaTitle: 'Content Marketing & Blog Articles for Google | drealm',
      metaDescription: 'Content marketing: articles and guides on topics your clients search for on Google. Written for people, optimised for search.',
      h1: 'Answers to the questions clients search for.',
      lead: 'Articles and guides that bring people from Google who are already about to buy.',
      body: [
        'Before a client contacts you, they look for answers: what it costs, how to choose, what to watch out for. If those answers are on your site, you’re the first one they trust. We research keywords and plan content on topics directly tied to your services.',
        'Every article is written for people, not robots, and ends with a clear next step. We track which articles bring enquiries and write more on those topics.',
      ],
      includes: ['Keyword research', 'Content plan', 'Articles and guides', 'Internal linking', 'Results tracking'],
      faqs: [
        { q: 'How many articles a month?', a: 'Usually 2–4. Fewer and thorough beats many and shallow.' },
        { q: 'Do you use AI?', a: 'As a research aid yes, but every article is edited and fact-checked by a person.' },
      ],
    },
  },

  // ---------- Meta ----------
  {
    id: 'facebook',
    parent: 'meta',
    icon: 'target',
    et: {
      slug: 'facebooki-reklaamid',
      name: 'Facebooki reklaamid',
      metaTitle: 'Facebooki reklaamid ettevõttele | drealm',
      metaDescription: 'Facebooki reklaamid, mis toovad päringuid ja müüki: sihtimine, reklaampildid ja videod, korrektne mõõtmine ja igakuine aus kokkuvõte tulemustest.',
      h1: 'Facebooki reklaam, mis toob päringuid.',
      lead: 'Sihtimine, reklaamid ja mõõtmine nii, et näed täpselt, mitu päringut iga euro tõi.',
      body: [
        'Facebook jõuab endiselt suure osa Eesti täiskasvanuteni, eriti vanuserühmades, kes teevad suuremaid ostuotsuseid. Reklaam töötab, kui sõnum, pilt ja sihtrühm on omavahel kooskõlas ning tulemust mõõdetakse päringute, mitte laikide järgi.',
        'Teeme mitu reklaami varianti korraga, laseme neil nädal aega töötada ja tõstame eelarve sinna, kus päringu hind on madalaim. Kord kuus saad lühikese kokkuvõtte, mis töötas ja mida teeme järgmiseks.',
      ],
      includes: ['Sihtrühmad ja kampaania ülesehitus', 'Reklaamid ja tekstid', 'Pixel ja konversioonid', 'Testimine ja optimeerimine', 'Igakuine kokkuvõte'],
      faqs: [
        { q: 'Kas Facebook töötab veel?', a: 'Jah, eriti kohalikele teenustele ja vanematele sihtrühmadele. Noorematele sobib sageli paremini Instagram.' },
        { q: 'Mis on minimaalne eelarve?', a: 'Kohalikul ettevõttel saab alustada mõnesaja euroga kuus.' },
      ],
    },
    en: {
      slug: 'facebook-ads',
      name: 'Facebook ads',
      metaTitle: 'Facebook Ads for Business | drealm',
      metaDescription: 'Facebook ads that bring enquiries and sales: targeting, ad images and videos, proper tracking and an honest monthly summary of results.',
      h1: 'Facebook ads that bring enquiries.',
      lead: 'Targeting, creatives and tracking so you see exactly how many enquiries every euro brought.',
      body: [
        'Facebook still reaches a large share of adults in Estonia, especially in age groups making bigger buying decisions. Ads work when message, image and audience fit together and results are measured in enquiries, not likes.',
        'We run several ad variants at once, let them run for a week and move the budget to where the cost per enquiry is lowest. Once a month you get a short summary of what worked and what we do next.',
      ],
      includes: ['Audiences and campaign structure', 'Ads and copy', 'Pixel and conversions', 'Testing and optimisation', 'Monthly summary'],
      faqs: [
        { q: 'Does Facebook still work?', a: 'Yes, especially for local services and older audiences. Younger audiences are often better reached on Instagram.' },
        { q: 'What is the minimum budget?', a: 'A local business can start with a few hundred euros a month.' },
      ],
    },
  },
  {
    id: 'instagram',
    parent: 'meta',
    icon: 'frame',
    et: {
      slug: 'instagrami-reklaamid',
      name: 'Instagrami reklaamid',
      metaTitle: 'Instagrami reklaamid ja Reels | drealm',
      metaDescription: 'Instagrami reklaamid feedis, Storiesis ja Reelsis: visuaalid ja lühivideod, mis peatavad kerimise ja toovad müüki.',
      h1: 'Instagrami reklaam, mis peatab kerimise.',
      lead: 'Visuaalid ja lühivideod feedi, Storiesi ja Reelsi jaoks, kujundatud iga formaadi järgi eraldi.',
      body: [
        'Instagramis on aega umbes sekund, et keegi kerimise lõpetaks. See tähendab, et visuaal peab olema tehtud just selle formaadi jaoks: Stories ja Reels püstised, feed ruut või 4:5. Teeme reklaamid iga paigutuse jaoks eraldi, mitte ei venita sama pilti.',
        'Kombineerime pilte ja lühivideoid ning testime, mis sinu toote või teenuse puhul töötab. Video jaoks pole vaja võttepäeva: kasutame su tootepilte ja AI-d.',
      ],
      includes: ['Feed, Stories ja Reels', 'Pildid ja lühivideod', 'Tekstid ja pealkirjad', 'Testimine', 'Igakuine kokkuvõte'],
      faqs: [
        { q: 'Kas pean ise Instagrami postitama?', a: 'Reklaam ei nõua aktiivset kontot, aga hoitud profiil suurendab usaldust. Saame aidata ka postitustega.' },
        { q: 'Kas reklaam läheb ka Facebooki?', a: 'Soovi korral jah, samast kampaaniast, aga visuaalid kohandame.' },
      ],
    },
    en: {
      slug: 'instagram-ads',
      name: 'Instagram ads',
      metaTitle: 'Instagram Ads & Reels | drealm',
      metaDescription: 'Instagram ads in feed, Stories and Reels: visuals and short videos that stop the scroll, plus tracking that shows which ads drive sales.',
      h1: 'Instagram ads that stop the scroll.',
      lead: 'Visuals and short videos for feed, Stories and Reels, designed for each format separately.',
      body: [
        'On Instagram you have about a second before someone scrolls past. That means the visual must be made for the format: Stories and Reels vertical, feed square or 4:5. We create ads for each placement instead of stretching one image.',
        'We combine images and short videos and test what works for your product or service. Video needs no shoot day: we use your product photos and AI.',
      ],
      includes: ['Feed, Stories and Reels', 'Images and short videos', 'Copy and headlines', 'Testing', 'Monthly summary'],
      faqs: [
        { q: 'Do I need to post on Instagram myself?', a: 'Ads don’t require an active account, but a maintained profile builds trust. We can help with posts too.' },
        { q: 'Do the ads also run on Facebook?', a: 'If you want, yes, from the same campaign, with visuals adapted.' },
      ],
    },
  },

  // ---------- Reklaampildid ----------
  {
    id: 'postitused',
    parent: 'reklaampildid',
    icon: 'frame',
    et: {
      slug: 'sotsiaalmeedia-postitused',
      name: 'Sotsiaalmeedia postitused',
      metaTitle: 'Sotsiaalmeedia postitused ettevõttele | drealm',
      metaDescription: 'Igakuine sotsiaalmeedia postituste pakett: kujundus, tekstid ja ajakava ühes stiilis. Instagram, Facebook ja LinkedIn.',
      h1: 'Sotsiaalmeedia, mis ei jää enam unarusse.',
      lead: 'Iga kuu valmis postitused ühes stiilis, koos tekstide ja ajakavaga.',
      body: [
        'Enamik ettevõtteid teab, et peaks regulaarselt postitama, aga argipäevas jääb see viimaseks. Igakuine pakett lahendab selle: paneme kokku kuu teemad, kujundame postitused sinu mallide järgi ja kirjutame tekstid. Sina kinnitad, meie ajastame.',
        'Ühtne stiil teeb profiili äratuntavaks ja usaldusväärseks. Mallid on tehtud nii, et vajadusel saad ka ise kiiresti postituse teha.',
      ],
      includes: ['Kuu sisuplaan', 'Kujundatud postitused', 'Tekstid ja hashtagid', 'Ajastamine', 'Mallid sulle endale'],
      faqs: [
        { q: 'Mitu postitust kuus?', a: 'Tavaliselt 8–12. Pakett kohandatakse sinu vajadusele.' },
        { q: 'Kas teete ka LinkedIni?', a: 'Jah, B2B ettevõtetele on LinkedIn sageli kõige olulisem kanal.' },
      ],
    },
    en: {
      slug: 'social-media-posts',
      name: 'Social media posts',
      metaTitle: 'Social Media Posts for Business | drealm',
      metaDescription: 'A monthly social media package: design, copy and schedule in one consistent style. Instagram, Facebook and LinkedIn.',
      h1: 'Social media that no longer gets neglected.',
      lead: 'Ready posts every month in one style, with copy and a schedule.',
      body: [
        'Most companies know they should post regularly, but in daily life it comes last. A monthly package solves that: we plan the month’s topics, design posts on your templates and write the copy. You approve, we schedule.',
        'A consistent style makes your profile recognisable and trustworthy. Templates are built so you can quickly make a post yourself when needed.',
      ],
      includes: ['Monthly content plan', 'Designed posts', 'Copy and hashtags', 'Scheduling', 'Templates for your own use'],
      faqs: [
        { q: 'How many posts a month?', a: 'Usually 8–12. The package is tailored to your needs.' },
        { q: 'Do you do LinkedIn?', a: 'Yes, for B2B companies LinkedIn is often the most important channel.' },
      ],
    },
  },
  {
    id: 'bannerid',
    parent: 'reklaampildid',
    icon: 'web',
    et: {
      slug: 'reklaambannerid',
      name: 'Reklaambännerid',
      metaTitle: 'Reklaambännerid ja veebireklaamid | drealm',
      metaDescription: 'Reklaambännerid Google’i, portaalide ja uudisportaalide jaoks kõigis mõõtudes, ühe kujunduse põhjal. Ka animeeritud.',
      h1: 'Bännerid kõigis mõõtudes, ühe kujunduse põhjal.',
      lead: 'Google Display, uudisportaalid, KV.ee ja City24: kõik vajalikud mõõdud korraga, ka animeeritult.',
      body: [
        'Bännerikampaania jaoks on vaja kümmekond eri mõõtu ja formaati, mis kõik peavad välja nägema sama head. Kujundame põhivisuaali ja kohandame selle kõigile mõõtudele, et sõnum oleks igal pool loetav.',
        'Vajadusel teeme animeeritud HTML5-bännerid, mis vastavad portaalide tehnilistele nõuetele, ning anname failid üle valmis kujul.',
      ],
      includes: ['Põhivisuaal', 'Kõik vajalikud mõõdud', 'Animeeritud versioonid', 'Portaalide nõuete järgimine', 'Valmis failid'],
      faqs: [
        { q: 'Kas teete ka kinnisvaraportaalidele?', a: 'Jah, KV.ee ja City24 bännerid on sagedased arendusprojektidele.' },
        { q: 'Kui kiiresti valmib?', a: 'Tavaliselt nädala jooksul pärast põhivisuaali kinnitamist.' },
      ],
    },
    en: {
      slug: 'display-banners',
      name: 'Display banners',
      metaTitle: 'Display Banners & Web Ads | drealm',
      metaDescription: 'Display banners for Google, property portals and news sites in every size from one design, static or animated, ready to upload to any ad network.',
      h1: 'Banners in every size, from one design.',
      lead: 'Google Display, news portals, KV.ee and City24: every size you need at once, animated too.',
      body: [
        'A banner campaign needs a dozen sizes and formats that all have to look good. We design the key visual and adapt it to every size so the message stays readable everywhere.',
        'When needed we create animated HTML5 banners that meet portal specs and deliver ready-to-upload files.',
      ],
      includes: ['Key visual', 'All required sizes', 'Animated versions', 'Portal spec compliance', 'Ready files'],
      faqs: [
        { q: 'Do you make banners for property portals?', a: 'Yes, KV.ee and City24 banners are common for developments.' },
        { q: 'How fast is it ready?', a: 'Usually within a week after the key visual is approved.' },
      ],
    },
  },

  // ---------- AI videoreklaamid ----------
  {
    id: 'tootevideo',
    parent: 'video',
    icon: 'play',
    et: {
      slug: 'tootevideod',
      name: 'Tootevideod',
      metaTitle: 'AI tootevideod e-poele ja reklaamile | drealm',
      metaDescription: 'Lühikesed tootevideod e-poele, Instagramile ja reklaamidesse sinu olemasolevate tootepiltide põhjal, ilma võttepäeva ja stuudiota.',
      h1: 'Tootevideo ilma võttepäevata.',
      lead: 'Sinu tootepiltidest saavad lühikesed videod e-poe, Reelsi ja reklaami jaoks.',
      body: [
        'Video müüb paremini kui pilt, aga iga toote filmimine on kallis. Võtame sinu olemasolevad tootepildid ja loome neist lühikesed liikuvad videod: toote pööramine, kasutusolukord, detailid.',
        'Videod tehakse kõigis vajalikes formaatides ning neid saab kasutada nii e-poe tootelehel kui reklaamides. Variandid aitavad testida, milline lähenemine müüb kõige paremini.',
      ],
      includes: ['Videod tootepiltide põhjal', 'Formaadid e-poele ja sotsiaalmeediale', 'Tekstid ja muusika', 'Mitu varianti'],
      faqs: [
        { q: 'Milliseid pilte on vaja?', a: 'Hea valgusega tootepildid mitmest nurgast. Vajadusel aitame pildistamisega.' },
        { q: 'Mitu toodet korraga?', a: 'Saame teha ka sarja kümnetele toodetele ühes stiilis.' },
      ],
    },
    en: {
      slug: 'product-videos',
      name: 'Product videos',
      metaTitle: 'AI Product Videos for E-commerce & Ads | drealm',
      metaDescription: 'Short product videos for your online store and social media, made from your product photos without a shoot day.',
      h1: 'Product video without a shoot day.',
      lead: 'Your product photos become short videos for your store, Reels and ads.',
      body: [
        'Video sells better than images, but filming every product is expensive. We take your existing product photos and create short moving videos: product rotation, in-use scenes, details.',
        'Videos come in every format you need and work both on product pages and in ads. Variants help test which approach sells best.',
      ],
      includes: ['Videos from product photos', 'Formats for store and social', 'Captions and music', 'Several variants'],
      faqs: [
        { q: 'What photos do you need?', a: 'Well-lit product photos from several angles. We can help with photography if needed.' },
        { q: 'How many products at once?', a: 'We can do a series for dozens of products in one style.' },
      ],
    },
  },
  {
    id: 'kinnisvaravideo',
    parent: 'video',
    icon: 'plan',
    et: {
      slug: 'kinnisvara-videod',
      name: 'Kinnisvara videod',
      metaTitle: 'Kinnisvara ja uusarenduse videod | drealm',
      metaDescription: 'Videod uusarendusele ja kinnisvarale ka enne, kui hoone on valmis: visualiseeringutest ja plaanidest lühikesed reklaamvideod.',
      h1: 'Video kodust, mida veel pole ehitatud.',
      lead: 'Visualiseeringutest ja plaanidest lühikesed videod uusarenduse müügiks ja reklaamiks.',
      body: [
        'Uusarenduse müük algab sageli enne, kui hoone on valmis. Arhitekti visualiseeringutest ja plaanidest loome lühikesed videod, mis näitavad asukohta, vaateid ja elu majas, nii et ostja saab sellest aru ka telefonis kerides.',
        'Videod sobivad Meta reklaamidesse, kinnisvaraportaalidesse ja arenduse kodulehele. Valmisolekul saab need asendada päris kaadritega.',
      ],
      includes: ['Videod visualiseeringutest', 'Asukoht ja ümbrus', 'Formaadid reklaamile ja portaalidele', 'Tekstid ja muusika'],
      faqs: [
        { q: 'Kas on vaja 3D-mudelit?', a: 'Ei pruugi. Piisab sageli olemasolevatest visualiseeringutest ja plaanidest.' },
        { q: 'Kas sobib ka maaklerile?', a: 'Jah, olemasolevate objektide fotodest saab teha lühikesed tutvustusvideod.' },
      ],
    },
    en: {
      slug: 'real-estate-videos',
      name: 'Real estate videos',
      metaTitle: 'Real Estate & New Development Videos | drealm',
      metaDescription: 'Videos for new developments and properties even before the building is finished: short ad videos from renders and plans.',
      h1: 'Video of a home that isn’t built yet.',
      lead: 'Short videos from renders and plans to sell and advertise a new development.',
      body: [
        'Selling a new development often starts before the building is finished. From architect renders and plans we create short videos that show the location, views and life in the building, so buyers get it even while scrolling on a phone.',
        'The videos work in Meta ads, property portals and the development website. Once finished, they can be swapped for real footage.',
      ],
      includes: ['Videos from renders', 'Location and surroundings', 'Formats for ads and portals', 'Captions and music'],
      faqs: [
        { q: 'Do I need a 3D model?', a: 'Not necessarily. Existing renders and plans are often enough.' },
        { q: 'Does it work for agents?', a: 'Yes, short intro videos can be made from photos of existing listings.' },
      ],
    },
  },

  // ---------- AI automatiseerimine ----------
  {
    id: 'e-kirjad',
    parent: 'automatiseerimine',
    icon: 'mail',
    et: {
      slug: 'e-kirjade-automatiseerimine',
      name: 'E-kirjade automatiseerimine',
      metaTitle: 'E-kirjade ja päringute automatiseerimine AI-ga | drealm',
      metaDescription: 'AI loeb sissetulevad e-kirjad, liigitab päringud ja koostab vastuse mustandi. Sina vaatad üle ja saadad. Gmail ja Outlook.',
      h1: 'Postkast, mis sorteerib end ise.',
      lead: 'AI loeb sissetulevad kirjad, liigitab päringud ja koostab vastuse mustandi sinu toonis.',
      body: [
        'Suur osa päevast kulub kirjade lugemisele, sorteerimisele ja samadele vastustele. AI töövoog loeb iga uue kirja, saab aru, kas tegu on päringu, kaebuse või arvega, ning paneb selle õigesse kohta.',
        'Päringutele koostatakse vastuse mustand sinu hinnakirja ja varasemate vastuste põhjal. Midagi ei lähe välja ilma sinu kinnituseta, aga vastamiseks kulub minutite asemel sekundeid.',
      ],
      includes: ['Kirjade liigitamine', 'Vastuste mustandid', 'Kiireloomuliste märkimine', 'Gmail ja Outlook', 'Kokkuvõtted'],
      faqs: [
        { q: 'Kas AI saadab kirju ise?', a: 'Vaikimisi mitte. AI teeb mustandi, sina saadad. Lihtsamatele kirjadele saab automaatse vastuse hiljem sisse lülitada.' },
        { q: 'Kas kirjad jäävad turvaliselt?', a: 'Kasutame ärilahendusi, mis ei treeni sinu andmetel.' },
      ],
    },
    en: {
      slug: 'email-automation',
      name: 'Email automation',
      metaTitle: 'Email & Enquiry Automation with AI | drealm',
      metaDescription: 'AI reads incoming emails, sorts enquiries and drafts replies in your tone. You review and send. Works with Gmail and Outlook, set up in days.',
      h1: 'An inbox that sorts itself.',
      lead: 'AI reads incoming emails, sorts enquiries and drafts replies in your tone.',
      body: [
        'Much of the day goes on reading and sorting email and writing the same replies. An AI workflow reads every new message, understands whether it’s an enquiry, complaint or invoice, and puts it in the right place.',
        'Enquiries get a reply draft based on your price list and past answers. Nothing goes out without your approval, but replying takes seconds instead of minutes.',
      ],
      includes: ['Email classification', 'Reply drafts', 'Flagging urgent items', 'Gmail and Outlook', 'Summaries'],
      faqs: [
        { q: 'Does the AI send emails itself?', a: 'Not by default. AI drafts, you send. Auto-replies for simple emails can be switched on later.' },
        { q: 'Is my email safe?', a: 'We use business services that do not train on your data.' },
      ],
    },
  },
  {
    id: 'pakkumised',
    parent: 'automatiseerimine',
    icon: 'doc',
    et: {
      slug: 'pakkumiste-automatiseerimine',
      name: 'Pakkumiste automatiseerimine',
      metaTitle: 'Hinnapakkumiste automatiseerimine | drealm',
      metaDescription: 'Hinnapakkumised minutitega: AI koostab pakkumise päringu, hinnakirja ja varasemate pakkumiste põhjal sinu mallis.',
      h1: 'Hinnapakkumine minutitega, mitte tundidega.',
      lead: 'AI koostab pakkumise päringu, hinnakirja ja varasemate pakkumiste põhjal sinu mallis.',
      body: [
        'Pakkumise koostamine tähendab sageli sama infot mitmest kohast kokku korjata: päring, hinnakiri, varasem sarnane projekt. AI teeb selle töö ära ja paneb tulemuse sinu malli, nii et jääb ainult üle vaadata ja saata.',
        'Kiirem pakkumine tähendab sageli suuremat tõenäosust tehinguni jõuda. Lisaks jääb iga pakkumine süsteemi, nii et näed, millised võideti ja millised mitte.',
      ],
      includes: ['Pakkumise mustand päringust', 'Sinu hinnakiri ja mall', 'Varasemate pakkumiste kasutamine', 'Ülevaade pakkumistest', 'CRM-iga ühendamine'],
      faqs: [
        { q: 'Kas sobib ka keerukatele pakkumistele?', a: 'Jah, AI teeb esimese versiooni ja sina täpsustad. Ajasääst on suurim just mahukate pakkumiste puhul.' },
        { q: 'Mis vormingus pakkumised tulevad?', a: 'Sinu mallis: Word, PDF, Google Docs või otse CRM-is.' },
      ],
    },
    en: {
      slug: 'quote-automation',
      name: 'Quote automation',
      metaTitle: 'Quote Automation with AI | drealm',
      metaDescription: 'Quotes in minutes: AI drafts a quote from the enquiry, your price list and past quotes, in your own template. You check it and send it.',
      h1: 'A quote in minutes, not hours.',
      lead: 'AI drafts a quote from the enquiry, your price list and past quotes, in your template.',
      body: [
        'Writing a quote often means gathering the same information from several places: the enquiry, the price list, a similar past project. AI does that work and puts the result in your template, so all that’s left is to review and send.',
        'A faster quote often means a better chance of closing. Every quote also stays in the system, so you see which were won and which weren’t.',
      ],
      includes: ['Quote draft from enquiry', 'Your price list and template', 'Reuse of past quotes', 'Quote overview', 'CRM integration'],
      faqs: [
        { q: 'Does it work for complex quotes?', a: 'Yes, AI drafts the first version and you refine it. The time saved is biggest on large quotes.' },
        { q: 'What format are quotes in?', a: 'Your template: Word, PDF, Google Docs or directly in your CRM.' },
      ],
    },
  },
  {
    id: 'arved',
    parent: 'automatiseerimine',
    icon: 'stack',
    et: {
      slug: 'arvete-tootlus',
      name: 'Arvete töötlus',
      metaTitle: 'Arvete töötluse automatiseerimine | drealm',
      metaDescription: 'Ostuarvete automaatne lugemine, kontroll ja raamatupidamisse saatmine (Merit, SmartAccounts jt). Vähem käsitööd ja vähem vigu igal kuul.',
      h1: 'Arved liiguvad raamatupidamisse ise.',
      lead: 'Ostuarved loetakse e-kirjast, kontrollitakse ja saadetakse raamatupidamisse ilma käsitsi sisestamiseta.',
      body: [
        'Arvete sisestamine on tüüpiline töö, mis kordub iga päev ja kus väike viga võib tähendada topeltmakset. AI loeb arve PDF-ist või pildilt summa, tarnija, kuupäeva ja kirjed ning võrdleb neid tellimusega.',
        'Kõrvalekalded märgitakse ülevaatamiseks, korras arved liiguvad otse raamatupidamistarkvarasse. Töötab nii Merit Aktiva, SmartAccountsi kui teiste levinud lahendustega.',
      ],
      includes: ['Arvete lugemine e-kirjast', 'Andmete kontroll', 'Kõrvalekallete märkimine', 'Raamatupidamisse saatmine', 'Arhiveerimine'],
      faqs: [
        { q: 'Millise raamatupidamistarkvaraga töötab?', a: 'Levinud Eesti lahendustega nagu Merit Aktiva ja SmartAccounts, samuti teistega, millel on liides.' },
        { q: 'Mis siis, kui arve on loetamatu?', a: 'See märgitakse inimesele ülevaatamiseks. Midagi ei liigu edasi, kui andmed pole kindlad.' },
      ],
    },
    en: {
      slug: 'invoice-processing',
      name: 'Invoice processing',
      metaTitle: 'Invoice Processing Automation | drealm',
      metaDescription: 'Automatic reading, checking and forwarding of purchase invoices to accounting. Less manual work, fewer mistakes.',
      h1: 'Invoices move to accounting on their own.',
      lead: 'Purchase invoices are read from email, checked and sent to accounting without manual entry.',
      body: [
        'Entering invoices is typical repetitive work where a small mistake can mean a double payment. AI reads the amount, supplier, date and lines from a PDF or photo and compares them with the order.',
        'Discrepancies are flagged for review, correct invoices go straight to your accounting software. It works with Merit Aktiva, SmartAccounts and other common tools.',
      ],
      includes: ['Reading invoices from email', 'Data checks', 'Flagging discrepancies', 'Sending to accounting', 'Archiving'],
      faqs: [
        { q: 'Which accounting software does it work with?', a: 'Common Estonian tools like Merit Aktiva and SmartAccounts, and others with an API.' },
        { q: 'What if an invoice is unreadable?', a: 'It’s flagged for a person to review. Nothing moves on unless the data is certain.' },
      ],
    },
  },

  // ---------- AI koolitused ----------
  {
    id: 'chatgpt',
    parent: 'koolitused',
    icon: 'chat',
    et: {
      slug: 'chatgpt-koolitus',
      name: 'ChatGPT ja Claude koolitus',
      metaTitle: 'ChatGPT ja Claude koolitus meeskonnale | drealm',
      metaDescription: 'Praktiline ChatGPT ja Claude koolitus teie oma tööülesannetega: e-kirjad, pakkumised, tabelid ja raportid. Kohapeal või veebis.',
      h1: 'ChatGPT ja Claude, aga teie oma töö peal.',
      lead: 'Praktiline koolitus, kus iga osaleja lahendab oma päris ülesandeid ja lahkub valmis töövoogudega.',
      body: [
        'Enamik AI-koolitusi näitab tööriistu, aga ei õpeta neid oma töös kasutama. Meie koolitus algab teie tegelikest ülesannetest: millised kirjad, pakkumised, tabelid ja raportid võtavad kõige rohkem aega. Need saavad koolituse harjutusteks.',
        'Iga osaleja lahkub valmis käskude ja töövoogudega, mida saab järgmisel päeval kasutada, ning teab, milliseid andmeid AI-le anda ei tohi.',
      ],
      includes: ['Eelvestlus ülesannete kaardistamiseks', 'Harjutused teie töö põhjal', 'Valmis käsud ja mallid', 'Andmekaitse ja turvalisus', 'Järeltugi'],
      faqs: [
        { q: 'Kui pikk koolitus on?', a: 'Tavaliselt pool päeva või terve päev, sõltuvalt grupist ja eesmärgist.' },
        { q: 'Kas sobib algajatele?', a: 'Jah. Alustame põhitõdedest ja liigume kiiresti praktilise töö juurde.' },
      ],
    },
    en: {
      slug: 'chatgpt-training',
      name: 'ChatGPT and Claude training',
      metaTitle: 'ChatGPT & Claude Training for Teams | drealm',
      metaDescription: 'Hands-on ChatGPT and Claude training with your own work tasks: emails, quotes, spreadsheets and reports. On-site or online.',
      h1: 'ChatGPT and Claude, on your own work.',
      lead: 'Hands-on training where each participant solves real tasks and leaves with ready workflows.',
      body: [
        'Most AI trainings show tools but don’t teach how to use them in your work. Ours starts with your actual tasks: which emails, quotes, spreadsheets and reports take the most time. Those become the exercises.',
        'Every participant leaves with ready prompts and workflows to use the next day, and knows what data must not be given to AI.',
      ],
      includes: ['Pre-call to map tasks', 'Exercises from your work', 'Ready prompts and templates', 'Data protection and safety', 'Follow-up support'],
      faqs: [
        { q: 'How long is the training?', a: 'Usually half a day or a full day, depending on the group and goal.' },
        { q: 'Is it suitable for beginners?', a: 'Yes. We start with the basics and move quickly to practical work.' },
      ],
    },
  },
  {
    id: 'juhid',
    parent: 'koolitused',
    icon: 'learn',
    et: {
      slug: 'ai-tootuba-juhtidele',
      name: 'AI töötuba juhtidele',
      metaTitle: 'AI töötuba juhtidele ja omanikele | drealm',
      metaDescription: 'Töötuba juhtidele: kus AI teie ettevõttes päriselt aega säästab, kust alustada ja kuidas riske hallata. Tulemuseks konkreetne plaan.',
      h1: 'Kust alustada AI-ga sinu ettevõttes?',
      lead: 'Töötuba juhtidele ja omanikele, mille tulemuseks on konkreetne plaan, mitte üldine ülevaade.',
      body: [
        'Juhi küsimus ei ole „kuidas ChatGPT töötab“, vaid „kus see meie ettevõttes raha või aega säästab“. Töötoas kaardistame koos protsessid, leiame kolm kõige suurema mõjuga kohta ja hindame, mis neist on kiiresti tehtav.',
        'Räägime ka riskidest: andmekaitse, vead ja töötajate hirmud. Tulemuseks on kirjalik plaan esimeste sammudega.',
      ],
      includes: ['Protsesside kaardistus', 'Kolm suurima mõjuga kohta', 'Riskid ja andmekaitse', 'Kirjalik tegevusplaan'],
      faqs: [
        { q: 'Kellele see sobib?', a: 'Omanikele ja juhtidele, kes tahavad AI kasutuselevõttu juhtida, mitte ainult sellest kuulda.' },
        { q: 'Kas järgneb ka teostus?', a: 'Kui soovid, saame plaani ka ellu viia, aga see ei ole kohustuslik.' },
      ],
    },
    en: {
      slug: 'ai-workshop-for-leaders',
      name: 'AI workshop for leaders',
      metaTitle: 'AI Workshop for Leaders & Owners | drealm',
      metaDescription: 'A workshop for leaders: where AI really saves time in your company, where to start and how to manage the risks. The result is a concrete plan.',
      h1: 'Where should your company start with AI?',
      lead: 'A workshop for leaders and owners that ends with a concrete plan, not a general overview.',
      body: [
        'A leader’s question isn’t “how does ChatGPT work” but “where does it save us money or time”. In the workshop we map processes together, find the three highest-impact places and assess which can be done quickly.',
        'We also cover the risks: data protection, mistakes and staff concerns. The result is a written plan with first steps.',
      ],
      includes: ['Process mapping', 'Three highest-impact areas', 'Risks and data protection', 'Written action plan'],
      faqs: [
        { q: 'Who is it for?', a: 'Owners and leaders who want to lead AI adoption, not just hear about it.' },
        { q: 'Do you also implement it?', a: 'If you want, we can carry out the plan too, but it’s not required.' },
      ],
    },
  },

  // ---------- Sinu ettevõtte AI ----------
  {
    id: 'klienditeenindaja',
    parent: 'ettevotte-ai',
    icon: 'chat',
    et: {
      slug: 'ai-klienditeenindaja',
      name: 'AI klienditeenindaja',
      metaTitle: 'AI klienditeenindaja ja vestlusrobot kodulehele | drealm',
      metaDescription: 'AI vestlusrobot kodulehele, mis vastab klientide küsimustele sinu info põhjal, kogub päringuid ja suunab keerulised küsimused inimesele.',
      h1: 'Klienditeenindaja, kes vastab ka öösel.',
      lead: 'Vestlusaken kodulehel, mis vastab sinu info põhjal, kogub päringuid ja annab keerulised küsimused edasi inimesele.',
      body: [
        'Paljud kliendid küsivad samu asju: hinnad, tööajad, tarneajad, kas teete seda või toda. AI klienditeenindaja vastab neile kohe, sinu kodulehe, hinnakirja ja KKK põhjal, ning ei leiuta asju, mida sa pole kirja pannud.',
        'Kui küsimus on keerulisem, kogub see kontaktid ja edastab vestluse sulle. Nii ei jää ükski päring vastuseta ka siis, kui oled hõivatud.',
      ],
      includes: ['Vestlusaken kodulehel', 'Vastused sinu info põhjal', 'Päringute kogumine', 'Üleandmine inimesele', 'Eesti ja inglise keel'],
      faqs: [
        { q: 'Kas robot võib midagi valesti öelda?', a: 'Riski vähendame sellega, et ta vastab ainult sinu antud info põhjal ja ütleb ausalt, kui ei tea.' },
        { q: 'Kas see räägib eesti keelt?', a: 'Jah, eesti, inglise ja vajadusel vene keeles.' },
      ],
    },
    en: {
      slug: 'ai-customer-assistant',
      name: 'AI customer assistant',
      metaTitle: 'AI Customer Assistant & Website Chatbot | drealm',
      metaDescription: 'An AI chatbot for your website that answers client questions from your information, collects enquiries and hands complex questions to a person.',
      h1: 'A customer service agent that answers at night too.',
      lead: 'A chat window on your website that answers from your information, collects enquiries and hands complex questions to a person.',
      body: [
        'Many clients ask the same things: prices, opening hours, delivery times, whether you do this or that. The AI assistant answers instantly from your website, price list and FAQ, and doesn’t make up things you haven’t written down.',
        'When a question is more complex, it collects contact details and passes the conversation to you. No enquiry goes unanswered, even when you’re busy.',
      ],
      includes: ['Chat window on your site', 'Answers from your information', 'Enquiry collection', 'Handover to a person', 'Estonian and English'],
      faqs: [
        { q: 'Can the bot say something wrong?', a: 'We reduce that risk by having it answer only from your information and say honestly when it doesn’t know.' },
        { q: 'Does it speak Estonian?', a: 'Yes, Estonian, English and Russian if needed.' },
      ],
    },
  },
  {
    id: 'teadmusbaas',
    parent: 'ettevotte-ai',
    icon: 'search',
    et: {
      slug: 'sisemine-teadmusbaas',
      name: 'Sisemine teadmusbaas',
      metaTitle: 'AI teadmusbaas meeskonnale | drealm',
      metaDescription: 'Sisemine AI-assistent, kes leiab vastused sinu dokumentidest, juhenditest ja lepingutest ning viitab allikale. Slack, Teams või veeb.',
      h1: 'Kõik ettevõtte teadmised ühes vestluses.',
      lead: 'Tiim küsib, AI leiab vastuse sinu dokumentidest ja näitab, kust see pärineb.',
      body: [
        'Info on laiali kaustades, e-kirjades ja kolleegide peas. Uus töötaja küsib samu asju, mida eelmine, ja kogenud töötajad kulutavad aega vastamisele. Sisemine teadmusbaas teeb ettevõtte dokumendid otsitavaks tavalise küsimusega.',
        'Iga vastus näitab, millisest dokumendist see tuli, et seda saaks kontrollida. Ligipääsud on seadistatud nii, et igaüks näeb ainult seda, mida tohib.',
      ],
      includes: ['Dokumentide ühendamine', 'Vestlus Slackis, Teamsis või veebis', 'Viited allikatele', 'Ligipääsuõigused', 'Teadmiste ajakohastamine'],
      faqs: [
        { q: 'Milliseid dokumente saab kasutada?', a: 'Word, PDF, Google Docs, Notion, SharePoint ja paljud teised.' },
        { q: 'Kas andmed jäävad ettevõttesse?', a: 'Jah. Kasutame teenuseid, mis ei treeni sinu andmetel, ja ligipääs on piiratud.' },
      ],
    },
    en: {
      slug: 'internal-knowledge-assistant',
      name: 'Internal knowledge assistant',
      metaTitle: 'AI Knowledge Assistant for Teams | drealm',
      metaDescription: 'An internal AI assistant that finds answers in your documents, manuals and contracts and cites the source. Slack, Teams or web.',
      h1: 'All your company knowledge in one chat.',
      lead: 'Your team asks, AI finds the answer in your documents and shows where it came from.',
      body: [
        'Information is scattered across folders, emails and colleagues’ heads. New hires ask the same things as the last one, and experienced staff spend time answering. An internal knowledge assistant makes your documents searchable with a plain question.',
        'Every answer shows which document it came from so it can be checked. Access is set up so everyone sees only what they are allowed to.',
      ],
      includes: ['Connecting documents', 'Chat in Slack, Teams or web', 'Source citations', 'Access permissions', 'Keeping knowledge current'],
      faqs: [
        { q: 'Which documents can be used?', a: 'Word, PDF, Google Docs, Notion, SharePoint and many others.' },
        { q: 'Does the data stay in the company?', a: 'Yes. We use services that do not train on your data, and access is restricted.' },
      ],
    },
  },
];

export const subsOf = (parentId: string) => SUBSERVICES.filter((s) => s.parent === parentId);
export const subHref = (sub: SubService, lang: Lang) => {
  const parent = byId(sub.parent, lang)!;
  return lang === 'en' ? `/en/services/${parent.slug}/${sub.en.slug}` : `/teenused/${parent.slug}/${sub.et.slug}`;
};
