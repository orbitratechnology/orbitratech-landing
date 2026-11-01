import { absoluteUrl } from './format';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept',
};

const DAY = 60 * 60 * 24;

type MarkdownResponseOptions = {
  /** HTML path this markdown mirrors; omitted for 404s. */
  canonicalPath?: string;
  status?: number;
  lastModified?: Date;
  /** CDN cache lifetime in seconds. */
  maxAge?: number;
};

export function markdownResponse(
  body: string,
  { canonicalPath, status = 200, lastModified, maxAge = 3600 }: MarkdownResponseOptions = {},
) {
  const headers = new Headers({
    ...CORS_HEADERS,
    'Content-Type': 'text/markdown; charset=utf-8',
    'X-Markdown-Tokens': String(Math.ceil(body.length / 4)),
    // The HTML page stays canonical, so search engines never index the twin.
    'X-Robots-Tag': 'noindex, follow',
    // Served for both /page.md and Accept-negotiated /page requests.
    Vary: 'Accept',
    'Cache-Control':
      status === 200
        ? `public, s-maxage=${maxAge}, stale-while-revalidate=${DAY}`
        : 'public, s-maxage=300',
  });
  if (canonicalPath) {
    const canonical = absoluteUrl(canonicalPath);
    headers.set('Content-Location', canonical);
    headers.set('Link', `<${canonical}>; rel="canonical"`);
  }
  if (lastModified) headers.set('Last-Modified', lastModified.toUTCString());
  return new Response(body, { status, headers });
}

/** Plain-text agent files (llms.txt, ai.txt, robots.txt). */
export function textResponse(body: string, { maxAge = DAY, swr = DAY * 7 } = {}) {
  return new Response(body, {
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${swr}`,
    },
  });
}

export function jsonResponse(data: unknown) {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Cache-Control': `public, s-maxage=3600, stale-while-revalidate=${DAY}`,
    },
  });
}

export function preflightResponse() {
  return new Response(null, {
    status: 204,
    headers: { ...CORS_HEADERS, 'Access-Control-Max-Age': String(DAY) },
  });
}

/**
 * True only when the client ranks text/markdown above text/html. A missing
 * header or a bare `*\/*` always gets HTML, so browsers, curl, and link
 * previews never receive markdown by accident.
 */
export function prefersMarkdown(accept: string | null) {
  if (!accept) return false;
  let markdown = 0;
  let html = 0;
  for (const range of accept.split(',')) {
    const [type, ...params] = range.split(';').map((part) => part.trim().toLowerCase());
    const qParam = params.find((param) => param.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (!Number.isFinite(q)) continue;
    if (type === 'text/markdown') markdown = Math.max(markdown, q);
    if (type === 'text/html') html = Math.max(html, q);
  }
  return markdown > html;
}
