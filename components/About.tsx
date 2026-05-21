'use client';

import { CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STATS = [
  { label: 'SMEs partnered', value: 5, suffix: '+' },
  { label: 'Solutions delivered', value: 7, suffix: '+' },
  { label: 'Projects in pipeline', value: 2, suffix: '' },
  { label: 'Client satisfaction', value: 5, suffix: '/5' },
] as const;

const BULLETS = [
  'Fixed, transparent pricing for growing businesses',
  'Systems that scale when your revenue does',
] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        section.querySelectorAll('.about-stat-value').forEach((el) => {
          const target = (el as HTMLElement).dataset.value ?? '0';
          const suffix = (el as HTMLElement).dataset.suffix ?? '';
          (el as HTMLElement).textContent = `${target}${suffix}`;
        });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        section.querySelectorAll('.about-stat-value').forEach((el) => {
          const target = Number((el as HTMLElement).dataset.value ?? 0);
          const suffix = (el as HTMLElement).dataset.suffix ?? '';
          const counter = { val: 0 };

          gsap.to(counter, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
            onUpdate: () => {
              (el as HTMLElement).textContent = `${Math.round(counter.val)}${suffix}`;
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id='about'
      ref={sectionRef}
      className='relative overflow-hidden py-20 md:py-28'>
      <div className='container relative z-10 mx-auto max-w-6xl px-6'>
        <div className='grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start'>
          <ScrollReveal className='min-w-0' scrub>
            <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
              Built in Beruwala for businesses that need practical tech
            </h2>
            <p className='mt-6 max-w-lg text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
              Orbitra Tech is a full-service digital studio — not a template
              shop. We partner with Sri Lankan SMEs to replace spreadsheets,
              WhatsApp chaos, and outdated sites with tools that actually run
              the business.
            </p>

            <ul className='mt-8 space-y-3'>
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className='flex min-w-0 items-start gap-3 rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-4 py-3.5'>
                  <CheckCircle2
                    className='mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent-strong)]'
                    aria-hidden
                  />
                  <span className='font-medium text-[var(--color-ink)]'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className='grid grid-cols-2 gap-4 sm:gap-5'>
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 md:p-6'>
                  <p
                    className='about-stat-value font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl'
                    data-value={stat.value}
                    data-suffix={stat.suffix}>
                    0{stat.suffix}
                  </p>
                  <p className='mt-2 text-sm font-medium text-[var(--color-ink-muted)]'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <BeamCard beamDelay={2} className='mt-6'>
              <div className='rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent-muted)] p-5 md:p-6'>
                <p className='text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                  <strong className='text-[var(--color-ink)]'>Mission:</strong>{' '}
                  Make high-end web and mobile accessible to every Sri Lankan
                  entrepreneur who is ready to digitize — with local context and
                  global-quality engineering.
                </p>
              </div>
            </BeamCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
