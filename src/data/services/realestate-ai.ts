import type { Service } from '../types';

export const realestateAiServices: Service[] = [
  // ---------------------------------------------------------------------------
  // 1. Kinnisvara koduleht / Real estate website
  // ---------------------------------------------------------------------------
  {
    id: 'realestate',
    group: 'realestate',
    related: ['ai-realestate', 'development', 'website'],
    et: {
      slug: 'kinnisvara-koduleht',
      navLabel: 'Kinnisvara koduleht',
      metaTitle: 'Kinnisvara koduleht maaklerile ja büroole | drealm',
      metaDescription:
        'Kinnisvara koduleht maaklerile või büroole: KV.ee ja City24 objektid, maakleri profiil, hindamispäringu vorm ja kiire Google’i nähtavus. Küsi pakkumist.',
      eyebrow: 'Kinnisvara',
      h1: 'Kinnisvara koduleht maaklerile ja kinnisvarabüroole',
      lead:
        'Portaalid toovad ostjaid objektini, aga müüja valib maakleri ikkagi nime ja maine järgi. Teeme kodulehe, mis näitab sinu objekte, tutvustab sind kui spetsialisti ja toob otse sinu postkasti hindamis- ja müügipäringuid.',
      cardText:
        'Koduleht maaklerile või büroole: objektid KV.ee ja City24 voost, maakleri profiil ja hindamispäringu vorm, mis toob uusi müüjaid.',
      problemsTitle: 'Kellele see sobib',
      problems: [
        'Oled maakler, kelle objektid on portaalides, aga omanimelist kodulehte, kuhu klienti suunata, polegi või see on aegunud.',
        'Büroo koduleht näitab vanu või juba müüdud objekte, sest kuulutusi tuleb kahes kohas käsitsi uuendada.',
        'Uued müüjad leiavad sind soovituse kaudu, kuid Google’ist otsides jääd oma piirkonnas teiste büroode varju.',
        'Päringud tulevad telefoni, e-posti ja portaalide kaudu laiali ning osa neist läheb lihtsalt kaotsi.',
        'Tahad, et iga maakleri profiil töötaks eraldi isikliku visiitkaardina, mitte ainult nimena meeskonnalehel.',
      ],
      deliverablesTitle: 'Mida saad',
      deliverables: [
        {
          title: 'Objektid portaalivoost või oma haldusest',
          text: 'Kui sinu CRM või portaalikonto võimaldab XML- või API-väljavõtet, loeme objektid automaatselt sisse ja müüdud kuulutused kaovad ise. Väiksemale büroole sobib lihtne haldusvaade, kus objekti lisamine võtab paar minutit.',
        },
        {
          title: 'Otsing ja filtrid, mis päriselt töötavad',
          text: 'Filtrid tehingutüübi, piirkonna, hinna, tubade arvu ja pinna järgi. Igal objektil on oma aadress, galerii, kaart, energiamärgis ja selge kontaktnupp.',
        },
        {
          title: 'Maakleri profiilid',
          text: 'Iga maakleri jaoks eraldi leht foto, tutvustuse, piirkondade, keelte ja aktiivsete objektidega. Lehte saab jagada e-kirja allkirjas ja sotsiaalmeedias.',
        },
        {
          title: 'Hindamis- ja müügipäringu vorm',
          text: 'Lühike vorm, kus omanik kirjeldab oma kinnisvara ja jätab kontakti. Päring jõuab õige maaklerini koos kõigi vajalike andmetega, et esimene kõne oleks sisukas.',
        },
        {
          title: 'Tehniline SEO ja kiirus',
          text: 'Astro-põhine kiire leht, struktureeritud andmed objektidele, piirkonnalehed ja korrektne sitemap. Majutus Vercelis, nii et leht laeb kiiresti ka mobiilis.',
        },
        {
          title: 'Isikuandmed korras',
          text: 'Vormidel on selge nõusolek ja privaatsustingimused ning päringuid ei hoita kuskil, kus neid pole vaja. Analüütika seadistame küpsiste nõusoleku järgi.',
        },
      ],
      bodyTitle: 'Kuidas kinnisvara koduleht maaklerile tööd teeb',
      body:
        'Kinnisvaraportaalid on ostja jaoks peamine otsingukoht ja nii see jääbki. Koduleht ei pea nendega konkureerima, vaid täitma teist ülesannet: veenma müüjat, et just sina oled õige inimene tema kodu müüma. Seepärast paneme rõhu maakleri profiilile, tehtud tööle ja piirkonnatundmisele. Hästi üles ehitatud piirkonnaleht, näiteks Kalamaja või Tartu Annelinna kohta, aitab sind leida inimesel, kes alles mõtleb müümisele ja otsib Google’ist, kes selles kandis tegutseb.\n\n' +
        'Objektide puhul on kõige tähtsam, et info oleks õige. Kui kasutad kinnisvara CRM-i või portaali, mis lubab andmeid eksportida, ühendame kodulehe sama allikaga ja uuendused jõuavad lehele automaatselt. Täpsed võimalused sõltuvad sinu tarkvarast ja lepingust portaaliga, seega vaatame selle esimese asjana üle. Kui liidest pole, teeme lihtsa halduse, kus saad objekti lisada, märkida broneerituks või müüduks ning pildid üles laadida ilma arendajata.\n\n' +
        'Hindamispäringu vorm on maakleri kodulehel sageli kõige väärtuslikum element. Me ei lubada vormil automaatset turuhinda, sest usaldusväärne hinnang eeldab objekti nägemist ja tehingute analüüsi. Selle asemel kogub vorm piisavalt infot – aadressi, pinna, seisukorra ja müügi ajastuse –, et saaksid kliendile helistada ettevalmistatult. Päring jõuab e-posti, soovi korral ka CRM-i, ja kogu isikuandmete käsitlus vastab isikuandmete kaitse üldmäärusele. Vormi juures on selgelt kirjas, kes andmeid töötleb ja kui kaua neid hoitakse.\n\n' +
        'Tehniliselt ehitame lehe Astroga, mis tähendab kiiret laadimist ja head nähtavust otsingumootorites. Objektilehtedele lisame struktureeritud andmed, piltidele optimeeritud formaadid ja igale lehele mõtestatud pealkirjad. Majutame lehe Vercelis, mistõttu on see kiire ka mobiilis ja aeglase ühenduse korral. Pärast avamist seadistame Google Search Console’i, et näeksid, milliste otsingute kaudu sind leitakse. Kui soovid hiljem lisada tehisaruga kirjeldusi või päringutele vastavat assistenti, on lehe ülesehitus selleks valmis ja seda ei pea nullist ümber tegema.',
      priceFrom: 'alates 1500 €',
      priceNote:
        'Hinda ja ajakava mõjutavad enim objektide andmeallikas (portaalivoog, CRM-i liides või oma haldus), maaklerite arv ja keelte arv.',
      timeline: '3–6 nädalat',
      faqs: [
        {
          q: 'Kas objektid saab KV.ee-st või City24-st automaatselt kodulehele tuua?',
          a: 'Sageli küll, kuid see sõltub sellest, kust kuulutused algselt tulevad. Kui kasutad kinnisvara CRM-i, mis saadab objektid portaalidesse, on tavaliselt kõige töökindlam lugeda andmed samast CRM-ist. Kontrollime enne pakkumist, milline eksport sinu kontol olemas on.',
        },
        {
          q: 'Mis juhtub, kui objekt müüakse?',
          a: 'Voo puhul eemaldub või märgitakse objekt müüduks automaatselt järgmisel uuendusel. Oma halduse puhul muudad staatust ühe klikiga. Soovi korral jätame müüdud objektid eraldi „Müüdud“ lehele, kus need toimivad referentsina.',
        },
        {
          q: 'Kas iga maakler saab oma lehte ise muuta?',
          a: 'Jah, kui see on vajalik. Võime anda igale maaklerile ligipääsu ainult tema profiilile või hoida muutmise büroojuhi käes. Õigused lepime kokku enne arendust.',
        },
        {
          q: 'Kas hindamisvorm annab kliendile kohe hinna?',
          a: 'Ei. Automaatne hinnang ilma objekti nägemata on sageli eksitav ja võib müüja ootusi valesti seada. Vorm kogub vajaliku info ja maakler võtab ise ühendust. Kui soovid, saab vormi järel kuvada üldise piirkonna hinnataseme koos selge selgitusega.',
        },
        {
          q: 'Kas leht toetab vene ja inglise keelt?',
          a: 'Jah. Mitmekeelsus on lehe ülesehituses algusest peale sees. Objektide tõlked saab hoida andmeallikas või lisada tehisaru abil, mille maakler enne avaldamist üle vaatab.',
        },
      ],
    },
    en: {
      slug: 'real-estate-website',
      navLabel: 'Real estate website',
      metaTitle: 'Real Estate Website for Agents & Agencies | drealm',
      metaDescription:
        'Real estate websites for agents and agencies in Estonia: KV.ee and City24 listing feeds, agent profiles, valuation request forms and fast SEO. Get a quote.',
      eyebrow: 'Real estate',
      h1: 'Real estate websites for agents and agencies',
      lead:
        'Portals bring buyers to listings, but sellers still choose an agent by name and reputation. We build a website that shows your listings, presents you as the local expert and sends valuation and sales enquiries straight to your inbox.',
      cardText:
        'A website for agents and agencies: listings from KV.ee and City24 feeds, agent profiles and a valuation form that brings in new sellers.',
      problemsTitle: 'Who this is for',
      problems: [
        'You are an agent with listings on the portals but no website of your own to send people to – or one that is badly out of date.',
        'Your agency site shows old or already sold properties because listings have to be updated by hand in two places.',
        'New sellers find you through referrals, but in Google searches you disappear behind other agencies in your area.',
        'Enquiries arrive by phone, email and through the portals, and some of them simply get lost.',
        'You want every agent profile to work as a personal business card, not just a name on a team page.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'Listings from a feed or your own admin',
          text: 'If your CRM or portal account offers an XML or API export, we pull listings in automatically and sold properties drop off on their own. Smaller agencies get a simple admin where adding a listing takes a couple of minutes.',
        },
        {
          title: 'Search and filters that actually work',
          text: 'Filter by transaction type, area, price, rooms and floor area. Every listing has its own URL, gallery, map, energy rating and a clear contact button.',
        },
        {
          title: 'Agent profiles',
          text: 'A dedicated page for each agent with photo, bio, areas covered, languages and active listings – easy to share in an email signature or on social media.',
        },
        {
          title: 'Valuation and selling enquiry form',
          text: 'A short form where owners describe their property and leave their details. The enquiry reaches the right agent with everything needed for a useful first call.',
        },
        {
          title: 'Technical SEO and speed',
          text: 'A fast Astro-built site with structured data for listings, area pages and a proper sitemap. Hosted on Vercel, so it loads quickly on mobile too.',
        },
        {
          title: 'Personal data handled properly',
          text: 'Forms come with clear consent and a privacy notice, and enquiries are not stored anywhere they do not need to be. Analytics respect cookie consent.',
        },
      ],
      bodyTitle: 'How a real estate website earns its keep',
      body:
        'Property portals are where buyers search, and that is not going to change. Your website does not need to compete with them – it has a different job: convincing sellers that you are the right person to sell their home. That is why we focus on the agent profile, past results and local knowledge. A well-built area page, say for Kalamaja in Tallinn or Annelinn in Tartu, helps an owner who is only starting to think about selling find you when they search for who works in their neighbourhood.\n\n' +
        'With listings, accuracy matters most. If you use a real estate CRM or a portal that allows data export, we connect the website to the same source so changes appear automatically. What is possible depends on your software and your portal agreement, so that is the first thing we check. Where no integration exists, we build a lightweight admin where you can add a property, mark it reserved or sold and upload photos without calling a developer.\n\n' +
        'On an agent website, the valuation request form is often the most valuable element. We do not have it promise an instant automated price, because a reliable estimate requires seeing the property and analysing comparable deals. Instead, the form collects enough – address, size, condition and timing – for you to call the owner well prepared. The enquiry lands in your inbox and, if you like, your CRM, and all personal data is handled in line with the GDPR.\n\n' +
        'Under the hood we build with Astro, which means fast load times and strong search visibility. Listing pages get structured data, images are served in optimised formats and every page has a meaningful title. If you later want AI-written listing descriptions or an assistant that answers enquiries, the site is already structured for it, so nothing has to be rebuilt from scratch.',
      priceFrom: 'from €1,500',
      priceNote:
        'Price and timeline depend mainly on the listing data source (portal feed, CRM integration or own admin), the number of agents and the number of languages.',
      timeline: '3–6 weeks',
      faqs: [
        {
          q: 'Can listings from KV.ee or City24 appear on the website automatically?',
          a: 'Often, yes – but it depends on where your listings originate. If you use a real estate CRM that pushes listings to the portals, the most reliable approach is usually to read the data from that same CRM. We check which exports your account offers before quoting.',
        },
        {
          q: 'What happens when a property is sold?',
          a: 'With a feed, the listing is removed or marked as sold on the next sync. With your own admin, you change the status in one click. If you prefer, sold properties can move to a separate “Sold” page where they work as references.',
        },
        {
          q: 'Can each agent edit their own page?',
          a: 'Yes, if you need that. We can give each agent access to their own profile only, or keep editing with the office manager. Permissions are agreed before development starts.',
        },
        {
          q: 'Does the valuation form give the owner an instant price?',
          a: 'No. An automated estimate without seeing the property is often misleading and can set the wrong expectations. The form gathers the essentials and the agent follows up personally. If you want, the form can show a general price range for the area with a clear explanation.',
        },
        {
          q: 'Does the site support Russian and English?',
          a: 'Yes. Multilingual support is built into the structure from the start. Listing translations can come from your data source or be drafted with AI and reviewed by the agent before publishing.',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Arendusprojekti koduleht / Property development website
  // ---------------------------------------------------------------------------
  {
    id: 'development',
    group: 'realestate',
    related: ['realestate', 'ai-chatbot', 'construction'],
    et: {
      slug: 'arendusprojekti-koduleht',
      navLabel: 'Arendusprojekti koduleht',
      metaTitle: 'Arendusprojekti koduleht ja korterivalik | drealm',
      metaDescription:
        'Kinnisvaraarenduse koduleht interaktiivse korterivalikuga: fassaadilt korrus, korruselt korter, plaanid, PDF-id ja broneerimine neljas keeles. Küsi pakkumist.',
      eyebrow: 'Kinnisvaraarendus',
      h1: 'Arendusprojekti koduleht interaktiivse korterivalikuga',
      lead:
        'Uusarenduse ostja tahab näha, milline korter on vaba, kuhu aknad avanevad ja mis see maksab – ilma müügiesindajale helistamata. Teeme projektilehe, kus korterit saab valida otse hoone fassaadilt ning päring jõuab müügimeeskonnani koos kõigi detailidega.',
      cardText:
        'Uusarenduse koduleht, kus korterit saab valida fassaadilt ja korruseplaanilt, näha vabu ja müüdud kortereid ning saata broneerimispäringu.',
      problemsTitle: 'Millega aitame',
      problems: [
        'Korterite tabel on PDF-is või Exceli väljavõttes ning ostja ei saa aru, kus konkreetne korter hoones asub.',
        'Müüdud ja broneeritud korterite staatus jääb lehel maha ning müügiesindajad selgitavad seda telefonis ikka ja jälle.',
        'Ostjaid tuleb Eestist, Soomest ja mujalt, aga leht on ainult ühes keeles või tõlked on poolikud.',
        'Visualiseeringud on kallid ja ilusad, kuid lehel laadivad need aeglaselt ning mobiilis kaob nende mõju.',
        'Päringutest pole selge, millise korteri vastu huvi tunti, ja esimene kõne kulub põhitõdede täpsustamisele.',
      ],
      deliverablesTitle: 'Mida saad',
      deliverables: [
        {
          title: 'Interaktiivne korterivalik',
          text: 'Ostja liigub hoone fassaadilt või asendiplaanilt korrusele ja sealt korterini. Vabad, broneeritud ja müüdud korterid on värviga eristatud ning nimekirjavaates saab filtreerida tubade, pinna, hinna ja korruse järgi.',
        },
        {
          title: 'Korterikaardid plaanide ja failidega',
          text: 'Igal korteril on oma leht: plaan, pinnad ruumide kaupa, rõdu või terrass, ilmakaared, hind, lisad nagu parkimiskoht või panipaik ning allalaaditav PDF.',
        },
        {
          title: 'Lihtne staatuste haldus',
          text: 'Staatusi ja hindu uuendad haldusvaates või ühisest tabelist, mis on lehega ühendatud. Kui müügil on CRM, uurime võimalust andmed sealt automaatselt sünkroonida.',
        },
        {
          title: 'Asukoht ja ümbrus',
          text: 'Kaart koolide, lasteaedade, poodide, ühistranspordi ja rohealadega ning ajad olulistesse punktidesse. Tekstid, mis kirjeldavad piirkonda ausalt, mitte ainult reklaamikeeles.',
        },
        {
          title: 'Galerii, mis laeb kiiresti',
          text: 'Visualiseeringud, ehituse edenemise fotod ja vajadusel video või 3D-tuur. Pildid optimeerime nii, et kvaliteet säilib, kuid leht püsib mobiilis kiire.',
        },
        {
          title: 'Broneerimis- ja päringuvoog',
          text: 'Päring või broneerimissoov liigub müügimeeskonnani koos korteri numbri ja ostja eelistustega. Neli keelt – eesti, inglise, vene ja soome – on vajaduse korral algusest sees.',
        },
      ],
      bodyTitle: 'Mis teeb arendusprojekti kodulehe heaks',
      body:
        'Uusarenduse puhul ostab inimene midagi, mida ta veel päriselt näha ei saa. Koduleht on seetõttu müügisaal, mis on avatud ööpäev läbi. Kõige olulisem on korterivalik: ostja peab hetkega aru saama, millised korterid on vabad, kus need hoones paiknevad ja mida nad maksavad. Ehitame selle hoone fassaadi või asendiplaani peale, nii et korrusele ja korterile jõuab paari klikiga. Sama info on kättesaadav ka tavalise filtreeritava nimekirjana, mis on mobiilis sageli mugavam.\n\n' +
        'Korterikaart on koht, kus otsus tegelikult sünnib. Seal peab olema kõik, mida ostja võrdleb: ruumide pinnad, akende suunad, rõdu, sisustusvalikud, parkimine ja panipaik ning plaan, mida saab suurendada ja PDF-ina alla laadida. Visualiseeringute juures märgime selgelt, et tegemist on illustratsiooniga, sest lõplik lahendus võib detailides erineda. See hoiab ära valed ootused ja hilisemad vaidlused. Iga korterikaart on eraldi aadressiga leht, mida müügiesindaja saab huvilisele otse saata.\n\n' +
        'Staatused peavad olema alati õiged. Mitme müügiesindajaga projektis lepime kokku, kes ja kus neid uuendab: lihtsas haldusvaates, lehega ühendatud tabelis või CRM-i kaudu, kui see on tehniliselt võimalik. Broneerimispäring jõuab müügimeeskonnani koos korteri numbri ja ostja eelistustega. Mitmekeelsuse puhul arvestame, et vene- ja soomekeelne ostja otsib infot oma keeles ja eri märksõnadega, seega saab iga keeleversioon eraldi pealkirjad ja kirjeldused.\n\n' +
        'Tehniliselt on leht kiire staatiline Astro-sait Verceli majutusel, mis talub ka müügistardi aegset külastajate tulva. Suured visualiseeringud teisendame kaasaegsetesse pildiformaatidesse ja laeme neid järk-järgult, nii et esimene vaade avaneb kiiresti ka mobiilis. Projektile seadistame analüütika, mis näitab, milliseid kortereid vaadatakse enim ja kust huvilised tulevad – see on müügimeeskonnale hinnaline sisend. Pärast projekti lõppu saab lehe arhiveerida referentsiks või võtta aluseks järgmisele arendusele.',
      priceFrom: 'alates 2500 €',
      priceNote:
        'Hinda mõjutavad enim korterite ja hoonete arv, korterivaliku keerukus (fassaad, asendiplaan, 3D), keelte arv ning staatuste sünkroonimine CRM-iga.',
      timeline: '4–8 nädalat',
      faqs: [
        {
          q: 'Mida on korterivaliku tegemiseks meilt vaja?',
          a: 'Fassaadivaated või asendiplaan heas resolutsioonis, korruseplaanid, korterite tabel (number, tubade arv, pinnad, hind, staatus) ning korterite plaanid PDF- või pildifailina. Kui visualiseerija teeb pilte veel, lepime kokku formaadid, mis sobivad interaktiivseks kasutamiseks.',
        },
        {
          q: 'Kes uuendab müüdud ja broneeritud korterite staatust?',
          a: 'Tavaliselt müügiesindaja või projektijuht. Staatust saab muuta haldusvaates või tabelis ning muudatus jõuab lehele mõne minutiga. Kui kasutate CRM-i, mis võimaldab andmeid eksportida, saab uuendused automatiseerida.',
        },
        {
          q: 'Kas leht võib olla valmis enne, kui kõik visualiseeringud on olemas?',
          a: 'Jah. Sageli avame esmalt projekti tutvustava lehe koos huviliste registreerimisega ning lisame korterivaliku müügistardiks. Nii kogud huvilisi juba enne müügi algust.',
        },
        {
          q: 'Kas hinnad peavad lehel nähtaval olema?',
          a: 'See on arendaja otsus. Saame näidata hindu kõigile, ainult registreerunud huvilistele või asendada need nupuga „Küsi hinda“. Läbipaistvad hinnad vähendavad üldjuhul korduvaid küsimusi, kuid mõne projekti puhul on põhjust neid mitte avaldada.',
        },
        {
          q: 'Kas soome- ja venekeelne versioon tõlgitakse masinaga?',
          a: 'Mustandi võib teha tehisaru abil, kuid müügitekstid peaks enne avaldamist üle vaatama emakeelne inimene. Aitame selle protsessi korraldada ja hoiame tõlked korterikaartidega seotuna, et andmed püsiksid kõigis keeltes ühesugused.',
        },
        {
          q: 'Mis saab lehest pärast, kui kõik korterid on müüdud?',
          a: 'Lehe võib jätta referentsiks, suunata arendaja põhilehele või kasutada sama lahendust järgmise projekti alusena. Korterivaliku komponendid on korduvkasutatavad, mis teeb järgmise projekti lehe kiiremaks ja odavamaks.',
        },
      ],
    },
    en: {
      slug: 'property-development-website',
      navLabel: 'Development website',
      metaTitle: 'Property Development Website & Unit Selector | drealm',
      metaDescription:
        'Websites for new residential and commercial developments: interactive apartment selector, floor plans, live availability and enquiries in four languages.',
      eyebrow: 'Property development',
      h1: 'Property development websites with an interactive apartment selector',
      lead:
        'Buyers of a new development want to see which apartments are available, which way the windows face and what it costs – without calling sales. We build project websites where buyers pick an apartment straight from the building facade and enquiries reach your sales team with every detail attached.',
      cardText:
        'A website for new developments where buyers choose apartments from the facade and floor plans, see live availability and send booking enquiries.',
      problemsTitle: 'What we solve',
      problems: [
        'Your apartment list lives in a PDF or spreadsheet, and buyers cannot tell where a particular unit sits in the building.',
        'Sold and reserved statuses lag behind on the website, so the sales team keeps explaining availability over the phone.',
        'Buyers come from Estonia, Finland and further afield, but the site is in one language or the translations are patchy.',
        'Your visualisations are expensive and beautiful, yet they load slowly and lose their impact on mobile.',
        'Enquiries do not say which apartment the buyer is interested in, so the first call is spent on basics.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'Interactive apartment selector',
          text: 'Buyers move from the facade or site plan to a floor and then to an apartment. Available, reserved and sold units are colour-coded, and a list view filters by rooms, size, price and floor.',
        },
        {
          title: 'Apartment pages with plans and files',
          text: 'Each unit has its own page: floor plan, room-by-room areas, balcony or terrace, orientation, price, extras like parking or storage, and a downloadable PDF.',
        },
        {
          title: 'Easy availability management',
          text: 'Update statuses and prices in a simple admin or a shared spreadsheet connected to the site. If your sales team uses a CRM, we look at syncing data from it automatically.',
        },
        {
          title: 'Location and neighbourhood',
          text: 'A map with schools, kindergartens, shops, public transport and green spaces, plus travel times to key places – described honestly, not just in sales language.',
        },
        {
          title: 'A gallery that loads fast',
          text: 'Visualisations, construction progress photos and, if needed, video or a 3D tour. Images are optimised to keep their quality while the site stays fast on mobile.',
        },
        {
          title: 'Booking and enquiry flow',
          text: 'Enquiries and reservation requests reach sales with the apartment number and buyer preferences. Estonian, English, Russian and Finnish can be built in from day one.',
        },
      ],
      bodyTitle: 'What makes a development website work',
      body:
        'With a new development, people are buying something they cannot yet walk through. The website is effectively a sales gallery that never closes. The most important part is the apartment selector: buyers should see at a glance which units are available, where they sit in the building and what they cost. We build it on top of the facade or site plan, so reaching a floor and an apartment takes a couple of clicks. The same data is also available as a filterable list, which is often easier on a phone.\n\n' +
        'The apartment page is where the decision really happens. It needs everything a buyer compares: room areas, window orientation, balcony, finish options, parking and storage, plus a floor plan that can be zoomed and downloaded as a PDF. We clearly label visualisations as illustrative, because the final result may differ in detail. That avoids false expectations and awkward conversations at handover.\n\n' +
        'Availability must always be correct. On projects with several sales agents, we agree who updates statuses and where: in a simple admin, in a connected spreadsheet, or through your CRM when that is technically possible. Reservation enquiries reach sales with the unit number and the buyer’s preferences. For multilingual sites we keep in mind that Russian- and Finnish-speaking buyers search in their own language with different terms, so each language version gets its own titles and descriptions rather than a word-for-word copy.\n\n' +
        'Technically, the site is a fast static Astro build hosted on Vercel, comfortably handling the traffic spike around a sales launch. Large visualisations are converted to modern image formats and loaded progressively, so the first view opens quickly even on mobile. We also set up analytics showing which apartments get the most attention and where interested buyers come from – useful input for your sales team. Once the project sells out, the site can be archived as a reference or used as the starting point for your next development.',
      priceFrom: 'from €2,500',
      priceNote:
        'Price depends mainly on the number of apartments and buildings, selector complexity (facade, site plan, 3D), the number of languages and any CRM sync for availability.',
      timeline: '4–8 weeks',
      faqs: [
        {
          q: 'What do you need from us to build the apartment selector?',
          a: 'High-resolution facade views or a site plan, floor plans, an apartment table (unit number, rooms, areas, price, status) and individual unit plans as PDFs or images. If your visualiser is still working, we agree on formats that suit interactive use.',
        },
        {
          q: 'Who updates sold and reserved statuses?',
          a: 'Usually a sales agent or the project manager. Statuses can be changed in the admin or a spreadsheet, and the change appears on the site within minutes. If your CRM supports data export, updates can be automated.',
        },
        {
          q: 'Can the site launch before all visualisations are ready?',
          a: 'Yes. We often launch a teaser page with a registration form first and add the apartment selector for the sales launch. That way you build a list of interested buyers before sales open.',
        },
        {
          q: 'Do prices have to be public?',
          a: 'That is the developer’s call. We can show prices to everyone, only to registered buyers, or replace them with a “Request price” button. Transparent pricing usually cuts down repeat questions, but some projects have good reasons not to publish.',
        },
        {
          q: 'Are the Finnish and Russian versions machine-translated?',
          a: 'A first draft can be produced with AI, but sales copy should be reviewed by a native speaker before it goes live. We help organise that and keep translations tied to the apartment data so details stay consistent in every language.',
        },
        {
          q: 'What happens to the site once everything is sold?',
          a: 'It can stay up as a reference, redirect to your main company site, or serve as the base for your next project. The selector components are reusable, which makes the next project site faster and cheaper to build.',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 3. AI kinnisvarale / AI for real estate
  // ---------------------------------------------------------------------------
  {
    id: 'ai-realestate',
    group: 'realestate',
    related: ['realestate', 'ai-chatbot', 'ai-automation'],
    et: {
      slug: 'ai-kinnisvarale',
      navLabel: 'AI kinnisvarale',
      metaTitle: 'Tehisaru kinnisvaramaaklerile ja büroole | drealm',
      metaDescription:
        'Tehisaru kinnisvaramaaklerile: kuulutusetekstid mitmes keeles, kiired vastused ostjatele, päringute sõelumine, CRM ja näitamiste broneerimine. Küsi lisa.',
      eyebrow: 'AI kinnisvaras',
      h1: 'Tehisaru kinnisvaramaaklerile ja kinnisvarabüroole',
      lead:
        'Maakleri päev kulub suuresti kirjutamisele ja samadele küsimustele vastamisele. Seadistame tehisaru tegema korduvat tööd – kuulutusetekstide mustandeid, esmaseid vastuseid ostjatele ja päringute sisestamist CRM-i –, et sinu aeg jääks klientidele ja tehingutele.',
      cardText:
        'Kuulutusetekstid mitmes keeles, ööpäevaringsed vastused ostjatele, päringute sõelumine ja näitamiste broneerimine – maakler kontrollib, tehisaru teeb eeltöö.',
      problemsTitle: 'Millega aitame',
      problems: [
        'Iga uue objekti kirjeldus tuleb kirjutada eesti, inglise ja vene keeles ning see võtab tunde, mida pole.',
        'Ostjad küsivad õhtuti ja nädalavahetusel samu küsimusi – kas objekt on veel müügis, mis on kõrvalkulud, kas saab vaatama tulla.',
        'Kõik päringud näevad välja ühesugused ja tõsiseid ostjaid on raske eristada uudistajatest.',
        'Päringute info tuleb käsitsi CRM-i kanda ja osa sellest jääb lihtsalt sisestamata.',
        'Näitamise aja leidmiseks kulub mitu kirja või kõnet edasi-tagasi.',
      ],
      deliverablesTitle: 'Mida seadistame',
      deliverables: [
        {
          title: 'Kuulutusetekstide mustandid',
          text: 'Objekti andmetest ja sinu märksõnadest valmib kirjeldus eesti, inglise, vene või soome keeles, sinu büroo stiilis. Maakler loeb üle ja kinnitab – midagi ei avaldata automaatselt.',
        },
        {
          title: 'Vastused ostjate küsimustele',
          text: 'Assistent vastab kodulehel või e-posti teel kuulutuse andmete põhjal. Kui vastust andmetes pole, ütleb ta seda ausalt ja suunab küsimuse maaklerile.',
        },
        {
          title: 'Päringute sõelumine',
          text: 'Paari täpsustava küsimusega selgitatakse välja eelarve, rahastus, ajastus ja vajadused ning maakler näeb kohe, millised päringud vajavad kiiret tähelepanu.',
        },
        {
          title: 'Automaatne CRM-i sissekanne',
          text: 'Kontakt, huvipakkuv objekt ja vestluse kokkuvõte jõuavad CRM-i ilma käsitsi kopeerimiseta – näiteks Pipedrive’i, HubSpoti või muusse süsteemi, millel on liides.',
        },
        {
          title: 'Näitamiste broneerimine',
          text: 'Ostja valib vaba aja maakleri Google’i või Outlooki kalendrist ning kinnituse ja meeldetuletuse saavad mõlemad pooled.',
        },
      ],
      bodyTitle: 'Mida tehisaru kinnisvaras päriselt teha suudab',
      body:
        'Keelemudelid nagu Claude ja GPT kirjutavad head teksti, kuid ei tea sinu objektist midagi peale selle, mida neile ette anname. Seepärast on kuulutusetekstide lahenduse aluseks struktureeritud andmed: pind, tubade arv, korrus, energiamärgis, remondi seis ja maakleri enda märkmed. Neist valmib mustand, mis järgib sinu büroo tooni ja pikkust. Mudelil on keelatud lisada fakte, mida andmetes pole, ning maakler loeb iga teksti enne avaldamist üle, sest vastutus kuulutuse õigsuse eest jääb ikka temale.\n\n' +
        'Ostjate küsimustele vastamine töötab samal põhimõttel. Assistent kasutab ainult kuulutuse, büroo tingimuste ja sinu kinnitatud vastuste andmeid. Kui keegi küsib midagi, mida seal pole – näiteks naabrite või läbirääkimisruumi kohta –, ei hakka ta arvama, vaid lubab, et maakler võtab ühendust. Keelemudel võib siiski vahel eksida, seepärast logime vestlused ja vaatame esimestel nädalatel koos üle, kus vastused vajavad täpsustamist. Nii paraneb assistent iga nädalaga.\n\n' +
        'Päringute sõelumine ja CRM-i sisestamine on tavaliselt kõige kiiremini tunda olev muutus. Iga päring saab lühikese kokkuvõtte, sildi ja kontaktandmed ning jõuab sinu CRM-i või tabelisse. Näitamiste broneerimine ühendab kalendri, nii et ostja saab valida aja, mis sobib ka sulle. Lahenduse kokkupanekuks kasutame n8n-i, Make’i või kohandatud koodi vastavalt sellele, mis sinu tööriistadega kõige paremini sobib. Kui mõni samm vajab sinu kinnitust, jääb see sinu kätte.\n\n' +
        'Isikuandmete puhul eelistame ELi andmetöötlust ja kasutame mudelite API-sid tingimustel, mis ei luba kliendiandmeid mudeli treenimiseks kasutada. Vestluste säilitamise aja lepime kokku ning ostjale on selgelt näha, et ta suhtleb tehisaruga. Alustame tavaliselt ühest osast, näiteks kuulutusetekstidest või päringute sõelumisest, ja laiendame lahendust alles siis, kui see on igapäevatöös end tõestanud. Nii näed enne suuremat investeeringut, kas tehisaru sinu büroo töövoogu päriselt sobib.',
      priceFrom: 'alates 1200 €',
      priceNote:
        'Hind sõltub sellest, milliseid osi vajad, kui palju süsteeme tuleb ühendada (CRM, kalender, koduleht) ja kui palju keeli kasutatakse; API-kasutuse kuukulu on eraldi ja sõltub mahust.',
      timeline: '2–4 nädalat',
      faqs: [
        {
          q: 'Kas tehisaru kirjutatud kuulutus võib sisaldada valeinfot?',
          a: 'Risk on olemas ja seda ei tasu eitada. Vähendame seda nii, et mudel kasutab ainult objekti andmeid ja tal on keelatud fakte juurde mõelda. Lõpliku kontrolli teeb siiski maakler, sest kuulutuse õigsuse eest vastutab tema.',
        },
        {
          q: 'Mis keeltes see töötab?',
          a: 'Eesti, inglise, vene ja soome keel toimivad praeguste mudelitega hästi. Eestikeelne tekst on üldiselt korrektne, kuid stiili lihvime koos sinu näidistekstide põhjal, et see kõlaks nagu sinu büroo, mitte nagu tõlge.',
        },
        {
          q: 'Kas ostjate andmed lähevad mudeli treenimiseks?',
          a: 'Ei. Kasutame Anthropicu ja OpenAI ärilisi API-sid, mille tingimused ei luba kliendiandmeid treenimiseks kasutada, ning eelistame võimaluse korral ELi andmetöötlust. Andmete säilitamise aja ja asukoha paneme kirja.',
        },
        {
          q: 'Kas ostja saab aru, et ta suhtleb masinaga?',
          a: 'Jah, ja nii peabki olema. Assistent tutvustab ennast tehisaruna ning ostja saab igal hetkel paluda maakleri kontakti.',
        },
        {
          q: 'Milliste CRM-idega saab ühendada?',
          a: 'Kõigiga, millel on avatud API või muu liides, näiteks Pipedrive ja HubSpot. Kinnisvarale spetsialiseerunud süsteemide puhul kontrollime liidese olemasolu enne pakkumist. Kui CRM-i pole, piisab alguseks ka Google’i tabelist.',
        },
      ],
    },
    en: {
      slug: 'ai-for-real-estate',
      navLabel: 'AI for real estate',
      metaTitle: 'AI for Real Estate Agents & Agencies | drealm',
      metaDescription:
        'AI for real estate agents: multilingual listing descriptions, instant buyer replies, lead qualification, automatic CRM entry and viewing scheduling. Learn more.',
      eyebrow: 'AI in real estate',
      h1: 'AI for real estate agents and agencies',
      lead:
        'Much of an agent’s day goes on writing and answering the same questions. We set up AI to handle the repetitive work – listing description drafts, first replies to buyers and getting enquiries into your CRM – so your time goes to clients and deals.',
      cardText:
        'Listing descriptions in several languages, 24/7 buyer replies, lead qualification and viewing scheduling – AI does the groundwork, the agent stays in control.',
      problemsTitle: 'What we help with',
      problems: [
        'Every new listing needs a description in Estonian, English and Russian, and that takes hours you do not have.',
        'Buyers ask the same questions in the evening and at weekends – is it still available, what are the running costs, can I view it?',
        'All enquiries look alike, and it is hard to tell serious buyers from casual browsers.',
        'Enquiry details have to be typed into the CRM by hand, and some of them never make it in.',
        'Finding a viewing slot takes several rounds of emails or calls.',
      ],
      deliverablesTitle: 'What we set up',
      deliverables: [
        {
          title: 'Listing description drafts',
          text: 'Property data and your notes become a description in Estonian, English, Russian or Finnish, written in your agency’s style. The agent reviews and approves – nothing is published automatically.',
        },
        {
          title: 'Answers to buyer questions',
          text: 'An assistant on your website or in email answers from the listing data. If the answer is not in the data, it says so honestly and passes the question to the agent.',
        },
        {
          title: 'Lead qualification',
          text: 'A few follow-up questions establish budget, financing, timing and needs, so the agent can see straight away which enquiries need attention first.',
        },
        {
          title: 'Automatic CRM entry',
          text: 'Contact details, the property of interest and a conversation summary land in your CRM without copy-pasting – Pipedrive, HubSpot or any other system with an API.',
        },
        {
          title: 'Viewing scheduling',
          text: 'Buyers pick a free slot from the agent’s Google or Outlook calendar, and both sides get a confirmation and a reminder.',
        },
      ],
      bodyTitle: 'What AI can realistically do in real estate',
      body:
        'Language models like Claude and GPT write well, but they know nothing about your property beyond what we give them. That is why the listing description workflow starts from structured data: floor area, rooms, floor, energy rating, condition and the agent’s own notes. From that the model produces a draft that follows your agency’s tone and length. It is instructed not to add facts that are not in the data, and the agent reads every text before it goes live – responsibility for an accurate listing stays with the agent.\n\n' +
        'Answering buyer questions works the same way. The assistant draws only on the listing, your agency’s terms and answers you have approved. If someone asks something that is not covered – about the neighbours, say, or room for negotiation – it does not guess but promises that the agent will get in touch. Language models can still make mistakes, so we log conversations and review them together in the first weeks to see where answers need tightening.\n\n' +
        'Lead qualification and CRM entry are usually the changes you feel fastest. Each enquiry gets a short summary, a tag and contact details, and lands in your CRM or spreadsheet. Viewing scheduling connects to your calendar so buyers can choose a time that also works for you. We wire it all together with n8n, Make or custom code, depending on what fits your existing tools best.\n\n' +
        'For personal data, we prefer EU-based processing and use model APIs under terms that do not allow client data to be used for training. Retention periods are agreed in writing, and buyers can always see that they are talking to an AI assistant. We usually start with one piece – listing descriptions or lead qualification, for example – and only expand once it has proven itself in daily work. That way you can see whether AI genuinely fits your workflow before investing more.',
      priceFrom: 'from €1,200',
      priceNote:
        'Price depends on which parts you need, how many systems we connect (CRM, calendar, website) and how many languages are involved; monthly API usage is billed separately and depends on volume.',
      timeline: '2–4 weeks',
      faqs: [
        {
          q: 'Can an AI-written listing contain false information?',
          a: 'The risk exists and there is no point pretending otherwise. We reduce it by limiting the model to the property data and instructing it not to invent facts. The final check is still the agent’s, since they are responsible for the listing being accurate.',
        },
        {
          q: 'Which languages does it handle?',
          a: 'Estonian, English, Russian and Finnish all work well with current models. Estonian output is generally correct, but we fine-tune the style using your own sample texts so it sounds like your agency rather than a translation.',
        },
        {
          q: 'Is buyer data used to train the AI model?',
          a: 'No. We use the business APIs from Anthropic and OpenAI, whose terms do not allow customer data to be used for training, and we prefer EU data processing where available. Retention periods and data location are documented.',
        },
        {
          q: 'Will buyers know they are talking to a machine?',
          a: 'Yes, and they should. The assistant introduces itself as AI, and buyers can ask for the agent’s contact at any point.',
        },
        {
          q: 'Which CRMs can it connect to?',
          a: 'Any with an open API or similar integration, such as Pipedrive and HubSpot. For real-estate-specific systems we check the available integrations before quoting. If you have no CRM yet, a Google Sheet is enough to start with.',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 4. AI automatiseerimine / AI automation
  // ---------------------------------------------------------------------------
  {
    id: 'ai-automation',
    group: 'ai',
    related: ['ai-chatbot', 'webapp', 'ai-realestate'],
    et: {
      slug: 'ai-automatiseerimine',
      navLabel: 'AI automatiseerimine',
      metaTitle: 'AI automatiseerimine ettevõttele | drealm',
      metaDescription:
        'Äriprotsesside automatiseerimine tehisaruga: e-kirjade sõelumine, arvete ja dokumentide töötlus, pakkumised ja raportid. Alustame protsessi auditist. Küsi lisa.',
      eyebrow: 'AI automatiseerimine',
      h1: 'AI automatiseerimine: vähem käsitööd, rohkem aega olulisele',
      lead:
        'Paljudes ettevõtetes kopeeritakse iga päev andmeid e-kirjadest tabelitesse, arvetelt raamatupidamisse ja CRM-ist pakkumistesse. Kaardistame need protsessid ning automatiseerime osad, kus tehisaru ja lihtsad integratsioonid päriselt aega säästavad.',
      cardText:
        'E-kirjade sõelumine, arvete töötlus, pakkumised ja raportid automaatselt. Alustame protsessi auditist ja ühendame tööriistad, mida juba kasutad.',
      problemsTitle: 'Tüüpilised olukorrad',
      problems: [
        'Ühine postkast (info@, müük@) täitub ja keegi peab iga kirja käsitsi lugema ja õigele inimesele edastama.',
        'Ostuarved tulevad PDF-ina e-postiga ja nende andmed sisestatakse käsitsi Meritisse või Directosse.',
        'Pakkumise koostamiseks kopeeritakse kliendi päringust andmed hinnakirja ja Wordi malli.',
        'Nädala- või kuuraport tähendab mitme süsteemi väljavõtete kokkupanemist Excelis.',
        'Andmed on Google Workspace’is, CRM-is ja raamatupidamises, aga need süsteemid ei räägi omavahel.',
      ],
      deliverablesTitle: 'Mida saad',
      deliverables: [
        {
          title: 'Protsessi audit',
          text: 'Kaardistame koos, kuidas töö praegu käib, kus kulub kõige rohkem aega ja milliseid samme tasub üldse automatiseerida. Tulemuseks on lühike prioriteetide nimekiri, mitte paks raport.',
        },
        {
          title: 'Postkasti ja päringute sõelumine',
          text: 'Tehisaru loeb sissetuleva kirja, määrab teema ja kiireloomulisuse, võtab välja olulised andmed ja suunab selle õigele inimesele või koostab vastuse mustandi.',
        },
        {
          title: 'Dokumentide ja arvete töötlus',
          text: 'Arvetelt, tellimustest ja lepingutest loetakse välja vajalikud väljad ning need jõuavad raamatupidamistarkvarasse või tabelisse kontrollimiseks.',
        },
        {
          title: 'Pakkumiste ja raportite koostamine',
          text: 'Päringu andmetest ja hinnakirjast koostatakse pakkumise mustand. Raportid pannakse automaatselt kokku mitmest allikast ja saadetakse ajakava järgi.',
        },
        {
          title: 'Tööriistade ühendamine',
          text: 'Google Workspace, Microsoft 365, Merit, Directo, Pipedrive, HubSpot ja muud API-ga süsteemid ühendame n8n-i, Make’i või kohandatud koodiga.',
        },
        {
          title: 'Dokumentatsioon ja üleandmine',
          text: 'Iga automaatika on kirja pandud: mis seda käivitab, mida see teeb ja mida teha vea korral. Sa ei sõltu ühestki „mustast kastist“.',
        },
      ],
      bodyTitle: 'Kuidas automatiseerimine käib ja kus on piirid',
      body:
        'Alustame alati protsessi auditist, sest kõike ei tasu automatiseerida. Mõnikord on lahendus tavaline reegel või integratsioon ilma tehisaruta, mis on odavam ja töökindlam. Tehisaru on kasulik seal, kus sisend on vabas vormis: e-kirjad, PDF-arved, lepingud, kliendipäringud. Selliseid dokumente on reeglitega raske töödelda, kuid keelemudel suudab neist vajaliku info usaldusväärselt välja lugeda ja struktureerida. Auditi järel tead, millised sammud automatiseerida, mis see maksab ja mida on selleks vaja.\n\n' +
        'Tüüpiline näide on ostuarvete töötlus. Arve jõuab e-postiga, süsteem loeb välja tarnija, registrikoodi, summad, käibemaksu ja kuupäevad ning loob Meritis või Directos ostuarve mustandi. Raamatupidaja vaatab selle üle ja kinnitab. Teine näide on info@-postkast: tehisaru liigitab kirjad, eristab hinnapäringud, kaebused ja arved ning saadab need edasi koos lühikese kokkuvõttega. Kumbki lahendus ei kaota inimest protsessist, vaid võtab ära korduva sisestustöö.\n\n' +
        'Keelemudelid teevad vigu, nii et ehitame automaatikad selle teadmisega. Olulised otsused – maksed, kliendile saadetavad kirjad, raamatupidamiskanded – lähevad enne lõplikku sammu inimesele kinnitamiseks. Kui mudel pole kindel või andmed puuduvad, märgitakse juhtum käsitsi ülevaatamiseks. Vead ja erandid logitakse, et neid oleks lihtne leida ja parandada. Kui mõni ühendatud süsteem muudab oma liidest või ajutiselt ei vasta, saad sellest teate, mitte ei avasta probleemi alles nädalaid hiljem puuduvate andmete järgi.\n\n' +
        'Tehnilise poole pealt kasutame n8n-i, mida saab majutada ELis sinu kontrolli all, Make’i või kohandatud koodi koos Claude’i või OpenAI API-ga. Kliendiandmeid treenimiseks ei kasutata ja andmetöötluse asukoha lepime kokku. Ligipääsud anname automaatikale minimaalse vajaliku ulatusega: kui see peab arveid ainult lugema, ei saa ta neid kustutada. Kõik kontod, võtmed ja töövood jäävad sinu nimele, nii et saad lahendust edasi arendada ka ilma meieta.',
      priceFrom: 'alates 800 €',
      priceNote:
        'Hind sõltub automatiseeritavate protsesside arvust, ühendatavatest süsteemidest ja dokumentide mitmekesisusest; platvormi ja API kasutuse kuukulu on eraldi.',
      timeline: '1–4 nädalat',
      faqs: [
        {
          q: 'Kui palju aega automatiseerimine meil säästab?',
          a: 'Seda ei saa enne auditit ausalt öelda. Auditi käigus mõõdame, kui palju aega konkreetne töö praegu võtab ja kui sageli seda tehakse, ning hindame selle põhjal, kas automatiseerimine end ära tasub.',
        },
        {
          q: 'Kas Merit ja Directo on toetatud?',
          a: 'Jah, mõlemal on API, mille kaudu saab luua näiteks ostuarveid, kliente ja tooteid. Kasutatavad funktsioonid sõltuvad sinu paketist ja ligipääsuõigustest, mille kontrollime auditi käigus.',
        },
        {
          q: 'Mis vahe on n8n-il, Make’il ja kohandatud koodil?',
          a: 'Make on kiire alustada ja sobib lihtsamateks voogudeks. n8n on paindlikum ja seda saab majutada oma serveris ELis, mis on andmete seisukohalt sageli eelistatud. Kohandatud koodi kasutame siis, kui loogika on keeruline või maht suur.',
        },
        {
          q: 'Mis juhtub, kui tehisaru loeb arvelt vale summa?',
          a: 'Seepärast loob automaatika mustandi, mitte lõpliku kande. Lisame kontrolle, näiteks summade ja käibemaksu kokkulangevuse, ning kahtlased juhtumid märgitakse käsitsi ülevaatamiseks.',
        },
        {
          q: 'Kas meie andmed jäävad Euroopasse?',
          a: 'Võimalusel jah. n8n-i saab majutada ELi serveris ja mudelite pakkujatel on Euroopa andmetöötluse valikud. Kus see pole võimalik, ütleme selle enne välja ja paneme kirja, millised andmed kuhu liiguvad.',
        },
      ],
    },
    en: {
      slug: 'ai-automation',
      navLabel: 'AI automation',
      metaTitle: 'AI Automation for Business Processes | drealm',
      metaDescription:
        'Business process automation with AI: inbox triage, invoice and document processing, quotes and reports, connected to the tools you use. Starts with an audit.',
      eyebrow: 'AI automation',
      h1: 'AI automation that takes the copy-paste out of your day',
      lead:
        'In many companies, people spend part of every day moving data from emails to spreadsheets, from invoices to accounting and from the CRM into quotes. We map those processes and automate the parts where AI and simple integrations genuinely save time.',
      cardText:
        'Inbox triage, invoice processing, quotes and reports, automated. We start with a process audit and connect the tools you already use.',
      problemsTitle: 'Sound familiar?',
      problems: [
        'A shared inbox (info@, sales@) keeps filling up, and someone has to read and forward every single message by hand.',
        'Supplier invoices arrive as PDFs by email and are keyed into Merit or Directo manually.',
        'Building a quote means copying details from the client’s request into a price list and a Word template.',
        'The weekly or monthly report means stitching together exports from several systems in Excel.',
        'Your data sits in Google Workspace, the CRM and the accounting software, and none of them talk to each other.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'Process audit',
          text: 'Together we map how the work is done today, where the time goes and which steps are worth automating at all. You get a short list of priorities, not a thick report.',
        },
        {
          title: 'Inbox and enquiry triage',
          text: 'AI reads incoming messages, sets topic and urgency, extracts key details and routes each one to the right person – or prepares a draft reply.',
        },
        {
          title: 'Document and invoice processing',
          text: 'The fields you need are extracted from invoices, orders and contracts and sent to your accounting software or a spreadsheet for review.',
        },
        {
          title: 'Quotes and reports',
          text: 'Quote drafts are built from the request and your price list. Reports are pulled together from several sources automatically and sent on schedule.',
        },
        {
          title: 'Connecting your tools',
          text: 'Google Workspace, Microsoft 365, Merit, Directo, Pipedrive, HubSpot and other systems with an API, connected using n8n, Make or custom code.',
        },
        {
          title: 'Documentation and handover',
          text: 'Every automation is written up: what triggers it, what it does and what to do if it fails. You are never stuck with a black box.',
        },
      ],
      bodyTitle: 'How automation works – and where its limits are',
      body:
        'We always start with a process audit, because not everything is worth automating. Sometimes the answer is a plain rule or integration with no AI at all, which is cheaper and more reliable. AI earns its place where the input is unstructured: emails, PDF invoices, contracts, customer requests. Those are hard to handle with rules, but a language model can reliably extract and structure the information you need. After the audit you know which steps to automate, what it will cost and what it requires.\n\n' +
        'A typical example is supplier invoices. An invoice arrives by email, the system reads the supplier, registry code, amounts, VAT and dates, and creates a draft purchase invoice in Merit or Directo. Your accountant reviews and approves it. Another is the info@ inbox: AI classifies messages, separates price enquiries from complaints and invoices, and forwards each with a short summary. Neither removes people from the process – they remove the repetitive data entry.\n\n' +
        'Language models do make mistakes, so we design for that. Anything consequential – payments, emails to customers, accounting entries – goes to a person for approval before the final step. When the model is unsure or data is missing, the case is flagged for manual review. Errors and exceptions are logged so they are easy to find and fix. If a connected system changes its API or goes down, you get an alert instead of discovering missing data weeks later.\n\n' +
        'On the technical side we use n8n, which can be hosted in the EU under your control, Make, or custom code together with the Claude or OpenAI APIs. Your data is not used for model training, and where it is processed is agreed up front. Automations get the minimum access they need: if a flow only has to read invoices, it cannot delete them. All accounts, keys and workflows stay in your name, so you can keep developing the setup without us.',
      priceFrom: 'from €800',
      priceNote:
        'Price depends on the number of processes, the systems involved and how varied your documents are; platform and API usage costs are billed monthly and separately.',
      timeline: '1–4 weeks',
      faqs: [
        {
          q: 'How much time will automation save us?',
          a: 'We cannot honestly say before the audit. During the audit we measure how long a given task takes today and how often it happens, and use that to judge whether automating it pays off.',
        },
        {
          q: 'Do you support Merit and Directo?',
          a: 'Yes – both have APIs for creating purchase invoices, customers, products and more. What you can use depends on your plan and access rights, which we check during the audit.',
        },
        {
          q: 'What is the difference between n8n, Make and custom code?',
          a: 'Make is quick to start with and suits simpler flows. n8n is more flexible and can be self-hosted on an EU server, which is often preferable for data protection. We use custom code when the logic is complex or volumes are high.',
        },
        {
          q: 'What if the AI reads the wrong amount from an invoice?',
          a: 'That is why the automation creates a draft rather than a final entry. We add checks, such as whether totals and VAT add up, and anything suspicious is flagged for manual review.',
        },
        {
          q: 'Does our data stay in Europe?',
          a: 'Where possible, yes. n8n can run on an EU server and model providers offer European processing options. Where that is not possible, we tell you in advance and document which data goes where.',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 5. AI chatbot
  // ---------------------------------------------------------------------------
  {
    id: 'ai-chatbot',
    group: 'ai',
    related: ['ai-automation', 'website', 'ai-realestate'],
    et: {
      slug: 'ai-chatbot',
      navLabel: 'AI chatbot',
      metaTitle: 'AI chatbot kodulehele eesti keeles | drealm',
      metaDescription:
        'AI chatbot sinu kodulehele: vastab ettevõtte enda sisu põhjal eesti keeles, kogub päringuid ja annab vestluse vajadusel üle inimesele. GDPR-iga kooskõlas.',
      eyebrow: 'AI assistent',
      h1: 'AI chatbot, mis tunneb sinu ettevõtet ja räägib eesti keelt',
      lead:
        'Ehitame kodulehele assistendi, mis vastab klientide küsimustele sinu enda teenuste, hindade ja tingimuste põhjal – ka õhtul ja nädalavahetusel. Kui vastust pole või klient soovib inimest, antakse vestlus üle sinu meeskonnale.',
      cardText:
        'Kodulehe assistent, mis vastab sinu enda sisu põhjal eesti keeles, kogub päringuid ja annab keerulisemad küsimused üle inimesele.',
      problemsTitle: 'Millal chatbot on mõistlik',
      problems: [
        'Kliendid küsivad e-posti ja telefoni teel samu küsimusi, mille vastused on tegelikult kodulehel olemas, aga raskesti leitavad.',
        'Päringud tulevad ka väljaspool tööaega ja jäävad hommikuni vastuseta.',
        'Vana reeglipõhine chatbot vastab ainult etteantud nuppudele ja ajab kliendid pigem segadusse.',
        'Kodulehe külastajad lahkuvad enne, kui jätavad kontakti, sest õiget vormi või infot ei leia.',
      ],
      deliverablesTitle: 'Mida saad',
      deliverables: [
        {
          title: 'Sinu sisule tuginev assistent',
          text: 'Assistent kasutab kodulehe teksti, hinnakirju, KKK-d ja muid dokumente, mille ette annad. Ta ei vasta üldteadmiste põhjal sinu ettevõtte nimel.',
        },
        {
          title: 'Eesti keel ja teised keeled',
          text: 'Vastab selles keeles, milles klient kirjutab – eesti, inglise, vene või soome keeles. Tooni ja sõnavara seadistame sinu brändile sobivaks.',
        },
        {
          title: 'Üleandmine inimesele',
          text: 'Kui vastust pole või klient soovib inimest, saadab assistent vestluse koos kokkuvõttega e-posti, Slacki või sinu CRM-i ja annab kliendile teada, millal temaga ühendust võetakse.',
        },
        {
          title: 'Päringute ja kontaktide kogumine',
          text: 'Vestluse käigus kogub assistent loomulikult vajaliku info – nime, kontakti ja vajaduse – ning saadab selle sinna, kus päringutega juba tegeled.',
        },
        {
          title: 'Isikuandmete kaitse',
          text: 'Selge teade, et tegu on tehisaruga, privaatsustingimused, kokkulepitud säilitusaeg ja mudelid, mis ei kasuta sinu andmeid treenimiseks.',
        },
        {
          title: 'Ülevaade vestlustest',
          text: 'Näed, mida kliendid küsivad ja kus assistent jäi hätta. See on hea sisend ka kodulehe teksti ja KKK parendamiseks.',
        },
      ],
      bodyTitle: 'Kuidas AI chatbot töötab ja mida sellelt oodata',
      body:
        'Tänapäevane chatbot ei tööta enam etteantud nuppude ja skriptide järgi. Assistent põhineb keelemudelil, näiteks Claude’il või GPT-l, mis saab igas vestluses kaasa sinu ettevõtte kohta käivad tekstilõigud. Seda nimetatakse otsinguga täiendatud genereerimiseks: enne vastamist leitakse sinu dokumentidest asjakohane info ja vastus koostatakse ainult selle põhjal. Nii saab assistent rääkida sinu hindadest, tarneaegadest ja tingimustest, mitte üldistest asjadest, mis sinu ettevõtte kohta ei kehti.\n\n' +
        'Eesti keelega saavad praegused mudelid hästi hakkama, kuid mitte veatult. Vahel tuleb ette kohmakat sõnastust või vale käänet, eriti erialaterminite puhul. Seepärast testime assistenti enne avaldamist sinu tegelike klientide küsimustega ning lisame juhised ja terminid, mis vajavad täpsustamist. Samuti võib iga keelemudel aeg-ajalt vastuse välja mõelda. Seda riski vähendab range juhis vastata ainult antud sisu põhjal ja öelda ausalt „ma ei tea“, kuid täiesti välistada seda ei saa.\n\n' +
        'Assistendi kõige väärtuslikum oskus on sageli teada, millal anda vestlus inimesele üle. Keerulisemad küsimused, kaebused ja konkreetse pakkumise soovid jõuavad sinuni koos vestluse kokkuvõttega. Üleandmise reeglid lepime kokku sinuga: näiteks võib assistent kõik hinnapakkumise soovid kohe müügile suunata, kuid tavalistele küsimustele ise vastata. Väljaspool tööaega annab ta kliendile teada, millal vastust oodata. Esimestel nädalatel vaatame logid koos üle ja täiendame sisu seal, kus assistent hätta jäi.\n\n' +
        'Jooksev kulu koosneb peamiselt mudeli API kasutusest ja sõltub vestluste arvust ning pikkusest. Anname selle kohta enne algust hinnangu ning seadistame kululimiidi, et arve ei tuleks üllatusena. Andmeid ei kasutata mudeli treenimiseks ja vestluste säilitamise aja lepime kokku. Vestlusaknasse lisame selge teate, et klient suhtleb tehisaruga, ning lingi privaatsustingimustele. Isikuandmeid küsib assistent ainult siis, kui need on päringu jaoks tõesti vajalikud.',
      priceFrom: 'alates 1000 € + kuukulu',
      priceNote:
        'Hind sõltub sisu mahust, keelte arvust ja ühendustest (CRM, e-post, broneerimine); kuukulu sõltub peamiselt vestluste mahust ja kasutatavast mudelist.',
      timeline: '2–3 nädalat',
      faqs: [
        {
          q: 'Kui palju chatboti kasutamine kuus maksab?',
          a: 'Kuukulu sõltub peamiselt vestluste arvust ja pikkusest ning valitud mudelist. Väikese ettevõtte kodulehel jääb see tavaliselt mõõdukaks. Anname enne algust oma liikluse põhjal hinnangu ja seadistame kululimiidi.',
        },
        {
          q: 'Kas chatbot võib anda vale vastuse?',
          a: 'Jah, see on võimalik. Vähendame riski sellega, et assistent vastab ainult sinu sisu põhjal ja ütleb, kui ta midagi ei tea. Hinnad, lepingutingimused ja muu siduv info tasub kliendiga alati üle kinnitada, ning assistent ütleb seda ka ise.',
        },
        {
          q: 'Kuidas chatbot sinu ettevõtte infot õpib?',
          a: 'Mudelit ennast ei treenita. Sinu kodulehe teksti ja dokumendid indekseerime ning assistent otsib igale küsimusele asjakohase lõigu. Kui sisu muutub, uuendame indeksi – sageli automaatselt koos kodulehega.',
        },
        {
          q: 'Kas vestlusi salvestatakse?',
          a: 'Vestlusi salvestatakse kokkulepitud aja jooksul, et saaksid näha, mida kliendid küsivad, ja parandada vastuseid. Säilitusaja ja ligipääsud paneme kirja ning kliendile kuvatakse privaatsusteade.',
        },
        {
          q: 'Kas chatboti saab lisada olemasolevale kodulehele?',
          a: 'Jah. Assistent lisatakse väikese koodijupina, mis töötab nii WordPressi, Shopify kui ka meie ehitatud Astro-lehtedel. Kodulehte ennast selleks ümber tegema ei pea.',
        },
      ],
    },
    en: {
      slug: 'ai-chatbot',
      navLabel: 'AI chatbot',
      metaTitle: 'AI Chatbot for Your Business Website | drealm',
      metaDescription:
        'An AI chatbot for your website that answers from your own content, speaks Estonian and English, captures leads and hands over to a person. GDPR-compliant.',
      eyebrow: 'AI assistant',
      h1: 'An AI chatbot that knows your business – and speaks Estonian',
      lead:
        'We build a website assistant that answers customer questions from your own services, prices and terms – evenings and weekends included. When it does not know the answer or the customer wants a human, the conversation is handed to your team.',
      cardText:
        'A website assistant that answers from your own content in Estonian and English, captures enquiries and hands tricky questions to a person.',
      problemsTitle: 'When a chatbot makes sense',
      problems: [
        'Customers email and call with the same questions, even though the answers are on your website – just hard to find.',
        'Enquiries come in outside office hours and sit unanswered until morning.',
        'Your old rule-based chatbot only responds to preset buttons and confuses people more than it helps.',
        'Visitors leave before getting in touch because they cannot find the right form or information.',
      ],
      deliverablesTitle: 'What you get',
      deliverables: [
        {
          title: 'An assistant grounded in your content',
          text: 'It draws on your website copy, price lists, FAQs and any documents you provide. It does not answer on your behalf from general knowledge.',
        },
        {
          title: 'Estonian and other languages',
          text: 'It replies in the customer’s language – Estonian, English, Russian or Finnish – with tone and vocabulary tuned to your brand.',
        },
        {
          title: 'Handoff to a human',
          text: 'When it has no answer or the customer asks for a person, it sends the conversation and a summary to email, Slack or your CRM, and tells the customer when to expect a reply.',
        },
        {
          title: 'Lead capture',
          text: 'During the conversation the assistant naturally gathers what you need – name, contact details and the request – and sends it wherever you already handle enquiries.',
        },
        {
          title: 'Data protection built in',
          text: 'A clear notice that the user is talking to AI, a privacy policy, an agreed retention period and models that do not train on your data.',
        },
        {
          title: 'Conversation insights',
          text: 'See what customers ask and where the assistant struggled – useful input for improving your website copy and FAQs too.',
        },
      ],
      bodyTitle: 'How an AI chatbot works – and what to expect',
      body:
        'A modern chatbot no longer follows scripted buttons. The assistant runs on a language model such as Claude or GPT, which is given relevant passages about your business in every conversation. This is called retrieval-augmented generation: before answering, the system finds the relevant information in your documents and the reply is based only on that. So the assistant can talk about your prices, delivery times and terms, rather than generic statements that do not apply to your business.\n\n' +
        'Current models handle Estonian well, but not flawlessly. Occasionally you will see awkward phrasing or a wrong case ending, especially with industry terms. That is why we test the assistant with your real customer questions before launch and add instructions and terminology where needed. Any language model can also occasionally make up an answer. A strict instruction to answer only from your content and to say “I don’t know” when unsure reduces that risk, but cannot eliminate it entirely.\n\n' +
        'Often the assistant’s most valuable skill is knowing when to hand over to a person. Complex questions, complaints and requests for a specific quote reach you with a summary of the conversation. The handoff rules are yours to set: the assistant might send every quote request straight to sales while handling routine questions itself, and outside office hours it tells customers when to expect a reply. In the first weeks we review the logs together and fill in content wherever the assistant struggled.\n\n' +
        'Running costs are mainly model API usage and depend on the number and length of conversations. We give you an estimate before we start and set a spending cap so the bill never comes as a surprise. Your data is not used for model training, and conversation retention is agreed in advance. The chat window clearly tells visitors they are talking to AI and links to your privacy policy, and the assistant only asks for personal details when a request genuinely needs them.',
      priceFrom: 'from €1,000 + monthly running costs',
      priceNote:
        'Price depends on the amount of content, number of languages and integrations (CRM, email, booking); monthly costs depend mainly on conversation volume and the model used.',
      timeline: '2–3 weeks',
      faqs: [
        {
          q: 'What does the chatbot cost to run each month?',
          a: 'It depends mainly on the number and length of conversations and the model chosen. For a small business website it is usually modest. We estimate it from your traffic before we start and set a spending cap.',
        },
        {
          q: 'Can the chatbot give a wrong answer?',
          a: 'Yes, it can. We reduce the risk by limiting it to your content and having it say when it does not know. Prices, contract terms and other binding details should always be confirmed with the customer, and the assistant says so itself.',
        },
        {
          q: 'How does the chatbot learn about my business?',
          a: 'The model itself is not trained. We index your website copy and documents, and the assistant looks up the relevant passage for each question. When your content changes, we refresh the index – often automatically along with the website.',
        },
        {
          q: 'Are conversations stored?',
          a: 'Conversations are kept for an agreed period so you can see what customers ask and improve the answers. Retention and access are documented, and users see a privacy notice.',
        },
        {
          q: 'Can it be added to my existing website?',
          a: 'Yes. The assistant is added as a small code snippet that works on WordPress, Shopify and the Astro sites we build. Your website does not need to be rebuilt.',
        },
      ],
    },
  },
];
