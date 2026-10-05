import type { Service } from '../types';

export const webServices: Service[] = [
  // ---------------------------------------------------------------------------
  // 1. Website
  // ---------------------------------------------------------------------------
  {
    id: "website",
    group: "web",
    related: ["redesign", "landing", "ecommerce"],
    et: {
      slug: "kodulehe-tegemine",
      navLabel: "Kodulehe tegemine",
      metaTitle: "Kodulehe tegemine – kiire ja SEO-sõbralik | drealm",
      metaDescription:
        "Kodulehe tegemine väikeettevõttele: kiire, mobiilisõbralik ja Google'is leitav leht, mille sisu saad ise muuta. Alates 900 €, valmis 2–4 nädalaga. Küsi hinda!",
      eyebrow: "Kodulehed",
      h1: "Kodulehe tegemine väikeettevõttele – kiire, selge ja leitav",
      lead:
        "Teeme kodulehe, mis avaneb hetkega, on Google'is leitav ja mille sisu saad ise muuta. Visiitkaardilehest kuni mitmekeelse ettevõtte koduleheni – selge hinna ja ajakavaga.",
      cardText:
        "Kiire ja SEO-sõbralik koduleht väikeettevõttele: selge struktuur, mugav mobiilivaade, kontaktvorm ja sisu, mida saad ise hallata.",
      problemsTitle: "Kellele see sobib",
      problems: [
        "Sul pole veel kodulehte ja kliendid leiavad sind ainult Facebookist või tuttavate soovitusel.",
        "Praegune leht on aegunud, mobiilis kohmakas ja sa ei julge linki klientidele saata.",
        "Google'is otsides jääb sinu ettevõte konkurentide taha või ei ilmu üldse välja.",
        "Iga väiksemagi muudatuse jaoks pead arendajale kirjutama ja nädal aega ootama.",
        "Vajad lehte nii eesti kui ka inglise keeles, et teenindada välismaiseid kliente.",
      ],
      deliverablesTitle: "Mida saad",
      deliverables: [
        {
          title: "Kujundus sinu brändi järgi",
          text: "Disain lähtub sinu logost, värvidest ja klientidest – mitte valmismallist, mida kasutab veel sada ettevõtet.",
        },
        {
          title: "Kiire laadimine",
          text: "Leht ehitatakse Astro raamistikuga staatiliseks, nii et see avaneb peaaegu silmapilkselt ka aeglase mobiilsideühendusega.",
        },
        {
          title: "Tehniline SEO algusest peale",
          text: "Pealkirjad, metaandmed, struktureeritud andmed, sitemap ja puhtad URL-id on paigas juba avalikustamise päeval.",
        },
        {
          title: "Sisu muutmine ise",
          text: "Tekste, pilte ja uudiseid saad uuendada lihtsa haldusliidese kaudu, ilma et peaksid koodi puutuma.",
        },
        {
          title: "Kontaktvorm ja kaart",
          text: "Päringuvorm, mis jõuab otse sinu postkasti, Google Mapsi kaart ja mobiilis ühe puudutusega helistatav number.",
        },
        {
          title: "Majutus ja domeen korras",
          text: "Paneme lehe üles Verceli platvormile, seadistame domeeni, SSL-sertifikaadi ja Google Search Console'i.",
        },
      ],
      bodyTitle: "Mida kodulehe tegemisel tasub teada",
      body:
        "Hea koduleht ei pea olema suur. Enamikule väikeettevõtetele piisab neljast-kuuest alamlehest: avaleht, teenused, meist, mõni tehtud töö ja kontakt. Oluline on, et külastaja saaks esimese paari sekundiga aru, mida sa pakud, kellele ja kuidas sinuga ühendust võtta. Seepärast ei alusta me veebilehe tegemist kujundusest, vaid sisust: mida kliendid sinult tavaliselt küsivad, milliste sõnadega nad sind Google'ist otsivad ja mis paneb neid lõpuks helistama. Alles siis paneme paika struktuuri ja disaini, mis seda sõnumit toetab." +
        "\n\n" +
        "Tehniliselt ehitame kodulehed Astro raamistikuga. Iga leht genereeritakse ette valmis HTML-iks ja serveeritakse Verceli kaudu kasutajale lähimast serverist. Tulemus on leht, mis avaneb kiiresti ka telefonis ja saab Google'i PageSpeedi mõõtmisel häid tulemusi. Erinevalt WordPressist ei pea pidevalt pluginaid uuendama ega muretsema, et mõni turvaauk lehe maha võtab. Sisu haldamiseks lisame lihtsa haldusliidese, kus saad tekste ja pilte ise muuta, ilma et peaksid iga koma pärast arendajale kirjutama." +
        "\n\n" +
        "Hinda mõjutavad eelkõige lehtede arv, keelte arv ja see, kas sisu on juba olemas. Kõige rohkem venitab kodulehe projekte tavaliselt tekstide ja piltide puudumine, mitte arendus ise. Kui tekstid on valmis ja head fotod olemas, liigub töö kiiresti; kui mitte, aitame sisu kirjutada. Mitmekeelse lehe puhul vajab iga keel oma URL-e ja hreflang-märgendeid, et Google näitaks eesti otsijale eestikeelset ja välismaisele otsijale ingliskeelset versiooni. Näiteks Tallinna looduskivitöökojale Marmi Futerno tegime korea- ja ingliskeelse portfooliolehe." +
        "\n\n" +
        "Ka väikesel kodulehel on paar kohustust, mida tasub algusest peale silmas pidada. Kui kasutad Google Analyticsit või Meta pikslit, on vaja küpsiste nõusolekut ja privaatsuspoliitikat. Kontaktvormi kaudu saadud andmeid tuleb hoida turvaliselt ja mitte kauem, kui vaja. Soovi korral seadistame küpsistevaba analüütika, mis ei nõua nõusolekuriba ega häiri külastajat. Soovitame, et domeen ja majutuskonto oleksid registreeritud sinu nimele – nii jääb kontroll lehe üle alati sinu kätte, ükskõik kellega sa tulevikus koostööd teed.",
      priceFrom: "alates 900 €",
      priceNote:
        "Hind sõltub lehtede ja keelte arvust, kujunduse keerukusest ning sellest, kas tekstid ja pildid on juba olemas.",
      timeline: "2–4 nädalat",
      faqs: [
        {
          q: "Kui palju maksab kodulehe tegemine?",
          a: "Lihtne ettevõtte koduleht algab 900 eurost. Visiitkaardileht jääb sinna lähedale, 6–10 alamlehe ja kahe keelega leht maksab rohkem. Täpse hinna anname pärast lühikest vestlust, kui teame lehtede arvu ja sisu seisu.",
        },
        {
          q: "Kas saan pärast ise lehte muuta?",
          a: "Jah. Tekstide, piltide, teenuste ja uudiste muutmiseks seadistame lihtsa haldusliidese ja näitame, kuidas seda kasutada. Suuremad muudatused, näiteks uue lehetüübi lisamise, teeme meie.",
        },
        {
          q: "Miks mitte teha lehte WordPressi või Wixiga?",
          a: "Mõnele sobivad needki, kuid WordPress vajab pidevat pluginate uuendamist ning Wixi lehed on sageli aeglased ja platvormiga seotud. Astro-põhine staatiline leht on kiirem, turvalisem ja seda on lihtsam üleval hoida.",
        },
        {
          q: "Mida pean enne alustamist ette valmistama?",
          a: "Logo, olemasolevad tekstid, head fotod, teenuste nimekiri ja paar näidet lehtedest, mis sulle meeldivad. Kui midagi neist puudub, pole hullu – aitame sisu koos valmis teha.",
        },
        {
          q: "Kas koduleht on kohe Google'is leitav?",
          a: "Tehniline SEO on paigas ja esitame lehe Google Search Console'i kaudu indekseerimiseks. Uue domeeni puhul võtab nähtavuse kasvamine siiski mõnest nädalast mõne kuuni, sest Google peab lehte usaldama hakkama.",
        },
      ],
    },
    en: {
      slug: "website-development",
      navLabel: "Website Development",
      metaTitle: "Website Development for Small Businesses | drealm",
      metaDescription:
        "Fast, mobile-friendly business websites that rank on Google and that you can edit yourself. Built in Estonia, from €900, ready in 2–4 weeks. Get a quote today.",
      eyebrow: "Websites",
      h1: "Website development for businesses that want to be found",
      lead:
        "We build fast, search-friendly websites you can update yourself – from a one-page business card site to a multilingual company website, with a clear price and timeline.",
      cardText:
        "Fast, SEO-ready business websites with a clear structure, mobile-first design, a working contact form and content you can edit yourself.",
      problemsTitle: "Who it's for",
      problems: [
        "You don't have a website yet, and clients only find you through social media or word of mouth.",
        "Your current site looks dated, breaks on mobile and you'd rather not send people to it.",
        "You run an Estonian company but your clients are international, so you need English first and Estonian second.",
        "Every small text change means emailing a developer and waiting a week.",
        "Competitors show up on Google for your services, and you don't.",
      ],
      deliverablesTitle: "What you get",
      deliverables: [
        {
          title: "Design built around your brand",
          text: "A layout shaped by your logo, colours and audience – not a theme shared with hundreds of other businesses.",
        },
        {
          title: "Near-instant load times",
          text: "Built as a static site with Astro, so pages open quickly even on a patchy mobile connection.",
        },
        {
          title: "Technical SEO from day one",
          text: "Clean URLs, titles, meta descriptions, structured data and a sitemap are in place the day the site goes live.",
        },
        {
          title: "Edit content yourself",
          text: "Update text, images and news through a simple editor – no code, no developer on speed dial.",
        },
        {
          title: "Contact form and map",
          text: "Enquiries land straight in your inbox, with an embedded Google Map and tap-to-call on mobile.",
        },
        {
          title: "Hosting and domain set up",
          text: "Deployed on Vercel with your domain, SSL certificate and Google Search Console configured.",
        },
      ],
      bodyTitle: "What goes into a good business website",
      body:
        "A good website doesn't need to be big. Most small businesses are well served by four to six pages: home, services, about, a few examples of work and contact. What matters is that a visitor understands within a few seconds what you offer, who it's for and how to get in touch. That's why we start with content rather than visuals – what clients usually ask you, which words they type into Google, and what finally makes them pick up the phone. The structure and design then follow from that message." +
        "\n\n" +
        "Under the hood, we build websites with Astro. Every page is pre-rendered to plain HTML and served through Vercel from a location close to the visitor, so the site feels instant on a phone and scores well in Google's PageSpeed tests. Unlike a typical WordPress setup, there are no plugins to keep patching and far less that can break or be exploited. You still get a straightforward editor for text and images, so routine updates don't depend on us." +
        "\n\n" +
        "Price mostly comes down to the number of pages, the number of languages, and whether the content already exists. In our experience, the thing that slows website projects down is rarely the build – it's waiting for copy and photos. If you're a foreign founder running an Estonian company, it often makes sense to launch in English first and add Estonian later; we set up proper language URLs and hreflang tags so Google serves the right version to the right audience. We recently did exactly this for Marmi Futerno, a Tallinn stone fabrication company, with a Korean and English portfolio site." +
        "\n\n" +
        "Even a small site has a few obligations in the EU. If you use Google Analytics or a Meta pixel, you need a cookie consent banner and a privacy policy, and contact form submissions have to be handled securely. If you'd rather skip the consent banner entirely, we can set up cookieless analytics instead. We also recommend registering the domain and hosting account in your own company's name, so you always stay in control of the site, whoever you work with in the future.",
      priceFrom: "from €900",
      priceNote:
        "The final price depends on the number of pages and languages, design complexity, and whether your text and images are ready.",
      timeline: "2–4 weeks",
      faqs: [
        {
          q: "How much does a small business website cost?",
          a: "A simple business website starts at €900. A one-page business card site sits near that, while a bilingual site with 6–10 pages costs more. We give a fixed quote after a short call once we know the scope and the state of your content.",
        },
        {
          q: "Can I update the website myself?",
          a: "Yes. We set up a simple editor for text, images, services and news, and show you how to use it. Larger changes, such as a new page type, are something we handle.",
        },
        {
          q: "Can you build the site in English and Estonian (or Russian)?",
          a: "Yes. Each language gets its own URLs and hreflang tags so search engines show the right version. You can start with one language and add others later without rebuilding the site.",
        },
        {
          q: "Why not just use WordPress or Wix?",
          a: "They suit some projects, but WordPress needs constant plugin updates, and Wix sites are often slow and tied to the platform. A static Astro site is faster, more secure and easier to keep running.",
        },
        {
          q: "What should I prepare before we start?",
          a: "Your logo, any existing copy, good photos, a list of services and a few websites you like. If something is missing, that's fine – we can help put the content together.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 2. E-commerce
  // ---------------------------------------------------------------------------
  {
    id: "ecommerce",
    group: "web",
    related: ["website", "landing", "ai-chatbot"],
    et: {
      slug: "e-poe-tegemine",
      navLabel: "E-poe tegemine",
      metaTitle: "E-poe tegemine – Shopify ja WooCommerce | drealm",
      metaDescription:
        "E-poe tegemine Shopify, WooCommerce'i või eraldi lahendusena: pangalingid, Montonio, Omniva, DPD ja Smartposti pakiautomaadid. Alates 2500 €. Küsi pakkumist!",
      eyebrow: "E-poed",
      h1: "E-poe tegemine Eesti makseviiside ja pakiautomaatidega",
      lead:
        "Ehitame e-poe, kus ostmine on lihtne nii telefonis kui ka arvutis: pangalingid, kaardimaksed ning Omniva, DPD ja Smartposti pakiautomaadid on algusest peale olemas.",
      cardText:
        "Shopify, WooCommerce või eraldi lahendus koos Eesti pangalinkide, Montonio või Maksekeskuse ning pakiautomaatidega – kiire ja mobiilis mugav.",
      problemsTitle: "Millal on aeg e-pood teha või uuendada",
      problems: [
        "Müüd Instagramis või Facebookis ning tellimused käivad sõnumite ja pangaülekannete kaudu.",
        "Praegune e-pood on aeglane ja suur osa külastajatest lahkub ostukorvist ostu lõpetamata.",
        "Platvormi kuutasud ja tasulised lisamoodulid söövad marginaali.",
        "Laoseis, raamatupidamine ja e-pood ei räägi omavahel ning andmeid tõstetakse käsitsi ümber.",
        "Tahad müüa ka Lätti, Leetu või Soome, aga pood on ainult eesti keeles.",
      ],
      deliverablesTitle: "Mida saad",
      deliverables: [
        {
          title: "Õige platvorm",
          text: "Aitame valida Shopify, WooCommerce'i ja eraldi lahenduse vahel vastavalt tootevalikule, eelarvele ja sellele, kes poodi igapäevaselt haldab.",
        },
        {
          title: "Eesti makseviisid",
          text: "Montonio või Maksekeskuse (MakeCommerce) kaudu kõik pangalingid, kaardimaksed, Apple Pay ja Google Pay ühe lepinguga.",
        },
        {
          title: "Pakiautomaadid ja kuller",
          text: "Omniva, DPD ja Smartposti automaadi valik ostukorvis otsinguga ning tarnehinnad kaalu, summa või riigi järgi.",
        },
        {
          title: "Müüv tooteleht",
          text: "Kiiresti laadivad pildid, selge hind, tarneaeg ja laoseis – kõik, mis aitab ostuotsust teha.",
        },
        {
          title: "SEO ja tooteandmed",
          text: "Toote- ja kategoorialehtede struktureeritud andmed, Google Merchant Centeri tootevoog ja puhtad URL-id.",
        },
        {
          title: "Nõuetekohane ostuprotsess",
          text: "Müügitingimuste, 14-päevase taganemisõiguse, privaatsuspoliitika ja küpsiste nõusoleku lehed ning vormid on paigas.",
        },
      ],
      bodyTitle: "Mida e-poe tegemisel läbi mõelda",
      body:
        "Esimene ja kõige tähtsam otsus on platvorm. Shopify on hea valik, kui tahad kiiresti alustada ega soovi serveri pärast muretseda – kuutasu sisaldab majutust ja turvauuendusi, kuid paljud lisavõimalused tulevad tasuliste rakendustena. WooCommerce sobib, kui sul on juba WordPressi leht või vajad paindlikku sisuhaldust, kuid see nõuab regulaarset hooldust. Eraldi arendatud pood tasub end ära siis, kui tootevalik on keeruline, hinnad sõltuvad kliendist või on vaja tihedat sidet laosüsteemiga. Soovitame selle, mis sinu olukorras päriselt mõistlik on, mitte selle, mida meil on kõige mugavam ehitada." +
        "\n\n" +
        "Eesti ostja ootab pangalinki. Ainult kaardimaksest ei piisa, sest paljud on harjunud maksma otse Swedbanki, SEB, LHV või Luminori kaudu. Montonio ja Maksekeskus (MakeCommerce) koondavad pangalingid, kaardimaksed ja mobiilimaksed ühte liidestusse, nii et iga pangaga eraldi lepingut sõlmima ei pea. Sama kehtib tarne kohta: pakiautomaat on Eestis kõige levinum viis paki kättesaamiseks, seega peab Omniva, DPD ja Smartposti automaadi valimine ostukorvis olema kiire, otsinguga ja mobiilis mugav. Tarnehinnad seadistame kaalu, tellimuse summa või sihtriigi järgi." +
        "\n\n" +
        "E-poe hinda mõjutavad kõige enam tootevaliku suurus ja keerukus (variandid, suurused, komplektid), liidestused raamatupidamis- või laosüsteemiga (näiteks Merit Aktiva, Directo või SmartAccounts) ning keelte ja riikide arv. Enne alustamist tasub valmis panna tootenimekiri tabelina koos hindade, kirjelduste ja piltidega – see on enamasti suurim ajakulu. Kui tooteid on sadu, impordime need CSV-failist, mitte ei sisesta käsitsi. Kui plaanid müüa ka Soome või teistesse Balti riikidesse, arvesta käibemaksu OSS-erikorra ja tõlgitud müügitingimustega." +
        "\n\n" +
        "Poe avamine on alles algus. Seadistame Google Analytics 4 e-kaubanduse sündmused ja Meta piksli, et näeksid, kust ostjad tulevad ja millises etapis nad ostukorvist lahkuvad. Kiirus on e-poes otseselt rahas: iga lisasekund tootelehe laadimisel vähendab ostu tõenäosust, seepärast optimeerime pildid ja väldime raskeid lisamooduleid. Poe anname üle koos juhendiga, kuidas lisada tooteid, hallata tellimusi ja seadistada kampaaniahindu. Müügitingimuste sisu soovitame lasta üle vaadata juristil, sest see sõltub sinu tootest ja tagastuspoliitikast.",
      priceFrom: "alates 2500 €",
      priceNote:
        "Hind sõltub platvormist, toodete ja variantide hulgast, keelte arvust ning liidestustest raamatupidamise või laosüsteemiga.",
      timeline: "4–8 nädalat",
      faqs: [
        {
          q: "Kui palju maksab e-poe tegemine?",
          a: "Lihtne Shopify või WooCommerce'i pood algab 2500 eurost. Suurema tootevaliku, mitme keele, B2B-hinnakirjade või raamatupidamisliidestusega pood maksab rohkem. Lisaks arenduse hinnale arvesta platvormi kuutasu ja makselahenduse teenustasudega.",
        },
        {
          q: "Kas valida Shopify või WooCommerce?",
          a: "Shopify on lihtsam hallata ega vaja serverihooldust, kuid sel on kuutasu ja osa funktsioone nõuab tasulisi rakendusi. WooCommerce on paindlikum ja ilma platvormi kuutasuta, kuid vajab regulaarseid uuendusi. Valime koos, lähtudes tootevalikust ja sellest, kes poodi igapäevaselt haldab.",
        },
        {
          q: "Milliseid makseviise saab lisada?",
          a: "Montonio või Maksekeskuse kaudu kõik Eesti pangalingid (Swedbank, SEB, LHV, Luminor, Coop Pank), kaardimaksed, Apple Pay ja Google Pay. Soovi korral ka Läti, Leedu ja Soome pangad ning järelmaks.",
        },
        {
          q: "Kas pakiautomaadid ja pakisildid on liidestatud?",
          a: "Jah, ostja valib Omniva, DPD või Smartposti automaadi otse ostukorvis. Pakisilte saab enamasti luua tellimuse juurest, sõltuvalt valitud tarnemoodulist ja sinu lepingust kulleriga.",
        },
        {
          q: "Kas saan praeguse poe tooted uude poodi üle tuua?",
          a: "Enamasti jah. Impordime tooted, kategooriad ja võimalusel kliendiandmed ning seadistame vanadele aadressidele 301-suunamised, et Google'i positsioonid ja vanad lingid ei kaoks.",
        },
      ],
    },
    en: {
      slug: "ecommerce-development",
      navLabel: "E-commerce Stores",
      metaTitle: "E-commerce Development: Shopify & WooCommerce | drealm",
      metaDescription:
        "Online stores on Shopify, WooCommerce or custom builds, with Baltic payment methods, parcel lockers and EU VAT handled. From €2,500, launched in 4–8 weeks.",
      eyebrow: "Online stores",
      h1: "E-commerce development for selling in Estonia and across the EU",
      lead:
        "We build online stores that are easy to buy from on any device, with the payment methods and parcel lockers Baltic and Nordic shoppers actually expect.",
      cardText:
        "Shopify, WooCommerce or custom online stores with local bank payments, parcel lockers and a fast, mobile-friendly checkout.",
      problemsTitle: "Sound familiar?",
      problems: [
        "You sell through Instagram DMs and bank transfers, and order admin is eating your evenings.",
        "Your store is slow and too many people abandon their cart before paying.",
        "You run an Estonian e-Residency company and need a store that works for EU customers, not just one country.",
        "Your stock, accounting and store don't talk to each other, so data gets copied by hand.",
        "Platform fees and paid add-ons keep growing while margins shrink.",
      ],
      deliverablesTitle: "What you get",
      deliverables: [
        {
          title: "The right platform",
          text: "An honest recommendation between Shopify, WooCommerce and a custom build, based on your catalogue, budget and who runs the store day to day.",
        },
        {
          title: "Local payment methods",
          text: "Baltic and Finnish bank links, cards, Apple Pay and Google Pay through Montonio or MakeCommerce, under one contract.",
        },
        {
          title: "Parcel lockers and couriers",
          text: "Omniva, DPD and Smartpost locker selection at checkout, with shipping rates by weight, order value or country.",
        },
        {
          title: "Product pages that sell",
          text: "Fast-loading images, clear pricing, delivery times and stock levels – everything a buyer needs to decide.",
        },
        {
          title: "SEO and product feeds",
          text: "Structured product data, a Google Merchant Center feed and clean URLs for products and categories.",
        },
        {
          title: "A compliant checkout",
          text: "Pages and forms for terms of sale, the 14-day EU withdrawal right, privacy policy and cookie consent.",
        },
      ],
      bodyTitle: "What to think through before building an online store",
      body:
        "The first and most important decision is the platform. Shopify is a good fit if you want to launch quickly and never think about servers – hosting and security updates are included in the monthly fee, though many extras come as paid apps. WooCommerce makes sense if you already have a WordPress site or need flexible content, but it needs regular maintenance. A custom-built store pays off when your catalogue is complex, prices vary by customer, or you need tight integration with a warehouse system. We recommend what fits your situation, not what's easiest for us to build." +
        "\n\n" +
        "If you sell into Estonia, Latvia, Lithuania or Finland, cards alone aren't enough – many shoppers expect to pay directly through their bank. Payment aggregators like Montonio and MakeCommerce bundle bank links, card payments and mobile wallets into a single integration, so you don't need separate agreements with every bank. Delivery works similarly: parcel lockers are the default way people receive orders in the Baltics, so picking an Omniva, DPD or Smartpost locker at checkout needs to be fast, searchable and comfortable on a phone." +
        "\n\n" +
        "Cost is driven mainly by catalogue size and complexity (variants, sizes, bundles), integrations with accounting or inventory software (such as Merit Aktiva, Directo or Xero), and the number of languages and markets. Before we start, it helps to have a product spreadsheet with prices, descriptions and images – that's usually the biggest time sink. Hundreds of products get imported from CSV rather than entered by hand. Selling to consumers in other EU countries also means thinking about the OSS VAT scheme and translated terms of sale early, rather than after launch." +
        "\n\n" +
        "Launch is just the start. We set up Google Analytics 4 e-commerce events and the Meta pixel so you can see where buyers come from and where they drop off in checkout. Speed directly affects revenue in e-commerce, so we optimise images and avoid heavy add-ons that slow product pages down. You'll get a handover guide covering how to add products, manage orders and run sale prices. We'd also suggest having a lawyer review your terms of sale, since the right wording depends on your product and returns policy.",
      priceFrom: "from €2,500",
      priceNote:
        "The price depends on the platform, the number of products and variants, languages and markets, and any accounting or inventory integrations.",
      timeline: "4–8 weeks",
      faqs: [
        {
          q: "How much does an online store cost?",
          a: "A straightforward Shopify or WooCommerce store starts at €2,500. Larger catalogues, multiple languages, B2B price lists or accounting integrations cost more. On top of development, budget for the platform's monthly fee and payment provider fees.",
        },
        {
          q: "Shopify or WooCommerce – which should I choose?",
          a: "Shopify is easier to run and needs no server maintenance, but has a monthly fee and some features require paid apps. WooCommerce is more flexible with no platform fee, but needs regular updates. We'll help you choose based on your catalogue and who manages the store.",
        },
        {
          q: "I have an e-Residency company. Can I sell across the EU?",
          a: "Yes. We can set up multi-currency and multilingual storefronts, country-specific shipping and the payment methods each market expects. For VAT, the EU OSS scheme usually applies to cross-border consumer sales – your accountant should confirm the details.",
        },
        {
          q: "Which payment methods can you add?",
          a: "Through Montonio or MakeCommerce: Estonian, Latvian, Lithuanian and Finnish bank links, card payments, Apple Pay and Google Pay, plus buy-now-pay-later options if you want them.",
        },
        {
          q: "Can you migrate my existing store?",
          a: "Usually, yes. We import products, categories and, where possible, customer data, and set up 301 redirects from old URLs so you keep your search rankings and existing links.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Landing page
  // ---------------------------------------------------------------------------
  {
    id: "landing",
    group: "web",
    related: ["website", "ai-automation", "ecommerce"],
    et: {
      slug: "maandumisleht",
      navLabel: "Maandumisleht",
      metaTitle: "Maandumislehe tegemine kampaaniateks | drealm",
      metaDescription:
        "Maandumisleht Google Adsi ja Meta kampaaniateks: kiire, ühe selge eesmärgiga ja mõõtmine paigas. Alates 500 €, valmis 1–2 nädalaga. Muuda klikid päringuteks!",
      eyebrow: "Maandumislehed",
      h1: "Maandumisleht, mis muudab reklaamiklikid päringuteks",
      lead:
        "Kui maksad igale Google Adsi või Meta reklaami klikile, peab leht, kuhu inimene jõuab, tegema ühte asja hästi: viima ta päringu, registreerumise või ostuni.",
      cardText:
        "Ühe eesmärgiga maandumisleht kampaaniale, tootele või päringute kogumiseks – kiire, mõõdetav ja Google Adsi ning Meta reklaamideks valmis.",
      problemsTitle: "Millal maandumislehte vaja on",
      problems: [
        "Reklaam suunab avalehele, kus külastaja ei leia kampaania pakkumist üles.",
        "Klikke tuleb, aga päringuid vähe, ja sa ei tea, kus inimesed pooleli jätavad.",
        "Uue toote, teenuse või ürituse jaoks on lehte vaja kiiresti, mitte kahe kuu pärast.",
        "Google Adsi kvaliteediskoor on madal ja seetõttu maksab iga klikk rohkem.",
        "Konversioonide mõõtmine on seadistamata või sa ei usalda numbreid, mida näed.",
      ],
      deliverablesTitle: "Mida saad",
      deliverables: [
        {
          title: "Üks eesmärk, üks pakkumine",
          text: "Struktuur, mis viib külastaja pealkirjast tõendite ja vastuväidete kaudu ühe selge tegevuseni.",
        },
        {
          title: "Reklaamiga kooskõlas tekst",
          text: "Pealkiri ja sõnum, mis kordab reklaami lubadust ja kõnetab just seda sihtrühma, keda reklaam sihib.",
        },
        {
          title: "Välkkiire laadimine",
          text: "Staatiline Astro leht avaneb mobiilis hetkega – oluline nii külastajale kui ka Google Adsi kvaliteediskoorile.",
        },
        {
          title: "Mõõtmine paigas",
          text: "Google Analytics 4, Google Adsi konversioonid, Meta piksel koos Conversions API-ga ja UTM-parameetrite jälgimine.",
        },
        {
          title: "Vorm, mis jõuab kohale",
          text: "Päringud liiguvad e-posti, CRM-i või Google Sheetsi ning kinnituskiri läheb kliendile kohe välja.",
        },
        {
          title: "Valmis A/B-testideks",
          text: "Pealkirja, pakkumise või vormi variante saab hiljem lihtsalt vahetada ja tulemusi võrrelda.",
        },
      ],
      bodyTitle: "Mis teeb maandumislehest hea maandumislehe",
      body:
        "Maandumisleht erineb kodulehest selle poolest, et tal on üks ülesanne. Avaleht peab teenindama kõiki – kliente, partnereid, tööotsijaid –, maandumisleht aga ainult seda inimest, kes klikkis konkreetsel reklaamil. Seepärast pole sellel tavaliselt peamenüüd ega linke, mis juhataksid kõrvale. Kõik lehel olev peab vastama ühele küsimusele: miks peaksin just nüüd selle pakkumise vastu võtma? Hea maandumisleht kordab reklaami lubadust, näitab tõendeid (pildid, tehtud tööd, konkreetsed tingimused), vastab levinud kahtlustele ja lõpeb selge tegevusega." +
        "\n\n" +
        "Google Ads hindab iga reklaami kvaliteediskoori abil ja üks selle osa on maandumislehe kogemus: kas leht on asjakohane, kiire ja mobiilis mugav. Mida parem skoor, seda odavam klikk. Teeme lehed staatilistena, nii et need laadivad kiiresti ka nõrga 4G-ühendusega. Meta reklaamide puhul seadistame lisaks pikslile ka Conversions API, sest brauserite jälgimispiirangute tõttu jääb pelgalt pikslist osa konversioone nägemata. Nii saavad reklaamiplatvormid õigeid signaale ja optimeerivad päriselt päringute, mitte lihtsalt klikkide järgi." +
        "\n\n" +
        "Maandumisleht võib asuda eraldi domeenil, alamdomeenil (näiteks kampaania.sinufirma.ee) või olemasoleva kodulehe alamlehena. Pikaajalise teenuselehe puhul on SEO mõttes enamasti parem hoida see põhidomeeni all, lühiajalise kampaania puhul pole vahe suur. Hinda mõjutavad sektsioonide arv, see, kas tekst on olemas, mitu keeleversiooni on vaja ja millised liidestused (CRM, uudiskirjasüsteem, broneerimine) tuleb ühendada. Kõige kiiremini valmib leht siis, kui pakkumine on paigas ning pildid või videod olemas." +
        "\n\n" +
        "Kuna maandumislehel kogutakse peaaegu alati isikuandmeid, peab vormi juures olema selgelt kirjas, milleks andmeid kasutatakse, ja turundusnõusolek peab olema eraldi linnuke, mitte vaikimisi märgitud. Jälgimiskoodid käivituvad alles pärast küpsiste nõusolekut. Pärast avamist tasub lasta kampaanial paar nädalat joosta ja siis andmed üle vaadata: kus külastajad lahkuvad, milline pealkiri töötab ja kas vorm on liiga pikk. Nende põhjal tehtud väikesed muudatused annavad sageli rohkem kui suurem reklaamieelarve.",
      priceFrom: "alates 500 €",
      priceNote:
        "Hind sõltub sektsioonide ja keeleversioonide arvust, tekstide olemasolust ning vajalikest liidestustest (CRM, uudiskiri, broneerimine).",
      timeline: "1–2 nädalat",
      faqs: [
        {
          q: "Mis vahe on maandumislehel ja kodulehel?",
          a: "Koduleht tutvustab kogu ettevõtet ja teenindab erinevaid külastajaid. Maandumislehel on üks pakkumine ja üks eesmärk – päring, registreerumine või ost – ning see on loodud konkreetse reklaami või kampaania jaoks.",
        },
        {
          q: "Kas teete ka reklaamikampaaniaid?",
          a: "Meie fookus on leht ise ja mõõtmise korrektne seadistamine. Kampaaniaid võid hallata ise või koos oma turundaja või agentuuriga – seadistame kõik nii, et neil oleks lihtne edasi töötada.",
        },
        {
          q: "Kas maandumisleht saab olla minu praeguse kodulehe all?",
          a: "Jah, kui praegune leht seda tehniliselt võimaldab. Teine võimalus on alamdomeen, näiteks kampaania.sinufirma.ee. Soovitame lahenduse sõltuvalt sellest, kui kaua lehte kasutama hakkad.",
        },
        {
          q: "Kui kiiresti maandumisleht valmib?",
          a: "Tavaliselt 1–2 nädalaga. Kui tekst ja pildid on olemas ning pakkumine selge, saab lihtsa lehe valmis ka kiiremini.",
        },
        {
          q: "Kuidas ma tean, kas leht töötab?",
          a: "Seadistame Google Analytics 4 ja reklaamiplatvormide konversioonid, nii et näed, mitu külastajat millisest reklaamist tuli ja mitu neist päringu saatis. Selle põhjal saab lehte ja reklaame edasi parandada.",
        },
      ],
    },
    en: {
      slug: "landing-page",
      navLabel: "Landing Pages",
      metaTitle: "Landing Page Design for Ads & Campaigns | drealm",
      metaDescription:
        "Conversion-focused landing pages for Google Ads and Meta campaigns: fast, focused and fully tracked. From €500, live in 1–2 weeks. Turn clicks into leads.",
      eyebrow: "Landing pages",
      h1: "Landing pages that turn paid clicks into leads",
      lead:
        "When you're paying for every click from Google Ads or Meta, the page people land on needs to do one thing well: get them to enquire, sign up or buy.",
      cardText:
        "Single-purpose landing pages for campaigns, product launches and lead generation – fast, measurable and ready for Google and Meta ads.",
      problemsTitle: "When you need one",
      problems: [
        "Your ads send people to the homepage, where the offer from the ad is nowhere to be seen.",
        "You're getting clicks but few leads, and you can't tell where people drop off.",
        "You're launching a product, service or event and need a page in days, not months.",
        "A low Google Ads Quality Score is pushing your cost per click up.",
        "Conversion tracking is missing, broken, or showing numbers you don't trust.",
      ],
      deliverablesTitle: "What you get",
      deliverables: [
        {
          title: "One goal, one offer",
          text: "A structure that takes visitors from headline through proof and objections to a single clear call to action.",
        },
        {
          title: "Message match with your ads",
          text: "A headline and copy that echo the ad's promise and speak to the exact audience you're targeting.",
        },
        {
          title: "Fast on mobile",
          text: "A static Astro page that loads almost instantly on a phone – good for visitors and for your Quality Score.",
        },
        {
          title: "Tracking that works",
          text: "Google Analytics 4, Google Ads conversions, Meta pixel with Conversions API, and UTM tracking.",
        },
        {
          title: "Forms that deliver",
          text: "Leads go to your inbox, CRM or a Google Sheet, with an instant confirmation email to the prospect.",
        },
        {
          title: "Built for testing",
          text: "Headline, offer and form variants are easy to swap later so you can compare what converts.",
        },
      ],
      bodyTitle: "What makes a landing page convert",
      body:
        "A landing page differs from a website in that it has exactly one job. Your homepage has to serve everyone – clients, partners, job seekers – while a landing page serves only the person who clicked a specific ad. That's why it usually has no main navigation and no links leading elsewhere. Everything on it should answer one question: why should I take this offer, and why now? A strong landing page repeats the ad's promise, shows proof (photos, past work, concrete terms), addresses common doubts and ends with a single, obvious action." +
        "\n\n" +
        "Google Ads rates every ad with a Quality Score, and landing page experience is part of it: is the page relevant, fast and usable on mobile? A better score means cheaper clicks. We build pages as static sites so they load quickly even on a weak connection. For Meta campaigns we set up the Conversions API alongside the pixel, because browser tracking restrictions mean the pixel alone misses a share of conversions. That way the ad platforms get accurate signals and can optimise for real leads rather than just clicks." +
        "\n\n" +
        "A landing page can live on its own domain, a subdomain (such as offer.yourcompany.com) or as a page on your existing site. For a long-running service page, keeping it under your main domain is usually better for SEO; for a short campaign it matters less. Price depends on the number of sections, whether copy is ready, how many language versions you need, and which integrations – CRM, newsletter tool, booking system – have to be connected. Pages come together fastest when the offer is settled and images or video are on hand." +
        "\n\n" +
        "Because landing pages almost always collect personal data, the form needs to state clearly how that data will be used, and marketing consent must be a separate, unticked checkbox under GDPR. Tracking scripts only fire after cookie consent. Once the campaign is live, give it a couple of weeks and then look at the data: where visitors leave, which headline performs, whether the form asks for too much. Small changes based on that often do more than raising the ad budget.",
      priceFrom: "from €500",
      priceNote:
        "The price depends on the number of sections and languages, whether copy is ready, and which integrations (CRM, newsletter, booking) are needed.",
      timeline: "1–2 weeks",
      faqs: [
        {
          q: "What's the difference between a landing page and a website?",
          a: "A website presents your whole business to many kinds of visitors. A landing page has one offer and one goal – an enquiry, sign-up or purchase – and is built for a specific ad or campaign.",
        },
        {
          q: "Do you run the ad campaigns too?",
          a: "Our focus is the page itself and getting tracking right. You can run the campaigns yourself or with your marketer or agency – we set everything up so it's easy for them to work with.",
        },
        {
          q: "Can the landing page live on my existing website?",
          a: "Yes, if your current site technically allows it. Alternatively, we can use a subdomain. We'll recommend an option based on how long you plan to use the page.",
        },
        {
          q: "How quickly can you deliver?",
          a: "Usually in 1–2 weeks. If the copy and images are ready and the offer is clear, a simple page can be done faster.",
        },
        {
          q: "How will I know if the page is working?",
          a: "We set up Google Analytics 4 and ad platform conversions, so you can see how many visitors came from each ad and how many of them converted. That gives you a solid basis for improving both the page and the ads.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 4. Redesign
  // ---------------------------------------------------------------------------
  {
    id: "redesign",
    group: "web",
    related: ["website", "ecommerce", "landing"],
    et: {
      slug: "kodulehe-uuendamine",
      navLabel: "Kodulehe uuendamine",
      metaTitle: "Kodulehe uuendamine ilma SEO-d kaotamata | drealm",
      metaDescription:
        "Kodulehe uuendamine: ehitame aeglase WordPressi või Wixi lehe kiireks ümber ja hoiame 301-suunamistega Google'i positsioonid alles. Alates 800 €. Küsi hinda!",
      eyebrow: "Uuendus",
      h1: "Kodulehe uuendamine nii, et Google'i positsioonid jäävad alles",
      lead:
        "Vana WordPressi või Wixi leht on aeglane, tülikas hallata ega näe enam välja nagu sinu ettevõte? Ehitame selle kaasaegseks ümber ja kanname üle kõik, mis praegu töötab – sisu, lingid ja otsingunähtavuse.",
      cardText:
        "Aeglase või aegunud kodulehe ümberehitus kiireks ja kaasaegseks – sisu ülekande ja 301-suunamistega, et Google'i positsioonid ei kaoks.",
      problemsTitle: "Kas see kõlab tuttavalt?",
      problems: [
        "Leht laeb mobiilis mitu sekundit ja PageSpeedi tulemus on punane.",
        "WordPressi pluginad vajavad pidevat uuendamist ja iga uuendus võib midagi katki teha.",
        "Wixi või Squarespace'i kuutasu kasvab, aga kiirus ja SEO-võimalused jäävad piiratuks.",
        "Kujundus on aegunud ega vasta sellele, kuhu ettevõte on vahepeal jõudnud.",
        "Kardad uuendada, sest varem on lehevahetus Google'i liikluse kaasa viinud.",
      ],
      deliverablesTitle: "Mida saad",
      deliverables: [
        {
          title: "Lähteaudit",
          text: "Vaatame üle praeguse lehe kiiruse, struktuuri ja Search Console'i andmed ning leiame lehed, mis toovad kõige rohkem külastajaid.",
        },
        {
          title: "Sisu ülekanne",
          text: "Tekstid, pildid, blogipostitused ja metaandmed tulevad uuele lehele kaasa, vajadusel korrastatult.",
        },
        {
          title: "301-suunamised",
          text: "Iga vana URL suunatakse õigele uuele aadressile, et lingid ei katkeks ja Google kannaks positsioonid üle.",
        },
        {
          title: "Uus kiire alus",
          text: "Astro-põhine staatiline leht Verceli majutusel – ilma pluginate ja andmebaasita, mida hooldada.",
        },
        {
          title: "Värske kujundus",
          text: "Disain, mis hoiab ettevõtte äratuntavuse, kuid on selgem, kaasaegsem ja mobiilis mugavam.",
        },
        {
          title: "Järelkontroll",
          text: "Pärast vahetust jälgime Search Console'is indekseerimist ja 404-vigu ning parandame, mis vaja.",
        },
      ],
      bodyTitle: "Kuidas kodulehte uuendada nii, et midagi ei kaoks",
      body:
        "Kodulehe uuendamise suurim risk ei ole kujundus, vaid otsingunähtavus. Kui vana lehe aadressid muutuvad ja keegi suunamisi ei seadista, näeb Google hulga kadunud lehti ning aastatega kogutud positsioonid võivad nädalatega haihtuda. Seepärast alustame alati inventuurist: kogume kokku kõik praegused URL-id, vaatame Google Search Console'ist, millised lehed toovad liiklust ja milliste otsingutega, ning koostame tabeli, kus igal vanal aadressil on oma uus vaste. Sellest tabelist saavad 301-suunamised, mis hakkavad tööle samal hetkel, kui uus leht avalikuks läheb." +
        "\n\n" +
        "Paljud Eesti väikeettevõtete kodulehed on tehtud WordPressis mõne lehekoosturi pluginaga või Wixis. Mõlemad on alustamiseks mugavad, kuid aja jooksul koguneb neisse kaalu: kümned pluginad, raske kujundusteema, optimeerimata pildid ja skriptid, mida keegi enam ei kasuta. Ümberehitus staatiliseks Astro leheks eemaldab selle kihi täielikult – andmebaasi pole, pluginaid uuendama ei pea ja ründepind on väga väike. Sisu muutmise võimalus jääb alles, lihtsalt selgema ja kergema haldusliidese kaudu." +
        "\n\n" +
        "Uuendamine ei tähenda tingimata kõige nullist alustamist. Kui logo, värvid ja tekstid on head, hoiame need alles ning keskendume struktuurile, kiirusele ja mobiilivaatele. Kui sisu on aegunud, on uuendus hea hetk see üle vaadata: liita kattuvad lehed, kustutada vananenud uudised ja kirjutada teenuste kirjeldused nii, nagu kliendid neid otsivad. Hinda mõjutavad eelkõige lehtede ja blogipostituste hulk, keelte arv ning see, kas sisu tuuakse üle muutmata või kirjutatakse ümber. Mitmekeelse lehe puhul kontrollime eraldi hreflang-märgendid ja keeleversioonide suunamised." +
        "\n\n" +
        "Vahetuspäeval avaldame uue lehe, kontrollime suunamised üle ja esitame Search Console'is uue sitemapi. Järgnevatel nädalatel jälgime, kas Google indekseerib uued aadressid ja kas kuskil tekib 404-vigu. Väike kõikumine positsioonides esimestel nädalatel on normaalne, kuid korrektselt tehtud üleminek pigem parandab nähtavust, sest kiirem ja selgem leht on nii kasutajale kui ka Google'ile parem. Domeen jääb samaks ja enne DNS-i muutmist kontrollime, et e-posti MX-kirjed ja muud seaded jääksid puutumata.",
      priceFrom: "alates 800 €",
      priceNote:
        "Hind sõltub lehtede ja blogipostituste arvust, keeltest ning sellest, kas sisu tuuakse üle muutmata või kirjutatakse ümber.",
      timeline: "2–5 nädalat",
      faqs: [
        {
          q: "Kas kaotan kodulehe uuendamisel Google'i positsioonid?",
          a: "Kui üleminek on korralikult planeeritud, siis üldjuhul mitte. Kaardistame kõik vanad URL-id, seadistame 301-suunamised ja jälgime pärast vahetust Search Console'i. Väike ajutine kõikumine on võimalik, kuid suunamised kannavad lehtede väärtuse üle.",
        },
        {
          q: "Kas pean domeeni või e-posti teenusepakkujat vahetama?",
          a: "Ei. Domeen jääb sinu omaks ja muudame ainult veebilehe kirjeid. E-posti MX-kirjed jäävad puutumata, nii et postkastid töötavad katkestuseta.",
        },
        {
          q: "Kas vana blogi ja uudised tulevad kaasa?",
          a: "Jah. Tõstame postitused koos piltide ja metaandmetega üle ning suuname vanad aadressid uutele. Vananenud või väga lühikesed postitused soovitame kas liita või eemaldada.",
        },
        {
          q: "Kas leht on uuendamise ajal maas?",
          a: "Ei. Uus leht valmib eraldi testaadressil ja vana töötab seni edasi. Vahetus toimub DNS-i muudatusega, mis jõustub tavaliselt minutite kuni mõne tunni jooksul.",
        },
        {
          q: "Mis saab minu WordPressi haldusest?",
          a: "Pärast üleminekut pole WordPressi enam vaja. Tekstide ja piltide muutmiseks seadistame uue, lihtsama haldusliidese ja näitame, kuidas see töötab.",
        },
      ],
    },
    en: {
      slug: "website-redesign",
      navLabel: "Website Redesign",
      metaTitle: "Website Redesign Without Losing SEO | drealm",
      metaDescription:
        "Website redesign for slow WordPress and Wix sites: a faster, modern rebuild with 301 redirects that protect your Google rankings. From €800, done in 2–5 weeks.",
      eyebrow: "Redesign",
      h1: "Website redesign that keeps your Google rankings intact",
      lead:
        "Is your old WordPress or Wix site slow, awkward to manage and no longer a fair reflection of your business? We rebuild it for speed and carry over everything that already works – content, links and search visibility.",
      cardText:
        "Rebuild a slow or dated website as a fast, modern one – with content migration and 301 redirects so your Google rankings stay put.",
      problemsTitle: "Sound familiar?",
      problems: [
        "Your site takes several seconds to load on mobile and PageSpeed is in the red.",
        "WordPress plugins need constant updates, and every update risks breaking something.",
        "Your Wix or Squarespace bill keeps rising while speed and SEO options stay limited.",
        "The design no longer matches where your business is today.",
        "A previous relaunch cost you Google traffic, and you're wary of doing it again.",
      ],
      deliverablesTitle: "What you get",
      deliverables: [
        {
          title: "Starting audit",
          text: "We review your current site's speed, structure and Search Console data, and identify the pages that bring in the most visitors.",
        },
        {
          title: "Content migration",
          text: "Text, images, blog posts and metadata move to the new site, tidied up where needed.",
        },
        {
          title: "301 redirects",
          text: "Every old URL is mapped to the right new one, so links don't break and Google transfers your rankings.",
        },
        {
          title: "A fast new foundation",
          text: "A static Astro site hosted on Vercel – no plugins, no database to maintain.",
        },
        {
          title: "Refreshed design",
          text: "A design that keeps your brand recognisable but is cleaner, more modern and better on mobile.",
        },
        {
          title: "Post-launch monitoring",
          text: "After the switch, we watch Search Console for indexing issues and 404 errors and fix what comes up.",
        },
      ],
      bodyTitle: "How to redesign a website without losing what works",
      body:
        "The biggest risk in a redesign isn't the design – it's search visibility. When old page addresses change and nobody sets up redirects, Google suddenly sees dozens of missing pages, and rankings built up over years can disappear within weeks. So we always start with an inventory: we collect every existing URL, check Google Search Console to see which pages bring traffic and for which queries, and build a map pairing each old address with its new equivalent. That map becomes a set of 301 redirects that go live at the exact moment the new site does." +
        "\n\n" +
        "A lot of small business sites were built on WordPress with a page builder plugin, or on Wix. Both are convenient to start with, but they accumulate weight over time: dozens of plugins, a heavy theme, unoptimised images and scripts nobody uses anymore. Rebuilding as a static Astro site removes that layer entirely – there's no database, nothing to patch every week, and very little for attackers to target. You still keep the ability to edit content, just through a cleaner, lighter editor." +
        "\n\n" +
        "A redesign doesn't have to mean starting from scratch. If your logo, colours and copy are solid, we keep them and focus on structure, speed and the mobile experience. If the content has aged, a redesign is a good moment to review it: merge overlapping pages, retire outdated news and rewrite service descriptions in the language your clients actually search with. Price depends mainly on the number of pages and blog posts, the number of languages, and whether content moves over as-is or gets rewritten. For multilingual sites, we also check hreflang tags and language redirects." +
        "\n\n" +
        "On launch day, we publish the new site, verify every redirect and submit a fresh sitemap in Search Console. Over the following weeks we monitor whether Google is indexing the new URLs and whether any 404 errors appear. Some fluctuation in the first weeks is normal, but a well-executed migration tends to improve visibility, because a faster, clearer site is better for both visitors and search engines. Your domain stays the same, and before touching DNS we make sure email MX records and other settings remain exactly as they were.",
      priceFrom: "from €800",
      priceNote:
        "The price depends on the number of pages and blog posts, languages, and whether content is migrated as-is or rewritten.",
      timeline: "2–5 weeks",
      faqs: [
        {
          q: "Will I lose my Google rankings when I redesign my website?",
          a: "Not if the migration is planned properly. We map every old URL, set up 301 redirects and monitor Search Console after launch. Some short-term fluctuation is possible, but redirects pass on the value of your existing pages.",
        },
        {
          q: "Do I need to change my domain or email provider?",
          a: "No. Your domain stays yours and we only change the records for the website. Email MX records are left untouched, so your inboxes keep working without interruption.",
        },
        {
          q: "Will my old blog posts come across?",
          a: "Yes. We migrate posts with their images and metadata and redirect the old addresses. Thin or outdated posts are usually better merged or removed, and we'll suggest which.",
        },
        {
          q: "Will my site be offline during the redesign?",
          a: "No. The new site is built on a separate preview address while the old one keeps running. The switch happens via a DNS change, which usually takes effect within minutes to a few hours.",
        },
        {
          q: "What happens to my WordPress admin?",
          a: "Once the move is done, you won't need WordPress anymore. We set up a simpler editor for text and images and walk you through it.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 5. Web app
  // ---------------------------------------------------------------------------
  {
    id: "webapp",
    group: "web",
    related: ["ai-automation", "ai-chatbot", "ecommerce"],
    et: {
      slug: "veebirakenduse-arendus",
      navLabel: "Veebirakendused",
      metaTitle: "Veebirakenduse arendus: portaalid ja MVP-d | drealm",
      metaDescription:
        "Veebirakenduse arendus: kliendiportaalid, broneerimissüsteemid, sisemised tööriistad ja idufirmade MVP-d. Arendus etappidena, alates 6000 €. Räägime!",
      eyebrow: "Veebirakendused",
      h1: "Veebirakenduse arendus – kliendiportaalid, tööriistad ja MVP-d",
      lead:
        "Kui valmislahendus ei sobi ja Exceli tabelid on üle pea kasvanud, ehitame veebirakenduse, mis teeb täpselt seda, mida sinu äri vajab – ja mitte rohkem.",
      cardText:
        "Kohandatud veebirakendused: kliendiportaalid, broneerimissüsteemid, sisemised tööriistad ja idufirmade MVP-d, arendatud etappide kaupa.",
      problemsTitle: "Millal on kohandatud rakendus mõistlik",
      problems: [
        "Tööprotsess käib Exceli, e-kirjade ja käsitsi kopeerimise kaudu ning vead tekivad just andmete ümbertõstmisel.",
        "Kliendid küsivad e-kirja teel staatust, arveid või dokumente, mida nad võiksid ise portaalist näha.",
        "Valmis tarkvara on liiga üldine, kasutajapõhiselt liiga kallis või ei liidestu teie süsteemidega.",
        "Sul on idufirma idee ja vajad töötavat MVP-d, et seda päris kasutajate või investoritega proovile panna.",
        "Broneeringud tulevad telefoni ja sõnumite teel ning topeltbroneeringuid juhtub liiga tihti.",
      ],
      deliverablesTitle: "Mida saad",
      deliverables: [
        {
          title: "Kaardistus ja prototüüp",
          text: "Enne koodi kirjutamist paneme kirja kasutajarollid, põhivood ja andmemudeli ning teeme klikitava prototüübi.",
        },
        {
          title: "Kasutajad ja õigused",
          text: "Sisselogimine, rollid ja õigused, et iga kasutaja näeks ainult seda, mida peab; vajadusel ka Smart-ID või Mobiil-ID.",
        },
        {
          title: "Liidestused",
          text: "Ühendus raamatupidamise (Merit, Directo), makseteenuste, e-posti, kalendri või teie olemasolevate süsteemidega API kaudu.",
        },
        {
          title: "Haldusvaade",
          text: "Admin-paneel andmete haldamiseks, ülevaated ja ekspordid – ilma, et peaks andmebaasi sisse vaatama.",
        },
        {
          title: "Turvalisus ja GDPR",
          text: "Andmed EL-i serverites, krüpteeritud ühendused, varukoopiad ja ainult vajalike isikuandmete kogumine.",
        },
        {
          title: "Etapiviisiline arendus",
          text: "Esimene töötav versioon jõuab kasutajateni kiiresti, edasi arendame päris tagasiside põhjal.",
        },
      ],
      bodyTitle: "Mida veebirakenduse arendusest teada",
      body:
        "Veebirakendus on mõistlik siis, kui sul on korduv protsess, mida ükski valmistoode hästi ei kata. Tüüpilised näited: kliendiportaal, kus kliendid näevad oma tellimusi, dokumente ja arveid; broneerimissüsteem, mis arvestab ruumide, töötajate ja lahtiolekuaegadega; sisemine tööriist, mis asendab mitu Exceli tabelit ja e-kirjade ahelat. Enne arendust küsime ausalt, kas mõni olemasolev SaaS-toode lahendaks sama asja odavamalt – ja kui lahendab, ütleme seda. Kohandatud rakendus tasub end ära siis, kui protsess on sinu konkurentsieelis või valmislahenduse kasutajatasud kasvavad arenduskulust suuremaks." +
        "\n\n" +
        "Idufirma MVP puhul on peamine küsimus, mida mitte ehitada. Esimene versioon peaks tõestama ühte väidet – kas inimesed seda kasutavad ja kas nad on nõus maksma –, mitte sisaldama kõike, mis ideede nimekirjas kirjas on. Seepärast alustame lühikese kaardistusega, kus paneme paika kasutajarollid, peamised kasutajateekonnad ja selle, mis jääb teise etappi. Tehniliselt kasutame laialt levinud ja hästi dokumenteeritud tehnoloogiaid, nagu TypeScript ja PostgreSQL, et projekti saaks hiljem jätkata ka teine arendaja või sinu enda tiim. Lähtekood ja kõik ligipääsud antakse sulle üle." +
        "\n\n" +
        "Veebirakenduse hind ja ajakava sõltuvad eelkõige kasutajarollide ja vaadete arvust, liidestustest teiste süsteemidega ning sellest, kui keerulised on ärireeglid – näiteks hinnastamine, kinnitusvood või ajaplaneerimine. Seepärast ei paku me pimesi fikseeritud hinda kogu projektile, vaid jagame töö etappideks: esmalt kaardistus ja prototüüp, siis esimene kasutatav versioon ja seejärel edasiarendused. Iga etapi lõpus on midagi, mida saab päriselt katsuda, ning sina otsustad, kas ja kuidas edasi minna. Nii ei pea kogu eelarvet kohe alguses lukku panema." +
        "\n\n" +
        "Rakendus, mis hoiab klientide andmeid, peab olema algusest peale turvaliselt üles ehitatud. Hoiame andmebaasi Euroopa Liidu serverites, kasutame krüpteeritud ühendusi, rollipõhiseid õigusi ja automaatseid varukoopiaid ning kogume ainult neid isikuandmeid, mida protsess päriselt vajab. Vajadusel aitame kirjeldada andmetöötlust ja sõlmida volitatud töötleja lepingu. Eesti kontekstis on sageli kasulik Smart-ID või Mobiil-ID sisselogimine ja e-arvete liidestus – mõlemad on tehtavad, kuid neid tasub planeerida juba kaardistuse etapis, mitte lõpus juurde lisada.",
      priceFrom: "alates 6000 €",
      priceNote:
        "Hind sõltub kasutajarollide ja vaadete arvust, liidestustest ning ärireeglite keerukusest; arendame etappide kaupa.",
      timeline: "6–16 nädalat",
      faqs: [
        {
          q: "Kui palju maksab veebirakenduse arendus?",
          a: "Väiksem sisemine tööriist või MVP algab 6000 eurost. Mitme kasutajarolli, liidestuste ja keerukama äriloogikaga rakendus maksab rohkem. Pärast kaardistust anname iga etapi kohta eraldi hinnangu.",
        },
        {
          q: "Mis vahe on MVP-l ja valmis tootel?",
          a: "MVP sisaldab ainult seda, mis on vajalik põhiidee tõestamiseks päris kasutajatega. Valmis toode lisab sellele mugavusfunktsioonid, laiemad õigused, aruanded ja lihvi. MVP-ga alustamine hoiab kulud kontrolli all ja annab tagasisidet enne suuri investeeringuid.",
        },
        {
          q: "Kas saan rakenduse lähtekoodi endale?",
          a: "Jah. Kood asub sinu repositooriumis ning majutuse ja andmebaasi kontod antakse sulle üle. Kasutame levinud tehnoloogiaid, nii et arendust saab vajadusel jätkata ka teine arendaja.",
        },
        {
          q: "Kas rakendus töötab ka telefonis?",
          a: "Jah, ehitame rakendused kõigil ekraanidel töötavaks ja vajadusel PWA-na, mida saab telefoni avakuvale lisada. Eraldi iOS- või Androidi rakendust pole alguses enamasti vaja.",
        },
        {
          q: "Kas rakendusse saab lisada tehisintellekti?",
          a: "Jah, näiteks dokumentide automaatseks töötlemiseks, kokkuvõtete tegemiseks või klienditeeninduse abistamiseks. Tasub läbi mõelda, kus AI päriselt aega säästab – sellest räägime ka AI-automatiseerimise teenuse juures.",
        },
      ],
    },
    en: {
      slug: "web-app-development",
      navLabel: "Web Apps & MVPs",
      metaTitle: "Web App Development: Portals, Tools & MVPs | drealm",
      metaDescription:
        "Custom web app development: client portals, booking systems, internal tools and startup MVPs, built in phases with EU hosting. From €6,000. Tell us your idea.",
      eyebrow: "Web applications",
      h1: "Web app development for client portals, internal tools and MVPs",
      lead:
        "When off-the-shelf software doesn't fit and your spreadsheets have outgrown themselves, we build a web app that does exactly what your business needs – and nothing it doesn't.",
      cardText:
        "Custom web apps – client portals, booking systems, internal tools and startup MVPs – built in clear phases with EU-hosted data.",
      problemsTitle: "When a custom app makes sense",
      problems: [
        "Your workflow runs on spreadsheets, email threads and copy-paste, and errors creep in every time data changes hands.",
        "Clients keep emailing to ask for status updates, invoices or documents they could see in a portal.",
        "Off-the-shelf SaaS is too generic, too expensive per seat, or won't integrate with your systems.",
        "You have a startup idea and need a working MVP to test with real users or show investors.",
        "Bookings arrive by phone and message, and double bookings happen far too often.",
      ],
      deliverablesTitle: "What you get",
      deliverables: [
        {
          title: "Discovery and prototype",
          text: "Before writing code, we define user roles, core flows and the data model, and build a clickable prototype.",
        },
        {
          title: "Users and permissions",
          text: "Login, roles and permissions so everyone sees only what they should – including Estonian Smart-ID or Mobile-ID if needed.",
        },
        {
          title: "Integrations",
          text: "Connections to accounting, payments, email, calendars or your existing systems via their APIs.",
        },
        {
          title: "Admin dashboard",
          text: "An admin panel for managing data, with overviews and exports – no database access required.",
        },
        {
          title: "Security and GDPR",
          text: "EU-hosted data, encrypted connections, backups and collecting only the personal data you actually need.",
        },
        {
          title: "Phased delivery",
          text: "A first working version reaches users quickly, then we build on real feedback.",
        },
      ],
      bodyTitle: "What to know before building a web app",
      body:
        "A custom web app makes sense when you have a recurring process that no existing product handles well. Typical examples: a client portal where customers see their orders, documents and invoices; a booking system that accounts for rooms, staff and opening hours; an internal tool that replaces several spreadsheets and endless email chains. Before we build anything, we'll honestly ask whether an existing SaaS product could do the job for less – and if it can, we'll say so. Custom software pays off when the process is part of your competitive edge, or when per-seat fees start to outgrow the cost of building." +
        "\n\n" +
        "With a startup MVP, the key question is what not to build. The first version should prove one thing – do people use it, and will they pay – rather than include everything on the wishlist. So we start with a short discovery phase to pin down user roles, the core user journeys and what can wait for phase two. On the technical side we stick to widely used, well-documented tools such as TypeScript and PostgreSQL, so another developer or your own future team can pick the project up easily. The source code and all accounts are handed over to you." +
        "\n\n" +
        "Cost and timeline depend mainly on the number of user roles and screens, integrations with other systems, and how complex the business rules are – pricing logic, approval flows or scheduling, for example. That's why we don't quote a blind fixed price for the whole project. Instead, we split the work into phases: discovery and prototype, a first usable version, then further development. Each phase ends with something you can actually use, and you decide whether and how to continue. You don't have to commit the entire budget on day one." +
        "\n\n" +
        "An app that stores customer data has to be built securely from the start. We keep databases on EU servers, use encrypted connections, role-based access and automatic backups, and collect only the personal data the process genuinely needs. If required, we help document data processing and sign a data processing agreement. If you're building for the Estonian market, Smart-ID or Mobile-ID login and e-invoice integration are often worth having – both are doable, but they're best planned during discovery rather than bolted on at the end.",
      priceFrom: "from €6,000",
      priceNote:
        "The price depends on the number of user roles and screens, integrations, and the complexity of the business logic; we build in phases.",
      timeline: "6–16 weeks",
      faqs: [
        {
          q: "How much does custom web app development cost?",
          a: "A smaller internal tool or MVP starts at €6,000. Apps with multiple user roles, integrations and more complex logic cost more. After discovery, we give a separate estimate for each phase.",
        },
        {
          q: "What's the difference between an MVP and a finished product?",
          a: "An MVP contains only what's needed to validate the core idea with real users. A finished product adds convenience features, finer permissions, reporting and polish. Starting with an MVP keeps costs under control and gets you feedback before larger investments.",
        },
        {
          q: "Do I own the source code?",
          a: "Yes. The code lives in your repository, and hosting and database accounts are transferred to you. We use mainstream technologies, so another developer can continue the work if needed.",
        },
        {
          q: "Will the app work on mobile?",
          a: "Yes. We build apps that work on every screen size and, where useful, as a PWA that can be added to a phone's home screen. A separate native iOS or Android app is rarely needed at the start.",
        },
        {
          q: "Can you add AI features?",
          a: "Yes – for example to process documents automatically, summarise information or assist customer support. It's worth identifying where AI genuinely saves time first; our AI automation service covers exactly that.",
        },
      ],
    },
  },
];
