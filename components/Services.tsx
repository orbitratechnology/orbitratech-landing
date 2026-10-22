'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

import { SERVICE_ICONS, ServiceScene } from '@/components/scenes';
import { SERVICES } from '@/lib/services-data';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './motion/ScrollReveal';

const PAGE_BY_SCENE = Object.fromEntries(SERVICE_PAGES.map((page) => [page.scene, page]));

/**
 * The four services as a switcher: one tab per service, and each panel
 * shows the service working in its own animated scene.
 */
export default function Services() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Panels that were hidden have no size; re-measure scroll positions.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [active]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = SERVICES.length - 1;
    const next =
      event.key === 'ArrowRight'
        ? (index === last ? 0 : index + 1)
        : event.key === 'ArrowLeft'
          ? (index === 0 ? last : index - 1)
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id='services' className='section scroll-mt-24'>
      <div className='shell'>
        <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
          <h2 className='t-h2'>What we can build for you</h2>
          <p className='t-lead text-[var(--color-ink-muted)]'>
            Four services, each priced for the result rather than the hours.
            Pick the one closest to your problem.
          </p>
        </ScrollReveal>

        <div
          role='tablist'
          aria-label='Services'
          className='-mx-[var(--gutter)] mt-12 flex gap-2 overflow-x-auto px-[var(--gutter)] pb-2 md:mx-0 md:px-0'>
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id];
            const selected = index === active;
            return (
              <button
                key={service.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type='button'
                role='tab'
                id={`service-tab-${service.id}`}
                aria-selected={selected}
                aria-controls={`service-panel-${service.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full px-5 py-3 text-[length:var(--text-base)] font-semibold transition-colors duration-[var(--dur-base)]',
                  selected
                    ? 'bg-[var(--color-ink)] text-[var(--color-paper-2)]'
                    : 'bg-[var(--color-paper-3)] text-[var(--color-ink)] hover:bg-[var(--color-paper-4)]',
                )}>
                <Icon className='size-5' aria-hidden />
                {service.name}
              </button>
            );
          })}
        </div>

        {SERVICES.map((service, index) => {
          const page = PAGE_BY_SCENE[service.id];
          return (
            <div
              key={service.id}
              role='tabpanel'
              id={`service-panel-${service.id}`}
              aria-labelledby={`service-tab-${service.id}`}
              hidden={index !== active}
              className='mt-6 rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-6 md:p-12'>
              <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14'>
                <div>
                  <p className='t-label text-[var(--color-accent-strong)]'>{service.tagline}</p>
                  <h3 className='mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-2xl)] leading-tight font-semibold tracking-[-0.02em]'>
                    {service.name}
                  </h3>
                  <p className='t-lead mt-4'>{service.description}</p>
                  <ul className='mt-7 grid gap-3'>
                    {service.details.map((detail) => (
                      <li key={detail} className='flex items-start gap-3 text-[length:var(--text-base)]'>
                        <span className='mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-paper-2)]' aria-hidden>
                          <Check className='size-3.5' strokeWidth={3} />
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${page.slug}`} className='btn-cta btn-cta-lg btn-soft mt-9'>
                    More about {service.name.toLowerCase()}
                    <ArrowRight className='btn-arrow size-4' aria-hidden />
                  </Link>
                </div>
                <ServiceScene id={service.id} active={index === active} className='mx-auto w-full max-w-[32rem]' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
