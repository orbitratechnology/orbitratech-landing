import { BrandMarquee } from '@/components/BrandMarquee'
import { TECHNOLOGY_LOGOS } from '@/lib/brand-logos'

export default function Technologies() {
  return (
    <BrandMarquee
      id='platforms'
      eyebrow='Tools we build with'
      title='Proven platforms, not experiments'
      description='The databases, cloud services, AI APIs, and commerce platforms we build on. These are the tools we use, not client logos.'
      logos={TECHNOLOGY_LOGOS}
      dualRow
    />
  )
}
