// General FAQ (KKK) shown on /kkk and /en/faq. Service-specific questions stay on the service pages.
import type { Lang } from './services';

export interface FaqGroup {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}

export const FAQ: Record<Lang, FaqGroup[]> = {
  et: [
    {
      id: 'hind',
      title: 'Hind ja pakkumine',
      items: [
        { q: 'Kui palju koduleht maksab?', a: 'Kodulehed algavad 900 eurost ja veebiplatvormid 2 500 eurost. Täpne hind sõltub lehtede arvust, keeltest, funktsioonidest ja liidestest. Pärast lühikest vestlust saad fikseeritud hinna kirjalikult.' },
        { q: 'Kas hind võib töö käigus muutuda?', a: 'Kokkulepitud ulatuse hind ei muutu. Kui soovid töö käigus midagi juurde, ütleme enne, mis see maksab, ja teeme ainult siis, kui oled nõus.' },
        { q: 'Kuidas maksmine käib?', a: 'Maksetingimused lepime kokku pakkumises ja need on kirjas enne töö algust. Suuremate projektide puhul saab makse jagada etappide kaupa.' },
        { q: 'Kas esimene konsultatsioon on tasuta?', a: 'Jah. Esimene kõne või kohtumine on tasuta. Selle põhjal saad pakkumise, kohustust sellega ei kaasne.' },
        { q: 'Kui kiiresti pakkumise saan?', a: 'Vastame päringutele ühe tööpäeva jooksul. Lihtsama kodulehe pakkumise saad tavaliselt samal päeval, suurema platvormi oma pärast lühikest kaardistust.' },
      ],
    },
    {
      id: 'protsess',
      title: 'Kuidas töö käib',
      items: [
        { q: 'Kui kaua kodulehe tegemine võtab?', a: 'Koduleht valmib tavaliselt 2–4 nädalaga ja veebiplatvorm 4–8 nädalaga. Kõige rohkem mõjutab aega see, kui kiiresti tekstid, pildid ja tagasiside liiguvad.' },
        { q: 'Mida ma pean ette valmistama?', a: 'Piisab sellest, et tead, mida ettevõte pakub ja kellele. Tekstide kirjutamisel, struktuuri planeerimisel ja piltide valimisel aitame.' },
        { q: 'Kas saan töö käigus kujundust näha ja kommenteerida?', a: 'Jah. Näed kujundust enne arendust ja töötavat lehte enne avaldamist. Muudatused teeme enne käivitamist ära.' },
        { q: 'Kas teete ka tekstid?', a: 'Jah. Kirjutame tekstid koos sinuga, nii et need oleksid kliendile arusaadavad ja Google’i otsingute jaoks läbi mõeldud.' },
        { q: 'Kellele kuulub valmis leht?', a: 'Sulle. Domeen, sisu, kujundus ja ligipääsud on sinu nimel. Kui kunagi tahad teise arendaja juurde minna, saad kõik kaasa võtta.' },
      ],
    },
    {
      id: 'tehnika',
      title: 'Majutus, hooldus ja tehnika',
      items: [
        { q: 'Kus leht majutatakse?', a: 'Soovitame Eesti majutust, näiteks Zone. Kui sul on juba majutus olemas, saame kasutada seda. Majutus ja domeen on sinu nimel.' },
        { q: 'Kas saan lehte ise muuta?', a: 'Kui soovid sisu ise hallata, teeme lehele halduse, kus saad muuta tekste, pilte, tooteid või blogipostitusi. Kui ei soovi, teeme muudatused meie.' },
        { q: 'Kas kasutate WordPressi?', a: 'Uusi lehti me WordPressiga ei tee, sest pistikprogrammid teevad lehed aeglaseks ja vajavad pidevat uuendamist. Kasutame kiiremaid ja turvalisemaid lahendusi. Olemasolevat WordPressi lehte saame vajadusel uuendada või üle kolida.' },
        { q: 'Kas olemasoleva lehe saab üle kolida ilma Google’i nähtavust kaotamata?', a: 'Jah. Kaardistame vanad aadressid, suuname need uutele ja kontrollime pärast käivitamist Search Console’is, et nähtavus ei kaoks.' },
        { q: 'Kas leht töötab ka telefonis?', a: 'Jah. Kõik lehed tehakse esmalt telefoni jaoks, sest suurem osa külastajaid tuleb mobiilist.' },
      ],
    },
    {
      id: 'turundus',
      title: 'SEO ja reklaam',
      items: [
        { q: 'Kas SEO on kodulehe hinna sees?', a: 'Tehniline SEO (kiirus, struktuur, pealkirjad, struktureeritud andmed ja sitemap) on iga lehe sees. Pidev SEO töö, näiteks sisu ja kohalik nähtavus, on eraldi teenus.' },
        { q: 'Millal SEO tulemusi näha on?', a: 'Tehnilised parandused mõjuvad sageli nädalatega. Uuel domeenil hakkavad täpsemad otsingud tooma külastajaid tavaliselt 2–4 kuuga, konkurentsitihedad märksõnad kauem.' },
        { q: 'Kas peaksin tegema Google’i või Meta reklaame?', a: 'Google’i reklaamid sobivad, kui inimesed otsivad su teenust aktiivselt. Meta reklaamid sobivad, kui toode või teenus on visuaalne või tahad jõuda inimesteni, kes veel ei otsi. Soovitame alustada väikese eelarvega ja mõõta, mis päringuid toob.' },
      ],
    },
    {
      id: 'ai',
      title: 'AI ja automatiseerimine',
      items: [
        { q: 'Mida AI väikeettevõttes päriselt teha saab?', a: 'Kõige rohkem aega säästab korduva töö automatiseerimine: päringute sortimine ja esmavastused, pakkumiste mustandid, arvete töötlus ja aruanded. Alustame alati ühest konkreetsest tööst, mis võtab praegu kõige rohkem aega.' },
        { q: 'Kas meie andmed lähevad AI treenimiseks?', a: 'Ei. Kasutame teenuseid ja seadeid, mis ei treeni sinu andmetel. Tundlikud andmed jäävad lahendusest välja.' },
        { q: 'Kas AI koolitus sobib ka neile, kes pole AI-d kasutanud?', a: 'Jah. Alustame põhitõdedest ja harjutame kohe teie päris tööülesannete peal, nii et iga osaleja saab järgmisel päeval seda kasutama hakata.' },
      ],
    },
  ],
  en: [
    {
      id: 'price',
      title: 'Price and quotes',
      items: [
        { q: 'How much does a website cost?', a: 'Websites start from €900 and web platforms from €2,500. The exact price depends on pages, languages, features and integrations. After a short call you get a fixed price in writing.' },
        { q: 'Can the price change during the project?', a: 'The price for the agreed scope doesn’t change. If you want something extra along the way, we tell you the cost first and only do it if you agree.' },
        { q: 'How does payment work?', a: 'Payment terms are agreed in the quote and written down before work starts. For larger projects payment can be split by phase.' },
        { q: 'Is the first consultation free?', a: 'Yes. The first call or meeting is free. You get a quote based on it, with no obligation.' },
        { q: 'How fast do I get a quote?', a: 'We reply within one working day. For a simpler website you usually get a quote the same day; for a larger platform after a short mapping session.' },
      ],
    },
    {
      id: 'process',
      title: 'How we work',
      items: [
        { q: 'How long does it take to build a website?', a: 'A website usually takes 2–4 weeks and a web platform 4–8 weeks. What affects timing most is how quickly copy, images and feedback move.' },
        { q: 'What do I need to prepare?', a: 'It’s enough to know what your business offers and to whom. We help with copy, structure and choosing images.' },
        { q: 'Can I see and comment on the design along the way?', a: 'Yes. You see the design before development and the working site before launch. We make changes before going live.' },
        { q: 'Do you write the copy?', a: 'Yes. We write copy together with you so it’s clear to customers and planned for Google searches.' },
        { q: 'Who owns the finished website?', a: 'You do. Domain, content, design and access are in your name. If you ever want to move to another developer, you can take everything with you.' },
      ],
    },
    {
      id: 'tech',
      title: 'Hosting, maintenance and tech',
      items: [
        { q: 'Where is the website hosted?', a: 'We recommend Estonian hosting such as Zone. If you already have hosting, we can use it. Hosting and domain are in your name.' },
        { q: 'Can I edit the website myself?', a: 'If you want to manage content yourself, we add an admin where you can edit text, images, products or blog posts. If not, we make the changes for you.' },
        { q: 'Do you use WordPress?', a: 'We don’t build new sites on WordPress, because plugins make sites slow and need constant updates. We use faster, more secure solutions. We can update or migrate an existing WordPress site if needed.' },
        { q: 'Can an existing site be migrated without losing Google visibility?', a: 'Yes. We map old URLs, redirect them to the new ones and check Search Console after launch so visibility isn’t lost.' },
        { q: 'Does the website work on phones?', a: 'Yes. Every site is built mobile-first, because most visitors come from phones.' },
      ],
    },
    {
      id: 'marketing',
      title: 'SEO and advertising',
      items: [
        { q: 'Is SEO included in the website price?', a: 'Technical SEO (speed, structure, titles, structured data and sitemap) is part of every site. Ongoing SEO work, such as content and local visibility, is a separate service.' },
        { q: 'When will I see SEO results?', a: 'Technical fixes often show within weeks. On a new domain, specific searches usually start bringing visitors in 2–4 months; competitive keywords take longer.' },
        { q: 'Should I run Google or Meta ads?', a: 'Google ads suit services people actively search for. Meta ads suit visual products or reaching people who aren’t searching yet. We suggest starting with a small budget and measuring which brings enquiries.' },
      ],
    },
    {
      id: 'ai',
      title: 'AI and automation',
      items: [
        { q: 'What can AI actually do in a small business?', a: 'The biggest time saver is automating repetitive work: sorting enquiries and first replies, quote drafts, invoice processing and reports. We always start with one specific task that takes the most time today.' },
        { q: 'Is our data used to train AI?', a: 'No. We use services and settings that don’t train on your data. Sensitive data stays out of the solution.' },
        { q: 'Does AI training suit people who haven’t used AI?', a: 'Yes. We start with the basics and practise on your real work tasks, so everyone can start using it the next day.' },
      ],
    },
  ],
};
