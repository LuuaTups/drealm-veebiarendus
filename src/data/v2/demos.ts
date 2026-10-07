// Fictional demo businesses for the website mock on industry solution pages,
// so the law-firm page doesn't show a restaurant. Restaurant ("Atelier Nord") stays the default.
export interface Demo {
  host: string;
  name: string;
  nav: [string, string];
  tag: string;
  title: string;
  cta: string;
  /** three fields on the second phone (label, value) */
  form: [string, string][];
}

type L = { et: Demo; en: Demo };

export const DEMOS: Record<string, L> = {
  ehitus: {
    et: { host: 'kivimaja-ehitus.ee', name: 'Kivimaja Ehitus', nav: ['Tööd', 'Hinnapäring'], tag: 'Ehitus ja renoveerimine', title: 'Majad, mis peavad vastu.', cta: 'Küsi pakkumist', form: [['Töö', 'Katuse vahetus'], ['Pindala', '140 m²'], ['Algus', 'Kevad 2027']] },
    en: { host: 'kivimaja-build.com', name: 'Kivimaja Build', nav: ['Projects', 'Get a quote'], tag: 'Construction & renovation', title: 'Houses built to last.', cta: 'Get a quote', form: [['Job', 'Roof replacement'], ['Area', '140 m²'], ['Start', 'Spring 2027']] },
  },
  ilusalong: {
    et: { host: 'salonglumi.ee', name: 'Salong Lumi', nav: ['Teenused', 'Broneeri'], tag: 'Ilusalong', title: 'Hoolitsus, mis jääb meelde.', cta: 'Broneeri aeg', form: [['Teenus', 'Maniküür'], ['Kuupäev', 'R, 17. okt'], ['Kell', '14:00']] },
    en: { host: 'salonlumi.com', name: 'Salon Lumi', nav: ['Services', 'Book'], tag: 'Beauty salon', title: 'Care you’ll remember.', cta: 'Book now', form: [['Service', 'Manicure'], ['Date', 'Fri, 17 Oct'], ['Time', '14:00']] },
  },
  kliinik: {
    et: { host: 'kliinikmeri.ee', name: 'Kliinik Meri', nav: ['Teenused', 'Broneeri'], tag: 'Hambaravi', title: 'Rahulik hambaravi kogu perele.', cta: 'Broneeri aeg', form: [['Teenus', 'Kontroll'], ['Kuupäev', 'K, 22. okt'], ['Kell', '09:30']] },
    en: { host: 'clinicmeri.com', name: 'Clinic Meri', nav: ['Services', 'Book'], tag: 'Dental care', title: 'Calm dental care for the whole family.', cta: 'Book a visit', form: [['Service', 'Check-up'], ['Date', 'Wed, 22 Oct'], ['Time', '09:30']] },
  },
  autoteenindus: {
    et: { host: 'garaaz24.ee', name: 'Garaaž 24', nav: ['Hinnad', 'Broneeri'], tag: 'Autoteenindus', title: 'Hooldus ilma ootamiseta.', cta: 'Broneeri hooldus', form: [['Auto', 'Škoda Octavia'], ['Töö', 'Õlivahetus'], ['Kuupäev', 'E, 20. okt']] },
    en: { host: 'garage24.com', name: 'Garage 24', nav: ['Prices', 'Book'], tag: 'Car service', title: 'Servicing without the wait.', cta: 'Book a service', form: [['Car', 'Škoda Octavia'], ['Job', 'Oil change'], ['Date', 'Mon, 20 Oct']] },
  },
  advokaat: {
    et: { host: 'advokaadiburooraud.ee', name: 'Advokaadibüroo Raud', nav: ['Valdkonnad', 'Kontakt'], tag: 'Äri- ja tööõigus', title: 'Selged vastused keerulistele küsimustele.', cta: 'Küsi konsultatsiooni', form: [['Valdkond', 'Tööõigus'], ['Aeg', 'Sel nädalal'], ['Vorm', 'Videokõne']] },
    en: { host: 'raudlaw.com', name: 'Raud Law Office', nav: ['Practice areas', 'Contact'], tag: 'Business & employment law', title: 'Clear answers to complex questions.', cta: 'Book a consultation', form: [['Area', 'Employment law'], ['When', 'This week'], ['Format', 'Video call']] },
  },
  raamatupidamine: {
    et: { host: 'bilanssarvestus.ee', name: 'Bilanss Arvestus', nav: ['Teenused', 'Hinnad'], tag: 'Raamatupidamisteenus', title: 'Raamatupidamine ilma peavaluta.', cta: 'Küsi pakkumist', form: [['Ettevõte', 'OÜ'], ['Kandeid kuus', '~80'], ['Palgaarvestus', 'Jah']] },
    en: { host: 'bilanss.com', name: 'Bilanss Accounting', nav: ['Services', 'Prices'], tag: 'Accounting services', title: 'Bookkeeping without the headache.', cta: 'Get a quote', form: [['Company', 'Private limited'], ['Entries / month', '~80'], ['Payroll', 'Yes']] },
  },
  majutus: {
    et: { host: 'metsamaja.ee', name: 'Metsamaja', nav: ['Majad', 'Broneeri'], tag: 'Puhkemaja', title: 'Vaikne puhkus metsa sees.', cta: 'Broneeri öö', form: [['Saabumine', 'R, 17. okt'], ['Ööd', '2'], ['Külalisi', '4']] },
    en: { host: 'forestcabin.com', name: 'Forest Cabin', nav: ['Cabins', 'Book'], tag: 'Holiday cabins', title: 'A quiet stay in the woods.', cta: 'Book a night', form: [['Arrival', 'Fri, 17 Oct'], ['Nights', '2'], ['Guests', '4']] },
  },
  arhitekt: {
    et: { host: 'joonarhitektid.ee', name: 'Joon Arhitektid', nav: ['Projektid', 'Büroo'], tag: 'Arhitektuuribüroo', title: 'Hooned, mis sobivad oma kohta.', cta: 'Vaata projekte', form: [['Projekt', 'Eramu'], ['Pindala', '180 m²'], ['Staadium', 'Eskiis']] },
    en: { host: 'joonarchitects.com', name: 'Joon Architects', nav: ['Projects', 'Studio'], tag: 'Architecture studio', title: 'Buildings that fit their place.', cta: 'See projects', form: [['Project', 'Private house'], ['Area', '180 m²'], ['Stage', 'Concept']] },
  },
  kalkulaator: {
    et: { host: 'aknadpluss.ee', name: 'Aknad Pluss', nav: ['Tooted', 'Kalkulaator'], tag: 'Aknad ja uksed', title: 'Arvuta hind 30 sekundiga.', cta: 'Arvuta hind', form: [['Toode', 'Plastaken'], ['Mõõdud', '120 × 140 cm'], ['Kogus', '6']] },
    en: { host: 'windowsplus.com', name: 'Windows Plus', nav: ['Products', 'Calculator'], tag: 'Windows & doors', title: 'Get your price in 30 seconds.', cta: 'Calculate price', form: [['Product', 'PVC window'], ['Size', '120 × 140 cm'], ['Qty', '6']] },
  },
};

export const demoFor = (solutionId: string, lang: 'et' | 'en'): Demo | undefined => DEMOS[solutionId]?.[lang];
