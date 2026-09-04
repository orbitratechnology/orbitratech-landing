import { connection } from 'next/server'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection()
  const lastModified = new Date()

  return [
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
  ]
}
