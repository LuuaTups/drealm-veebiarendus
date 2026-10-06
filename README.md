# drealm.ee

SEO-optimeeritud teenuste veebileht: kodulehed, kinnisvara veebilehed ja AI-automatiseerimine. Eesti + inglise keel.

**Tehnoloogia:** [Astro](https://astro.build) (täiesti staatiline sait) + PHP päringuvorm, majutus ja e-post Zone'is.

## Käivitamine

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run deploy   # build + rsync Zone'i serverisse
```

## Struktuur

| Kus | Mis |
|---|---|
| `src/data/v2/services.ts`, `services.en.ts` | 9 teenuse sisu (ET + EN, samad `id`-d). Avalehe plokid ja teenuselehed tulevad siit. |
| `src/data/v2/ui.ts` | Marsruudid ja kasutajaliidese tekstid mõlemas keeles |
| `src/content/blog/{et,en}/*.md` | Blogipostitused (sama `translationKey` seob keeled) |
| `src/views/v2/*.astro` | Lehemallid (avaleht, teenused, teenuseleht, kontakt, blogi, privaatsus) |
| `src/pages/` | URL-id (õhukesed failid, mis kasutavad vaateid) |
| `src/layouts/V2.astro` + `src/styles/v2.css` | Navbar, jalus (3D + tasuta ülevaate vorm), disainisüsteem |
| `src/scripts/hero-scene.ts` | three.js 3D-taust (hõljuvad kaardid) |
| `src/components/v2/ServiceMock.astro` | Teenuste interaktiivsed näidised |
| `src/components/v2/InquiryForm.astro` | „Küsi hinda“ kolmeastmeline vorm |
| `public/api/contact.php` | Vormid → e-post (Zone'i meil, PHP `mail()`) |
| `public/.htaccess` | https, www → apex, puhtad URL-id, vanade aadresside 301-suunamised |

## Zone'i seadistus

| Fail | Sisu |
|---|---|
| `.env.deploy` (pole gitis) | `ZONE_SSH=virtXXXXX@drealm.ee`, `ZONE_PATH=domeenid/www.drealm.ee/htdocs` |
| `~/.ssh/drealm_zone` | Deploy SSH-võti; avalik võti lisatud Zone'i paneeli |
| serveris `api/config.php` | Päringute saaja ja saatja (vt `public/api/config.example.php`) |

## SEO

- Iga lehe `title`, `description`, canonical, `hreflang` (et/en/x-default), Open Graph
- JSON-LD: ProfessionalService, Service, FAQPage, BreadcrumbList, BlogPosting, OfferCatalog
- Automaatne `sitemap-index.xml`, `robots.txt`
- Isehostitud fondid (ei Google Fontsi päringuid), optimeeritud WebP-pildid
