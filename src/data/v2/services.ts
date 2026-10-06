// drealm v2: the nine services (Estonian). English lives in services.en.ts with the same ids.
import { SERVICES_EN } from './services.en';

export type IconName =
  | 'web' | 'plan' | 'rank' | 'target' | 'frame' | 'play' | 'flow' | 'learn' | 'chat'
  | 'doc' | 'stack' | 'bell' | 'search' | 'star' | 'check' | 'spark' | 'mail' | 'arrow' | 'up' | 'plus';

export type Group = 'Veeb' | 'Turundus' | 'AI';

export interface Service {
  id: string;
  slug: string;
  name: string;
  group: Group;
  icon: IconName;
  /** one line on the homepage tile */
  short: string;
  /** client pain in their own words */
  pain: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  forWho: string[];
  deliverables: { icon: IconName; t: string; d: string }[];
  steps: { t: string; d: string }[];
  /** undefined = price on request */
  priceFrom?: string;
  priceNote: string;
  timeline: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'veebilehed',
    slug: 'veebilehed',
    name: 'Veebilehed',
    group: 'Veeb',
    icon: 'web',
    short: 'Koduleht, mida julged kõigile saata. Disain sinu brändi järgi, kiire telefonis ja Google’i jaoks korras. Sisu muudad ise.',
    pain: 'Meie koduleht on 2015. aastast ja ma ei julge linki kellelegi saata.',
    metaTitle: 'Kodulehe tegemine | drealm',
    metaDescription: 'Teeme kodulehti ja e-poode, mis näevad välja sama head kui sinu teenus: oma disain, kiire telefonis, Google’i jaoks korras. Fikseeritud hind.',
    h1: 'Koduleht, mida julged kõigile saata.',
    lead: 'Disainime ja ehitame kodulehe või e-poe sinu brändi järgi, mitte valmis malli pealt. Leht on telefonis kiire, Google leiab selle üles ja sisu saad ise muuta.',
    forWho: [
      'Praegune leht on vana ja ei esinda enam seda, mida teed.',
      'Kliendid helistavad, et küsida asju, mis peaksid lehel kirjas olema.',
      'Alustad uut äri ja tahad kohe korraliku esmamulje jätta.',
    ],
    deliverables: [
      { icon: 'web', t: 'Oma disain', d: 'Kujundus sinu brändi järgi. Näed kõiki vaateid enne, kui midagi ehitatakse.' },
      { icon: 'rank', t: 'Kiire ja leitav', d: 'Laeb telefonis hetkega ning tehniline SEO on algusest peale sisse ehitatud.' },
      { icon: 'doc', t: 'Tekstid ja struktuur', d: 'Aitame tekstid kirjutada nii, et külastaja saab 5 sekundiga aru, mida pakud.' },
      { icon: 'stack', t: 'Sisu muudad ise', d: 'Lihtne haldus, kus tekstid, pildid ja pakkumised on sinu käes.' },
      { icon: 'mail', t: 'Päringud postkasti', d: 'Kontaktvorm, mis jõuab kohe sinuni, ja vajadusel broneerimine.' },
      { icon: 'check', t: 'Domeen ja majutus korda', d: 'Seadistame domeeni, turvasertifikaadi ja Google’i tööriistad.' },
    ],
    steps: [
      { t: 'Kõne', d: '20 minutit eesmärgist, mitte tehnikast.' },
      { t: 'Disain', d: 'Näed avalehte ja alamlehti arvutis ning telefonis.' },
      { t: 'Ehitus', d: 'Arendus, tekstid, SEO ja testimine.' },
      { t: 'Avamine', d: 'Leht läheb üles ja näitame, kuidas seda ise hallata.' },
    ],
    priceFrom: '900 €',
    priceNote: 'Ettevõtte koduleht kuni 6 lehega. E-pood ja suuremad lehed pakkumise järgi.',
    timeline: '2–4 nädalat',
    faqs: [
      { q: 'Kas saan ise sisu muuta?', a: 'Jah. Seadistame lehe nii, et tekste, pilte ja pakkumisi saab muuta ilma programmeerimiseta, ja näitame ette, kuidas see käib.' },
      { q: 'Kas teete ka e-poode?', a: 'Jah, Shopify, WooCommerce või eraldi lahendusena, koos Eesti pangalinkide ja pakiautomaatidega.' },
      { q: 'Mis juhtub minu vana lehega?', a: 'Suuname vanad aadressid uutele, et Google’i positsioonid ja olemasolevad lingid ei kaoks.' },
      { q: 'Kas pean tekstid ise kirjutama?', a: 'Ei pea. Võime need koos sinuga kirjutada või teha täielikult ise sinu sisendi põhjal.' },
    ],
    related: ['seo', 'reklaampildid', 'platvormid'],
  },
  {
    id: 'platvormid',
    slug: 'platvormid',
    name: 'Platvormid',
    group: 'Veeb',
    icon: 'plan',
    short: 'Kui tavalisest kodulehest jääb väheks: korterivalik arendusele, broneerimine või kliendiportaal.',
    pain: 'Ostjad helistavad, et küsida, millised korterid on veel vabad.',
    metaTitle: 'Kinnisvaraarenduse leht ja veebiplatvormid | drealm',
    metaDescription: 'Korterivalik ja plaanid arendusprojektile, broneerimissüsteemid ja kliendiportaalid. Ehitame tööriista, mis müüb ja säästab aega.',
    h1: 'Kui tavalisest kodulehest jääb väheks.',
    lead: 'Ehitame veebitööriista, mitte ainult lehte: interaktiivse korterivaliku arendusprojektile, broneerimissüsteemi või portaali, kuhu kliendid sisse logivad.',
    forWho: [
      'Müüd kortereid ja ostjad küsivad pidevalt, mis on vaba ja mis maksab.',
      'Broneeringud tulevad telefoni ja e-kirjaga ning lähevad segamini.',
      'Klientidel on vaja ühte kohta, kus näha dokumente ja seisu.',
    ],
    deliverables: [
      { icon: 'plan', t: 'Korterivalik', d: 'Korruseplaanid, filtrid ja staatused, mida uuendad ühest kohast.' },
      { icon: 'doc', t: 'Broneerimine', d: 'Aja või ressursi broneerimine koos kinnituste ja meeldetuletustega.' },
      { icon: 'stack', t: 'Kliendiportaal', d: 'Sisselogimine, dokumendid ja projekti seis ühes vaates.' },
      { icon: 'mail', t: 'Päringud müüjale', d: 'Iga huvi jõuab õige inimeseni koos kogu infoga.' },
      { icon: 'flow', t: 'Liidesed', d: 'Ühendame CRM-i, raamatupidamise või kinnisvaraportaalidega.' },
      { icon: 'check', t: 'Hooldus', d: 'Uuendused, varukoopiad ja väikesed muudatused jäävad meie hooleks.' },
    ],
    steps: [
      { t: 'Kaardistus', d: 'Paneme kirja, mida tööriist peab tegema.' },
      { t: 'Prototüüp', d: 'Klõpsatav kujundus enne arendust.' },
      { t: 'Arendus', d: 'Ehitame ja testime päris andmetega.' },
      { t: 'Kasutusele', d: 'Koolitame tiimi ja hoiame süsteemi töös.' },
    ],
    priceFrom: '2 500 €',
    priceNote: 'Arendusprojekti leht korterivalikuga. Keerukamad platvormid pakkumise järgi.',
    timeline: '4–8 nädalat',
    faqs: [
      { q: 'Kas korterite staatusi saab ise muuta?', a: 'Jah. Staatused, hinnad ja plaanid muudad halduses ning need uuenevad lehel kohe.' },
      { q: 'Kas saab ühendada KV.ee või City24-ga?', a: 'Jah, objektid saab sünkroniseerida kinnisvaraportaalidega, et sama infot ei peaks kaks korda sisestama.' },
      { q: 'Kas teete ka mitmekeelseid platvorme?', a: 'Jah. Eesti, inglise, vene ja soome keel on tavapärased.' },
    ],
    related: ['veebilehed', 'automatiseerimine', 'meta'],
  },
  {
    id: 'seo',
    slug: 'seo',
    name: 'SEO',
    group: 'Turundus',
    icon: 'rank',
    short: 'Et Google’is leitaks sind, mitte konkurenti. Iga kuu näed, mis see tõi.',
    pain: 'Google’is leiavad kliendid konkurendi, mitte meid.',
    metaTitle: 'SEO ja Google’i nähtavus | drealm',
    metaDescription: 'Toome sinu ettevõtte Google’i otsingus ja kaartidel nähtavale. Tehniline SEO, sisu ja Google’i ettevõtteprofiil, igakuise raportiga.',
    h1: 'Et Google’is leitaks sind, mitte konkurenti.',
    lead: 'Paneme korda tehnilise poole, kirjutame sisu, mida sinu kliendid päriselt otsivad, ja hoolitseme Google’i ettevõtteprofiili eest. Iga kuu näed, mis päringuid see tõi.',
    forWho: [
      'Su teenus on hea, aga Google’is oled teisel lehel.',
      'Kaardiotsingus on konkurendid ees, kuigi oled samas linnas.',
      'Maksad reklaami eest, aga tahaksid ka tasuta liiklust.',
    ],
    deliverables: [
      { icon: 'search', t: 'Audit', d: 'Mis takistab praegu leidmist ja mida parandada esimesena.' },
      { icon: 'rank', t: 'Tehniline SEO', d: 'Kiirus, struktuur, metaandmed ja schema-märgendid korda.' },
      { icon: 'doc', t: 'Sisu', d: 'Lehed ja artiklid teemadel, mida kliendid otsivad.' },
      { icon: 'target', t: 'Google’i kaardid', d: 'Ettevõtteprofiil, arvustused ja kohalik nähtavus.' },
      { icon: 'stack', t: 'Igakuine raport', d: 'Positsioonid, liiklus ja päringud arusaadavas keeles.' },
    ],
    steps: [
      { t: 'Audit', d: 'Vaatame, kus oled praegu ja kus konkurendid.' },
      { t: 'Parandused', d: 'Tehniline pool ja olemasolev sisu korda.' },
      { t: 'Sisu', d: 'Uued lehed ja artiklid plaani järgi.' },
      { t: 'Raport', d: 'Iga kuu tulemused ja järgmised sammud.' },
    ],
    priceNote: 'Hind sõltub turust ja konkurentsist. Saad pakkumise pärast tasuta auditit.',
    timeline: 'Esimesed tulemused 2–4 kuuga',
    faqs: [
      { q: 'Kui kiiresti tulemused tulevad?', a: 'Tehnilised parandused mõjuvad mõne nädalaga, sisutöö tulemused tavaliselt 2–4 kuuga. Ütleme ausalt ette, mida oodata.' },
      { q: 'Kas garanteerite esikoha?', a: 'Ei. Seda ei saa keegi ausalt lubada. Lubame selge plaani, tehtud töö ja läbipaistva raporti.' },
      { q: 'Kas pean pikaks ajaks lepingu sõlmima?', a: 'Ei pea. Töötame kuupõhiselt ja lõpetada saad millal tahes.' },
    ],
    related: ['meta', 'veebilehed', 'reklaampildid'],
  },
  {
    id: 'meta',
    slug: 'meta-reklaamid',
    name: 'Meta reklaamid',
    group: 'Turundus',
    icon: 'target',
    short: 'Facebooki ja Instagrami reklaam, mis toob päringuid, mitte laike. Iga kuu ütleme ausalt, mis töötas.',
    pain: 'Reklaamile läheb raha, aga keegi ei oska öelda, mis see tagasi tõi.',
    metaTitle: 'Facebooki ja Instagrami reklaamid | drealm',
    metaDescription: 'Meta reklaamid, mis toovad päringuid ja müüki. Teeme pildid, tekstid ja seadistuse ning näitame iga kuu, mis reklaam tõi raha.',
    h1: 'Reklaam, mis toob päringuid, mitte laike.',
    lead: 'Teeme Facebooki ja Instagrami reklaamid algusest lõpuni: pildid, tekstid, sihtimise ja mõõtmise. Iga kuu ütleme ausalt, mis töötas, ja tõstame raha sinna.',
    forWho: [
      'Oled reklaami „boostinud“, aga ei tea, mis see tõi.',
      'Sul pole aega iga nädal uusi reklaame välja mõelda.',
      'Tahad uusi kliente kindlast piirkonnast või sihtrühmast.',
    ],
    deliverables: [
      { icon: 'target', t: 'Strateegia ja sihtimine', d: 'Kellele, kus ja millise sõnumiga.' },
      { icon: 'frame', t: 'Reklaamid valmis', d: 'Pildid, videod ja tekstid kõigis formaatides.' },
      { icon: 'search', t: 'Mõõtmine', d: 'Pixel ja konversioonid korda, et näha päris tulemust.' },
      { icon: 'flow', t: 'Testimine', d: 'Mitu varianti korraga, raha liigub parimale.' },
      { icon: 'stack', t: 'Kuu kokkuvõte', d: 'Lihtne raport: mis tõi päringuid ja mis peatati.' },
    ],
    steps: [
      { t: 'Eesmärk', d: 'Mis on üks päring sulle väärt.' },
      { t: 'Reklaamid', d: 'Teeme esimesed variandid valmis.' },
      { t: 'Käivitus', d: 'Seadistus, mõõtmine ja eelarve.' },
      { t: 'Optimeerimine', d: 'Iga kuu raport ja parandused.' },
    ],
    priceNote: 'Haldustasu sõltub eelarvest ja reklaamide mahust. Reklaamieelarve maksad otse Metale.',
    timeline: 'Esimesed reklaamid üleval 1–2 nädalaga',
    faqs: [
      { q: 'Kui suur peab reklaamieelarve olema?', a: 'Kohalikul ettevõttel saab alustada mõnesaja euroga kuus. Soovitame eelarve vastavalt eesmärgile, mitte vastupidi.' },
      { q: 'Kes teeb reklaamipildid?', a: 'Meie. Kujundame need sinu brändi järgi ja vajadusel teeme ka AI-videoreklaami.' },
      { q: 'Kas pean lepingu pikaks ajaks sõlmima?', a: 'Ei. Töötame kuupõhiselt.' },
    ],
    related: ['reklaampildid', 'video', 'seo'],
  },
  {
    id: 'reklaampildid',
    slug: 'reklaampildid',
    name: 'Reklaampildid',
    group: 'Turundus',
    icon: 'frame',
    short: 'Postitused ja reklaamid kõigis formaatides, ühes stiilis. Sina ei pea midagi välja mõtlema.',
    pain: 'Instagrami postitused jäävad tegemata, sest pole aega ega pilte.',
    metaTitle: 'Reklaampildid ja sotsiaalmeedia postitused | drealm',
    metaDescription: 'Kujundame reklaampildid ja sotsiaalmeedia postitused kõigis formaatides, ühes stiilis ja sinu brändi järgi. Igakuine pakett või üksikprojekt.',
    h1: 'Sisu, mida sa ei pea ise välja mõtlema.',
    lead: 'Kujundame reklaampildid ja postitused kõigis formaatides, ühes stiilis ja sinu brändi järgi. Saad iga kuu valmis paketi, mille avaldad või mille me avaldame sinu eest.',
    forWho: [
      'Sotsiaalmeedia jääb unarusse, sest pole aega.',
      'Postitused näevad iga kord erinevad välja.',
      'Reklaamid vajavad pidevalt uusi variante.',
    ],
    deliverables: [
      { icon: 'frame', t: 'Kõik formaadid', d: '1:1, 4:5 ja 9:16 ühe kujunduse põhjal.' },
      { icon: 'stack', t: 'Ühtne stiil', d: 'Mallid sinu värvide ja kirjatüüpidega.' },
      { icon: 'doc', t: 'Tekstid', d: 'Lühikesed ja selged pealkirjad ning postitused.' },
      { icon: 'bell', t: 'Avaldamine', d: 'Soovi korral ajastame ja avaldame ise.' },
    ],
    steps: [
      { t: 'Stiil', d: 'Paneme paika mallid ja tooni.' },
      { t: 'Plaan', d: 'Kuu teemad ja postituste ajakava.' },
      { t: 'Kujundus', d: 'Valmis pildid sinu kinnitamiseks.' },
      { t: 'Avaldamine', d: 'Postitused lähevad välja õigel ajal.' },
    ],
    priceNote: 'Igakuine pakett või üksikprojekt. Hind sõltub postituste arvust.',
    timeline: 'Esimene pakett 1–2 nädalaga',
    faqs: [
      { q: 'Kas kasutate minu fotosid?', a: 'Jah, kui need on olemas. Vajadusel loome pildid ise või kasutame AI-d, et need näeksid välja nagu päris fotod.' },
      { q: 'Kas saan enne avaldamist üle vaadata?', a: 'Alati. Midagi ei lähe välja ilma sinu kinnituseta.' },
    ],
    related: ['meta', 'video', 'veebilehed'],
  },
  {
    id: 'video',
    slug: 'ai-videoreklaamid',
    name: 'AI videoreklaamid',
    group: 'AI',
    icon: 'play',
    short: '15-sekundiline videoreklaam ilma võttepäevata. Valmis päevadega.',
    pain: 'Videoreklaam oleks hea, aga võttepäev maksab rohkem kui reklaam ise.',
    metaTitle: 'AI videoreklaamid | drealm',
    metaDescription: 'Lühikesed videoreklaamid sinu toodetest ja teenustest ilma võttepäevata. AI abil valmis päevadega, Reelsi, Storiesi ja TikToki formaatides.',
    h1: 'Videoreklaam ilma võttepäevata.',
    lead: 'Teeme lühikesed videoreklaamid sinu toodetest või teenusest AI abil. Ei mingit võttegruppi ega rendistuudiot: stsenaarium, visuaalid, tekstid ja muusika on valmis päevadega.',
    forWho: [
      'Video töötab sotsiaalmeedias paremini, aga võtted on liiga kallid.',
      'Vajad kiiresti mitut varianti testimiseks.',
      'Sul on toode või projekt, mida pole veel olemas, näiteks uusarendus.',
    ],
    deliverables: [
      { icon: 'doc', t: 'Stsenaarium', d: 'Lühike lugu, mis jõuab 3 sekundiga asja juurde.' },
      { icon: 'play', t: 'Video', d: '15–30 sekundit, Reelsi, Storiesi ja TikToki formaadis.' },
      { icon: 'frame', t: 'Variandid', d: 'Mitu algust ja lõppu testimiseks.' },
      { icon: 'check', t: 'Tekstid ja muusika', d: 'Subtiitrid, logo ja litsentseeritud muusika.' },
    ],
    steps: [
      { t: 'Idee', d: 'Mida ja kellele näitame.' },
      { t: 'Stsenaarium', d: 'Kinnitad enne tootmist.' },
      { t: 'Tootmine', d: 'AI visuaalid, montaaž ja tekstid.' },
      { t: 'Üleandmine', d: 'Valmis failid kõigis formaatides.' },
    ],
    priceNote: 'Hind sõltub video pikkusest ja variantide arvust.',
    timeline: '3–7 tööpäeva',
    faqs: [
      { q: 'Kas video näeb välja nagu AI?', a: 'Eesmärk on, et ei näeks. Kasutame AI-d tööriistana ja viimistleme tulemuse käsitsi.' },
      { q: 'Kas saab kasutada minu toote pilte?', a: 'Jah. Sinu päris tootepildid on parim lähtepunkt.' },
    ],
    related: ['meta', 'reklaampildid', 'automatiseerimine'],
  },
  {
    id: 'automatiseerimine',
    slug: 'ai-automatiseerimine',
    name: 'AI automatiseerimine',
    group: 'AI',
    icon: 'flow',
    short: 'Päringud, pakkumised ja arved liiguvad ise. Sina vaatad üle ja vajutad „saada“.',
    pain: 'Pool päeva läheb e-kirjadele, pakkumistele ja arvetele.',
    metaTitle: 'AI automatiseerimine ettevõttele | drealm',
    metaDescription: 'Automatiseerime päringute, pakkumiste, arvete ja raportite töövood AI abil. Alustame ühe protsessi auditist ja ühendame tööriistad, mida juba kasutad.',
    h1: 'Vähem e-kirju, rohkem päris tööd.',
    lead: 'Päringud, pakkumised, arved ja raportid liiguvad ise. AI loeb sissetuleva, koostab mustandi ja paneb kõik õigesse kohta. Sina vaatad üle ja vajutad „saada“.',
    forWho: [
      'Sama töö kordub iga päev: kopeeri, kleebi, saada.',
      'Päringud jäävad postkasti vastuseta.',
      'Tahad AI-d kasutada, aga ei tea, kust alustada.',
    ],
    deliverables: [
      { icon: 'search', t: 'Protsessi audit', d: 'Leiame koha, kus automatiseerimine säästab kõige rohkem aega.' },
      { icon: 'flow', t: 'Töövoog', d: 'Päring, liigitus, mustand ja teavitus ühes ahelas.' },
      { icon: 'stack', t: 'Sinu tööriistad', d: 'Gmail, Outlook, CRM, raamatupidamine ja tabelid.' },
      { icon: 'check', t: 'Inimene otsustab', d: 'Midagi tähtsat ei lähe välja ilma sinu kinnituseta.' },
      { icon: 'bell', t: 'Tugi', d: 'Jälgime, et töövoog töötaks, ja parandame vajadusel.' },
    ],
    steps: [
      { t: 'Audit', d: 'Üks protsess, mõõdetud ajakulu.' },
      { t: 'Lahendus', d: 'Ehitame ja testime päris andmetega.' },
      { t: 'Kasutusele', d: 'Tiim proovib ja annab tagasisidet.' },
      { t: 'Järgmine', d: 'Laiendame sinna, kus kasu on suurim.' },
    ],
    priceFrom: '800 €',
    priceNote: 'Ühe protsessi audit ja lahendus. Suuremad süsteemid pakkumise järgi.',
    timeline: '2–4 nädalat',
    faqs: [
      { q: 'Kas mu andmed on turvalised?', a: 'Kasutame ettevõtetele mõeldud AI-teenuseid, mis ei treeni sinu andmetel, ja ainult nii palju ligipääsu, kui on vaja.' },
      { q: 'Kas pean vahetama oma tarkvara?', a: 'Ei. Ühendame tööriistad, mida juba kasutad.' },
      { q: 'Mis siis, kui AI eksib?', a: 'Seetõttu jääb inimene otsustajaks: AI teeb mustandi, sina kinnitad.' },
    ],
    related: ['ettevotte-ai', 'koolitused', 'platvormid'],
  },
  {
    id: 'koolitused',
    slug: 'ai-koolitused',
    name: 'AI koolitused',
    group: 'AI',
    icon: 'learn',
    short: 'Töötuba teie oma ülesannetega. Järgmisel päeval kasutab tiim AI-d päriselt.',
    pain: 'Kõik räägivad AI-st, aga meie tiimis ei kasuta seda keegi.',
    metaTitle: 'AI koolitused ja töötoad ettevõttele | drealm',
    metaDescription: 'Praktilised AI töötoad teie oma ülesannetega: ChatGPT, Claude ja automatiseerimine igapäevatöös. Järgmisel päeval kasutab tiim AI-d päriselt.',
    h1: 'Tiim, mis kasutab AI-d päriselt.',
    lead: 'Praktiline töötuba teie oma ülesannetega: e-kirjad, pakkumised, tabelid ja raportid. Ei mingit teooriat ega slaide tundide kaupa. Järgmisel päeval kasutab tiim AI-d oma töös.',
    forWho: [
      'Tiim on AI-st kuulnud, aga keegi ei kasuta seda.',
      'Mõned kasutavad, aga igaüks omamoodi ja ebaturvaliselt.',
      'Tahad, et uued töötajad saaksid kiiremini hakkama.',
    ],
    deliverables: [
      { icon: 'learn', t: 'Töötuba', d: 'Pool või terve päev teie kontoris või veebis.' },
      { icon: 'doc', t: 'Teie ülesanded', d: 'Harjutame päris töö peal, mitte näidete peal.' },
      { icon: 'stack', t: 'Juhendid', d: 'Valmis käsud ja töövood, mida tiim saab kohe kasutada.' },
      { icon: 'check', t: 'Turvalisus', d: 'Mida võib AI-le anda ja mida mitte.' },
    ],
    steps: [
      { t: 'Eelvestlus', d: 'Millised ülesanded võtavad kõige rohkem aega.' },
      { t: 'Kohandamine', d: 'Valmistame harjutused teie töö põhjal.' },
      { t: 'Töötuba', d: 'Praktiline päev koos tiimiga.' },
      { t: 'Järeltugi', d: 'Küsimustele vastame ka hiljem.' },
    ],
    priceNote: 'Hind sõltub osalejate arvust ja kestusest.',
    timeline: 'Pool päeva kuni kaks päeva',
    faqs: [
      { q: 'Kas osalejad peavad tehnikast aru saama?', a: 'Ei. Töötuba on mõeldud tavalistele kontoritöötajatele ja juhtidele.' },
      { q: 'Millised tööriistad?', a: 'Peamiselt ChatGPT ja Claude, vajadusel ka Copilot, Gemini ja automatiseerimise tööriistad.' },
    ],
    related: ['automatiseerimine', 'ettevotte-ai', 'veebilehed'],
  },
  {
    id: 'ettevotte-ai',
    slug: 'ettevotte-ai',
    name: 'Sinu ettevõtte AI',
    group: 'AI',
    icon: 'chat',
    short: 'Assistent, kes teab su hinnakirja, lepinguid ja juhendeid. Andmed jäävad sulle.',
    pain: 'Samadele küsimustele vastan iga päev uuesti.',
    metaTitle: 'Ettevõtte oma AI-assistent | drealm',
    metaDescription: 'AI-assistent, kes tunneb sinu hinnakirja, lepinguid ja juhendeid. Vastab tiimile või klientidele sinu andmete põhjal ja viitab allikatele.',
    h1: 'Assistent, kes teab sinu äri.',
    lead: 'Ehitame AI-assistendi, kes tunneb sinu hinnakirja, lepinguid, juhendeid ja varasemaid pakkumisi. Tiim saab küsida ja vastus tuleb koos viitega dokumendile.',
    forWho: [
      'Samadele küsimustele vastatakse iga päev uuesti.',
      'Info on laiali kaustades, e-kirjades ja inimeste peas.',
      'Uued töötajad küsivad kõike kolleegidelt.',
    ],
    deliverables: [
      { icon: 'chat', t: 'Assistent', d: 'Vestlus veebis, Slackis või Teamsis.' },
      { icon: 'doc', t: 'Sinu dokumendid', d: 'Hinnakirjad, lepingud, juhendid ja pakkumised.' },
      { icon: 'search', t: 'Viited', d: 'Iga vastus näitab, millisest dokumendist see tuli.' },
      { icon: 'check', t: 'Andmed jäävad sulle', d: 'Ligipääs ainult neile, kes peavad.' },
    ],
    steps: [
      { t: 'Kaardistus', d: 'Millised küsimused ja dokumendid.' },
      { t: 'Ühendamine', d: 'Dokumendid ja ligipääsud korda.' },
      { t: 'Testimine', d: 'Tiim proovib päris küsimustega.' },
      { t: 'Kasutusele', d: 'Hoiame teadmised ajakohased.' },
    ],
    priceNote: 'Hind sõltub dokumentide mahust ja kanalitest.',
    timeline: '3–6 nädalat',
    faqs: [
      { q: 'Kas assistent võib ka klientidele vastata?', a: 'Jah, näiteks kodulehe vestlusaknas, aga ainult info põhjal, mille sina lubad.' },
      { q: 'Kas andmed lähevad AI treenimiseks?', a: 'Ei. Kasutame teenuseid, mis ei treeni sinu andmetel.' },
    ],
    related: ['automatiseerimine', 'koolitused', 'platvormid'],
  },
];

export type Lang = 'et' | 'en';

export const servicesFor = (lang: Lang) => (lang === 'en' ? SERVICES_EN : SERVICES);
export const serviceHref = (s: Service, lang: Lang = 'et') => (lang === 'en' ? `/en/services/${s.slug}` : `/teenused/${s.slug}`);
export const byId = (id: string, lang: Lang) => servicesFor(lang).find((s) => s.id === id);
export const relatedOf = (s: Service, lang: Lang) => s.related.map((id) => byId(id, lang)).filter((x): x is Service => Boolean(x));
export const GROUP_LABEL: Record<Lang, Record<Group, string>> = {
  et: { Veeb: 'Veeb', Turundus: 'Turundus', AI: 'AI' },
  en: { Veeb: 'Web', Turundus: 'Marketing', AI: 'AI' },
};
