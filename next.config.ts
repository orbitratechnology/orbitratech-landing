import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  async headers() {
    return [
      {
        // HTML pages only. Markdown responses set their own canonical Link
        // header, and a config header would overwrite it, so skip .md URLs,
        // /api/*, and requests that ask for markdown.
        source: '/((?!api/|.*\\.md$).*)',
        missing: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
        headers: [
          {
            key: 'Link',
            value: [
              '</llms.txt>; rel="describedby"; type="text/plain"',
              '</llms-full.txt>; rel="describedby"; type="text/plain"',
              '</ai.txt>; rel="describedby"; type="text/plain"',
              '</sitemap.xml>; rel="sitemap"; type="application/xml"',
              '</robots.txt>; rel="robots"; type="text/plain"',
            ].join(', '),
          },
        ],
      },
    ]
  },
}

export default nextConfig;
