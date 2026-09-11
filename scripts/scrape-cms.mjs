// One-off export of all Directus CMS content so the site can serve it statically.
// Usage: node scripts/scrape-cms.mjs
//   src/content/<collection>.json  - API response ({ data }), Directus asset refs rewritten to /assets/cms/*
//   public/assets/cms/*            - every file in the Directus file library
//   scrape/raw/<collection>.json   - untouched API responses (backup of record)
//   scrape/html|text/<page>.*      - rendered live pages, baseline for checking the static build
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const CMS = 'https://directus-production-14f4.up.railway.app';
const SITE = 'https://veloximmigration.com';
const root = new URL('..', import.meta.url);
const out = (p) => new URL(p, root);

async function get(url, as = 'json') {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return as === 'json' ? res.json() : as === 'text' ? res.text() : Buffer.from(await res.arrayBuffer());
}

async function save(path, body) {
  const file = out(path);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, body);
}

// Collections: every `collection: '...'` in the routes, plus the ones fetched directly by components.
const routes = await readFile(out('src/app/app.routes.ts'), 'utf8');
const collections = [
  ...new Set([...routes.matchAll(/collection: '(\w+)'/g)].map((m) => m[1])),
  'home_page',
  'navigation',
  'posts',
];

// Files: download the whole library, then map both bare ids and full asset URLs to local paths.
const { data: files } = await get(`${CMS}/files?limit=-1`);
const localPath = {};
for (const f of files) {
  const ext = f.filename_download.split('.').pop();
  localPath[f.id] = `/assets/cms/${f.id}.${ext}`;
  await save(`public${localPath[f.id]}`, await get(`${CMS}/assets/${f.id}`, 'buffer'));
}
const rewriteAssets = (json) =>
  json
    .replace(new RegExp(`${CMS}/assets/([0-9a-f-]{36})[^"'\\s)]*`, 'g'), (m, id) => localPath[id] ?? m)
    .replace(/"([0-9a-f-]{36})"/g, (m, id) => (localPath[id] ? `"${localPath[id]}"` : m));

const content = {};
for (const c of collections) {
  const raw = JSON.stringify(await get(`${CMS}/items/${c}?limit=-1`), null, 2);
  await save(`scrape/raw/${c}.json`, raw);
  await save(`src/content/${c}.json`, rewriteAssets(raw));
  content[c] = JSON.parse(raw).data;
  const leftover = rewriteAssets(raw).match(new RegExp(`${CMS}[^"\\s]*`, 'g'));
  if (leftover) console.warn(`! ${c} still references the CMS:`, leftover);
}

// Rendered pages: sitemap URLs + blog.
const sitemap = await readFile(out('sitemap.xml'), 'utf8');
const pages = [
  ...[...sitemap.matchAll(/<loc>https:\/\/veloximmigration\.com([^<]*)<\/loc>/g)].map((m) => m[1]),
  '/blog/posts',
  ...content.posts.map((p) => `/blog/posts/${encodeURIComponent(p.slug)}`),
];
for (const page of pages) {
  const html = await get(SITE + page, 'text');
  const name = page.replace(/^\/$/, '/home').slice(1).replace(/[\/%]+/g, '_');
  const text = html
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .split('\n').map((l) => l.trim()).filter(Boolean).join('\n');
  await save(`scrape/html/${name}.html`, html);
  await save(`scrape/text/${name}.txt`, text);
}

console.log(`${collections.length} collections, ${files.length} files, ${pages.length} pages`);
