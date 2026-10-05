import type { Service } from '../types';

export const industryServices: Service[] = [
  {
    id: 'restaurant',
    group: 'industry',
    related: ['website', 'ai-chatbot', 'redesign'],
    et: {
      slug: 'restorani-koduleht',
      navLabel: 'Restorani koduleht',
      metaTitle: 'Restorani ja kohviku koduleht | drealm',
      metaDescription:
        'Restorani ja kohviku koduleht, kus menüüd uuendad ise, laua saab broneerida paari klikiga ja turist leiab sind Google’ist. Alates 900 €. Küsi pakkumist!',
      eyebrow: 'Restoranid ja kohvikud',
      h1: 'Restorani koduleht, mis toob külalised lauda',
      lead:
        'Teeme restoranidele, kohvikutele ja baaridele kiireid kodulehti, kus menüü on alati ajakohane, broneering käib mõne klikiga ja info on olemas ka välismaistele külalistele.',
      cardText:
        'Restoranile, kohvikule või baarile koduleht, kus menüüd uuendad ise, lauda saab broneerida ja külaline leiab sind kaardilt.',
      problemsTitle: 'Kas see kõlab tuttavalt?',
      problems: [
        'Menüü on veebis PDF-ina, mida telefonis keegi lugeda ei viitsi ja mille uuendamine nõuab iga kord kujundajat.',
        'Broneeringud tulevad telefoni, Messengeri ja e-posti teel laiali ning mõni jääb paratamatult vastamata.',
        'Lahtiolekuajad on kodulehel, Google’is ja Facebookis erinevad ning külaline seisab suletud ukse taga.',
        'Turistid ei leia ingliskeelset infot ega saa aru, kas ja kuidas lauda broneerida.',
        'Ürituste, brunchide ja hooajamenüüde kohta pole kuskil korralikku lehte, millele reklaamis viidata.',
      ],
      deliverablesTitle: 'Mida sa saad',
      deliverables: [
        {
          title: 'Ise uuendatav menüü',
          text: 'Menüü on päris veebitekst, mitte PDF: roogade lisamine, hindade muutmine ja allergeenide märkimine käib lihtsas haldusliideses, ilma arendajata.',
        },
        {
          title: 'Lauabroneering',
          text: 'Ühendame lehe sinu kasutatava broneerimissüsteemiga (näiteks Dineout) või teeme lihtsa broneerimisvormi, mille päringud jõuavad otse sinu postkasti.',
        },
        {
          title: 'Google’i ettevõtteprofiil ja kohalik SEO',
          text: 'Seadistame või korrastame Google’i ettevõtteprofiili, ühtlustame lahtiolekuajad ja kontaktid ning lisame lehele struktureeritud andmed, et sind leitaks otsingust ja kaardilt.',
        },
        {
          title: 'Kullerite ja sotsiaalmeedia lingid',
          text: 'Selged nupud Wolti ja Bolt Foodi tellimiseks, Instagrami ja Facebooki viited ning kaart koos teejuhistega.',
        },
        {
          title: 'Mitmekeelsus turistidele',
          text: 'Eesti- ja ingliskeelne leht, vajadusel ka soome, vene või muu keel, iga keel oma aadressil, et ka välisotsing sind üles leiaks.',
        },
        {
          title: 'Ürituste ja erimenüüde lehed',
          text: 'Eraldi lehed sündmustele, brunchile, grupimenüüdele ja eraüritustele, mida saad reklaamides ja sotsiaalmeedias jagada.',
        },
      ],
      bodyTitle: 'Milline peaks olema hea restorani koduleht?',
      body:
        'Enamik külalisi avab restorani kodulehe telefonis, sageli juba tänaval seistes. Nad tahavad kiiresti teada kolme asja: mida süüa saab, mis see maksab ja kas täna on veel vaba laud. Kui menüü on PDF, mis laeb pool minutit ja vajab suumimist, läheb külaline naaberrestorani. Seepärast ehitame menüü tavalise veebilehena, mis loeb hästi ka väikesel ekraanil ja mida otsingumootorid mõistavad.\n\n' +
        'Teine oluline osa on broneerimine. Kui kasutad juba mõnda broneerimiskeskkonda, näiteks Dineouti, lisame selle lehele nii, et broneerimisnupp on igal lehel käe-jala juures. Kui eraldi süsteemi pole, teeme lihtsa vormi, mis küsib kuupäeva, kellaaega ja seltskonna suurust ning saadab päringu sulle e-postile. Nii ei pea keegi õhtu tipptunnil telefoni haarama.\n\n' +
        'Kohaliku nähtavuse jaoks on sama tähtis Google’i ettevõtteprofiil. Kontrollime, et nimi, aadress, telefon ja lahtiolekuajad oleks kodulehel ja profiilis ühesugused, ning lisame lehele restorani struktureeritud andmed. Turistide jaoks teeme ingliskeelse versiooni, mille aadressid ja pealkirjad on päriselt ingliskeelsed, mitte masintõlke järelmaitsega.\n\n' +
        'Tehnilise poole pealt ehitame lehe Astroga staatilise saidina ja majutame Vercelis. Tulemus on kiire, turvaline ja odav ülal pidada: pole pistikprogramme, mida pidevalt uuendada, ega serverit, mis reede õhtul kokku kukuks.',
      priceFrom: 'alates 900 €',
      priceNote:
        'Hinda mõjutavad keelte arv, menüü maht, broneerimissüsteemi liidestus ja see, kas fotod ja tekstid on juba olemas.',
      timeline: '2–4 nädalat',
      faqs: [
        {
          q: 'Kas saan menüüd ise muuta?',
          a: 'Jah. Menüü on haldusliideses, kus saad roogasid lisada, hindu muuta ja hooajamenüüsid vahetada. See ei nõua tehnilisi teadmisi ega arendaja abi.',
        },
        {
          q: 'Kas leht toetab Dineouti või muud broneerimissüsteemi?',
          a: 'Jah, enamasti saab olemasoleva broneerimissüsteemi vidina või lingi lehele lisada. Kui süsteemi pole, teeme lihtsa broneerimisvormi, mille päringud tulevad sinu e-postile.',
        },
        {
          q: 'Kas teete ka Google’i ettevõtteprofiili korda?',
          a: 'Jah, kontrollime ja korrastame profiili andmed, et lahtiolekuajad, aadress ja kontaktid ühtiksid kodulehega. Profiili omanikuks jääd sina.',
        },
        {
          q: 'Mitu keelt lehel olla võiks?',
          a: 'Enamikule kohtadele piisab eesti ja inglise keelest. Kui sul käib palju Soome või muid kindlaid külalisi, on mõistlik lisada ka nende keel. Iga keel saab oma aadressid ja metaandmed.',
        },
        {
          q: 'Kas saame lisada ka Wolti ja Bolt Foodi?',
          a: 'Jah, lisame selged lingid sinu Wolti ja Bolt Foodi lehtedele, et külaline saaks kohe tellida. Kullerplatvormide menüüd hallatakse siiski nende enda keskkonnas.',
        },
      ],
    },
    en: {
      slug: 'restaurant-website',
      navLabel: 'Restaurant websites',
      metaTitle: 'Restaurant & Café Website Design | drealm',
      metaDescription:
        'A restaurant or café website with a menu you update yourself, easy table booking and local SEO that helps guests find you. From €900. Get a quote today.',
      eyebrow: 'Restaurants & cafés',
      h1: 'A restaurant website that fills your tables',
      lead:
        'We build fast websites for restaurants, cafés and bars, with a menu that is always up to date, booking in a couple of taps and clear information for visitors from abroad.',
      cardText:
        'A website for your restaurant, café or bar with a menu you edit yourself, table booking and a strong presence on Google Maps.',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Your menu is a PDF that nobody wants to pinch-zoom on a phone, and every update means calling a designer.',
        'Bookings arrive by phone, Messenger and email, and some inevitably slip through the cracks.',
        'Your opening hours differ between your website, Google and Facebook, so guests turn up to a locked door.',
        'Tourists can’t find information in English or work out how to reserve a table.',
        'There’s no proper page for events, brunch or seasonal menus that you could link to from ads.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'A menu you can edit',
          text: 'Your menu is real web content, not a PDF. Adding dishes, changing prices and marking allergens happens in a simple editor, with no developer needed.',
        },
        {
          title: 'Table booking',
          text: 'We connect the site to the booking system you already use, such as Dineout, or build a simple booking form that sends requests straight to your inbox.',
        },
        {
          title: 'Google Business Profile & local SEO',
          text: 'We set up or tidy your Google Business Profile, align your hours and contact details everywhere and add structured data so you show up in search and on the map.',
        },
        {
          title: 'Delivery and social links',
          text: 'Clear buttons to order via Wolt and Bolt Food, links to Instagram and Facebook, and a map with directions.',
        },
        {
          title: 'Multilingual for tourists',
          text: 'Estonian and English as standard, plus Finnish, Russian or another language if your guests need it, each on its own URLs so it can rank in search.',
        },
        {
          title: 'Event and special menu pages',
          text: 'Dedicated pages for events, brunch, group menus and private dining that you can share in ads and on social media.',
        },
      ],
      bodyTitle: 'What makes a good restaurant website?',
      body:
        'Most guests open a restaurant website on their phone, often while already standing on the street. They want three answers fast: what’s on the menu, what it costs and whether there’s a table tonight. If the menu is a PDF that takes half a minute to load and needs zooming, they’ll walk next door. That’s why we build the menu as a regular web page that reads well on a small screen and that search engines can understand.\n\n' +
        'Booking is the second essential. If you already use a booking platform such as Dineout, we embed it so the booking button is always within reach. If you don’t, we build a simple form that asks for date, time and party size and emails the request to you, so nobody has to grab the phone in the middle of a busy service.\n\n' +
        'For local visibility, your Google Business Profile matters just as much as the website. We make sure your name, address, phone number and opening hours match across the site and the profile, and we add restaurant structured data to the pages. For visitors from abroad we create an English version with genuinely English URLs and headings, not something that reads like a machine translation.\n\n' +
        'Under the hood, we build the site with Astro as a static website and host it on Vercel. The result is fast, secure and cheap to run: no plugins to keep patching and no server to fall over on a Friday night.',
      priceFrom: 'from €900',
      priceNote:
        'The price depends on the number of languages, the size of the menu, booking system integration and whether photos and copy are ready.',
      timeline: '2–4 weeks',
      faqs: [
        {
          q: 'Can I update the menu myself?',
          a: 'Yes. The menu lives in a simple editor where you can add dishes, change prices and swap seasonal menus without any technical knowledge or developer help.',
        },
        {
          q: 'Does the site work with Dineout or another booking system?',
          a: 'Yes, in most cases we can embed your existing booking widget or link. If you don’t have a system, we build a simple booking form that sends requests to your email.',
        },
        {
          q: 'Will you sort out our Google Business Profile?',
          a: 'Yes. We check and tidy the profile so your hours, address and contact details match the website. You remain the owner of the profile.',
        },
        {
          q: 'How many languages should the site have?',
          a: 'For most places Estonian and English are enough. If you get a lot of Finnish or other specific visitors, adding their language makes sense. Each language gets its own URLs and metadata.',
        },
        {
          q: 'Can we link to Wolt and Bolt Food?',
          a: 'Yes, we add clear links to your Wolt and Bolt Food pages so guests can order right away. Your delivery menus are still managed within those platforms.',
        },
      ],
    },
  },
  {
    id: 'construction',
    group: 'industry',
    related: ['website', 'redesign', 'ai-automation'],
    et: {
      slug: 'ehitusettevotte-koduleht',
      navLabel: 'Ehitusettevõtte koduleht',
      metaTitle: 'Ehitusettevõtte koduleht | drealm',
      metaDescription:
        'Ehitus- ja remondifirma koduleht, mis näitab tehtud töid, toob hinnapäringuid ja leitakse Tallinna, Tartu või Pärnu otsingutest. Alates 1100 €. Küsi pakkumist!',
      eyebrow: 'Ehitus ja remont',
      h1: 'Ehitusettevõtte koduleht, mis toob hinnapäringuid',
      lead:
        'Teeme ehitus- ja remondifirmadele, meistritele ning paigaldajatele kodulehti, mis näitavad tehtud töid, tekitavad usaldust ja muudavad hinnapäringu saatmise lihtsaks.',
      cardText:
        'Ehitus- ja remondifirmale koduleht, kus on referentsid, teenused piirkonniti ja hinnapäringu vorm koos failide üleslaadimisega.',
      problemsTitle: 'Kas see kõlab tuttavalt?',
      problems: [
        'Tehtud tööde pildid on telefonis ja Facebookis, aga kodulehel pole ühtegi korralikku referentsi.',
        'Hinnapäringud tulevad poolikutena ning iga kord tuleb jooniseid ja mõõte eraldi juurde küsida.',
        'Konkurent on Google’is „ehitusfirma Tartu“ otsingus eespool, kuigi teete sama tööd.',
        'Kliendil pole lehelt näha, kas firma on päriselt registreeritud, kindlustatud ja pädev.',
        'Leht on aastaid vana, telefonis aeglane ja seda ei saa ise uuendada.',
      ],
      deliverablesTitle: 'Mida sa saad',
      deliverables: [
        {
          title: 'Referentsid ja projektigalerii',
          text: 'Tehtud tööde lehed piltide, lühikirjelduse, asukoha ja tööde mahuga. Uusi objekte saad ise lisada.',
        },
        {
          title: 'Hinnapäringu vorm failidega',
          text: 'Vorm, kus klient saab kirjeldada tööd, märkida asukoha ja lisada jooniseid, fotosid või PDF-e, et saaksid kohe täpsema pakkumise teha.',
        },
        {
          title: 'Teenused ja piirkonnad',
          text: 'Iga teenuse jaoks oma leht ning vajadusel eraldi lehed piirkondadele, kus tegutsed, näiteks Tallinn, Tartu või Pärnu.',
        },
        {
          title: 'Usaldust loovad elemendid',
          text: 'Majandustegevuse registri (MTR) andmed, pädevustunnistused, sertifikaadid, kindlustus ja garantiitingimused nähtavalt välja toodud.',
        },
        {
          title: 'Kohalik SEO',
          text: 'Google’i ettevõtteprofiil, struktureeritud andmed ja linnapõhised märksõnad, et sind leitaks just sealt, kus töid teed.',
        },
      ],
      bodyTitle: 'Kuidas ehitusfirma koduleht kliente toob',
      body:
        'Ehitus- või remonditeenust otsiv klient võrdleb tavaliselt mitut firmat ja otsustab peamiselt kahe asja põhjal: kas nad on varem sarnast tööd teinud ja kas neid saab usaldada. Seepärast on hea ehitusettevõtte kodulehe süda referentsid. Iga objekt saab oma lehe, kus on enne-pärast pildid, lühike kirjeldus, asukoht ja töö maht. Selline leht veenab klienti ning annab Google’ile sisu, mille põhjal sind otsingus näidata.\n\n' +
        'Teine pool on hinnapäring. Lihtne „kirjuta meile“ vorm toob sageli küsimusi, millele ei saa vastata ilma lisainfota. Me teeme vormi, mis küsib töö liiki, asukohta, ligikaudset mahtu ja ajastust ning laseb lisada jooniseid või fotosid. Nii jõuab sinuni päring, mille põhjal saab kohe hinnangu anda, ja vähem aega kulub edasi-tagasi kirjavahetusele.\n\n' +
        'Usaldust loovad ka kontrollitavad faktid: registrikood, majandustegevuse registri (MTR) kanne, kutsetunnistused, tootjate sertifikaadid ja vastutuskindlustus. Toome need lehel selgelt välja, mitte ei peida jalusesse.\n\n' +
        'Kohaliku otsingu jaoks loome teenuse- ja piirkonnalehed ainult sinna, kus päriselt tegutsed, ning kirjutame neile sisulise teksti, mitte sama malli eri linnanimedega. Leht ehitatakse Astroga, on telefonis kiire ja majutatakse Vercelis, nii et serveri hooldamise pärast ei pea muretsema.',
      priceFrom: 'alates 1100 €',
      priceNote:
        'Hinda mõjutavad teenuste ja piirkonnalehtede arv, referentside maht, keelte arv ning hinnapäringu vormi keerukus.',
      timeline: '3–5 nädalat',
      faqs: [
        {
          q: 'Kas saan uusi referentse ise lisada?',
          a: 'Jah. Referentsid on haldusliideses, kus lisad pildid, kirjelduse ja asukoha ning uus objekt ilmub lehele automaatselt.',
        },
        {
          q: 'Kas hinnapäringu vormiga saab jooniseid saata?',
          a: 'Jah, vorm toetab failide üleslaadimist, näiteks PDF-jooniseid ja fotosid. Failid jõuavad koos päringuga sinu e-postile.',
        },
        {
          q: 'Kas peaksin tegema eraldi lehe iga linna jaoks?',
          a: 'Ainult nende piirkondade jaoks, kus päriselt töid teed ja mille kohta on midagi sisulist öelda, näiteks seal tehtud objektid. Kopeeritud linnalehed pigem kahjustavad nähtavust.',
        },
        {
          q: 'Milliseid usaldusmärke lehel näidata?',
          a: 'Registrikood, MTR-i kanne, kutse- ja pädevustunnistused, tootjate sertifikaadid, kindlustus ja garantiitingimused. Kõik, mida klient saab ise kontrollida.',
        },
        {
          q: 'Kas saate meie vana kodulehe sisu üle tuua?',
          a: 'Jah, toome kasuliku sisu üle, seadistame vanadelt aadressidelt suunamised ja vaatame, et senine otsingunähtavus ei kaoks.',
        },
      ],
    },
    en: {
      slug: 'construction-company-website',
      navLabel: 'Construction websites',
      metaTitle: 'Construction Company Website Design | drealm',
      metaDescription:
        'A website for builders and renovation firms that showcases your projects, brings in quote requests and ranks in local search across Estonia. From €1,100.',
      eyebrow: 'Construction & renovation',
      h1: 'A construction company website that wins quote requests',
      lead:
        'We build websites for construction and renovation companies, builders and installers that show off your work, build trust and make sending a quote request effortless.',
      cardText:
        'A website for builders and renovators with a project gallery, services by region and a quote form that accepts drawings and photos.',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Photos of your best work live on your phone and Facebook, but your website has no proper references.',
        'Quote requests arrive half-finished, so you have to chase drawings and measurements every time.',
        'A competitor ranks above you for “construction company Tartu” even though you do the same work.',
        'Visitors can’t tell whether you’re properly registered, insured and qualified.',
        'Your site is years old, slow on mobile and impossible to update yourself.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'References & project gallery',
          text: 'Project pages with photos, a short description, location and scope of work. You can add new projects yourself.',
        },
        {
          title: 'Quote form with file upload',
          text: 'A form where clients describe the job, give the location and attach drawings, photos or PDFs, so you can price it straight away.',
        },
        {
          title: 'Services and regions',
          text: 'A page for each service and, where it makes sense, pages for the regions you work in, such as Tallinn, Tartu or Pärnu.',
        },
        {
          title: 'Trust signals',
          text: 'Your Register of Economic Activities (MTR) entry, qualifications, certificates, insurance and warranty terms, clearly displayed.',
        },
        {
          title: 'Local SEO',
          text: 'Google Business Profile, structured data and city-specific keywords so you’re found where you actually work.',
        },
      ],
      bodyTitle: 'How a construction website brings in clients',
      body:
        'Someone looking for a builder or renovation crew usually compares several firms and decides on two things: have they done this kind of job before, and can they be trusted? That’s why references are the heart of a good construction company website. Each project gets its own page with before-and-after photos, a short description, location and scope. A page like that convinces clients and gives Google real content to rank you on.\n\n' +
        'The other half is the quote request. A plain “contact us” form tends to produce questions you can’t answer without more detail. We build a form that asks for the type of work, location, rough scope and timing, and lets people attach drawings or photos. You get requests you can price right away and spend less time on back-and-forth emails.\n\n' +
        'Trust also comes from facts people can verify: your company registration number, your entry in the Estonian Register of Economic Activities (MTR), professional certificates, manufacturer accreditations and liability insurance. We put these front and centre rather than hiding them in the footer.\n\n' +
        'For local search, we create service and region pages only where you genuinely operate, each with meaningful content rather than the same template with a different city name. The site is built with Astro, loads fast on mobile and is hosted on Vercel, so there’s no server for you to maintain.',
      priceFrom: 'from €1,100',
      priceNote:
        'The price depends on the number of service and region pages, the volume of references, languages and how complex the quote form needs to be.',
      timeline: '3–5 weeks',
      faqs: [
        {
          q: 'Can I add new references myself?',
          a: 'Yes. References are managed in a simple editor: add photos, a description and the location, and the new project appears on the site automatically.',
        },
        {
          q: 'Can clients send drawings through the quote form?',
          a: 'Yes, the form supports file uploads such as PDF drawings and photos. The files reach your inbox together with the request.',
        },
        {
          q: 'Should I have a separate page for every city?',
          a: 'Only for the areas where you really work and have something specific to say, such as projects completed there. Copy-paste city pages tend to hurt rather than help.',
        },
        {
          q: 'Which trust signals should the site show?',
          a: 'Company registration number, MTR entry, professional qualifications, manufacturer certificates, insurance and warranty terms. Anything a client can check for themselves.',
        },
        {
          q: 'Can you move content over from our old website?',
          a: 'Yes. We migrate the useful content, set up redirects from old URLs and make sure the search visibility you already have isn’t lost.',
        },
      ],
    },
  },
  {
    id: 'salon',
    group: 'industry',
    related: ['website', 'landing', 'ai-chatbot'],
    et: {
      slug: 'ilusalongi-koduleht',
      navLabel: 'Ilusalongi koduleht',
      metaTitle: 'Ilusalongi ja juuksuri koduleht | drealm',
      metaDescription:
        'Ilusalongi, juuksuri või spaa koduleht, kus klient broneerib aja ise, näeb hinnakirja ja meeskonda ning saab osta kinkekaardi. Alates 800 €. Küsi pakkumist!',
      eyebrow: 'Ilu ja heaolu',
      h1: 'Ilusalongi koduleht, kus klient broneerib aja ise',
      lead:
        'Teeme ilusalongidele, juuksuritele, spaadele ja massaažistuudiotele kodulehti, mis peegeldavad sinu stiili ja lasevad kliendil aja broneerida ka siis, kui sa parasjagu tööd teed.',
      cardText:
        'Ilusalongile, juuksurile või spaale koduleht, kus on veebibroneering, hinnakiri, meeskond, kinkekaardid ja Instagrami pildid.',
      problemsTitle: 'Kas see kõlab tuttavalt?',
      problems: [
        'Pool päevast kulub telefonile ja Instagrami sõnumitele vastamisele, kuigi käed on kliendiga ametis.',
        'Hinnakiri on vananenud või puudub üldse ning klient küsib iga teenuse hinda eraldi.',
        'Instagram on ilus, aga Google’i otsingus „juuksur Tallinn“ sind ei leita.',
        'Kinkekaarte saab osta ainult salongis kohapeal.',
        'Broneerimissüsteemi link on kuskil peidus ja klient ei leia seda üles.',
      ],
      deliverablesTitle: 'Mida sa saad',
      deliverables: [
        {
          title: 'Veebibroneering',
          text: 'Ühendame lehe sinu broneerimissüsteemiga, näiteks Fresha või Booksy, või teeme lihtsa oma kalendri. Broneerimisnupp on nähtav igal lehel.',
        },
        {
          title: 'Selge hinnakiri',
          text: 'Teenused kategooriate kaupa koos kestuse ja hinnaga, mida saad ise muuta.',
        },
        {
          title: 'Meeskonna tutvustus',
          text: 'Iga meistri leht või kaart koos fotode, oskuste ja otselingiga tema aegadele.',
        },
        {
          title: 'Kinkekaardid',
          text: 'Kinkekaardi päringu või ostu võimalus veebis, sõltuvalt sellest, mida sinu broneerimissüsteem toetab.',
        },
        {
          title: 'Instagrami integratsioon',
          text: 'Sinu uusimad tööd Instagramist kodulehel, et galerii püsiks värske ilma lisatööta.',
        },
      ],
      bodyTitle: 'Mida ilusalongi koduleht tegema peab',
      body:
        'Ilusalongi klient otsustab sageli kiiresti: ta näeb Instagramis tööd, mis meeldib, ja tahab kohe aja kinni panna. Kui kodulehelt peab broneerimislinki otsima või telefonis helistama, lükkub otsus edasi ja tihti jääb tegemata. Seepärast on hea salongi kodulehe keskmes broneerimine. Kui kasutad Freshat, Booksyt või muud süsteemi, ühendame selle lehega nii, et klient saab aja valida mõne puudutusega. Kui eraldi süsteemi pole, teeme lihtsa broneerimisvormi või kalendri.\n\n' +
        'Teine asi, mida kliendid otsivad, on hind. Selge hinnakiri, kus on teenuse kestus ja hind, vähendab küsimusi ja aitab kliendil sobiva teenuse ise valida. Meeskonna tutvustus annab salongile näo: inimesed tahavad teada, kes nende juukseid lõikab või massaaži teeb, ning paljud broneerivad aja just kindla meistri juurde.\n\n' +
        'Instagram on ilusalongi jaoks tähtis, kuid Google’i otsingus ta sind ei aita. Koduleht koos korras Google’i ettevõtteprofiiliga aitab sind leida ka neil, kes otsivad „maniküür Tartu“ või „massaaž Kesklinn“. Lisame lehele struktureeritud andmed ja kirjutame teenuselehtedele sisu, mis vastab klientide päris küsimustele.\n\n' +
        'Leht ehitatakse Astroga, on telefonis kiire ja majutatakse Vercelis. Disain lähtub sinu salongi stiilist, mitte valmis mallist.',
      priceFrom: 'alates 800 €',
      priceNote:
        'Hinda mõjutavad teenuste ja meistrite arv, keelte arv, broneerimissüsteemi liidestus ja kinkekaartide müügi lahendus.',
      timeline: '2–4 nädalat',
      faqs: [
        {
          q: 'Millise broneerimissüsteemiga leht töötab?',
          a: 'Enamasti saab ühendada süsteemi, mida juba kasutad, näiteks Fresha või Booksy. Kui süsteemi pole, aitame valida sobiva või teeme lihtsa oma lahenduse.',
        },
        {
          q: 'Kas saan hinnakirja ise muuta?',
          a: 'Jah, hinnakiri on haldusliideses ning teenuste lisamine või hinna muutmine võtab mõne minuti.',
        },
        {
          q: 'Kas kinkekaarte saab veebis müüa?',
          a: 'Jah. Kui sinu broneerimissüsteem toetab kinkekaarte, ühendame selle. Teine võimalus on kinkekaardi tellimise vorm või lihtne makselahendus.',
        },
        {
          q: 'Kas Instagrami pildid uuenevad lehel automaatselt?',
          a: 'Jah, saame kuvada sinu viimaseid postitusi, nii et galerii püsib värske ilma eraldi uuendamata.',
        },
        {
          q: 'Kas saan broneeringu lingi otse konkreetse meistri juurde?',
          a: 'Kui broneerimissüsteem seda toetab, lisame iga meistri juurde otselingi tema vabadele aegadele.',
        },
      ],
    },
    en: {
      slug: 'beauty-salon-website',
      navLabel: 'Beauty salon websites',
      metaTitle: 'Beauty Salon & Spa Website Design | drealm',
      metaDescription:
        'A website for beauty salons, hairdressers and spas with online booking, a clear price list, your team and gift cards. From €800. Get a quote for your salon.',
      eyebrow: 'Beauty & wellness',
      h1: 'A beauty salon website where clients book themselves',
      lead:
        'We build websites for beauty salons, hairdressers, spas and massage studios that reflect your style and let clients book even while your hands are busy.',
      cardText:
        'A website for your salon, hairdresser or spa with online booking, price list, team profiles, gift cards and your Instagram feed.',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Half the day goes on answering calls and Instagram DMs while you’re working with a client.',
        'Your price list is out of date or missing, so clients ask about every treatment separately.',
        'Your Instagram looks great, but you don’t show up when people search “hairdresser Tallinn”.',
        'Gift cards can only be bought in person at the salon.',
        'The booking link is buried somewhere and clients can’t find it.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'Online booking',
          text: 'We connect your booking system, such as Fresha or Booksy, or build a simple calendar of your own. The booking button is visible on every page.',
        },
        {
          title: 'A clear price list',
          text: 'Treatments by category with duration and price, which you can edit yourself.',
        },
        {
          title: 'Meet the team',
          text: 'A profile for each stylist or therapist with photos, specialities and a direct link to their availability.',
        },
        {
          title: 'Gift cards',
          text: 'Let people request or buy gift cards online, depending on what your booking system supports.',
        },
        {
          title: 'Instagram integration',
          text: 'Your latest work from Instagram shown on the site, so the gallery stays fresh with no extra effort.',
        },
      ],
      bodyTitle: 'What a beauty salon website needs to do',
      body:
        'Salon clients often decide on impulse: they see work they love on Instagram and want to book right now. If they have to hunt for a booking link or phone you, the decision gets postponed and often never happens. That’s why booking sits at the centre of a good salon website. If you use Fresha, Booksy or another system, we connect it so clients can pick a slot in a few taps. If you don’t, we build a simple booking form or calendar.\n\n' +
        'The next thing clients look for is price. A clear price list showing duration and cost cuts down on questions and helps people choose the right treatment themselves. Team profiles give the salon a face: people want to know who will cut their hair or give them a massage, and many book with a specific person.\n\n' +
        'Instagram matters for a salon, but it won’t get you found on Google. A website combined with a well-kept Google Business Profile helps you reach people searching for “manicure Tartu” or “massage city centre”. We add structured data and write service pages that answer the questions clients actually ask.\n\n' +
        'The site is built with Astro, loads quickly on mobile and is hosted on Vercel. The design starts from your salon’s own look and feel, not an off-the-shelf template.',
      priceFrom: 'from €800',
      priceNote:
        'The price depends on the number of treatments and team members, languages, booking system integration and how gift cards are sold.',
      timeline: '2–4 weeks',
      faqs: [
        {
          q: 'Which booking systems does the site work with?',
          a: 'Usually we can connect the system you already use, such as Fresha or Booksy. If you don’t have one, we help you choose or build a simple solution of our own.',
        },
        {
          q: 'Can I update the price list myself?',
          a: 'Yes, the price list lives in a simple editor, so adding a treatment or changing a price takes a few minutes.',
        },
        {
          q: 'Can we sell gift cards online?',
          a: 'Yes. If your booking system supports gift cards we connect it; otherwise we can add a gift card order form or a simple payment option.',
        },
        {
          q: 'Will Instagram photos update on the site automatically?',
          a: 'Yes, we can display your latest posts so the gallery stays fresh without manual updates.',
        },
        {
          q: 'Can clients book directly with a specific stylist?',
          a: 'If your booking system supports it, we add a direct link to each team member’s availability on their profile.',
        },
      ],
    },
  },
];
