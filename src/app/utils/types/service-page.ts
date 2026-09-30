/**
 * The shape every service page renders from. It is deliberately CMS-agnostic:
 * a headless CMS "services" collection should map 1:1 onto it. Today's JSON files
 * are mapped by `toServicePage`; a CMS would only need its own small adapter.
 */

export interface Link {
  text: string;
  url: string;
}

/** A list entry that is plain text, rich text, or a titled card. */
export interface ListItem {
  title?: string;
  text?: string;
  html?: string;
}

export interface ServicePage {
  status: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  intro: { title: string; body?: string; note?: string; cta?: Link };
  audience?: { title: string; intro?: string; items: ListItem[]; extra: string[] };
  offerings?: {
    intro?: string;
    items: { title: string; description: string; table?: { label: string; value: string }[] }[];
  };
  requirements?: {
    intro?: string;
    html?: string;
    groups: { title: string; items: string[]; note?: string }[];
    note?: string;
  };
  process?: { intro?: string; steps: { title: string; description: string }[] };
  scenarios?: { title: string; items: ListItem[] };
  whyUs?: string;
  faqs: { question: string; answer: string }[];
  cta: { title: string; body?: string; link: Link };
}

const text = (v: unknown): string | undefined =>
  typeof v === 'string' && v.trim() ? v.trim() : undefined;

const isHtml = (v: string) => /<[a-z][\s\S]*>/i.test(v);

/** Pasted editor HTML carries inline styles/classes (e.g. font-family: Lexend); drop them so the page's own typography applies. */
const cleanHtml = (html: string) =>
  html.replace(/\s(?:style|class|data-[\w-]+)="[^"]*"/g, '').replace(/&nbsp;/g, ' ');

const listItem = (raw: any): ListItem | null => {
  const body = text(raw?.description ?? raw?.list ?? raw?.item);
  const title = text(raw?.title);
  if (!body && !title) return null;
  return body && isHtml(body) ? { title, html: cleanHtml(body) } : { title, text: body };
};

const items = (raw: unknown): ListItem[] =>
  Array.isArray(raw) ? raw.map(listItem).filter((i): i is ListItem => !!i) : [];

const strings = (raw: unknown): string[] =>
  items(raw)
    .map((i) => i.text ?? i.title)
    .filter((s): s is string => !!s);

const link = (label: unknown, url: unknown): Link | undefined => {
  const t = text(label);
  const u = text(url);
  return t && u ? { text: t, url: u } : undefined;
};

/** Maps one of the current `src/content/*.json` service records onto `ServicePage`. */
export function toServicePage(raw: any): ServicePage {
  const audienceItems = items(raw.who_we_help_items).concat(items(raw.who_we_help_list));
  const offerings = (raw.what_we_offer_items ?? []).map((o: any) => ({
    title: text(o.title) ?? '',
    description: text(o.description) ?? '',
    table: Array.isArray(o.table)
      ? o.table.map((r: any) => ({ label: text(r.table_item) ?? '', value: text(r.table_value) ?? '' }))
      : undefined,
  }));

  // Requirement checklists come in three shapes across the current content
  const groups: { title: string; items: string[]; note?: string }[] = (raw.what_you_need_items ?? []).map(
    (g: any) => ({
      title: text(g.title) ?? '',
      items: strings(g.description_items ?? g.list),
    })
  );
  if (raw.work_permit_extensions?.length) {
    groups.push({
      title: 'For work permit extensions',
      items: strings(raw.work_permit_extensions),
      note: text(raw.work_permit_extension_footnote),
    });
  }
  if (raw.co_op_work_permits?.length) {
    groups.push({
      title: 'For co-op work permits',
      items: strings(raw.co_op_work_permits),
      note: text(raw.co_op_permit_footnote),
    });
  }
  const requirementsHtml = text(raw.what_you_need_to_apply ?? raw.what_you_need_to_apply_copy);

  const steps = (raw.how_we_work_items ?? []).map((s: any) => ({
    title: text(s.title) ?? '',
    description: text(s.description) ?? '',
  }));
  const scenarios = items(raw.common_scenarios_items);
  const faqs = (raw.faq_items ?? [])
    .map((f: any) => ({ question: text(f.question) ?? '', answer: text(f.answer ?? f.answers) ?? '' }))
    .filter((f: { question: string; answer: string }) => f.question && f.answer);

  return {
    status: text(raw.status) ?? 'published',
    title: text(raw.title) ?? '',
    subtitle: text(raw.subtitle) ?? '',
    heroImage: text(raw.header_image),
    intro: {
      title: text(raw.intro_title) ?? '',
      // Some records carry their intro in intro_subtitle only
      body: text(raw.intro_description) ?? text(raw.intro_subtitle),
      note: text(raw.intro_description) ? text(raw.intro_subtitle) : undefined,
      cta: link(raw.intro_cta_text, raw.intro_cta_link),
    },
    audience:
      audienceItems.length || text(raw.who_we_help_intro)
        ? {
            title: text(raw.who_we_help_title) ?? 'Who we help',
            intro: text(raw.who_we_help_intro),
            items: audienceItems,
            extra: strings(raw.who_we_help_subitems),
          }
        : undefined,
    offerings: offerings.length ? { intro: text(raw.what_we_offer_intro), items: offerings } : undefined,
    requirements:
      groups.length || requirementsHtml
        ? {
            intro: text(raw.what_you_need_intro),
            html: requirementsHtml && cleanHtml(requirementsHtml),
            groups,
            note: text(raw.what_you_need_footnote),
          }
        : undefined,
    process: steps.length ? { intro: text(raw.how_we_work_intro), steps } : undefined,
    scenarios: scenarios.length
      ? { title: text(raw.common_scenarios_title) ?? 'Common scenarios we handle', items: scenarios }
      : undefined,
    whyUs: text(raw.why_choose_velox),
    faqs,
    cta: {
      title: text(raw.banner_title) ?? 'Ready to get started?',
      body: text(raw.banner_description) ?? text(raw.banner_subtitle),
      link: link(raw.banner_cta_text, raw.banner_cta_link) ?? {
        text: 'Book a Consultation',
        url: '/book-your-appointment',
      },
    },
  };
}
