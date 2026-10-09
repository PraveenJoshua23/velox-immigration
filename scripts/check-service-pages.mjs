// Runs every service's content through the ServicePage adapter and fails if a section drops out.
// Usage: node --no-warnings scripts/check-service-pages.mjs   (Node 23.6+ runs the .ts import directly)
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { toServicePage } from '../src/app/utils/types/service-page.ts';

const collections = [
  'study_in_canada', 'open_pgwp_permit', 'lmia_and_employer_permits', 'extensions_and_coop_permits',
  'visitor_visa', 'express_entry', 'provincial_nominee_program', 'atlantic_immigration',
  'family_sponsorship', 'business_immigration', 'pr_card_citizenship', 'appeals_refugees_hc_cases',
  'application_review', 'sop_dli_opinion',
];

for (const name of collections) {
  const { data } = JSON.parse(await readFile(new URL(`../src/content/${name}.json`, import.meta.url), 'utf8'));
  const page = toServicePage(Array.isArray(data) ? data[0] : data);
  const at = (msg) => `${name}: ${msg}`;

  assert.ok(page.title && page.subtitle, at('title/subtitle'));
  assert.match(page.heroImage ?? '', /\.webp$/, at('hero image'));
  assert.ok(page.intro.title && page.intro.body, at('intro'));
  assert.ok(page.audience?.items.length, at('who we help'));
  assert.ok(page.offerings?.items.every((o) => o.title && o.description), at('what we offer'));
  assert.ok(page.requirements?.html || page.requirements?.groups.every((g) => g.items.length), at('requirements'));
  assert.ok(page.process?.steps.length >= 3, at('how we work'));
  assert.ok(page.scenarios || page.whyUs, at('scenarios / why us'));
  assert.ok(page.faqs.length >= 5, at('faqs'));
  assert.ok(page.cta.link.url.startsWith('/'), at('cta link'));

  const html = [page.requirements?.html, ...page.audience.items.map((i) => i.html)].join('');
  assert.doesNotMatch(html, /style=|Lexend|class=/, at('pasted editor styles left in HTML'));
  console.log(`ok  ${name}`);
}
