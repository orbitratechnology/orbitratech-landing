import { cacheLife, cacheTag } from 'next/cache'

import type { Media, Product } from '@/payload-types'

import {
  COMPANY_STATS,
  type CompanyStat,
  formatStatLine,
  formatStatValue,
} from './company-stats'
import { getPayloadClient } from './payload'

export type LandingProduct = {
  id: string
  title: string
  status: string
  description: string
  features: string[]
  imageUrl: string
  imageAlt: string
  legal?: {
    privacyPolicyUrl?: string | null
    termsUrl?: string | null
  }
}

const DEFAULT_PRODUCTS: LandingProduct[] = [
  {
    id: 'worknet',
    title: 'Worknet',
    status: 'In development',
    description:
      'Mobile app connecting workers with opportunities — job matching, profiles, and daily task management.',
    features: ['Job matching', 'Worker profiles', 'Task management'],
    imageUrl: '/worknet-logo.png',
    imageAlt: 'Worknet logo',
    legal: {
      privacyPolicyUrl: '/worknet/privacy-policy',
      termsUrl: '/worknet/terms-and-conditions',
    },
  },
  {
    id: 'gemnet',
    title: 'Gemnet',
    status: 'Planned',
    description:
      'Secure B2B network for gem traders — discovery, trading, and market insights in one place.',
    features: ['B2B trading', 'Verification', 'Market insights'],
    imageUrl: '/gemnet-logo.png',
    imageAlt: 'Gemnet logo',
  },
]

function mapGlobalStats(
  stats:
    | Array<{
        key: string
        label: string
        badgeLabel?: string | null
        value: number
        suffix?: string | null
      }>
    | null
    | undefined,
): CompanyStat[] {
  if (!stats?.length) return COMPANY_STATS

  return stats.map((stat) => ({
    id: stat.key,
    label: stat.label,
    badgeLabel: stat.badgeLabel ?? undefined,
    value: stat.value,
    suffix: stat.suffix ?? '',
  }))
}

function resolveMediaUrl(media: number | Media | null | undefined): string | null {
  if (!media || typeof media === 'number') return null

  return media.url ?? media.sizes?.card?.url ?? media.sizes?.thumbnail?.url ?? null
}

function mapProduct(
  doc: Pick<Product, 'id' | 'title' | 'description' | 'status' | 'logo'> & {
    features?: Product['features']
    legalLinks?: Product['legalLinks']
  },
): LandingProduct | null {
  const imageUrl = resolveMediaUrl(doc.logo)

  if (!imageUrl) return null

  const legal =
    doc.legalLinks?.privacyPolicyUrl || doc.legalLinks?.termsUrl
      ? {
          privacyPolicyUrl: doc.legalLinks.privacyPolicyUrl,
          termsUrl: doc.legalLinks.termsUrl,
        }
      : undefined

  return {
    id: String(doc.id),
    title: doc.title,
    status: doc.status,
    description: doc.description,
    features: doc.features?.map((item) => item.label).filter(Boolean) ?? [],
    imageUrl,
    imageAlt:
      typeof doc.logo === 'object' && doc.logo?.alt
        ? doc.logo.alt
        : `${doc.title} logo`,
    legal,
  }
}

export async function getSiteStats(): Promise<CompanyStat[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('site-stats')

  try {
    const payload = await getPayloadClient()
    const global = await payload.findGlobal({
      slug: 'site-stats',
      depth: 0,
    })

    return mapGlobalStats(global.stats)
  } catch {
    return COMPANY_STATS
  }
}

export async function getLandingProducts(): Promise<LandingProduct[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('products')

  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'products',
      where: {
        published: {
          equals: true,
        },
      },
      sort: 'sortOrder',
      depth: 1,
      limit: 20,
      select: {
        title: true,
        status: true,
        description: true,
        features: true,
        logo: true,
        legalLinks: true,
        sortOrder: true,
      },
    })

    const products = docs
      .map((doc) => mapProduct(doc))
      .filter((product): product is LandingProduct => product !== null)

    return products.length > 0 ? products : DEFAULT_PRODUCTS
  } catch {
    return DEFAULT_PRODUCTS
  }
}

export async function getLandingContent() {
  const [stats, products] = await Promise.all([
    getSiteStats(),
    getLandingProducts(),
  ])

  return {
    stats,
    showcaseStats: stats.slice(0, 2),
    products,
  }
}

export { formatStatLine, formatStatValue }
