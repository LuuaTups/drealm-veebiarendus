---
title: "A new website without losing Google rankings: a checklist"
description: "Launching a new website is the most common way to lose SEO. A checklist: URL mapping, 301 redirects, content, technical checks and monitoring after launch."
summary: "You keep your Google visibility through a website switch by mapping every important old URL before launch, 301-redirecting each one to its closest new match and carrying over valuable content. Also check titles, the sitemap, canonical tags, robots.txt and noindex, then monitor Search Console for the first 30 days. For a domain change, also use Search Console’s Change of Address tool."
pubDate: 2026-10-06
translationKey: "migration-seo"
service: "seo"
---

A new website is exciting: new design, faster technology, better copy. But something unexpected often happens: a few weeks after launch, enquiries drop. Fewer visitors come from Google, and a page that performed well for years no longer ranks at all.

The cause is almost always the same. Old URLs disappeared, Google found empty pages and years of accumulated visibility were lost. The good news is that it’s avoidable. Below is the checklist we use for every website switch.

## Why visibility disappears

Google doesn’t rank “your company”; it ranks specific URLs. If `yourcompany.com/services/roofing` has performed well for years, Google has tied trust, links from other sites and a ranking position to that URL. If the new site has the same content at `yourcompany.com/roofs`, Google doesn’t know they’re related. The old URL returns a 404 and the accumulated value is gone.

Other common causes:

- important copy was left off the new site because “nobody reads it anyway”;
- titles and meta descriptions were left empty;
- a `noindex` setting from the staging environment was accidentally left on;
- the new site is slower or worse on phones;
- the domain changed without proper preparation.

## Checklist before launch

**1. Map all important URLs.** Pull a list from Search Console (Performance → Pages) and analytics of pages that bring visitors. Add pages that other sites link to. This is your “must not disappear” list.

**2. Find a new match for every old URL.** Every important old page needs a new page that answers the same question. Not the homepage, but the closest matching content.

**3. Set up 301 redirects.** A 301 tells Google “this page has moved here permanently”. Most of the old page’s value carries over. Make sure redirects go directly, not in a chain (A → B → C).

**4. Carry over valuable content.** If an old page had copy that brought search traffic, the same content (improved) must be on the new page too. Shorter and prettier isn’t automatically better.

**5. Check titles and meta descriptions.** Each page needs a unique title and description that match what people search for.

**6. Technical checks:**
- a sitemap exists and lists only new, working URLs;
- canonical tags point to the right URLs;
- `robots.txt` doesn’t block important pages;
- `noindex` isn’t accidentally on anywhere;
- for multilingual sites, hreflang tags are correct;
- the site loads fast on phones too.

## On launch day

- Switch redirects on at the same moment the new site goes live.
- Manually test the ten most important old URLs: do they redirect to the right place?
- Submit the new sitemap in Search Console.
- Request indexing for key pages in Search Console (URL inspection → “Request indexing”).

## The first 30 days

- Check the Search Console “Pages” report every couple of days: are 404s or unexpected “excluded” pages appearing?
- Fix every broken URL you find with a redirect right away.
- Compare search traffic with the old site. Small fluctuations in the first weeks are normal; a sharp drop isn’t.

## If visibility has already dropped

All is not lost. Old URLs can often be found afterwards (Search Console, analytics, old sitemaps, web archives) and redirected to the right new pages. The sooner you do it, the more visibility comes back.

## Changing domain

A domain change is the riskiest option, because every URL changes at once. It’s doable if every old URL redirects to its new match, the old domain stays active and redirecting for a long time, and you use Search Console’s change of address tool. Plan it especially carefully.

## Summary

Launching a new website doesn’t have to mean losing Google visibility. Map important URLs, 301-redirect each to its new match, carry over valuable content, check technical settings and monitor Search Console for the first 30 days.

When we build a new site, we always do this work. If someone else is building it, we can help with just the SEO side of the migration. See our solution [website migration without losing SEO](/en/solutions/website-migration-seo) or our [website redesign](/en/services/website-development/website-redesign) service. If you’re planning a switch, [get a quote](/en/contact?t=seo).

## Sources

- [Google Search Central: How to move a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) — Google’s guide to URL mapping, permanent redirects and monitoring a site move.
- [Google Search Central: Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects) — a 301 tells Google a page has permanently moved to a new location.
- [Search Console Help: Change of Address tool](https://support.google.com/webmasters/answer/9370220?hl=en) — the tool to use when moving from one domain to another.
