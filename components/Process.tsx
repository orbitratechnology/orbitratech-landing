'use client';

import { MessageCircle, PenLine, Rocket } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Discovery call',
    body: 'Tell us your goals on WhatsApp. We scope what you need and what it should cost.',
  },
  {
    icon: PenLine,
    title: 'Design & build',
    body: 'We prototype, iterate, and ship with clear milestones — no surprise invoices.',
  },
  {
    icon: Rocket,
    title: 'Launch & support',
    body: 'Go live with training and handover. Stay on for updates as your business grows.',
  },
] as const;

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(section.querySelector('.process-line'), { scaleX: 1 });
      });

      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.from(section.querySelector('.process-line'), {
          scaleX: 0,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            end: 'center center',
            scrub: 0.8,
          },
        });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const steps = gsap.utils.toArray<HTMLElement>('.process-step', section);

        gsap.from(steps, {
          autoAlpha: 0,
          y: 32,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        });

        gsap.from(section.querySelectorAll('.process-icon'), {
          scale: 0.85,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
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
      className='relative border-y border-[var(--color-rule)] bg-[var(--color-paper-2)] py-16 md:py-20'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-12 max-w-2xl text-center'>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]'>
            How we work with you
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            A straightforward path from first message to production — built for
            owners who need results, not jargon.
          </p>
        </ScrollReveal>

        <div className='relative'>
          <div
            className='process-line absolute top-[2.75rem] right-[16.666%] left-[16.666%] hidden h-px origin-left bg-linear-to-r from-transparent via-[var(--color-accent)] to-transparent md:block'
            aria-hidden
          />

          <ol className='grid gap-6 md:grid-cols-3'>
            {STEPS.map((step, i) => (
              <li key={step.title} className='process-step'>
                <BeamCard beamDelay={i * 1.2} className='h-full'>
                  <div className='flex h-full flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-6'>
                    <span className='process-icon mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                      <step.icon className='h-5 w-5' aria-hidden />
                    </span>
                    <span className='mb-2 text-sm font-semibold text-[var(--color-accent)]'>
                      Step {i + 1}
                    </span>
                    <h3 className='mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]'>
                      {step.title}
                    </h3>
                    <p className='text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                      {step.body}
                    </p>
                  </div>
                </BeamCard>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
