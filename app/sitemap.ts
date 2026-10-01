import { connection } from 'next/server'
import type { MetadataRoute } from 'next'
import { SERVICE_PAGES } from '@/lib/service-pages'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection()
  const lastModified = new Date()

  return [
    ...SERVICE_PAGES.map((page) => ({
      url: `https://orbitratech.net/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: 'https://orbitratech.net',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://orbitratech.net/llms.txt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://orbitratech.net/callnet',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://orbitratech.net/worknet',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://orbitratech.net/gemfort',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://orbitratech.net/hermade',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://orbitratech.net/worknet/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://orbitratech.net/worknet/terms-and-conditions',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://orbitratech.net/gemfort/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://orbitratech.net/gemfort/terms-and-conditions',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://orbitratech.net/gemfort/delete-account',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
