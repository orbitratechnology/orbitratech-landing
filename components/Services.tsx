'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { ServiceVisual } from '@/components/services/service-visuals';
import { SERVICES, type ServiceData, type ServiceIcon } from '@/lib/services-data';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ServiceOrbitIcon({
  Icon,
  color,
  label,
  className,
}: ServiceIcon & { className?: string }) {
  return (
    <div
      className={cn(
        'flex size-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]/95 shadow-[0_8px_28px_oklch(0_0_0_/_0.12)] backdrop-blur-sm',
        className,
      )}
      title={label}>
      <Icon className='size-5' style={{ color }} aria-hidden />
    </div>
  );
}

function ServiceCopy({
  service,
  index,
  className,
}: {
  service: ServiceData;
  index: number;
  className?: string;
}) {
  return (
    <div className={cn('min-w-0', className)}>
      <p className='font-[family-name:var(--font-display)] text-[length:var(--text-sm)] font-medium tracking-wide text-[var(--color-accent)]'>
        {String(index + 1).padStart(2, '0')} · {service.tagline}
      </p>
      <div className='mt-4 flex items-start gap-4'>
        <ServiceOrbitIcon {...service.icon} />
        <div className='min-w-0 flex-1'>
          <h3 className='font-[family-name:var(--font-display)] text-[length:var(--text-2xl)] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-3xl)]'>
            {service.name}
          </h3>
          <p className='mt-4 max-w-prose text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)] md:text-[length:var(--text-lg)]'>
            {service.description}
          </p>
          <ul className='mt-6 flex flex-col gap-3'>
            {service.details.map((detail) => (
              <li
                key={detail}
                className='flex gap-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)] md:text-[length:var(--text-base)]'>
                <span
                  className='mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]'
                  aria-hidden
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <Link
            href='#contact'
            className='btn-cta btn-cta-lg btn-outline group mt-8'>
            Discuss this service
            <ArrowRight
              className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5'
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileServiceSection({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  return (
    <article
      className='service-mobile-section flex min-h-[100dvh] flex-col justify-center border-t border-[var(--color-rule)] py-16 first:border-t-0'
      data-service-index={index}>
      <ServiceCopy service={service} index={index} />
      <div className='service-visual-showcase mt-10'>
        <ServiceVisual id={service.id} variant='showcase' serviceIndex={index} />
      </div>
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const timelineFillRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const servicesScrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const stage = stageRef.current;
      if (!section || !track || !stage) return;

      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      const visuals = visualRefs.current.filter(Boolean) as HTMLDivElement[];
      const dots = dotRefs.current.filter(Boolean) as HTMLButtonElement[];
      const count = panels.length;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([panels, visuals], { clearProps: 'all' });
        gsap.set(timelineFillRef.current, { clearProps: 'all' });
      });

      mm.add('(max-width: 1023px)', () => {
        gsap.set([panels, visuals], { clearProps: 'all' });
      });

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.set(panels, { autoAlpha: 0, y: 28 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });
        gsap.set(visuals, { autoAlpha: 0, scale: 0.94 });
        gsap.set(visuals[0], { autoAlpha: 1, scale: 1 });
        gsap.set(dots, { scale: 1, autoAlpha: 0.45 });
        gsap.set(dots[0], { scale: 1.12, autoAlpha: 1 });
        gsap.set(timelineFillRef.current, { scaleY: 0, transformOrigin: 'top center' });

        stage.setAttribute('data-active-service', '0');

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: {
            trigger: track,
            start: 'top top',
            end: () => `+=${track.offsetHeight - window.innerHeight}`,
            pin: stage,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                count - 1,
                Math.floor(self.progress * count + 0.0001),
              );
              stage.setAttribute('data-active-service', String(idx));
              panels.forEach((panel, panelIndex) => {
                panel.setAttribute(
                  'aria-hidden',
                  panelIndex === idx ? 'false' : 'true',
                );
              });
              visuals.forEach((visual, visualIndex) => {
                visual.setAttribute(
                  'aria-hidden',
                  visualIndex === idx ? 'false' : 'true',
                );
              });
              dots.forEach((dot, dotIndex) => {
                if (dotIndex === idx) dot.setAttribute('aria-current', 'step');
                else dot.removeAttribute('aria-current');
              });
            },
          },
        });

        servicesScrollTriggerRef.current = tl.scrollTrigger ?? null;
        ScrollTrigger.refresh();

        tl.to(timelineFillRef.current, {
          scaleY: 1,
          ease: 'none',
          duration: count - 1,
        });

        for (let i = 1; i < count; i += 1) {
          tl.to(
            panels[i - 1],
            { autoAlpha: 0, y: -20, duration: 0.85, ease: 'power2.in' },
            i - 1,
          )
            .to(
              panels[i],
              { autoAlpha: 1, y: 0, duration: 0.85 },
              i - 0.15,
            )
            .to(
              visuals[i - 1],
              { autoAlpha: 0, scale: 0.92, duration: 0.85, ease: 'power2.in' },
              i - 1,
            )
            .to(visuals[i], { autoAlpha: 1, scale: 1, duration: 0.85 }, i - 0.15)
            .to(
              dots[i - 1],
              { scale: 1, autoAlpha: 0.45, duration: 0.35 },
              i - 0.2,
            )
            .to(
              dots[i],
              { scale: 1.12, autoAlpha: 1, duration: 0.35 },
              i - 0.2,
            );
        }
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const header = section.querySelector('.services-header');
        if (!header) return;

        gsap.from(header, {
          autoAlpha: 0,
          y: 24,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        });
      });

      return () => {
        servicesScrollTriggerRef.current = null;
        mm.revert();
      };
    },
    { scope: sectionRef, dependencies: [] },
  );

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    refresh();
    window.addEventListener('resize', refresh, { passive: true });
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('resize', refresh);
      window.removeEventListener('load', refresh);
    };
  }, []);

  const scrollToService = (index: number) => {
    if (window.innerWidth < 1024) return;

    const st = servicesScrollTriggerRef.current;
    if (!st || SERVICES.length <= 1) return;

    const progress = index / (SERVICES.length - 1);
    const top = st.start + (st.end - st.start) * progress;

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    window.scrollTo({ top, behavior });
  };

  return (
    <section
      id='services'
      ref={sectionRef}
      className='relative border-t border-[var(--color-rule)]'>
      <div className='container mx-auto max-w-6xl px-6 py-20 md:py-28'>
        <div className='services-header mx-auto max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>Services</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Built for Sri Lankan SMEs. Priced for the outcome, not the hours.
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            Fixed-scope pricing so you know what you are paying for before we
            start. Scroll through each capability below.
          </p>
        </div>
      </div>

      {/* Stacked sections - mobile always, desktop when reduced motion */}
      <div className='services-static-fallback container mx-auto max-w-6xl px-6 pb-20'>
        {SERVICES.map((service, index) => (
          <MobileServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Desktop: pinned scroll-driven stage */}
      <div
        ref={trackRef}
        className='services-scroll-track relative'
        style={{ height: `${SERVICES.length * 100}vh` }}>
        <div
          ref={stageRef}
          className='services-stage flex h-screen items-center overflow-hidden bg-[var(--color-paper)]'
          data-active-service='0'>
          <div className='container mx-auto grid h-full max-w-6xl grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-10 px-6 py-12 xl:gap-14'>
            {/* Timeline */}
            <nav
              className='services-timeline relative flex h-[min(24rem,58vh)] flex-col justify-between py-2'
              aria-label='Services progress'>
              <div
                className='absolute top-3 bottom-3 left-[0.6875rem] w-px bg-[var(--color-rule)]'
                aria-hidden
              />
              <div
                ref={timelineFillRef}
                className='services-timeline-fill absolute top-3 left-[0.6875rem] w-px origin-top bg-[var(--color-accent)]'
                style={{ height: 'calc(100% - 1.5rem)' }}
                aria-hidden
              />
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  type='button'
                  className={cn(
                    'services-timeline-dot relative z-[1] flex items-center gap-3 text-left transition-[opacity,transform] duration-[var(--dur-base)]',
                    index === 0 ? 'opacity-100' : 'opacity-45',
                  )}
                  aria-label={`Go to ${service.name}`}
                  aria-current={index === 0 ? 'step' : undefined}
                  onClick={() => scrollToService(index)}>
                  <span className='flex size-[1.375rem] items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[0.625rem] font-semibold tabular-nums text-[var(--color-ink-muted)] ring-4 ring-[var(--color-paper)]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='hidden max-w-[7rem] truncate font-[family-name:var(--font-display)] text-[length:var(--text-xs)] font-medium text-[var(--color-ink-muted)] xl:inline'>
                    {service.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* Copy panels */}
            <div className='relative h-[min(34rem,72vh)] min-w-0'>
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className='service-panel absolute inset-0 flex items-center'
                  aria-hidden={index !== 0}>
                  <ServiceCopy service={service} index={index} />
                </div>
              ))}
            </div>

            {/* Visual stage */}
            <div className='relative h-[min(28rem,62vh)] min-w-0 xl:h-[min(32rem,68vh)]'>
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    visualRefs.current[index] = el;
                  }}
                  className='service-visual-panel absolute inset-0 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]/60'
                  data-service-index={index}
                  aria-hidden={index !== 0}>
                  <ServiceVisual
                    id={service.id}
                    variant='showcase'
                    serviceIndex={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
