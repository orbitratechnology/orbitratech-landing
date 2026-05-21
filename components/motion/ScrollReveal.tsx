'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, type ReactNode } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scrub?: boolean | number;
  staggerChildren?: string;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 36,
  scrub = false,
  staggerChildren,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'transform' });
        if (staggerChildren) {
          gsap.set(el.querySelectorAll(staggerChildren), {
            autoAlpha: 1,
            y: 0,
            clearProps: 'transform',
          });
        }
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = staggerChildren
          ? gsap.utils.toArray<HTMLElement>(staggerChildren, el)
          : [el];

        const tweenVars = {
          autoAlpha: 0,
          y,
          duration: scrub ? 1 : 0.85,
          delay,
          ease: 'power2.out',
          stagger: staggerChildren ? 0.1 : 0,
        };

        if (scrub) {
          gsap.from(targets, {
            ...tweenVars,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 45%',
              scrub: typeof scrub === 'number' ? scrub : 0.6,
            },
          });
          return;
        }

        gsap.from(targets, {
          ...tweenVars,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
