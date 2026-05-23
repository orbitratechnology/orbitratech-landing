'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, MapPin, Target } from 'lucide-react';
import { COMPANY_STATS } from '@/lib/company-stats';
import { useRef } from 'react';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PRINCIPLES = [
  'Fixed, transparent pricing for growing businesses',
  'Systems that scale when your revenue does',
  'Local context with global-quality engineering',
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
      className='deferred-section relative border-y border-[var(--color-rule)] bg-[var(--color-paper-2)]/50 py-20 md:py-28'>
      <div className='container relative z-10 mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-12 max-w-2xl text-center md:mb-14'>
          <p className='section-eyebrow mb-3'>About</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Built in Beruwala for businesses that need practical tech
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            A full-service digital studio — not a template shop. We partner with
            Sri Lankan SMEs to replace spreadsheets, WhatsApp chaos, and outdated
            sites with tools that actually run the business.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className='overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_1px_2px_var(--color-shadow-soft),0_12px_32px_var(--color-shadow)]'>
            <div className='grid grid-cols-2 divide-x divide-y divide-[var(--color-rule)] lg:grid-cols-4 lg:divide-y-0'>
              {COMPANY_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className='flex flex-col items-center px-4 py-8 text-center sm:px-6'>
                  <p
                    className='about-stat-value font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-accent)] md:text-4xl'
                    data-value={stat.value}
                    data-suffix={stat.suffix}>
                    0{stat.suffix}
                  </p>
                  <p className='mt-2 max-w-[9rem] text-[length:var(--text-sm)] font-semibold leading-snug text-[var(--color-ink-muted)]'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className='mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:mt-10 lg:gap-8'>
          <ScrollReveal delay={0.08}>
            <BeamCard beamDelay={0.5} className='h-full'>
              <div className='flex h-full flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <h3 className='font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]'>
                  Why teams work with us
                </h3>
                <p className='mt-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)] md:text-[length:var(--text-base)]'>
                  You get one accountable team from first call to launch — clear
                  scope, honest timelines, and software your staff can use without
                  a manual.
                </p>
                <ul className='mt-6 flex flex-col gap-4'>
                  {PRINCIPLES.map((item) => (
                    <li
                      key={item}
                      className='flex min-w-0 items-start gap-3 text-[length:var(--text-sm)] md:text-[length:var(--text-base)]'>
                      <span className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                        <Check className='h-3.5 w-3.5' aria-hidden />
                      </span>
                      <span className='font-semibold leading-relaxed text-[var(--color-ink)]'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BeamCard>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <BeamCard beamDelay={1.2} className='h-full'>
              <div className='flex h-full flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <span className='mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                  <Target className='h-5 w-5' aria-hidden />
                </span>
                <p className='text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]'>
                  Our mission
                </p>
                <blockquote className='mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-lg)] font-semibold leading-snug tracking-tight text-[var(--color-ink)] md:text-xl'>
                  Make high-end web and mobile accessible to every Sri Lankan
                  entrepreneur ready to digitize.
                </blockquote>
                <p className='mt-4 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                  We combine local market understanding with production-grade
                  engineering — so your digital presence earns trust on first
                  contact.
                </p>
                <div className='mt-auto flex items-center gap-2.5 border-t border-[var(--color-rule)] pt-6 text-[length:var(--text-sm)] font-semibold text-[var(--color-ink-muted)]'>
                  <MapPin
                    className='h-4 w-4 shrink-0 text-[var(--color-accent)]'
                    aria-hidden
                  />
                  <span>Beruwala, Sri Lanka · Remote worldwide</span>
                </div>
              </div>
            </BeamCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
