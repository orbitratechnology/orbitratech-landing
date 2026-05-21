'use client';

import { ArrowRight, Check } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import { WHATSAPP_URL } from '@/lib/constants';
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
        className='absolute inset-0 z-0 opacity-30'
        color='oklch(72% 0.14 220)'
        maxOpacity={0.18}
        flickerChance={0.12}
        squareSize={4}
        gridGap={8}
      />
      <div
        className='pointer-events-none absolute inset-0 z-[1] opacity-40'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 70% 20%, var(--color-accent-muted), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, oklch(22% 0.04 280 / 0.4), transparent 55%)',
        }}
      />
      <div
        className='pointer-events-none absolute inset-0 z-[1] opacity-[0.04]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className='pointer-events-none absolute inset-0 z-[1] overflow-hidden' aria-hidden>
        <Meteors number={12} minDuration={3} maxDuration={8} angle={215} />
      </div>

      <div className='container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16'>
        <div className='min-w-0'>
          <p className='hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper-2)]/90 px-4 py-1.5 text-sm font-medium backdrop-blur-sm'>
            <span className='h-2 w-2 rounded-full bg-[var(--color-success)]' aria-hidden />
            <AnimatedShinyText shimmerWidth={120} className='text-sm font-medium'>
              Digital studio for Sri Lankan SMEs
            </AnimatedShinyText>
          </p>

          <h1 className='hero-title font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)]'>
            Ship the digital tools your business needs — without enterprise
            budgets
          </h1>

          <p className='hero-lead mt-6 max-w-xl text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            <strong className='font-semibold text-[var(--color-ink)]'>
              Orbitra Tech
            </strong>{' '}
            designs and builds websites and mobile apps that help local
            businesses win customers and save hours every week.
          </p>

          <div className='hero-cta mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-base font-semibold text-[var(--color-paper)] transition-[transform,background] duration-[var(--dur-base)] hover:scale-[1.02] hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              <WhatsAppIcon className='h-5 w-5' />
              Get a free consult
              <ArrowRight className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5' />
            </a>
            <Link
              href='#services'
              className='inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-7 py-3.5 text-base font-medium text-[var(--color-ink)] transition-[border-color,background] duration-[var(--dur-base)] hover:border-[var(--color-accent)] hover:bg-[var(--color-paper-3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              See what we build
            </Link>
          </div>

          <ul className='hero-trust mt-10 flex flex-col gap-3 sm:gap-2'>
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className='flex min-w-0 items-start gap-2.5 text-sm text-[var(--color-ink-muted)] md:text-[length:var(--text-sm)]'>
                <Check
                  className='mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-strong)]'
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
