import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { prefersMarkdown } from '@/lib/md/http';
import { MARKDOWN_PATHS } from '@/lib/md/registry';

const MARKDOWN_HANDLER = '/api/md';

function rewriteToMarkdown(request: NextRequest, path: string) {
  const url = request.nextUrl.clone();
  url.pathname = path === '/' ? MARKDOWN_HANDLER : `${MARKDOWN_HANDLER}${path}`;
  return NextResponse.rewrite(url);
}

// Routes agents to the markdown twin of a page:
//   /gemfort.md, /index.md          → /api/md/<path> (unknown paths get a markdown 404)
//   /gemfort with Accept: text/markdown ranked above text/html → same
// Negotiation only applies to pages registered in lib/md/registry.ts. Every
// other request falls through to Next.js untouched. Never block a route here
// based on request headers, or crawlers (which send no Sec-Fetch-* headers)
// will see 404s on live pages.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith('.md')) {
    const path = pathname === '/index.md' ? '/' : pathname.slice(0, -'.md'.length);
    return rewriteToMarkdown(request, path);
  }

  if (!MARKDOWN_PATHS.has(pathname)) return NextResponse.next();

  if (prefersMarkdown(request.headers.get('accept'))) {
    return rewriteToMarkdown(request, pathname);
  }

  const res = NextResponse.next();
  res.headers.append('Vary', 'Accept');
  return res;
}

export const config = {
  // Skip API routes, Next.js internals, /.well-known, and any file with an
  // extension other than .md (agent files, images, sitemap, scripts).
  matcher: ['/((?!api/|_next/|\\.well-known/|.*\\.(?!md$)[^/.]+$).*)'],
};
