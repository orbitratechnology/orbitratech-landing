'use client';

import { WHATSAPP_URL } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { HeroBrandOrbits } from './HeroBrandOrbits';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { FlickeringGrid } from './ui/flickering-grid';
import { Meteors } from './ui/meteors';
import { WhatsAppIcon } from './ui/whatsapp-icon';

gsap.registerPlugin(useGSAP);

const TRUST_POINTS = [
  'Fixed pricing for growing SMEs',
  'Web and mobile under one team',
  'Based in Beruwala — remote worldwide',
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(q('.hero-eyebrow, .hero-title, .hero-lead, .hero-cta, .hero-trust, .hero-visual'), {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          clearProps: 'transform',
        });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.from(q('.hero-eyebrow'), { autoAlpha: 0, y: 16, duration: 0.5 })
          .from(q('.hero-title'), { autoAlpha: 0, y: 28, duration: 0.7 }, '-=0.2')
          .from(q('.hero-lead'), { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.35')
          .from(q('.hero-cta'), { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.08 }, '-=0.25')
          .from(q('.hero-trust'), { autoAlpha: 0, y: 12, duration: 0.45, stagger: 0.06 }, '-=0.2')
          .from(q('.hero-visual'), { autoAlpha: 0, scale: 0.96, duration: 0.9 }, '-=0.5');
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28'>
      <FlickeringGrid
        className='absolute inset-0 z-0 opacity-20'
        color='oklch(52% 0.16 240)'
        maxOpacity={0.08}
        flickerChance={0.08}
        squareSize={4}
        gridGap={8}
      />
      <div
        className='pointer-events-none absolute inset-0 z-[1]'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -10%, var(--color-surface-tint), transparent 62%)',
        }}
      />
      <div
        className='pointer-events-none absolute inset-0 z-[1] opacity-[0.035]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className='pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-40' aria-hidden>
        <Meteors number={8} minDuration={4} maxDuration={10} angle={215} />
      </div>

      <div className='container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16'>
        <div className='min-w-0 text-center lg:text-left'>
          <p className='hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-4 py-1.5 text-sm font-medium shadow-[0_1px_2px_var(--color-shadow-soft)]'>
            <span className='h-2 w-2 rounded-full bg-[var(--color-accent)]' aria-hidden />
            <AnimatedShinyText shimmerWidth={120} className='text-sm font-medium'>
              For Sri Lankan small & medium businesses
            </AnimatedShinyText>
          </p>

          <h1 className='hero-title font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.08] tracking-tight text-[var(--color-ink)]'>
            Get more customers.{' '}
            <span className='text-[var(--color-accent)]'>
              Run your business smoother.
            </span>
          </h1>

          <p className='hero-lead mx-auto mt-6 max-w-xl text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)] lg:mx-0'>
            <strong className='font-semibold text-[var(--color-ink)]'>
              Orbitra Tech
            </strong>{' '}
            designs and builds websites and mobile apps that help local
            businesses win customers and save hours every week.
          </p>

          <div className='hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-whatsapp group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              <WhatsAppIcon className='h-5 w-5' />
              Talk on WhatsApp
            </a>
            <Link
              href='#contact'
              className='btn-outline group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              Book a free consultation
              <ArrowRight className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5' />
            </Link>
          </div>

          <p className='hero-trust mt-4 text-sm text-[var(--color-ink-subtle)]'>
            We reply within 2 hours (9am–8pm, Mon–Sat).
          </p>

          <ul className='hero-trust mt-8 flex flex-col gap-3 sm:gap-2'>
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className='flex min-w-0 items-start justify-center gap-2.5 text-sm text-[var(--color-ink-muted)] md:text-[length:var(--text-sm)] lg:justify-start'>
                <Check
                  className='mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]'
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='hero-visual mx-auto w-full max-w-md overflow-visible lg:max-w-none'>
          <HeroBrandOrbits />
        </div>
      </div>
    </section>
  );
}
