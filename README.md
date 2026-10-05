# drealm.ee

SEO-optimeeritud teenuste veebileht: kodulehed, kinnisvara veebilehed ja AI-automatiseerimine. Eesti + inglise keel.

**Tehnoloogia:** [Astro](https://astro.build) (staatiline sait) + üks serverless-funktsioon päringuvormi jaoks, majutus Vercelis.

## Käivitamine

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Struktuur

| Kus | Mis |
|---|---|
| `src/data/services/*.ts` | Kõigi teenuselehtede sisu (ET + EN). Uus teenus = uus objekt massiivi. |
| `src/data/site.ts` | Marsruudid, menüüd, kasutajaliidese tekstid |
| `src/content/blog/{et,en}/*.md` | Blogipostitused (sama `translationKey` seob keeled) |
| `src/views/*.astro` | Lehemallid (avaleht, hinnad, tööd jne) |
| `src/pages/` | URL-id (õhukesed failid, mis kasutavad vaateid) |
| `src/pages/api/contact.ts` | Päringuvorm → e-post (Resend) |

## Keskkonnamuutujad (Vercel → Settings → Environment Variables)

| Muutuja | Näide |
|---|---|
| `RESEND_API_KEY` | `re_…` (resend.com) |
| `LEAD_EMAIL` | aadress, kuhu päringud saabuvad |
| `LEAD_FROM` | `drealm <noreply@drealm.ee>` (pärast domeeni kinnitamist Resendis) |

## SEO

- Iga lehe `title`, `description`, canonical, `hreflang` (et/en/x-default), Open Graph
- JSON-LD: ProfessionalService, Service, FAQPage, BreadcrumbList, BlogPosting, OfferCatalog
- Automaatne `sitemap-index.xml`, `robots.txt`
- Isehostitud fondid (ei Google Fontsi päringuid), optimeeritud WebP-pildid
