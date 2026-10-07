// Extra, industry-specific depth for the 10 priority solution pages (ET + EN).
// Rendered by SolutionPage.astro under the intro. Pages without an entry here are noindex until written.
export interface SolDeep {
  /** 3–4 paragraphs, industry-specific: who it is for, the typical problems in THIS industry in Estonia, how the solution works day to day */
  body: string[];
  /** a clearly hypothetical example project. title like "Näide: 40 korteriga arendus Tartus" */
  example: { title: string; text: string; scope: string[] };
  /** exactly 4 steps specific to this solution */
  process: { t: string; d: string }[];
  /** 2 short paragraphs: what drives the price for this solution; may reference the service's "from" price exactly as written in services.ts */
  pricing: string[];
  /** 3 NEW questions not already in this solution's faqs in solutions.ts */
  faqs: { q: string; a: string }[];
}

export const SOL_DEEP: Record<string, { et: SolDeep; en: SolDeep }> = {
  // ======================= B2B =======================
  b2b: {
    et: {
      body: [
        'B2B tellimiskeskkond sobib hulgimüüjale, maaletoojale või tootjale, kelle kliendid tellivad regulaarselt samu tooteid: poed, restoranid, ehitusfirmad, ilusalongid või edasimüüjad. Tüüpiline olukord on see, et tellimus tuleb e-kirjaga Exceli failina või fotona paberist nimekirjast ja keegi kontoris trükib selle käsitsi laoprogrammi.',
        'Hulgimüügis ei ole üks hinnakiri. Ühel kliendil on lepinguhind, teisel kliendigrupi allahindlus, kolmandal eraldi hind kindlale tootegrupile. Lisaks müüakse paljusid tooteid ainult kastide või aluste kaupa ning tellimusel on miinimumsumma. Keskkond peab neid reegleid teadma, et klient ei saaks tellida 7 tükki, kui kastis on 12. Sama kehtib tarnetingimuste kohta: osale klientidest tuuakse kaup oma autoga kindlal nädalapäeval, teisele saadetakse kuller või DPD pakk.',
        'Igapäevaselt näeb see välja nii: kliendi ostujuht logib sisse, avab eelmise tellimuse, muudab koguseid ja kinnitab. Kui tal on tootekoodid juba oma süsteemis, saab ta need kleepida või laadida üles CSV-failina. Tellimus jõuab laosüsteemi ilma ümbertrükkimiseta ja klient saab kinnituse e-kirjaga.',
        'Arve alusel maksmine on B2B-s reegel, mitte erand. Maksetähtaja, krediidilimiidi ja võlgnevuse saab siduda kliendi kontoga, et limiidi ületanud klient näeks hoiatust juba enne tellimuse esitamist. Kui raamatupidamine käib Meritis või Directos ja neil on liides, saab arved ja e-arved sealt otse liikuma panna.',
      ],
      example: {
        title: 'Näide: joogivee ja kohvi hulgimüüja 150 ärikliendiga',
        text: 'Kujutame ette maaletoojat, kelle kliendid on kontorid ja kohvikud üle Eesti. Tellimused tulevad praegu e-kirja ja telefoni teel ning müügiassistent kulutab suure osa päevast nende sisestamisele. Esimeses versioonis näeb iga klient oma hindu, kordab eelmist tellimust ühe klõpsuga ja valib tarnepäeva oma piirkonna graafikust. Tellimused liiguvad laoprogrammi, kui sellel on liides. Müügiassistent vaatab halduses ainult erandeid, näiteks tellimust, mis ületab krediidilimiiti, või toodet, mis on laost otsas. Vene keelt kõnelevate klientide jaoks on liides ka vene keeles.',
        scope: [
          'Kliendipõhised hinnad ja kliendigrupid',
          'Tellimuse kordamine ja CSV-import',
          'Pakendikordsus ja miinimumtellimus',
          'Tarnepäevad piirkonna järgi',
          'Liides laoprogrammiga',
        ],
      },
      process: [
        { t: 'Hinnareeglite kaardistus', d: 'Paneme kirja, kuidas sinu hinnad, allahindlused ja maksetingimused päriselt toimivad, koos eranditega.' },
        { t: 'Andmete ühendus', d: 'Selgitame, kust tulevad tooted, laoseis ja kliendid ning kuhu tellimus peab jõudma.' },
        { t: 'Pilootkliendid', d: 'Mõni olemasolev klient proovib keskkonda päris tellimustega, enne kui kõik kutsutakse.' },
        { t: 'Kõigi klientide üleviimine', d: 'Saadame kutsed, aitame esimesed sisselogimised läbi teha ja parandame, mis vaja.' },
      ],
      pricing: [
        'B2B keskkond on platvorm ja platvormid algavad 2 500 eurost. Hinda mõjutab kõige rohkem see, kui keerulised on sinu hinnareeglid ja millise süsteemiga tuleb liidestuda. Kui laoprogrammil on dokumenteeritud liides, on töö etteaimatav. Kui liidest pole, tuleb leida teine lahendus, näiteks failivahetus.',
        'Teised hinda mõjutavad asjad on tootevalikute arv, mitme keele vajadus, kliendi töötajate erinevad õigused ja see, kas samal platvormil töötab ka tavaklientide e-pood. Platvormi arendus võtab tavaliselt 4–8 nädalat.',
      ],
      faqs: [
        { q: 'Kas klient saab tellida ka telefonist?', a: 'Jah. Keskkond töötab telefonis, nii et näiteks restorani kokk saab tellimuse teha otse köögist.' },
        { q: 'Kas uued kliendid saavad ise registreeruda?', a: 'Saavad küll taotluse esitada, aga konto ja hinnad kinnitad sina. Nii ei näe võõras sinu hulgihindu.' },
        { q: 'Kuidas tooted ja pildid keskkonda jõuavad?', a: 'Tavaliselt laoprogrammist või tootetabelist importimisega. Pilte ja kirjeldusi saab hiljem halduses täiendada.' },
      ],
    },
    en: {
      body: [
        'A B2B ordering portal suits wholesalers, importers and manufacturers whose customers reorder the same products regularly: shops, restaurants, construction firms, salons or resellers. The typical situation is an order arriving by email as a spreadsheet, or as a photo of a paper list, and someone in the office typing it into the inventory system by hand.',
        'Wholesale never has a single price list. One customer has a contract price, another a customer-group discount, a third a separate price for one product group. Many products are sold only by the case or pallet, and orders have a minimum value. The portal has to know these rules so a customer can’t order 7 units when a case holds 12. The same goes for delivery terms: some customers get goods from your own van on a fixed weekday, others by courier or DPD parcel.',
        'Day to day it looks like this: the customer’s buyer logs in, opens the previous order, changes quantities and confirms. If they already keep product codes in their own system, they can paste them or upload a CSV file. The order reaches your inventory system without retyping and the customer gets an email confirmation.',
        'Paying on invoice is the rule in B2B, not the exception. Payment terms, credit limits and overdue balances can be tied to the customer account, so a customer over their limit sees a warning before submitting. If your accounting runs in Merit or Directo and they offer an API, invoices and e-invoices can flow from there directly.',
      ],
      example: {
        title: 'Example: a water and coffee wholesaler with 150 business customers',
        text: 'Imagine an importer whose customers are offices and cafés across Estonia. Orders currently come by email and phone, and a sales assistant spends much of the day entering them. In the first version every customer sees their own prices, repeats the previous order in one click and picks a delivery day from their region’s schedule. Orders flow into the inventory system, if it has an API. The sales assistant only handles exceptions in the admin, such as an order over the credit limit or a product that is out of stock. For Russian-speaking customers the interface is also available in Russian.',
        scope: [
          'Customer-specific prices and customer groups',
          'Repeat order and CSV import',
          'Case quantities and minimum order',
          'Delivery days by region',
          'Integration with the inventory system',
        ],
      },
      process: [
        { t: 'Pricing rules mapping', d: 'We write down how your prices, discounts and payment terms actually work, exceptions included.' },
        { t: 'Data connection', d: 'We confirm where products, stock and customers come from and where orders need to land.' },
        { t: 'Pilot customers', d: 'A few existing customers try the portal with real orders before everyone is invited.' },
        { t: 'Moving all customers over', d: 'We send invitations, help with the first logins and fix whatever comes up.' },
      ],
      pricing: [
        'A B2B portal is a platform, and platforms start from €2,500. The biggest price factors are how complex your pricing rules are and which system it has to integrate with. If your inventory software has a documented API, the work is predictable. If not, another route is needed, such as file exchange.',
        'Other factors are the number of product variants, the need for several languages, different permissions for customer staff, and whether a consumer store runs on the same platform. Platform development usually takes 4–8 weeks.',
      ],
      faqs: [
        { q: 'Can customers order from a phone?', a: 'Yes. The portal works on mobile, so a restaurant chef can place the order straight from the kitchen.' },
        { q: 'Can new customers sign up themselves?', a: 'They can apply, but you approve the account and prices. That way strangers never see your wholesale prices.' },
        { q: 'How do products and images get into the portal?', a: 'Usually by importing from your inventory system or a product spreadsheet. Images and descriptions can be added later in the admin.' },
      ],
    },
  },

  // ======================= RENTAL PLATFORM =======================
  rendiplatvorm: {
    et: {
      body: [
        'Rendiplatvorm on mõeldud ettevõttele, kes annab samu esemeid korduvalt välja: pidulikud rõivad, ehitustööriistad, sündmuste tehnika, matkavarustus, lapsevankrid või suusad. Kõige sagedamini alustatakse tavalise e-poe pealt ja avastatakse, et e-pood teab ainult laoseisu, mitte seda, millal ese tagasi tuleb.',
        'Rendis on kaks eri loogikat ja need tuleb alguses paika panna. Kas iga ese on eraldi jälgitav, näiteks kindla seerianumbriga puurvasar või konkreetne kleit kindlas suuruses, või on sul kogus, näiteks 40 ühesugust tooli? Esimesel juhul vaatab süsteem iga eseme ajalugu ja seisukorda, teisel juhul vaba kogust kuupäeva kaupa.',
        'Eesti kliendid eeldavad pangalinke ja pakiautomaate. Montonio kaudu saab ühendada nii maksed kui Omniva, DPD ja Smartposti automaadid, ning tagastuse saatesildi saab kliendile saata juba koos tellimusega. Pakiautomaadiga rendil tuleb kalendris arvestada saatmise päevadega mõlemas suunas, muidu jääb ese järgmisele kliendile hiljaks.',
        'Tagatisraha juures on oluline teada, et pangalingimakset ei saa „kinni hoida“ nagu kaardimakset. Pangalingiga makstud tagatis tuleb pärast tagastust kliendile tagasi kanda. Halduses näed, kellel on tagatis veel tagastamata, millised esemed on hilinenud ja milliste kahjustuste kohta on märge tehtud.',
      ],
      example: {
        title: 'Näide: ehitustööriistade rent kahes linnas',
        text: 'Oletame, et tööriistarendil on ladu Tallinnas ja Tartus ning umbes 300 eset, millest paljud on kallid ja seerianumbriga. Kliendid on nii eraisikud kui väikesed ehitusfirmad. Platvormil valib klient linna, kuupäevad ja tööriista, näeb päeva- ja nädalahinda ning maksab koos tagatisega. Firmakliendid saavad maksta arve alusel. Laotöötaja märgib tagastamisel eseme seisukorra telefonist ja lisab vajadusel pildi. Kui ese vajab remonti, eemaldatakse see kalendrist, kuni see on uuesti korras. Juht näeb, millised tööriistad on kõige rohkem väljas ja millised seisavad riiulil, ning saab selle põhjal otsustada, mida juurde osta.',
        scope: [
          'Saadavus asukoha ja kuupäeva järgi',
          'Päeva-, nädalavahetuse- ja nädalahinnad',
          'Tagatisraha ja arve alusel maksmine',
          'Seisukorra märkmed tagastamisel',
          'Hilinenud rentide nimekiri',
        ],
      },
      process: [
        { t: 'Rendireeglid', d: 'Paneme kirja rendiperioodid, hooldusajad, tagatised, hilinemise tasud ja tühistamise tingimused.' },
        { t: 'Esemete andmed', d: 'Otsustame, mida jälgitakse eseme ja mida koguse kaupa, ning toome tooted süsteemi.' },
        { t: 'Proovirendid', d: 'Teeme läbi päris broneeringud makse, saatmise ja tagastusega, et kalender peaks.' },
        { t: 'Avamine ja tugi', d: 'Platvorm läheb käiku ja jälgime esimesi nädalaid koos sinuga.' },
      ],
      pricing: [
        'Rendiplatvorm on platvorm ning platvormid algavad 2 500 eurost. Hinda mõjutab enim saadavuse loogika keerukus: kas on üks ladu või mitu, kas renditakse päevade või tundide kaupa, kas esemetel on komplektid ja kas sama toodet nii müüakse kui renditakse.',
        'Lisaks mõjutavad hinda makse- ja tarnelahendused, firmaklientide arve alusel maksmine, keelte arv ja see, kas vanast e-poest tuleb tooted ja kliendid üle tuua. Platvormi arendus võtab tavaliselt 4–8 nädalat.',
      ],
      faqs: [
        { q: 'Kas klient saab rendiperioodi pikendada?', a: 'Jah, kui ese on järgmisteks päevadeks vaba. Süsteem kontrollib saadavust ja küsib lisamakse.' },
        { q: 'Kuidas käsitleda hilinenud tagastusi?', a: 'Hilinenud rent tõstetakse halduses esile ja kliendile saab saata automaatse meeldetuletuse. Hilinemistasu reeglid paned paika sina.' },
        { q: 'Kas rentida saab ka tunni kaupa?', a: 'Saab. Tunnipõhine rent sobib näiteks ruumidele või sündmuste tehnikale ja see tuleb kohe alguses kokku leppida.' },
      ],
    },
    en: {
      body: [
        'A rental platform is for businesses that hand out the same items again and again: formalwear, construction tools, event equipment, camping gear, prams or skis. Most start with an ordinary online store and discover that a store only knows stock levels, not when an item comes back.',
        'Rental runs on two different logics, and they need settling early. Is each item tracked individually, like a drill with a serial number or a specific dress in a specific size, or do you have a quantity, like 40 identical chairs? In the first case the system follows each item’s history and condition, in the second it tracks free quantity per date.',
        'Estonian customers expect bank links and parcel lockers. Through Montonio you can connect both payments and Omniva, DPD and Smartpost lockers, and send the return label together with the order. With locker delivery the calendar has to allow for shipping days in both directions, or the item arrives late for the next customer.',
        'With deposits it matters that a bank link payment can’t be “held” the way a card payment can. A deposit paid by bank link has to be refunded after return. In the admin you see whose deposit is still outstanding, which items are overdue and which have a damage note.',
      ],
      example: {
        title: 'Example: construction tool rental in two cities',
        text: 'Suppose a tool rental has warehouses in Tallinn and Tartu and about 300 items, many of them expensive and serial-numbered. Customers are private individuals and small builders. On the platform a customer picks the city, dates and tool, sees the daily and weekly price and pays together with the deposit. Business customers can pay on invoice. Warehouse staff record the item’s condition on return from a phone and add a photo if needed. If an item needs repair, it is removed from the calendar until it is fixed. The manager sees which tools are out most and which sit on the shelf, and can decide what to buy more of.',
        scope: [
          'Availability by location and date',
          'Daily, weekend and weekly prices',
          'Deposits and pay on invoice',
          'Condition notes on return',
          'Overdue rentals list',
        ],
      },
      process: [
        { t: 'Rental rules', d: 'We write down rental periods, servicing time, deposits, late fees and cancellation terms.' },
        { t: 'Item data', d: 'We decide what is tracked per item and what per quantity, and bring the products into the system.' },
        { t: 'Test rentals', d: 'We run real bookings with payment, shipping and return to make sure the calendar holds.' },
        { t: 'Launch and support', d: 'The platform goes live and we watch the first weeks together with you.' },
      ],
      pricing: [
        'A rental platform is a platform, and platforms start from €2,500. The main price factor is how complex availability is: one warehouse or several, rental by day or by hour, item bundles, and whether the same product is both sold and rented.',
        'Payment and delivery options, invoice payment for business customers, the number of languages and whether products and customers need moving from an old store also affect the price. Platform development usually takes 4–8 weeks.',
      ],
      faqs: [
        { q: 'Can a customer extend the rental?', a: 'Yes, if the item is free for the following days. The system checks availability and asks for the extra payment.' },
        { q: 'How are late returns handled?', a: 'Overdue rentals are highlighted in the admin and the customer can get an automatic reminder. You set the late fee rules.' },
        { q: 'Can items be rented by the hour?', a: 'Yes. Hourly rental suits spaces or event equipment, and it needs agreeing at the very start.' },
      ],
    },
  },

  // ======================= REAL ESTATE PORTAL =======================
  kinnisvaraportaal: {
    et: {
      body: [
        'Eestis on üldised kinnisvaraportaalid hõivatud, nii et uus portaal kasvab tavaliselt kitsamas nišis: äripinnad, maatükid, uusarendused, suvekodud, üüripinnad või üks piirkond. Selline portaal võidab siis, kui ta näitab infot, mida üldportaalis ei leia, ja kui otsing on tehtud just selle niši ostja mõtteviisi järgi.',
        'Näiteks maatüki ostja tahab filtreerida sihtotstarbe, pindala ja elektriliitumise järgi, äripinna üürnik aga ruutmeetri hinna, parkimiskohtade ja ligipääsu järgi. Kui väljad on objektitüübi kaupa läbi mõeldud, saab kuulutaja need täita ilma vabatekstita ja ostja saab neid filtreerida. Korteri ja maja kuulutusel peaks olema ka energiamärgise klass.',
        'Kuulutajate poolel on kaks gruppi. Maakleritel on objektid juba oma süsteemis ja nad ei taha neid uuesti sisestada, nii et neile tuleb import XML-voo või liidese kaudu. Eraisikud lisavad objekti käsitsi ja vajavad lihtsat vormi, kus pildid laadivad telefonist. Mõlemal juhul on vaja modereerimist, et topelt- ja aegunud kuulutused ei koguneks.',
        'Iga objekt on Google’i jaoks eraldi leht, aga objektid aeguvad. Kui müüdud objekti leht lihtsalt kustub, kaob ka see liiklus. Parem on näidata müüdud staatust koos sarnaste objektidega või suunata aadress piirkonna lehele. Piirkonna ja objektitüübi lehed on need, mis toovad portaali otsingust püsivat liiklust.',
      ],
      example: {
        title: 'Näide: äripindade portaal Tallinna ja Tartu jaoks',
        text: 'Oletame, et portaal koondab kontori-, lao- ja kaubanduspindade üürikuulutusi. Kuulutajad on peamiselt kinnisvarahaldurid ja maaklerid, kes saadavad objektid XML-vooga. Ostja filtreerib pinna, ruutmeetri hinna, korruse ja parkimise järgi ning näeb tulemusi kaardil. Esiletõstetud kuulutuse eest maksab kuulutaja veebis pangalingi või kaardiga. Objekti leht näitab ka korruseplaani, kui see on lisatud, ning ostja saab salvestada otsingu ja saada e-kirja, kui sobiv pind lisandub. Aegunud kuulutused peidetakse automaatselt, kui kuulutaja neid ei uuenda.',
        scope: [
          'Objektitüübi põhised väljad ja filtrid',
          'XML-import maakleritele',
          'Kuulutuse vorm eraisikutele',
          'Tasulised esiletõstmised',
          'Piirkonna- ja tüübilehed SEO jaoks',
        ],
      },
      process: [
        { t: 'Nišš ja andmemudel', d: 'Lepime kokku objektitüübid ja väljad, mille järgi sinu sihtrühm päriselt otsib.' },
        { t: 'Prototüüp', d: 'Klõpsatav otsing, objekti leht ja kuulutuse lisamine enne arendust.' },
        { t: 'Arendus ja import', d: 'Ehitame portaali ja testime seda päris objektide ning esimese kuulutaja vooga.' },
        { t: 'Täitmine ja käivitus', d: 'Portaal avatakse siis, kui sees on piisavalt objekte, et ostjal oleks mida vaadata.' },
      ],
      pricing: [
        'Platvormide hinnad algavad 2 500 eurost, aga kuulutajate kontode ja impordiga portaal on keerukam kui lihtne objektinimekiri. Sellise portaali hinna saad pärast kaardistust, kui on selge, mitu objektitüüpi, mitu importi ja millised maksed on vaja.',
        'Hinda mõjutavad veel kaardi ja otsingu nõuded, keelte arv, modereerimise töövoog ning see, kas kuulutuste eest võetakse tasu. Kõige odavam on alustada ühest objektitüübist ja lisada teisi siis, kui esimene töötab.',
      ],
      faqs: [
        { q: 'Kuidas saada portaali esimesed kuulutused?', a: 'Tavaliselt kokkuleppel mõne maakleri või halduriga, kelle objektid tulevad sisse importiga. Tühja portaali ostjad ei leia ega jää.' },
        { q: 'Mis saab müüdud objektide lehtedest?', a: 'Need saavad müüdud staatuse või suunatakse piirkonna lehele, et Google’i liiklus ei kaoks.' },
        { q: 'Kas portaali saab avada ka vene ja inglise keeles?', a: 'Jah. Liides tõlgitakse ja kuulutaja saab soovi korral lisada kirjelduse mitmes keeles.' },
      ],
    },
    en: {
      body: [
        'Estonia’s general property portals are well established, so a new portal usually grows in a narrower niche: commercial space, land plots, new developments, summer homes, rentals or a single region. That kind of portal wins when it shows information the big portals don’t and when search follows the way that niche’s buyers think.',
        'A land buyer, for example, wants to filter by zoning, plot size and grid connection, while a commercial tenant filters by price per square metre, parking and access. When fields are designed per property type, advertisers fill them in without free text and buyers can filter on them. Flat and house listings should also carry the energy label class.',
        'Advertisers come in two groups. Agents already keep listings in their own system and won’t enter them twice, so they need import via XML feed or API. Private sellers add listings by hand and need a simple form where photos upload from a phone. Either way moderation is needed so duplicate and expired listings don’t pile up.',
        'Every listing is its own page for Google, but listings expire. If a sold listing’s page simply disappears, so does its traffic. It’s better to show a sold status with similar listings, or redirect the URL to the area page. Area and property-type pages are what bring a portal lasting search traffic.',
      ],
      example: {
        title: 'Example: a commercial property portal for Tallinn and Tartu',
        text: 'Suppose the portal gathers office, warehouse and retail rental listings. Advertisers are mainly property managers and agents who send listings by XML feed. Tenants filter by size, price per square metre, floor and parking and see results on a map. Advertisers pay online for featured listings by bank link or card. The listing page shows a floor plan if one is added, and tenants can save a search and get an email when a matching space appears. Expired listings are hidden automatically if the advertiser doesn’t renew them.',
        scope: [
          'Fields and filters per property type',
          'XML import for agents',
          'Listing form for private sellers',
          'Paid featured listings',
          'Area and type pages for SEO',
        ],
      },
      process: [
        { t: 'Niche and data model', d: 'We agree on property types and the fields your audience actually searches by.' },
        { t: 'Prototype', d: 'Clickable search, listing page and add-listing flow before development.' },
        { t: 'Development and import', d: 'We build the portal and test it with real listings and the first advertiser’s feed.' },
        { t: 'Filling and launch', d: 'The portal opens once it holds enough listings for buyers to browse.' },
      ],
      pricing: [
        'Platforms start from €2,500, but a portal with advertiser accounts and imports is more complex than a simple listing page. You get its price after mapping, once the number of property types, imports and payment needs is clear.',
        'Map and search requirements, the number of languages, the moderation workflow and whether listings are paid also affect the price. The cheapest route is to start with one property type and add others once the first works.',
      ],
      faqs: [
        { q: 'How do we get the first listings?', a: 'Usually through an agreement with an agent or property manager whose listings come in by import. Buyers won’t find or stay on an empty portal.' },
        { q: 'What happens to sold listing pages?', a: 'They get a sold status or redirect to the area page so Google traffic isn’t lost.' },
        { q: 'Can the portal run in Russian and English too?', a: 'Yes. The interface is translated and advertisers can add descriptions in several languages if they want.' },
      ],
    },
  },

  // ======================= ESTATE AGENCY PORTAL =======================
  maakleriportaal: {
    et: {
      body: [
        'Maakleribüroo portaal on mõeldud büroole, kus töötab mitu maaklerit ja kus koduleht peaks olema rohkem kui visiitkaart. Tavaline probleem on, et objektid on maakleri CRM-is, kuulutused KV.ee-s ja City24-s ning büroo kodulehel on nimekiri, mida keegi käsitsi uuendab või mis ei uuene üldse.',
        'Büroos vahetuvad inimesed. Kui maakler lahkub, peavad tema objektid ja pooleliolevad päringud liikuma kolleegile, ilma et kodulehele jääks katkine profiil. Portaalis on objekt seotud büroo, mitte ainult inimesega, nii et juht saab vastutaja ühe valikuga ümber määrata.',
        'Uued müüjad on büroo jaoks kõige väärtuslikumad kontaktid. Hindamispäringu vormis küsitakse aadressi, objekti tüüpi ja müügi ajakava ning päring jõuab piirkonna eest vastutava maakleri juurde. Kuna need on isikuandmed, peab vormil olema selge nõusolek ja andmeid ei hoita kauem, kui vaja.',
        'Igapäevaselt lisab maakler objekti oma tavapärases süsteemis ja see ilmub büroo lehele ise. Päringud tulevad tema postkasti koos objekti lingiga ning juht näeb kuu lõpus, mitu päringut iga maakler sai ja kust need tulid. Tallinnas ja Ida-Virumaal on sageli vaja ka venekeelset vaadet. Objekti lehelt saab ostja broneerida näitamise aja või küsida lisainfot ning maakler näeb, kas huviline on varem büroo teisi objekte vaadanud.',
      ],
      example: {
        title: 'Näide: kaheksa maakleriga büroo Tartus',
        text: 'Kujutame ette bürood, mille maaklerid kasutavad ühist kinnisvaratarkvara ja avaldavad kuulutused suurtes portaalides. Büroo kodulehel on vana nimekiri ning hindamispäringud tulevad üldisele e-postile, kust need jäävad vahel vastamata. Uues portaalis tulevad objektid tarkvarast ise, igal maakleril on profiil ja hindamispäring jõuab piirkonna maaklerini. Kui maakler ei ole päringut tööpäeva jooksul avanud, saab juht teavituse. Iga Tartu linnaosa jaoks on leht, kus on piirkonna müügis objektid ja büroo varasemad tehingud seal.',
        scope: [
          'Objektide import olemasolevast tarkvarast',
          'Maaklerite profiilid ja objektide ümbermääramine',
          'Hindamispäringu vorm ja suunamine',
          'Piirkonna lehed Tartu linnaosadele',
          'Kuu ülevaade päringutest',
        ],
      },
      process: [
        { t: 'Büroo töövoog', d: 'Vaatame üle, kus objektid praegu elavad ja kuidas päringud maaklerite vahel liiguvad.' },
        { t: 'Andmete ühendus', d: 'Ühendame objektid kinnisvaratarkvarast või portaalidest, kui neil on liides.' },
        { t: 'Profiilid ja vormid', d: 'Maaklerid kontrollivad oma profiili ja proovime hindamispäringu suunamist läbi.' },
        { t: 'Avamine ja koolitus', d: 'Näitame büroo juhile ja maakleritele, kuidas portaali hallata.' },
      ],
      pricing: [
        'Maakleribüroo portaal on platvorm ja platvormid algavad 2 500 eurost. Hind sõltub eelkõige sellest, kust objektid tulevad. Kui büroo tarkvaral on liides, on ühendus lihtne. Kui objekte tuleb hoida mitmes kohas, kulub kaardistusele ja arendusele rohkem aega.',
        'Lisaks mõjutavad hinda maaklerite arv ja õigused, piirkonna lehtede maht, keelte arv ja see, kas portaal peab tegema ka CRM-i tööd. Arendus võtab tavaliselt 4–8 nädalat.',
      ],
      faqs: [
        { q: 'Mis juhtub, kui maakler büroost lahkub?', a: 'Juht määrab tema objektid ja päringud teisele maaklerile ning profiil eemaldatakse lehelt.' },
        { q: 'Kas maakleri profiil saab olla Google’is leitav?', a: 'Jah. Iga maakleri profiil on eraldi leht tema nime, piirkonna ja objektidega.' },
        { q: 'Kas hindamispäringu vorm vastab GDPR-ile?', a: 'Vorm küsib ainult vajalikke andmeid, selget nõusolekut ja andmed liiguvad turvaliselt. Säilitamise aja lepime kokku sinuga.' },
      ],
    },
    en: {
      body: [
        'An estate agency portal is for agencies with several agents whose website should be more than a business card. The usual problem is that listings sit in the agent’s CRM, ads run on KV.ee and City24, and the agency website shows a list someone updates by hand, or that never updates at all.',
        'People move between agencies. When an agent leaves, their listings and open enquiries have to pass to a colleague without leaving a broken profile on the website. In the portal a listing belongs to the agency, not only to a person, so a manager can reassign it with one choice.',
        'New sellers are the agency’s most valuable contacts. The valuation form asks for the address, property type and selling timeline, and the request reaches the agent responsible for that area. Because this is personal data, the form needs clear consent and data is not kept longer than necessary.',
        'Day to day an agent adds a listing in their usual system and it appears on the agency site by itself. Enquiries arrive in their inbox with a link to the listing, and at month end the manager sees how many enquiries each agent got and where they came from. In Tallinn and Ida-Viru County a Russian-language view is often needed too. From the listing page a buyer can book a viewing or ask for more details, and the agent sees whether the person has looked at the agency’s other listings before.',
      ],
      example: {
        title: 'Example: an eight-agent agency in Tartu',
        text: 'Imagine an agency whose agents use shared real estate software and publish ads on the major portals. The agency website has an outdated list, and valuation requests land in a general inbox where some go unanswered. In the new portal listings come from the software automatically, every agent has a profile and valuation requests reach the area’s agent. If an agent hasn’t opened a request within a working day, the manager is notified. Each Tartu district has a page with listings for sale there and the agency’s past deals in that area.',
        scope: [
          'Listing import from existing software',
          'Agent profiles and listing reassignment',
          'Valuation form and routing',
          'Area pages for Tartu districts',
          'Monthly enquiry overview',
        ],
      },
      process: [
        { t: 'Agency workflow', d: 'We review where listings live today and how enquiries move between agents.' },
        { t: 'Data connection', d: 'We connect listings from your real estate software or portals, if they have an API.' },
        { t: 'Profiles and forms', d: 'Agents check their profiles and we test valuation request routing.' },
        { t: 'Launch and training', d: 'We show the manager and agents how to run the portal.' },
      ],
      pricing: [
        'An agency portal is a platform, and platforms start from €2,500. The price depends mostly on where listings come from. If your agency software has an API, the connection is straightforward. If listings live in several places, mapping and development take longer.',
        'The number of agents and permissions, the volume of area pages, the number of languages and whether the portal also has to do CRM work affect the price too. Development usually takes 4–8 weeks.',
      ],
      faqs: [
        { q: 'What happens when an agent leaves?', a: 'The manager reassigns their listings and enquiries to another agent and the profile is removed from the site.' },
        { q: 'Can an agent’s profile be findable on Google?', a: 'Yes. Each agent profile is its own page with their name, area and listings.' },
        { q: 'Is the valuation form GDPR compliant?', a: 'The form asks only for necessary data and clear consent, and data is transferred securely. We agree the retention period with you.' },
      ],
    },
  },

  // ======================= CONSTRUCTION =======================
  ehitus: {
    et: {
      body: [
        'Ehitus- ja remondifirma kodulehel on tavaliselt kaks väga erinevat lugejat. Eraklient otsib vannitoa remonti või katuse vahetust ja tahab näha pilte ning aru saada hinnatasemest. Korteriühistu juhatus või peatöövõtja otsib aga partnerit suuremale tööle ja vaatab referentse, tegevuslube ja seda, kas firma suudab tähtajast kinni pidada.',
        'Eestis on ehitustööde nõudlus hooajaline. Katuse- ja fassaaditööde päringud tulevad kevadel, sisetööd käivad aasta läbi. Kodulehe sisu ja reklaami saab ajastada nii, et õige teenus on nähtaval siis, kui inimesed seda otsivad, mitte augustis, kui graafik on juba täis.',
        'Usaldust loovad konkreetsed asjad: objektid koos asukoha, aja ja tööde kirjeldusega, MTR-i registreeringu number, kui see on teie tegevuse jaoks olemas, ning kirjalik garantii info. Üldised laused kvaliteedist ei aita. Parem on näidata ühte korralikult kirjeldatud objekti kui kahtekümmet pilti ilma selgituseta.',
        'Päringuvorm peab sobima inimesele, kes seisab objektil telefoniga. Ta teeb kaks pilti, märgib ligikaudse pindala ja postiindeksi ning saadab. Sinu jaoks on päringus kohe olemas see, mille pärast muidu tagasi helistaksid. Kui kasutad hinnakalkulaatorit, saab see anda ruutmeetri põhise vahemiku ja jätta täpse hinna ülevaatuse järele.',
      ],
      example: {
        title: 'Näide: katuse- ja fassaaditööde firma Harjumaal',
        text: 'Oletame, et firma teeb plekk- ja kivikatuseid ning fassaadi soojustust. Praegu on kodulehel üks leht kõigi teenustega ja päringud tulevad telefonile. Uuel lehel on igal katusetüübil ja fassaaditööl eraldi leht koos tehtud objektidega, eraldi leht korteriühistutele ning päringuvorm piltide ja pindalaga. Kevadel saab samade objektipiltidega käivitada Meta reklaami. Korteriühistu lehel on kirjas, kuidas käib ühistu otsus, pakkumine ja tööde ajakava, ning sealt saab alla laadida näidispakkumise. Uue objekti lisab töödejuhataja pärast tööde lõppu ise.',
        scope: [
          'Teenuste lehed katusetüüpide kaupa',
          'Objektide galerii koos kirjeldustega',
          'Eraldi leht korteriühistutele',
          'Päringuvorm piltide ja pindalaga',
          'Piirkonnad, kus töid teete',
        ],
      },
      process: [
        { t: 'Teenused ja piirkonnad', d: 'Paneme paika, milliseid töid ja millistes piirkondades tahad rohkem saada.' },
        { t: 'Objektide kogumine', d: 'Valime välja parimad tehtud tööd ja kirjutame neile lühikesed kirjeldused.' },
        { t: 'Leht ja päringuvorm', d: 'Ehitame teenuste lehed ja vormi, mis küsib õiget infot esimese korraga.' },
        { t: 'Hooaja plaan', d: 'Lepime kokku, millal milliseid teenuseid esile tõsta ja reklaamida.' },
      ],
      pricing: [
        'Kodulehed algavad 900 eurost ja see sisaldab ettevõtte kodulehte kuni 6 lehega. Ehitusfirmal on teenuseid sageli rohkem ja iga oluline teenus väärib eraldi lehte, nii et lõplik hind sõltub teenuste ja objektide lehtede arvust.',
        'Hinda mõjutab ka hinnakalkulaator, mille keerukus sõltub sinu hinnaloogikast, ning see, kas päringud peavad liikuma edasi CRM-i või tabelisse. Kodulehe valmimine võtab tavaliselt 2–4 nädalat, kalkulaatoriga veidi kauem.',
      ],
      faqs: [
        { q: 'Mis siis, kui meil pole häid objektipilte?', a: 'Alustada saab sellega, mis on olemas, ja lisada uusi objekte jooksvalt. Tasub harjuda tegema enne ja pärast pilti igal objektil.' },
        { q: 'Kas kodulehel peaks hinda näitama?', a: 'Ruutmeetri põhine vahemik aitab sageli rohkem kui „hind kokkuleppel“. Täpne hind tuleb ikka pärast ülevaatust.' },
        { q: 'Kas leht sobib ka peatöövõtjatele alltöövõtja otsimisel?', a: 'Jah, kui sellel on eraldi info suuremate tööde, meeskonna võimekuse ja referentside kohta.' },
      ],
    },
    en: {
      body: [
        'A construction or renovation company website usually has two very different readers. A private client looking for a bathroom renovation or a new roof wants photos and a sense of the price level. A housing association board or a main contractor looking for a partner on a bigger job checks references, licences and whether the company can keep deadlines.',
        'In Estonia construction demand is seasonal. Roofing and facade enquiries come in spring, while interior work runs all year. Website content and ads can be timed so the right service is visible when people search for it, not in August when the schedule is already full.',
        'Trust comes from specifics: projects with location, timing and a description of the work, your Register of Economic Activities (MTR) number if your activity requires one, and written warranty terms. Generic lines about quality don’t help. One properly described project beats twenty photos without explanation.',
        'The enquiry form has to suit someone standing on site with a phone. They take two photos, note the rough area and postcode and send it. You get what you would otherwise call back to ask. If you use a price calculator, it can give a per-square-metre range and leave the exact price for the site visit.',
      ],
      example: {
        title: 'Example: a roofing and facade company in Harju County',
        text: 'Suppose the company installs metal and tile roofs and insulates facades. Today the website has one page for all services and enquiries come by phone. On the new site each roof type and facade job has its own page with completed projects, there’s a separate page for housing associations, and an enquiry form takes photos and area. In spring the same project photos can run as Meta ads. The housing association page explains how the association’s decision, the quote and the work schedule go, and offers a sample quote to download. The site manager adds each new project after the job is finished.',
        scope: [
          'Service pages per roof type',
          'Project gallery with descriptions',
          'A separate page for housing associations',
          'Enquiry form with photos and area',
          'The areas where you work',
        ],
      },
      process: [
        { t: 'Services and areas', d: 'We set which jobs, in which areas, you want more of.' },
        { t: 'Collecting projects', d: 'We pick your best completed work and write short descriptions for each.' },
        { t: 'Site and enquiry form', d: 'We build the service pages and a form that asks for the right information first time.' },
        { t: 'Season plan', d: 'We agree when to highlight and advertise which services.' },
      ],
      pricing: [
        'Websites start from €900, which covers a company website of up to 6 pages. Construction firms often have more services, and each important one deserves its own page, so the final price depends on the number of service and project pages.',
        'A price calculator also affects the price, with complexity depending on your pricing logic, as does whether enquiries need to flow into a CRM or spreadsheet. A website usually takes 2–4 weeks, a little longer with a calculator.',
      ],
      faqs: [
        { q: 'What if we don’t have good project photos?', a: 'Start with what you have and add projects as you go. It pays to make before and after photos a habit on every job.' },
        { q: 'Should the website show prices?', a: 'A per-square-metre range often helps more than “price on request”. The exact price still comes after the site visit.' },
        { q: 'Does the site work for main contractors looking for subcontractors?', a: 'Yes, if it has separate information on larger jobs, team capacity and references.' },
      ],
    },
  },

  // ======================= BEAUTY SALON =======================
  ilusalong: {
    et: {
      body: [
        'Ilusalongi koduleht on mõeldud juuksurile, küünetehnikule, kosmeetikule, ripsmetehnikule või mitme meistriga salongile. Enamik kliente leiab salongi Instagramist või Google’i kaardilt, nii et koduleht on koht, kuhu nad tulevad hindu kontrollima ja aega broneerima. Kui need kaks asja on raskesti leitavad, kirjutatakse otsesõnum ja jäädakse vastust ootama.',
        'Salongi broneerimine on keerulisem, kui paistab. Teenustel on eri kestus, värvimise ja lõikuse vahele võib olla vaja pausi ning sama teenus maksab eri meistri juures erinevalt. Juuksevärvi puhul teevad paljud salongid enne esimest värvimist allergiatesti. Broneeringusüsteem peab neid reegleid teadma, muidu tuleb aegu käsitsi ümber tõsta.',
        'Tulemata jätmine on salongi jaoks otsene kahju, sest aeg jääb tühjaks. Meeldetuletus päev enne aitab, pikemate teenuste puhul saab lisada ettemaksu või broneerimistasu ning selged tühistamise tingimused. Kinkekaardid müüvad kõige rohkem enne jõule, sõbrapäeva ja emadepäeva, seega peab nende ostmine töötama ka telefonist.',
        'Igapäevaselt näeb meister oma graafikut telefonis, klient saab kinnituse ja meeldetuletuse ning administraator ei pea iga aega telefonis kokku leppima. Kui salongi kliendid räägivad ka vene või inglise keelt, saab broneerimise teha mitmekeelseks. Iga meistri lehel on tema tööde pildid, sest klient valib sageli konkreetse inimese, mitte salongi. Kui meister lahkub, eemaldad tema profiili ja tulevased ajad jagatakse teistele.',
      ],
      example: {
        title: 'Näide: neljameistriga juuksurisalong Pärnus',
        text: 'Kujutame ette salongi, kus aegu broneeritakse praegu telefoni ja Instagrami sõnumitega ning üks meister haldab paberkalendrit. Uuel lehel on hinnakiri meistrite kaupa, iga meistri tööde galerii ja online-broneering, mis arvestab teenuse kestust ja pause. Pikemate värvitööde jaoks küsitakse broneerimistasu ning kinkekaarti saab osta ja kohe e-postiga saata. Uue kliendi esimese värvimise eel küsitakse allergiatesti aega. Salongi omanik näeb ühest vaatest kõigi nelja meistri koormust ja saab puhkuste ajal ajad ümber jagada. Instagrami profiilis on üks link, mis viib otse broneerimisse.',
        scope: [
          'Hinnakiri meistrite ja kestuste kaupa',
          'Online-broneering koos pausidega',
          'Broneerimistasu pikematele teenustele',
          'Meeldetuletused e-posti või SMS-iga',
          'Kinkekaartide müük',
        ],
      },
      process: [
        { t: 'Teenused ja reeglid', d: 'Paneme kirja kõik teenused, kestused, pausid ja tühistamise tingimused.' },
        { t: 'Broneerimise valik', d: 'Otsustame, kas kasutame sinu praegust programmi või seadistame uue.' },
        { t: 'Kujundus ja pildid', d: 'Leht saab salongi stiili ning meistrite tööd tulevad Instagramist või uutest fotodest.' },
        { t: 'Käivitus', d: 'Broneerimislink läheb Instagrami ja Google’i ettevõtteprofiili.' },
      ],
      pricing: [
        'Kodulehed algavad 900 eurost ning väiksema salongi leht koos teenuste, hinnakirja ja meistrite lehtedega mahub sageli sinna sisse. Kui broneerimine tuleb olemasolevast programmist, on lisatöö väike.',
        'Hind tõuseb, kui on vaja eraldi broneerimissüsteemi koos ettemaksete, kinkekaartide ja mitme asukohaga, või kui leht peab olema mitmes keeles. Koduleht valmib tavaliselt 2–4 nädalaga.',
      ],
      faqs: [
        { q: 'Kas meister saab ise oma vabu aegu muuta?', a: 'Jah. Iga meister saab oma graafikut ja puhkusi hallata ning muudatus jõuab broneerimisse kohe.' },
        { q: 'Kas klient saab broneeringu ise tühistada?', a: 'Jah, sinu määratud aja jooksul enne visiiti. Hiljem tühistamine käib sinu reeglite järgi.' },
        { q: 'Kas sama broneerimine töötab ka Instagramis?', a: 'Jah. Broneerimislingi saab lisada profiili, lugudesse ja Google’i ettevõtteprofiili.' },
      ],
    },
    en: {
      body: [
        'A salon website is for hairdressers, nail technicians, beauticians, lash artists and multi-stylist salons. Most clients find a salon on Instagram or Google Maps, so the website is where they come to check prices and book. If those two things are hard to find, they send a DM and wait for a reply.',
        'Salon booking is more complicated than it looks. Services have different durations, colouring and cutting may need a gap in between, and the same service costs differently with different stylists. For hair colour many salons do an allergy test before the first appointment. The booking system has to know these rules, or appointments have to be shuffled by hand.',
        'A no-show is a direct loss because the slot stays empty. A reminder the day before helps, and for longer services you can add a prepayment or booking fee with clear cancellation terms. Gift cards sell most before Christmas, Valentine’s Day and Mother’s Day, so buying one has to work on a phone.',
        'Day to day each stylist sees their schedule on their phone, the client gets a confirmation and reminder, and the receptionist doesn’t have to agree every slot on the phone. If your clients also speak Russian or English, booking can be multilingual. Each stylist’s page shows their work, because clients often choose a specific person rather than a salon. If a stylist leaves, you remove their profile and future appointments are passed to others.',
      ],
      example: {
        title: 'Example: a four-stylist hair salon in Pärnu',
        text: 'Imagine a salon where appointments are booked by phone and Instagram messages and one stylist keeps a paper diary. The new site has a price list per stylist, a gallery of each stylist’s work and online booking that accounts for service duration and gaps. Longer colour jobs require a booking fee, and a gift card can be bought and emailed instantly. A new client’s first colouring prompts them to book an allergy test. The owner sees all four stylists’ workload in one view and can redistribute appointments during holidays. The Instagram profile has a single link that goes straight to booking.',
        scope: [
          'Price list by stylist and duration',
          'Online booking with gaps',
          'Booking fee for longer services',
          'Reminders by email or SMS',
          'Gift card sales',
        ],
      },
      process: [
        { t: 'Services and rules', d: 'We list every service, duration, gap and cancellation term.' },
        { t: 'Choosing the booking tool', d: 'We decide whether to use your current software or set up a new one.' },
        { t: 'Design and photos', d: 'The site follows your salon’s style and stylists’ work comes from Instagram or new photos.' },
        { t: 'Launch', d: 'The booking link goes to Instagram and your Google Business Profile.' },
      ],
      pricing: [
        'Websites start from €900, and a smaller salon’s site with services, price list and stylist pages often fits within that. If booking comes from your existing software, the extra work is small.',
        'The price rises if you need a separate booking system with prepayments, gift cards and several locations, or if the site has to be in several languages. A website usually takes 2–4 weeks.',
      ],
      faqs: [
        { q: 'Can stylists change their own availability?', a: 'Yes. Each stylist manages their schedule and holidays, and changes reach booking instantly.' },
        { q: 'Can clients cancel themselves?', a: 'Yes, up to the cut-off you set before the visit. Later cancellations follow your rules.' },
        { q: 'Does the same booking work on Instagram?', a: 'Yes. The booking link can go in your profile, stories and Google Business Profile.' },
      ],
    },
  },

  // ======================= CLINIC =======================
  kliinik: {
    et: {
      body: [
        'Kliiniku koduleht on mõeldud hambakliinikule, füsioterapeudile, silmakliinikule, ilukirurgile või muule erapraksisele. Patsient tuleb lehele tavaliselt kahel põhjusel: tal on mure ja ta tahab teada, kas siin aidatakse, või tal on juba otsus tehtud ja ta otsib vaba aega. Leht peab teenima mõlemat ilma, et ta peaks helistama.',
        'Hambaravis küsitakse Eestis sageli, kas kliinikul on Tervisekassa leping ja kuidas hambaravihüvitist kasutada. Kui see info on lehel selgelt kirjas, väheneb telefonikõnede hulk. Protseduuri lehel tasub kirjeldada, kuidas visiit käib, kui kaua see võtab, mida pärast arvestada ja millest hind sõltub.',
        'Terviseandmed on GDPR-i järgi eriliiki isikuandmed. Seetõttu ei küsi broneerimis- ega kontaktvorm diagnoosi ega haiguslugu, vaid ainult nime, kontakti ja visiidi põhjuse üldiselt. Kõik andmed liiguvad krüpteeritult. Arstide profiilidel saab näidata haridust, keeli ja tervishoiutöötajate registri koodi, mis aitab patsiendil usaldust tunda.',
        'Kliiniku tekstides ei luba me ravitulemust ega kasuta enne-pärast pilte ilma patsiendi nõusolekuta. AI-vestlusaken võib vastata lahtiolekuaegade, hindade ja ettevalmistuse küsimustele, kuid meditsiiniline küsimus suunatakse alati arstile või registratuuri. Sama kehtib hinnalehe kohta: kui täpne hind selgub alles pärast läbivaatust, kirjutame lehele, millest see sõltub, mitte suvalise algushinna.',
      ],
      example: {
        title: 'Näide: kolme kabinetiga hambakliinik Tartus',
        text: 'Oletame, et kliinik pakub üldhambaravi, suuhügieeni ja implantaate ning patsiente on nii eesti- kui venekeelseid. Praegu küsitakse telefonis peamiselt hindu ja hüvitise kohta. Uuel lehel on iga protseduuri kohta eraldi leht, selge info Tervisekassa hüvitise kohta, arstide profiilid ja broneerimine, mis ühendub kliiniku süsteemiga, kui sellel on liides. Implantaatide lehel on kirjas ravi etapid ja nende ligikaudne kestus, sest patsient tahab teada, mitu visiiti teda ees ootab. Registratuuri telefon ja kiire tee broneerimisse on nähtaval igal lehel.',
        scope: [
          'Protseduuride lehed koos hinnainfoga',
          'Hüvitise selgitus eraldi lehel',
          'Arstide profiilid koos keeltega',
          'Broneering ilma terviseandmeteta',
          'Eesti- ja venekeelne versioon',
        ],
      },
      process: [
        { t: 'Patsiendi küsimused', d: 'Kogume registratuurist küsimused, mida patsiendid kõige sagedamini esitavad.' },
        { t: 'Protseduuride sisu', d: 'Kirjutame protseduuride lehed koos arstidega, et info oleks õige ja arusaadav.' },
        { t: 'Broneerimine ja andmed', d: 'Ühendame broneerimise ja kontrollime, et vormid ei kogu üleliigseid andmeid.' },
        { t: 'Kohalik nähtavus', d: 'Korrastame Google’i ettevõtteprofiili ja seome selle kodulehega.' },
      ],
      pricing: [
        'Kodulehed algavad 900 eurost, mis sisaldab kuni 6 lehte. Kliinikul on tavaliselt rohkem protseduure ja igaüks väärib eraldi lehte, nii et hind sõltub peamiselt protseduuride lehtede arvust ja sellest, kas tekstid kirjutame meie koos arstidega.',
        'Hinda mõjutavad veel broneerimissüsteemi liides, keelte arv ning AI-vestlusaken, kui seda soovid. Koduleht valmib tavaliselt 2–4 nädalaga, kuid arstide sisukinnitused võivad aega pikendada.',
      ],
      faqs: [
        { q: 'Kas arstid peavad tekstid ise kirjutama?', a: 'Ei pea. Kirjutame mustandi ja arst kontrollib, et meditsiiniline info oleks õige.' },
        { q: 'Kas patsiendi arvustusi tohib lehel näidata?', a: 'Jah, kui need on avalikud, näiteks Google’i arvustused, või kui patsient on andnud nõusoleku.' },
        { q: 'Kas leht peab vastama ligipääsetavuse nõuetele?', a: 'Teeme lehe loetavaks ka ekraanilugejaga ja piisava kontrastiga. See on oluline, sest kliiniku patsientide seas on ka vanemaid inimesi.' },
      ],
    },
    en: {
      body: [
        'A clinic website is for dental clinics, physiotherapists, eye clinics, cosmetic surgeons and other private practices. Patients usually come to the site for one of two reasons: they have a concern and want to know if you can help, or they have already decided and are looking for a free slot. The site has to serve both without them needing to call.',
        'In Estonian dentistry patients often ask whether the clinic has a contract with the Health Insurance Fund (Tervisekassa) and how to use the adult dental benefit. When that is clearly explained on the site, phone calls drop. A treatment page should describe how the visit goes, how long it takes, what to expect afterwards and what the price depends on.',
        'Under GDPR, health data is a special category of personal data. So booking and contact forms don’t ask for a diagnosis or medical history, only name, contact and a general reason for the visit. All data is encrypted in transit. Doctor profiles can show education, languages and the healthcare professional register code, which helps patients trust you.',
        'In clinic copy we never promise treatment results or use before and after photos without patient consent. An AI chat window can answer questions about opening hours, prices and preparation, but medical questions always go to a doctor or reception. The same applies to the price list: if the exact price is only known after an examination, the page explains what it depends on rather than showing an arbitrary starting price.',
      ],
      example: {
        title: 'Example: a three-surgery dental clinic in Tartu',
        text: 'Suppose the clinic offers general dentistry, hygiene and implants, with both Estonian- and Russian-speaking patients. Most phone calls today are about prices and the dental benefit. The new site has a page per treatment, clear information on the Tervisekassa benefit, doctor profiles and booking that connects to the clinic system if it has an API. The implant page lists the treatment stages and their rough duration, because patients want to know how many visits lie ahead. Reception’s phone number and a quick route to booking are visible on every page.',
        scope: [
          'Treatment pages with price information',
          'A separate page explaining the benefit',
          'Doctor profiles with languages',
          'Booking without health data',
          'Estonian and Russian versions',
        ],
      },
      process: [
        { t: 'Patient questions', d: 'We collect the questions patients ask reception most often.' },
        { t: 'Treatment content', d: 'We write treatment pages with your doctors so information is correct and clear.' },
        { t: 'Booking and data', d: 'We connect booking and check forms don’t collect unnecessary data.' },
        { t: 'Local visibility', d: 'We tidy your Google Business Profile and link it to the website.' },
      ],
      pricing: [
        'Websites start from €900, covering up to 6 pages. A clinic usually has more treatments, each worth its own page, so the price depends mainly on the number of treatment pages and whether we write the copy with your doctors.',
        'The booking system integration, the number of languages and an AI chat window, if you want one, also affect the price. A website usually takes 2–4 weeks, though doctors’ content approvals can extend that.',
      ],
      faqs: [
        { q: 'Do doctors have to write the copy?', a: 'No. We write a draft and a doctor checks the medical information is correct.' },
        { q: 'Can we show patient reviews?', a: 'Yes, if they are public, such as Google reviews, or the patient has given consent.' },
        { q: 'Does the site need to be accessible?', a: 'We make it readable with screen readers and with enough contrast. That matters because a clinic’s patients include older people.' },
      ],
    },
  },

  // ======================= ACCOMMODATION =======================
  majutus: {
    et: {
      body: [
        'Majutusettevõtte koduleht on mõeldud väikehotellile, külalistemajale, puhkemajale, glämpingule või talumajutusele. Eestis on hooaeg selgelt nähtav: suvi, jaanipäev, aastavahetus ja talvised nädalavahetused on täis, kevadel ja hilissügisel tuleb külalisi aktiivselt otsida. Koduleht peab töötama mõlemal ajal.',
        'Suur osa külalistest leiab sind broneerimisportaalist, aga enne broneerimist otsib nime järgi ka sinu enda lehte. Seal otsustab, kas broneerida otse. Otsebroneeringuks peab olema selge hind, pildid igast toast, info sauna, hommikusöögi, lemmikloomade ja saabumisaja kohta ning makse, mis töötab Eesti pangalinkide ja kaartidega.',
        'Kõige olulisem tehniline asi on saadavus. Kui toad müüakse mitmes kanalis, peab koduleht saama saadavuse samast kohast kui portaalid, tavaliselt kanalihaldurist või broneerimismootorist. Muidu tekib topeltbroneering, mille parandamine maksab rohkem kui üks vahendustasu. Pärast broneeringut saab külaline kinnituse koos saabumise juhiste, ukse koodi või võtme asukoha ja teekirjeldusega, sest maal asuva majutuse leidmine pimedas ei ole alati lihtne.',
        'Majutuse külalised on sageli soomlased, lätlased, sakslased ja venekeelsed külalised, nii et keelte valik sõltub sellest, kust sinu külalised päriselt tulevad. Lisaks tasub teha eraldi lehed sündmustele ja pakettidele, näiteks seminar, sünnipäev või saunaõhtu, sest neid otsitakse Google’ist teistsuguste sõnadega kui tavalist ööbimist.',
      ],
      example: {
        title: 'Näide: kuue toa ja saunamajaga külalistemaja Saaremaal',
        text: 'Kujutame ette külalistemaja, mis müüb tube kahe broneerimisportaali kaudu ja haldab saunamaja broneeringuid telefoni teel. Uuel lehel on iga toa leht, otsebroneering kalendriga, mis saab saadavuse kanalihaldurist, ning saunamaja ja suvepäevade pakettide päringuvorm. Leht on eesti, soome, inglise ja saksa keeles. Toa lehel on kirjas voodite paigutus, saabumise ja lahkumise aeg ning see, kas lemmikloom on lubatud. Kevadeks ja sügiseks tehakse eraldi pakettide leht, näiteks kaks ööd koos saunaõhtuga, mida saab reklaamida Meta kaudu.',
        scope: [
          'Tubade lehed ja suured pildid',
          'Otsebroneering kanalihalduri kaudu',
          'Saunamaja ja pakettide päringud',
          'Neli keelt',
          'Hooajaliste pakkumiste lehed',
        ],
      },
      process: [
        { t: 'Kanalid ja saadavus', d: 'Vaatame üle, kus tube praegu müüakse ja kust koduleht saadavuse võtab.' },
        { t: 'Tubade sisu', d: 'Kogume pildid ja kirjutame toa info nii, et külaline ei peaks küsima.' },
        { t: 'Broneerimine ja makse', d: 'Ühendame broneerimismootori ja teeme proovibroneeringu makse ja tühistamisega.' },
        { t: 'Madalhooaja plaan', d: 'Lepime kokku paketid ja reklaamid, mis toovad külalisi vaiksematel kuudel.' },
      ],
      pricing: [
        'Kodulehed algavad 900 eurost. Väiksema majutuse leht, kus broneering tuleb olemasolevast broneerimismootorist, jääb sageli sellesse suurusjärku. Hinda tõstavad tubade ja pakettide lehtede arv ning keelte arv, sest iga keel tähendab ka tõlgitud ja kontrollitud tekste.',
        'Kui broneerimismootorit pole ja otsebroneering tuleb ehitada ise koos kalendri, hindade ja maksega, on tegu platvormiga ning platvormid algavad 2 500 eurost. Lihtne koduleht valmib tavaliselt 2–4 nädalaga.',
      ],
      faqs: [
        { q: 'Kas kodulehel tohib olla odavam hind kui portaalis?', a: 'See sõltub sinu lepingust portaaliga. Paljud majutused pakuvad otse broneerijale hinna asemel lisaväärtust, näiteks hommikusööki või hilist väljaregistreerimist.' },
        { q: 'Kas saab müüa ka kinkekaarte?', a: 'Jah. Majutuse või saunaõhtu kinkekaarti saab osta veebis ja see saadetakse kohe e-postiga.' },
        { q: 'Kas leht näitab minimaalset ööde arvu?', a: 'Jah, kui broneerimismootor seda toetab. Nädalavahetustele ja pühadele saab määrata eraldi reeglid.' },
      ],
    },
    en: {
      body: [
        'An accommodation website is for small hotels, guesthouses, holiday homes, glamping sites and farm stays. In Estonia the season is obvious: summer, Midsummer, New Year and winter weekends fill up, while spring and late autumn need guests to be actively found. The website has to work in both.',
        'Many guests find you on a booking portal but search your name to find your own site before booking. That’s where they decide whether to book direct. A direct booking needs a clear price, photos of every room, information on sauna, breakfast, pets and arrival time, and payment that works with Estonian bank links and cards.',
        'The most important technical point is availability. If rooms sell through several channels, the website must take availability from the same source as the portals, usually a channel manager or booking engine. Otherwise you get a double booking, which costs more to fix than one commission. After booking the guest gets a confirmation with arrival instructions, a door code or key location and directions, because finding a countryside property in the dark isn’t always easy.',
        'Guests are often Finnish, Latvian, German and Russian-speaking, so the language choice depends on where your guests actually come from. It also pays to create separate pages for events and packages, such as a seminar, birthday or sauna evening, because people search for those on Google with different words than for an ordinary stay.',
      ],
      example: {
        title: 'Example: a six-room guesthouse with a sauna house on Saaremaa',
        text: 'Imagine a guesthouse selling rooms through two booking portals and handling sauna house bookings by phone. The new site has a page for each room, direct booking with a calendar fed by the channel manager, and an enquiry form for the sauna house and company summer day packages. The site runs in Estonian, Finnish, English and German. Each room page lists the bed layout, check-in and check-out times and whether pets are allowed. For spring and autumn there’s a separate packages page, such as two nights with a sauna evening, which can be promoted through Meta ads.',
        scope: [
          'Room pages with large photos',
          'Direct booking via the channel manager',
          'Sauna house and package enquiries',
          'Four languages',
          'Seasonal offer pages',
        ],
      },
      process: [
        { t: 'Channels and availability', d: 'We review where rooms sell today and where the website gets availability.' },
        { t: 'Room content', d: 'We gather photos and write room information so guests don’t need to ask.' },
        { t: 'Booking and payment', d: 'We connect the booking engine and run a test booking with payment and cancellation.' },
        { t: 'Low-season plan', d: 'We agree packages and ads that bring guests in quieter months.' },
      ],
      pricing: [
        'Websites start from €900. A smaller property’s site, with booking from an existing booking engine, often stays in that range. The number of room and package pages and the number of languages raise the price, since every language means translated and checked copy.',
        'If there’s no booking engine and direct booking has to be built with calendar, rates and payment, it becomes a platform, and platforms start from €2,500. A simple website usually takes 2–4 weeks.',
      ],
      faqs: [
        { q: 'Can the website show a lower price than the portal?', a: 'That depends on your portal contract. Many properties offer direct bookers extra value instead of a lower price, such as breakfast or late check-out.' },
        { q: 'Can we sell gift cards?', a: 'Yes. A stay or sauna evening gift card can be bought online and is emailed instantly.' },
        { q: 'Can the site enforce a minimum stay?', a: 'Yes, if the booking engine supports it. Weekends and holidays can have their own rules.' },
      ],
    },
  },

  // ======================= RESTAURANT =======================
  restoran: {
    et: {
      body: [
        'Restorani ja kohviku koduleht on mõeldud kohale, kus menüü muutub tihti ja külalised otsustavad kiiresti. Eestis on paljudes kohtades tööpäeviti lõunapakkumine, mis vahetub iga päev. Kui see on ainult Facebooki postituses või pildina, ei leia Google seda ja külaline peab seda otsima. Kodulehel teksti kujul olev päevapakkumine on mõlemale leitav.',
        'Menüü peab olema tekst, mitte PDF ega foto. Nii loeb seda telefon, tõlkerakendus ja Google ning hinda saab muuta ühe minutiga. Iga roa juures saab märkida allergeenid ja tähised nagu vegan või gluteenivaba. Allergeenide küsimusi tuleb igal juhul, ja kui info on menüüs olemas, säästab see teenindaja aega.',
        'Lauabroneering töötab kõige paremini, kui külaline näeb vabu aegu ega pea helistama. Suuremate seltskondade, eraürituste ja jõulupidude jaoks on vaja eraldi päringuvormi, kus küsitakse inimeste arvu, kuupäeva ja eelarvet. Novembri ja detsembri firmapeod broneeritakse sageli juba sügise alguses, nii et see leht peab varakult valmis olema.',
        'Kui pakud kaasamüüki või kullerit, saab lehelt viidata Woltile või Bolt Foodile või teha oma tellimise, kui marginaal on oluline. Turistide jaoks on vanalinnas ja kuurortides kasulik inglise, soome ja vene keel. Google’i ettevõtteprofiilis peavad lahtiolekuajad olema õiged ka riigipühadel. Kui koht on pühade ajal kinni või lahti teistsuguste aegadega, tasub see kirja panna ka kodulehe avalehele, sest külaline vaatab just seda enne teeleasumist.',
      ],
      example: {
        title: 'Näide: lõunarestoran ja õhtukoht Tartu kesklinnas',
        text: 'Oletame, et restoran pakub tööpäeviti lõunamenüüd ja õhtuti à la carte menüüd ning korraldab eraüritusi tagaruumis. Praegu postitatakse lõunamenüü iga hommik Facebooki pildina. Uuel lehel lisab vahetuse juht lõunapakkumise telefonist, see ilmub kodulehele ja päeva lõpus kaob ise. Õhtumenüü on allergeenidega ning eraürituse päring jõuab otse juhatajale. Tagaruumi lehel on mahutavus, näidismenüüd ja pildid, et firmapeo korraldaja saaks otsuse teha ilma helistamata. Suvel lisatakse terrassi lahtiolekuajad ja hooajamenüü.',
        scope: [
          'Päevapakkumine, mida muudad telefonist',
          'Menüü allergeenide ja tähistega',
          'Lauabroneering',
          'Eraürituste ja firmapidude päring',
          'Eesti, inglise ja soome keel',
        ],
      },
      process: [
        { t: 'Menüü ülesehitus', d: 'Paneme paika menüü kategooriad, allergeenid ja selle, kes ja kui tihti menüüd muudab.' },
        { t: 'Pildid ja kujundus', d: 'Leht saab koha meeleolu ning toidupildid laevad telefonis kiiresti.' },
        { t: 'Broneerimine', d: 'Ühendame broneerimissüsteemi ja eraürituste päringuvormi.' },
        { t: 'Google ja sotsiaalmeedia', d: 'Seome kodulehe ettevõtteprofiili ja Instagramiga, et info oleks kõikjal sama.' },
      ],
      pricing: [
        'Kodulehed algavad 900 eurost ning tavaline restorani leht menüü, broneeringu ja kontaktiga mahub sageli sinna sisse. Hinda mõjutab kõige rohkem see, kui keeruline on menüü: mitu menüüd, mitu keelt ja kui tihti seda muudetakse.',
        'Lisaks mõjutavad hinda oma tellimiskeskkond, kinkekaartide müük ja mitu asukohta. Koduleht valmib tavaliselt 2–4 nädalaga. Kui soovid ka Meta reklaame või sotsiaalmeedia pilte, on need eraldi teenused.',
      ],
      faqs: [
        { q: 'Kas lõunamenüüd saab lisada telefonist?', a: 'Jah. Haldus töötab telefonis, nii et päevapakkumise saab lisada otse köögist.' },
        { q: 'Kas menüü tõlgitakse automaatselt?', a: 'Tõlkeid saab teha AI abil, aga roogade nimed vaatame üle, sest masintõlge ajab neid tihti segi.' },
        { q: 'Kas saame müüa kinkekaarte?', a: 'Jah. Kinkekaardi saab osta veebis ja see saadetakse ostjale kohe e-postiga.' },
      ],
    },
    en: {
      body: [
        'A restaurant or café website is for places where the menu changes often and guests decide fast. Many Estonian places run a weekday lunch offer that changes daily. If it lives only in a Facebook post or as an image, Google can’t find it and guests have to hunt for it. A lunch offer as text on the website is findable by both.',
        'The menu should be text, not a PDF or photo. That way phones, translation apps and Google can read it, and prices change in a minute. Each dish can carry allergens and labels like vegan or gluten-free. Allergen questions come anyway, and having the information in the menu saves your staff time.',
        'Table booking works best when guests see free slots and don’t have to call. Larger parties, private events and Christmas parties need a separate enquiry form asking for headcount, date and budget. Company parties in November and December are often booked in early autumn, so that page needs to be ready early.',
        'If you offer takeaway or delivery, the site can link to Wolt or Bolt Food, or you can run your own ordering if margin matters. In old towns and resorts, English, Finnish and Russian help with tourists. Opening hours in your Google Business Profile must be correct on public holidays too. If you close or change hours over the holidays, put that on the homepage as well, since that’s what guests check before heading out.',
      ],
      example: {
        title: 'Example: a lunch and evening restaurant in central Tartu',
        text: 'Suppose the restaurant serves a weekday lunch menu and an à la carte menu in the evenings, and hosts private events in a back room. Today the lunch menu is posted to Facebook as an image every morning. On the new site the shift manager adds the lunch offer from a phone, it appears on the website and disappears at the end of the day. The evening menu shows allergens, and private event enquiries go straight to the manager. The back room page shows capacity, sample menus and photos so a company party organiser can decide without calling. In summer, terrace hours and a seasonal menu are added.',
        scope: [
          'A lunch offer you edit from your phone',
          'Menu with allergens and labels',
          'Table booking',
          'Private event and company party enquiries',
          'Estonian, English and Finnish',
        ],
      },
      process: [
        { t: 'Menu structure', d: 'We set menu categories, allergens and who updates the menu and how often.' },
        { t: 'Photos and design', d: 'The site carries the place’s atmosphere and food photos load fast on phones.' },
        { t: 'Booking', d: 'We connect your booking system and the private event enquiry form.' },
        { t: 'Google and social', d: 'We link the website with your Business Profile and Instagram so information matches everywhere.' },
      ],
      pricing: [
        'Websites start from €900, and a typical restaurant site with menu, booking and contact often fits within that. The biggest price factor is menu complexity: how many menus, how many languages and how often they change.',
        'Your own ordering system, gift card sales and multiple locations also affect the price. A website usually takes 2–4 weeks. Meta ads and social media visuals are separate services if you want them.',
      ],
      faqs: [
        { q: 'Can we add the lunch menu from a phone?', a: 'Yes. The admin works on mobile, so the daily offer can be added straight from the kitchen.' },
        { q: 'Is the menu translated automatically?', a: 'Translations can be done with AI, but we check dish names because machine translation often gets them wrong.' },
        { q: 'Can we sell gift cards?', a: 'Yes. A gift card can be bought online and is emailed to the buyer instantly.' },
      ],
    },
  },

  // ======================= SEO MIGRATION =======================
  'seo-kolimine': {
    et: {
      body: [
        'Kodulehe kolimine puudutab igaüht, kes vahetab platvormi, näiteks WordPressist, Wixist või vanast e-poe süsteemist uude lahendusse, muudab lehe struktuuri või vahetab domeeni. Mida kauem on vana leht olnud üleval ja mida rohkem sellel on Google’i liiklust, seda rohkem on kaotada.',
        'Eesti lehtedel on mõned oma lõksud. Vanadel aadressidel on sageli täpitähed, mis on kodeeritud kujul nagu %C3%B5, ja uus leht kasutab tavaliselt lihtsustatud aadresse. Need tuleb ükshaaval kaardistada. Mitmekeelsetel lehtedel peavad eesti, vene ja inglise versioon olema omavahel hreflang-märgenditega seotud, muidu võib Google näidata vale keele lehte.',
        'Liiklust ei too ainult lehed. Vanadele aadressidele viitavad Facebooki postitused, Google’i ettevõtteprofiil, reklaamid, partnerite lehed, PDF-id ja meilid. E-poel on lisaks tootelehtede pildid Google’i pildiotsingus. Kaardistus hõlmab ka neid, mitte ainult menüüst nähtavaid lehti.',
        'Kolimise päeval kontrollime suunamised läbi, saadame Search Console’i uue sitemapi ja jälgime, et analüütika ja reklaamide mõõtmine töötaks edasi. Järgmistel nädalatel vaatame Search Console’ist, milliseid vigu Google leiab, ja parandame need kohe. Kolimist tasub ajastada vaiksemale perioodile, mitte e-poe jõulumüügi või majutuse suvehooaja algusesse.',
      ],
      example: {
        title: 'Näide: e-pood kolib WooCommerce’ist uuele platvormile',
        text: 'Kujutame ette e-poodi, millel on umbes 800 toodet eesti ja vene keeles ning mis on WooCommerce’i peal mitu aastat kasvanud. Uue platvormi tootelehtede aadressid on teistsugused ja osa kategooriaid liidetakse. Enne kolimist ekspordime kõik vanad aadressid, märgime liiklust toovad lehed ja seome iga toote, kategooria ja blogipostituse uue aadressiga. Kustutatud toodete aadressid suuname lähimasse kategooriasse, mitte avalehele. Enne avamist proovime suunamised testkeskkonnas läbi ja kontrollime, et suunamiste ahelaid ei tekiks. Pärast avamist võrdleme iga nädal kõige olulisemate lehtede näitamisi ja klikke vana lehe omadega.',
        scope: [
          'Vanade aadresside eksport ja kaardistus',
          'Täpitähtedega aadresside suunamised',
          'Eesti ja vene keele hreflang',
          'Pildid, PDF-id ja välislingid',
          'Jälgimine pärast kolimist',
        ],
      },
      process: [
        { t: 'Vana lehe inventuur', d: 'Kogume kõik aadressid sitemapist, Search Console’ist, analüütikast ja väliste linkide andmetest.' },
        { t: 'Suunamiste tabel', d: 'Iga vana aadress saab uue sihi. Kontrollime tabeli koos sinuga üle enne käivitamist.' },
        { t: 'Kolimise päev', d: 'Suunamised lähevad tööle, kontrollime need läbi ja saadame Google’ile uue sitemapi.' },
        { t: 'Jälgimine', d: 'Pärast kolimist jälgime Search Console’i vigu ja parandame need kohe.' },
      ],
      pricing: [
        'Kolimise hind sõltub eelkõige lehtede arvust ja sellest, kui palju vanad ja uued aadressid erinevad. Kümne lehega ettevõtte koduleht on väike töö, mitme tuhande tootega mitmekeelne e-pood on suur. Domeeni vahetus lisab tööd, sest muuta tuleb ka välised viited ja Google’i tööriistade seaded.',
        'Kui teeme uue lehe ise, on kolimise SEO-pool töö sees. Kodulehed algavad 900 eurost. Kui uue lehe teeb keegi teine, saad kolimise eraldi pakkumise pärast vana lehe ülevaatust.',
      ],
      faqs: [
        { q: 'Kas vanad blogipostitused tasub kaasa võtta?', a: 'Need, millel on liiklust või väliseid linke, tasub kaasa võtta või suunata sarnasele lehele. Täiesti tühjad postitused võib kustutada.' },
        { q: 'Kui kaua suunamised peavad alles jääma?', a: 'Vähemalt aasta, parem veel kauem. Kui need varem eemaldada, kaovad ka väliste linkide väärtus ja vanad järjehoidjad.' },
        { q: 'Kas uus leht peaks avamisel olema täpselt sama sisuga?', a: 'Ei pea, aga suured sisumuudatused ja kolimine korraga teevad põhjuste leidmise raskemaks, kui nähtavus muutub.' },
      ],
    },
    en: {
      body: [
        'A website migration affects anyone switching platform, for example from WordPress, Wix or an old store system to something new, changing the site structure or changing domain. The longer the old site has been live and the more Google traffic it has, the more there is to lose.',
        'Estonian sites have a few traps of their own. Old URLs often contain diacritics, encoded like %C3%B5, while new sites tend to use simplified URLs. Those have to be mapped one by one. On multilingual sites the Estonian, Russian and English versions must be linked with hreflang tags, or Google may show the wrong language.',
        'Traffic doesn’t only come through pages. Facebook posts, your Google Business Profile, ads, partner sites, PDFs and emails all point at old URLs. A store also has product images in Google Images. The mapping covers these too, not just the pages visible in the menu.',
        'On migration day we check every redirect, submit the new sitemap in Search Console and make sure analytics and ad tracking keep working. Over the following weeks we watch which errors Google finds in Search Console and fix them right away. It’s worth timing a migration for a quieter period, not the start of a store’s Christmas rush or a hotel’s summer season.',
      ],
      example: {
        title: 'Example: a store moving from WooCommerce to a new platform',
        text: 'Imagine a store with around 800 products in Estonian and Russian that has grown on WooCommerce over several years. The new platform uses different product URLs and some categories are merged. Before the move we export every old URL, flag the pages that bring traffic and map each product, category and blog post to its new URL. Deleted products are redirected to the nearest category, not the homepage. Before launch we test the redirects in a staging environment and check that no redirect chains form. After launch we compare impressions and clicks of the most important pages with the old site every week.',
        scope: [
          'Export and mapping of old URLs',
          'Redirects for URLs with diacritics',
          'Estonian and Russian hreflang',
          'Images, PDFs and external links',
          'Monitoring after the move',
        ],
      },
      process: [
        { t: 'Old site inventory', d: 'We collect every URL from the sitemap, Search Console, analytics and backlink data.' },
        { t: 'Redirect map', d: 'Every old URL gets a new target. We review the map with you before launch.' },
        { t: 'Migration day', d: 'Redirects go live, we check them and submit the new sitemap to Google.' },
        { t: 'Monitoring', d: 'After the move we watch Search Console errors and fix them right away.' },
      ],
      pricing: [
        'The price of a migration depends mainly on the number of pages and how much old and new URLs differ. A ten-page company website is a small job, a multilingual store with thousands of products is a big one. A domain change adds work, since external links and Google tool settings need updating too.',
        'If we build the new site, the SEO side of the migration is included. Websites start from €900. If someone else builds the new site, you get a separate quote for the migration after we review the old one.',
      ],
      faqs: [
        { q: 'Should old blog posts come along?', a: 'Those with traffic or external links should move or redirect to a similar page. Completely empty posts can be deleted.' },
        { q: 'How long should redirects stay in place?', a: 'At least a year, ideally longer. Removing them early loses the value of external links and breaks old bookmarks.' },
        { q: 'Should the new site launch with exactly the same content?', a: 'Not necessarily, but big content changes during the move make it harder to find the cause if visibility shifts.' },
      ],
    },
  },
};
