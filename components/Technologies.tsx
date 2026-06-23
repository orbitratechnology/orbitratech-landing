import { BrandMarquee } from '@/components/BrandMarquee'
import { TECHNOLOGY_LOGOS } from '@/lib/brand-logos'

export default function Technologies() {
  return (
    <BrandMarquee
      id='platforms'
      eyebrow='Platforms & Integrations'
      title='Built with enterprise-grade tools'
      description='Cloud infrastructure, databases, AI APIs, and commerce platforms — the same stack trusted by global product teams, configured for Sri Lankan businesses.'
      logos={TECHNOLOGY_LOGOS}
      dualRow
    />
  )
}
