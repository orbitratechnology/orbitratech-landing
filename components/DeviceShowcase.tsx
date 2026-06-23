'use client';

import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Iphone } from '@/components/ui/iphone';
import { Safari } from '@/components/ui/safari';
import { SHOWCASE_STATS, formatStatLine } from '@/lib/company-stats';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function DeviceShowcase() {
  const showcaseStats = SHOWCASE_STATS;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(section.querySelectorAll('.device-mockup'), {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id='showcase'
      className='deferred-section bg-[color-mix(in_oklch,var(--color-surface-tint)_35%,var(--color-paper-2))] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>What we ship</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]'>
            Websites and apps your customers actually use
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            Conversion-focused sites for discovery and native mobile apps for
            repeat engagement - designed and built by one team.
          </p>
        </ScrollReveal>

        <div className='device-mockup relative mx-auto mt-14 w-full max-w-4xl'>
          <Safari
            url='orbitratech.net'
            imageSrc='/showcase/showcase-desktop.png'
            className='relative z-0 w-full rounded-xl shadow-[0_1px_2px_var(--color-shadow-soft),0_20px_56px_var(--color-shadow)]'
          />

          <div
            className='absolute bottom-[-7%] -right-[7%] z-20 w-[22%] min-w-[108px] max-w-48 -translate-x-[8%] drop-shadow-[0_8px_24px_var(--color-shadow-soft)] drop-shadow-[0_24px_56px_var(--color-shadow)]'
            aria-hidden>
            <Iphone
              className='w-full'
              src='/showcase/showcase-mobile.png'
            />
          </div>

          <a
            href='#about'
            className='absolute -left-[7%] -bottom-[7%] z-30 flex w-[min(100%,320px)] items-center gap-4 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 shadow-[0_1px_2px_var(--color-shadow-soft),0_16px_40px_var(--color-shadow)] transition-[border-color,box-shadow] duration-[var(--dur-base)] hover:border-[var(--color-accent)]/30 hover:shadow-[0_1px_2px_var(--color-shadow-soft),0_20px_48px_var(--color-shadow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:gap-5 sm:p-6'>
            <Image
              src='/orbitra_logo.png'
              alt=''
              width={56}
              height={56}
              className='h-14 w-14 shrink-0 sm:h-16 sm:w-16'
              loading='lazy'
              aria-hidden
            />
            <div className='min-w-0'>
              {showcaseStats[0] && (
                <p className='text-base font-semibold text-[var(--color-ink)] sm:text-lg'>
                  {formatStatLine(showcaseStats[0], 'badge')}
                </p>
              )}
              {showcaseStats[1] && (
                <p className='mt-1 text-sm text-[var(--color-ink-subtle)] sm:text-base'>
                  {formatStatLine(showcaseStats[1], 'badge')}
                </p>
              )}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
