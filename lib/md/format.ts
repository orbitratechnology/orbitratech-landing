import { SITE_URL, siteUrl } from '@/lib/constants';

// Shared markdown building blocks. Every link a renderer emits goes through
// absoluteUrl() so agents never receive a relative URL.

/** Absolute HTML URL for a site path, an anchor, or an external URL. */
export function absoluteUrl(href: string) {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;
  if (href.startsWith('#')) return `${SITE_URL}/${href}`;
  return siteUrl(href.startsWith('/') ? href : `/${href}`);
}

/** The .md twin of an HTML path: `/` → `/index.md`, `/gemfort` → `/gemfort.md`. */
export function markdownUrl(path: string) {
  return path === '/' ? `${SITE_URL}/index.md` : `${SITE_URL}${path}.md`;
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function escapeText(text: string) {
  return text.replace(/([\\[\]])/g, '\\$1');
}

export function link(text: string, href: string) {
  return `[${escapeText(text)}](${absoluteUrl(href)})`;
}

export function list(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join('\n');
}

export function orderedList(items: readonly string[]) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

export function table(headers: string[], rows: string[][]) {
  const cell = (value: string) => value.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  return [
    `| ${headers.map(cell).join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(cell).join(' | ')} |`),
  ].join('\n');
}

/** `### Question` + answer blocks, so each question is its own anchor. */
export function faq(items: readonly { question: string; answer: string }[]) {
  return items.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n');
}

/** A `## Heading` followed by its blocks, separated by blank lines. */
export function section(heading: string, ...blocks: (string | false | null | undefined)[]) {
  return [`## ${heading}`, ...blocks.filter(Boolean)].join('\n\n');
}

type DocumentOptions = {
  title: string;
  summary: string;
  path: string;
  lastModified: Date;
  sections: (string | false | null | undefined)[];
  related?: { text: string; href: string }[];
};

/** The standard page shape: title, summary, canonical, date, content, related links. */
export function markdownDocument({
  title,
  summary,
  path,
  lastModified,
  sections,
  related = [],
}: DocumentOptions) {
  const parts = [
    `# ${title}`,
    `> ${summary}`,
    `Canonical: ${absoluteUrl(path)}\nLast updated: ${isoDate(lastModified)}`,
    ...sections.filter(Boolean),
  ];
  if (related.length > 0) {
    parts.push(section('Related', list(related.map((item) => link(item.text, item.href)))));
  }
  return `${parts.join('\n\n')}\n`;
}
