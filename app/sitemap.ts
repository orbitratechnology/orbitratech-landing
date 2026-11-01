import type { MetadataRoute } from 'next'
import { CONTENT_UPDATED, LEGAL_UPDATED, PRIVACY_UPDATED, SITE_URL } from '@/lib/constants'
import { LANDING_PRODUCTS } from '@/lib/landing-data'
import { SERVICE_PAGES } from '@/lib/service-pages'

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
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: PRIVACY_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...LEGAL_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
