// IndexNow: teatab Bingile, Yandexile jt otsingumootoritele kohe, millised lehed muutusid.
// Käivitub pärast deploy'd. Saadab ainult need URL-id, mille HTML on eelmisest
// deploy'st saadik muutunud. Võrdlus käib .indexnow-manifest.json abil, mis pole gitis.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { createHash } from 'node:crypto'

const HOST = 'drealm.ee'
const keyFile = readdirSync('public').find(f => /^[0-9a-f]{32}\.txt$/.test(f))
if (!keyFile) throw new Error('IndexNow võtmefail public/ kaustas puudub')
const key = keyFile.slice(0, -4)

const urls = [...readFileSync('dist/sitemap-0.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
const file = u => { const p = new URL(u).pathname; return `dist${p === '/' ? '/index' : p}.html` }

const MANIFEST = '.indexnow-manifest.json'
const prev = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}
const next = {}
const changed = []
for (const u of urls) {
  if (!existsSync(file(u))) continue
  // Astro paneb igale buildile uued asset-räsid; need ei tähenda sisulist muutust.
  const html = readFileSync(file(u), 'utf8').replace(/\/_astro\/[^"' )]+/g, '')
  next[u] = createHash('sha1').update(html).digest('hex')
  if (prev[u] !== next[u]) changed.push(u)
}

if (!changed.length) { console.log('IndexNow: muudatusi pole'); process.exit(0) }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: changed.slice(0, 10000) }),
})
if (res.ok) {
  writeFileSync(MANIFEST, JSON.stringify(next, null, 0))
  console.log(`IndexNow: ${changed.length} URL-i saadetud (${res.status})`)
} else {
  // Ära kukuta deploy'd — sait on juba üleval. Manifesti ei uuenda, järgmine kord proovib uuesti.
  console.warn(`IndexNow ebaõnnestus: ${res.status} ${await res.text()}`)
}
