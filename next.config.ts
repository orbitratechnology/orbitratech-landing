import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: [
              '</llms.txt>; rel="llms-txt"; type="text/plain"',
              '</sitemap.xml>; rel="sitemap"; type="application/xml"',
              '</robots.txt>; rel="robots"; type="text/plain"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
    ]
  },
}

export default nextConfig;
