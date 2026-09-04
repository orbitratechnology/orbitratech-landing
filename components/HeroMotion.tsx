'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, type ReactNode } from 'react';

gsap.registerPlugin(useGSAP);

export function HeroMotion({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      const mm = gsap.matchMedia();

      // Keep content visible without JS (agents / no-motion). Only enhance when motion is OK.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          q(
            '.hero-eyebrow, .hero-title, .hero-lead, .hero-cta, .hero-trust, .hero-visual',
          ),
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clearProps: 'transform',
          },
        );
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = q(
          '.hero-eyebrow, .hero-title, .hero-lead, .hero-cta, .hero-trust',
        );
        // Start from visible SSR state; animate only subtle lift so crawlers always see text
        gsap.fromTo(
          intro,
          { y: 12, autoAlpha: 1 },
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.06, ease: 'power2.out' },
        );
        gsap.fromTo(
          q('.hero-visual'),
          { scale: 0.98, autoAlpha: 1 },
          { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'power2.out' },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className='hero-intro relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28'>
      {children}
    </section>
  );
}
