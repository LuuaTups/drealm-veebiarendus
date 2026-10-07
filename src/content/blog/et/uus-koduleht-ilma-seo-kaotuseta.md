---
title: "Kodulehe vahetus ilma SEO kaotuseta: kontrollnimekiri"
description: "Uue kodulehe käivitamine on levinuim viis SEO-d kaotada. Kontrollnimekiri: aadressid, 301-suunamised, sisu, tehniline kontroll ja jälgimine."
summary: "Kodulehe vahetamisel ei kao Google’i nähtavus, kui kaardistad enne käivitamist kõik olulised vanad aadressid, suunad igaühe 301-suunamisega sisult lähimale uuele lehele ja kannad väärtusliku sisu üle. Kontrolli ka pealkirju, sisekaarti, canonical-silte, robots.txt-d ja noindexit ning jälgi esimesed 30 päeva Search Console’is. Domeeni vahetusel kasuta lisaks Search Console’i aadressimuutmise tööriista."
pubDate: 2026-10-06
translationKey: "migration-seo"
service: "seo"
---

Uus koduleht on põnev: uus disain, kiirem tehnoloogia, paremad tekstid. Aga sageli juhtub midagi ootamatut: mõni nädal pärast käivitamist langevad päringud. Google’i otsingust tuleb vähem külastajaid, mõni aastaid hästi töötanud leht ei leia enam üldse kohta tulemuste hulgas.

Põhjus on peaaegu alati sama. Vanad aadressid kadusid, Google leidis tühjad lehed ja aastatega kogutud nähtavus läks kaotsi. Hea uudis on see, et seda saab vältida. Allpool on kontrollnimekiri, mida kasutame iga kodulehe vahetuse juures.

## Miks nähtavus kaob

Google ei hinda „sinu ettevõtet“, vaid konkreetseid aadresse. Kui leht `sinuettevote.ee/teenused/katusetood` on aastaid hästi esinenud, on Google selle aadressiga seostanud usalduse, viited teistelt saitidelt ja positsiooni otsingutulemustes. Kui uuel lehel on sama sisu aadressil `sinuettevote.ee/katused`, ei tea Google, et need on seotud. Vana aadress annab vea 404 ja kogutud väärtus kaob.

Teised levinud põhjused:

- olulised tekstid jäid uuelt lehelt välja, sest „keegi neid nagunii ei loe“;
- pealkirjad ja metakirjeldused jäid täitmata;
- arenduskeskkonna `noindex` säte jäi kogemata peale;
- uus leht on aeglasem või telefonis halvem;
- domeen vahetus ilma korraliku ettevalmistuseta.

## Kontrollnimekiri enne käivitamist

**1. Kaardista kõik olulised aadressid.** Võta Search Console’ist (Tulemused → Lehed) ja analüütikast nimekiri lehtedest, mis toovad külastajaid. Lisa lehed, millele viitavad teised saidid. See on sinu „ei tohi kaduda“ nimekiri.

**2. Leia igale vanale aadressile uus vaste.** Iga oluline vana leht peab saama uue lehe, mis vastab samale küsimusele. Mitte avaleht, vaid võimalikult sarnase sisuga leht.

**3. Seadista 301-suunamised.** 301 ütleb Google’ile: „see leht kolis püsivalt siia“. Nii kandub suur osa vana lehe väärtusest uuele üle. Kontrolli, et suunamised oleksid otse, mitte ahelas (A → B → C).

**4. Kanna väärtuslik sisu üle.** Kui vanal lehel oli tekst, mis tõi otsingutest külastajaid, peab sama sisu (parandatult) olema ka uuel lehel. Lühem ja ilusam ei ole automaatselt parem.

**5. Kontrolli pealkirju ja metakirjeldusi.** Igal lehel unikaalne pealkiri ja kirjeldus, mis vastab sellele, mida inimesed otsivad.

**6. Tehniline kontroll:**
- sitemap on olemas ja sisaldab ainult uusi, töötavaid aadresse;
- canonical-sildid viitavad õigetele aadressidele;
- `robots.txt` ei blokeeri olulisi lehti;
- `noindex` pole kuskil kogemata peal;
- mitmekeelse lehe puhul on hreflang-sildid korras;
- leht laeb kiiresti ka telefonis.

## Käivitamise päeval

- Lülita suunamised sisse samal hetkel, kui uus leht avaneb.
- Testi kümmet kõige olulisemat vana aadressi käsitsi: kas need suunavad õigesse kohta?
- Esita uus sitemap Search Console’is.
- Küsi Search Console’is olulisematele lehtedele indekseerimist (URL-i kontroll → „Taotle indekseerimist“).

## Esimesed 30 päeva

- Vaata Search Console’is iga paari päeva tagant raportit „Lehed“: kas tekib 404 vigu või ootamatuid „välja jäetud“ lehti?
- Paranda iga leitud katkine aadress kohe suunamisega.
- Võrdle otsingust tulnud külastajate arvu vana lehe ajaga. Väike kõikumine esimestel nädalatel on normaalne, järsk kukkumine pole.

## Kui nähtavus on juba langenud

Kõik pole kadunud. Sageli saab vanad aadressid tagantjärele leida (Search Console, analüütika, vanad sitemapid, internetiarhiiv) ja suunata õigetele uutele lehtedele. Mida varem seda teha, seda rohkem nähtavusest tuleb tagasi.

## Domeeni vahetus

Domeeni vahetus on kõige riskantsem variant, sest muutuvad kõik aadressid korraga. See on tehtav, kui iga vana aadress suunatakse uuele vastele, vana domeen jääb aktiivseks ja suunab edasi pikka aega ning Search Console’is kasutatakse aadressi muutmise tööriista. Plaani see eriti hoolikalt.

## Kokkuvõte

Uue kodulehe käivitamine ei pea tähendama Google’i nähtavuse kaotamist. Kaardista olulised aadressid, suuna igaüks 301-ga uuele vastele, kanna väärtuslik sisu üle, kontrolli tehnilisi seadeid ja jälgi esimesed 30 päeva Search Console’is.

Kui teeme uue lehe, teeme selle töö alati ära. Kui uue lehe teeb keegi teine, saame aidata ainult kolimise SEO-poolega. Vaata meie lahendust [kodulehe kolimine ilma SEO kaotuseta](/lahendused/kodulehe-kolimine-ilma-seo-kaotuseta) või [kodulehe uuendamise](/teenused/veebilehed/kodulehe-uuendamine) teenust. Kui oled vahetust plaanimas, [küsi hinda](/kontakt?t=seo).

## Allikad

- [Google Search Central: How to move a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) — Google’i juhend aadresside kaardistamiseks, püsivateks suunamisteks ja kolimise jälgimiseks.
- [Google Search Central: Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects) — 301-suunamine annab Google’ile märku, et leht on jäädavalt uuele aadressile kolinud.
- [Search Console Help: Change of Address tool](https://support.google.com/webmasters/answer/9370220?hl=en) — tööriist, mida kasutada ühelt domeenilt teisele kolimisel.
