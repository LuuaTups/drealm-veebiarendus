// Hand-written "Küsi hinda" topics (/kontakt?t=<topic>). Kept import-free so the form script can use TOPIC_SVC
// without pulling the services data into the browser bundle.
// Prices and timelines must match services.ts / subservices.ts — no claims that aren't on the site.

export interface QuoteTopic {
  /** service id to tick in the form */
  svc: string;
  h1: string;
  lead: string;
  facts: string[];
}

export const TOPICS_ET: Record<string, QuoteTopic> = {
  koduleht: {
    svc: 'veebilehed',
    h1: 'Küsi kodulehe hinda.',
    lead: 'Kirjelda paari lausega oma ettevõtet ja seda, mida leht peaks tegema. Saad ühe tööpäeva jooksul fikseeritud hinnaga pakkumise.',
    facts: ['Alates 900 €', 'Valmis 2–4 nädalaga', 'SEO ja analüütika sees'],
  },
  'e-pood': {
    svc: 'veebilehed',
    h1: 'Küsi e-poe hinda.',
    lead: 'Kirjelda, mida müüd ja umbes mitu toodet on. Saad ühe tööpäeva jooksul pakkumise koos platvormi soovitusega.',
    facts: ['Pangalingid ja pakiautomaadid', 'Tooteid haldad ise', 'SEO ja analüütika sees'],
  },
  platvorm: {
    svc: 'platvormid',
    h1: 'Küsi veebiplatvormi hinda.',
    lead: 'Kirjelda, mida platvorm peaks tegema ja millega see peaks ühenduma. Saad ühe tööpäeva jooksul pakkumise või paar täpsustavat küsimust.',
    facts: ['Alates 2 500 €', 'Valmis 4–8 nädalaga', 'Liidesed CRM-i ja raamatupidamisega'],
  },
  broneerimine: {
    svc: 'platvormid',
    h1: 'Küsi broneerimissüsteemi hinda.',
    lead: 'Kirjelda, mida broneeritakse ja kuidas see praegu käib. Saad ühe tööpäeva jooksul pakkumise.',
    facts: ['Klient broneerib ise', 'Kinnitused ja meeldetuletused', 'SEO ja analüütika sees'],
  },
  kinnisvara: {
    svc: 'platvormid',
    h1: 'Küsi arenduse kodulehe hinda.',
    lead: 'Kirjelda projekti ja korterite arvu. Saad ühe tööpäeva jooksul pakkumise koos korterivaliku lahendusega.',
    facts: ['Interaktiivne korterivalik', 'Alates 2 500 €', 'Valmis 4–8 nädalaga'],
  },
  seo: {
    svc: 'seo',
    h1: 'Küsi SEO hinda.',
    lead: 'Saada oma lehe aadress ja paar märksõna, mille järgi tahad leitav olla. Pakkumise saad pärast tasuta auditit.',
    facts: ['Tasuta audit enne pakkumist', 'Esimesed tulemused 2–4 kuuga', 'Ilma pikaajalise lepinguta'],
  },
  ai: {
    svc: 'ettevotte-ai',
    h1: 'Küsi AI-lahenduse hinda.',
    lead: 'Kirjelda, millised küsimused või tööd korduvad. Saad ühe tööpäeva jooksul ettepaneku, kus AI aega säästaks.',
    facts: ['Vastab sinu info põhjal', 'Viitab allikatele', 'Valmis 3–6 nädalaga'],
  },
  automatiseerimine: {
    svc: 'automatiseerimine',
    h1: 'Küsi automatiseerimise hinda.',
    lead: 'Kirjelda üht protsessi, mis võtab praegu liiga palju käsitööd. Saad ühe tööpäeva jooksul pakkumise.',
    facts: ['Alates 800 €', 'Valmis 2–4 nädalaga', 'Ühendub sinu tööriistadega'],
  },
};

/** topic → service id, for preselecting the form */
export const TOPIC_SVC: Record<string, string> = Object.fromEntries(
  Object.entries(TOPICS_ET).map(([k, v]) => [k, v.svc]),
);
