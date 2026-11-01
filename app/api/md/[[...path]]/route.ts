import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { link, list } from '@/lib/md/format';
import { jsonResponse, markdownResponse, preflightResponse } from '@/lib/md/http';
import {
  MARKDOWN_PAGES,
  MARKDOWN_SKIPPED,
  findMarkdownPage,
  listMarkdownRoutes,
} from '@/lib/md/registry';

// The single markdown endpoint. proxy.ts rewrites /<path>.md and
// `Accept: text/markdown` requests here; /api/md/<path> works directly too.
// HEAD is derived from GET by Next.js.

const CATALOG = '_catalog';

export function generateStaticParams() {
  return [
    { path: [] },
    { path: [CATALOG] },
    ...MARKDOWN_PAGES.filter((page) => page.path !== '/').map((page) => ({
      path: page.path.slice(1).split('/'),
    })),
  ];
}

function toPagePath(segments: string[] = []) {
  const path = `/${segments.join('/')}`.replace(/\.md$/, '');
  return path === '/index' ? '/' : path;
}

function notFoundMarkdown(path: string) {
  return `# Page not found

> ${SITE_NAME} has no markdown version of ${path}.

${list([
  link('Home (markdown)', `${SITE_URL}/index.md`),
  link('Markdown catalog', '/api/md/_catalog'),
  link('llms.txt', '/llms.txt'),
])}
`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path: segments } = await params;

  if (segments?.length === 1 && segments[0] === CATALOG) {
    return jsonResponse({
      site: SITE_URL,
      routes: listMarkdownRoutes(),
      skipped: MARKDOWN_SKIPPED.map(({ path, reason }) => ({ path, reason })),
    });
  }

  const path = toPagePath(segments);
  const page = findMarkdownPage(path);
  if (!page) return markdownResponse(notFoundMarkdown(path), { status: 404 });

  return markdownResponse(page.render(), {
    canonicalPath: page.path,
    lastModified: page.lastModified,
    // Every page is rendered from data in the repo, so it only changes on deploy.
    maxAge: 86400,
  });
}

export function OPTIONS() {
  return preflightResponse();
}
