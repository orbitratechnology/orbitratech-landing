'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type PathStep = { title: string; description: string };

/**
 * An ordered list drawn as a route: numbered stops joined by a line that
 * draws itself once when the list scrolls into view. Horizontal from `md`,
 * vertical below it. The finished route is the markup; motion only adds.
 */
export function StepPath({
  steps,
  className,
  tone = 'paper',
}: {
  steps: PathStep[];
  className?: string;
  tone?: 'paper' | 'field';
}) {
  const root = useRef<HTMLDivElement>(null);
  const onField = tone === 'field';

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        });
        tl.from(el.querySelectorAll('.step-line-h'), { scaleX: 0, transformOrigin: '0% 50%', duration: 1.1, ease: 'power2.inOut' });
        tl.from(el.querySelectorAll('.step-line-v'), { scaleY: 0, transformOrigin: '50% 0%', duration: 1.1, ease: 'power2.inOut' }, 0);
        tl.from(el.querySelectorAll('.step-dot'), { scale: 0.4, autoAlpha: 0, stagger: 0.18, duration: 0.45, ease: 'back.out(2)' }, 0.1);
        tl.from(el.querySelectorAll('.step-copy'), { autoAlpha: 0, y: 14, stagger: 0.18, duration: 0.6, ease: 'power3.out' }, 0.2);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn('relative', className)}
      style={{ ['--n' as string]: steps.length }}>
      <div
        className={cn(
          'step-line-h pointer-events-none absolute top-6 right-[calc(100%/var(--n)/2)] left-[calc(100%/var(--n)/2)] hidden h-0.5 md:block',
          onField ? 'bg-[var(--color-field-2)]' : 'bg-[var(--color-accent)]',
        )}
        aria-hidden
      />
      <div
        className={cn(
          'step-line-v pointer-events-none absolute top-6 bottom-6 left-6 w-0.5 md:hidden',
          onField ? 'bg-[var(--color-field-2)]' : 'bg-[var(--color-accent)]',
        )}
        aria-hidden
      />
      <ol className='relative grid gap-10 md:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] md:gap-8'>
        {steps.map((step, index) => (
          <li
            key={step.title}
            className='relative grid grid-cols-[3rem_minmax(0,1fr)] gap-5 md:grid-cols-1 md:justify-items-center md:gap-6 md:text-center'>
            <span
              className={cn(
                'step-dot relative z-[1] flex size-12 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[length:var(--text-lg)] font-semibold',
                onField
                  ? 'bg-[var(--color-accent)] text-[var(--color-paper-2)] outline-8 outline-solid outline-[var(--color-field)]'
                  : 'bg-[var(--color-accent)] text-[var(--color-paper-2)] outline-8 outline-solid outline-[var(--color-paper)]',
              )}
              aria-hidden>
              {index + 1}
            </span>
            <div className='step-copy min-w-0 pt-2 md:max-w-[17rem] md:pt-0'>
              <h3 className={cn('t-h3', onField && 'text-[var(--color-field-ink)]')}>{step.title}</h3>
              <p
                className={cn(
                  'mt-2 text-[length:var(--text-base)] leading-relaxed',
                  onField ? 'text-[var(--color-field-muted)]' : 'text-[var(--color-ink-muted)]',
                )}>
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
