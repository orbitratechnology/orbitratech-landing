import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { LANDING_PRODUCTS } from '@/lib/landing-data'
import { SERVICE_PAGES } from '@/lib/service-pages'

// Update when page content changes. A lastmod that changes on every request
// is ignored by search engines, so keep these dates honest.
const CONTENT_UPDATED = new Date('2026-10-22')
const LEGAL_UPDATED = new Date('2026-10-07')

const LEGAL_PATHS = [
  '/worknet/privacy-policy',
  '/worknet/terms-and-conditions',
  '/gemfort/privacy-policy',
  '/gemfort/terms-and-conditions',
  '/gemfort/delete-account',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...SERVICE_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...LANDING_PRODUCTS.map((product) => ({
      url: `${SITE_URL}${product.href}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...LEGAL_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
