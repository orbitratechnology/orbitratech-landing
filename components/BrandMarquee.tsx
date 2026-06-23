'use client'

import { Marquee } from '@/components/ui/marquee'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import type { BrandLogo } from '@/lib/brand-logos'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BrandMarqueeProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  logos: BrandLogo[]
  reverse?: boolean
  dualRow?: boolean
  className?: string
}

function BrandLogoTile({ logo }: { logo: BrandLogo }) {
  const isRaster = logo.src.endsWith('.png') || logo.src.endsWith('.webp')

  return (
    <figure
      className='brand-logo-tile flex h-[4.5rem] w-[9.5rem] shrink-0 items-center justify-center px-6 transition-transform duration-[var(--dur-base)] motion-safe:hover:-translate-y-1 sm:h-[5rem] sm:w-[10.5rem]'
      title={logo.caption ?? logo.name}>
      {isRaster ? (
        <Image
          src={logo.src}
          alt={logo.name}
          width={120}
          height={48}
          className='max-h-10 w-auto object-contain sm:max-h-11'
          draggable={false}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.src}
          alt={logo.name}
          className='max-h-8 w-auto max-w-[7rem] object-contain sm:max-h-9 sm:max-w-[7.5rem]'
          loading='lazy'
          decoding='async'
          draggable={false}
        />
      )}
    </figure>
  )
}

function StaticLogoGrid({ logos }: { logos: BrandLogo[] }) {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
      {logos.map((logo) => (
        <li key={logo.id}>
          <BrandLogoTile logo={logo} />
        </li>
      ))}
    </ul>
  )
}

export function BrandMarquee({
  id,
  eyebrow,
  title,
  description,
  logos,
  reverse = false,
  dualRow = false,
  className,
}: BrandMarqueeProps) {
  return (
    <section
      id={id}
      className={cn(
        'deferred-section relative overflow-hidden py-20 md:py-28',
        className,
      )}
      aria-labelledby={`${id}-heading`}>

      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>{eyebrow}</p>
          <h2
            id={`${id}-heading`}
            className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] [overflow-wrap:anywhere] md:text-[length:var(--text-display-s)]'>
            {title}
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            {description}
          </p>
        </ScrollReveal>
      </div>

      <div className='relative mt-12 md:mt-14'>
        <div
          className='pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--color-paper)] to-transparent sm:w-20 md:w-28'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--color-paper)] to-transparent sm:w-20 md:w-28'
          aria-hidden
        />

        <div className='motion-reduce:hidden'>
          <Marquee
            pauseOnHover
            reverse={reverse}
              className='[--duration:55s] [--marquee-gap:0.875rem] sm:[--marquee-gap:1rem]'
            aria-label={`${eyebrow} marquee`}>
            {logos.map((logo) => (
              <BrandLogoTile key={logo.id} logo={logo} />
            ))}
          </Marquee>

          {dualRow ? (
            <Marquee
              pauseOnHover
              reverse={!reverse}
              className='mt-3 [--duration:42s] [--marquee-gap:0.875rem] sm:[--marquee-gap:1rem] md:mt-4'
              aria-hidden>
              {[...logos].reverse().map((logo) => (
                <BrandLogoTile key={`${logo.id}-alt`} logo={logo} />
              ))}
            </Marquee>
          ) : null}
        </div>

        <div className='motion-reduce:block hidden px-6'>
          <StaticLogoGrid logos={logos} />
        </div>
      </div>
    </section>
  )
}
