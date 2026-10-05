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
| `src/data/services/*.ts` | Kõigi teenuselehtede sisu (ET + EN). Uus teenus = uus objekt massiivi. |
| `src/data/site.ts` | Marsruudid, menüüd, kasutajaliidese tekstid |
| `src/content/blog/{et,en}/*.md` | Blogipostitused (sama `translationKey` seob keeled) |
| `src/views/*.astro` | Lehemallid (avaleht, hinnad, tööd jne) |
| `src/pages/` | URL-id (õhukesed failid, mis kasutavad vaateid) |
| `public/api/contact.php` | Päringuvorm → e-post (Zone'i meil, PHP `mail()`) |
| `public/.htaccess` | https, www → apex, puhtad URL-id, vahemälu |

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
