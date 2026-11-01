import { CONTENT_UPDATED, LEGAL_UPDATED, PRIVACY_UPDATED } from '@/lib/constants';
import { PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { PRODUCT_DETAILS } from '@/lib/product-data';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { absoluteUrl, isoDate, markdownUrl } from './format';
import { HOME_SUMMARY, HOME_TITLE, renderHome } from './renderers/home';
import { renderProductPage } from './renderers/product';
import { renderServicePage } from './renderers/service';

export type MarkdownGroup = 'core' | 'services' | 'products';

export type MarkdownPage = {
  /** HTML path this page mirrors. */
  path: string;
  title: string;
  /** One factual line, used in llms.txt and the catalog. */
  description: string;
  group: MarkdownGroup;
  lastModified: Date;
  render: () => string;
};

// The one place a page gets a markdown twin. Register a page here and
// /<path>.md, Accept negotiation, the catalog, llms.txt, and llms-full.txt
// all pick it up. scripts/check-markdown-coverage.ts fails the check when an
// app route is neither registered here nor listed in MARKDOWN_SKIPPED.
export const MARKDOWN_PAGES: MarkdownPage[] = [
  {
    path: '/',
    title: HOME_TITLE,
    description: HOME_SUMMARY,
    group: 'core',
    lastModified: CONTENT_UPDATED,
    render: renderHome,
  },
  ...SERVICE_PAGES.map((page) => ({
    path: `/${page.slug}`,
    title: page.title,
    description: page.description,
    group: 'services' as const,
    lastModified: CONTENT_UPDATED,
    render: () => renderServicePage(page),
  })),
  ...Object.values(PRODUCT_DETAILS).map((product) => ({
    path: product.path,
    title: `${product.title}: ${product.eyebrow}`,
    description: `${product.status}. ${product.description} ${PRODUCT_STATUS_NOTES[product.status]}`,
    group: 'products' as const,
    lastModified: CONTENT_UPDATED,
    render: () => renderProductPage(product),
  })),
];

const LEGAL_SKIP_REASON =
  'Legal text is written directly in the page component, so there is no data source to render markdown from. Listed in llms.txt as HTML.';

/** Public routes deliberately left without a markdown twin, with the reason. */
export const MARKDOWN_SKIPPED: { path: string; title: string; reason: string; lastModified: Date }[] = [
  { path: '/privacy-policy', title: 'Orbitra Tech privacy policy', reason: LEGAL_SKIP_REASON, lastModified: PRIVACY_UPDATED },
  { path: '/worknet/privacy-policy', title: 'Worknet privacy policy', reason: LEGAL_SKIP_REASON, lastModified: LEGAL_UPDATED },
  { path: '/worknet/terms-and-conditions', title: 'Worknet terms and conditions', reason: LEGAL_SKIP_REASON, lastModified: LEGAL_UPDATED },
  { path: '/gemfort/privacy-policy', title: 'GemFort privacy policy', reason: LEGAL_SKIP_REASON, lastModified: LEGAL_UPDATED },
  { path: '/gemfort/terms-and-conditions', title: 'GemFort terms and conditions', reason: LEGAL_SKIP_REASON, lastModified: LEGAL_UPDATED },
  { path: '/gemfort/delete-account', title: 'GemFort account deletion', reason: LEGAL_SKIP_REASON, lastModified: LEGAL_UPDATED },
];

const PAGE_BY_PATH = new Map(MARKDOWN_PAGES.map((page) => [page.path, page]));

/** HTML paths that have a markdown twin; the proxy negotiates only these. */
export const MARKDOWN_PATHS: ReadonlySet<string> = new Set(PAGE_BY_PATH.keys());

export function findMarkdownPage(path: string) {
  return PAGE_BY_PATH.get(path);
}

export function listMarkdownRoutes() {
  return MARKDOWN_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    group: page.group,
    html: absoluteUrl(page.path),
    markdown: markdownUrl(page.path),
    lastModified: isoDate(page.lastModified),
  }));
}
