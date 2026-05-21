'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  FaDesktop,
  FaGlobe,
  FaMobileScreenButton,
} from 'react-icons/fa6';
import { SiGoogle, SiGoogleplay } from 'react-icons/si';

import { cn } from '@/lib/utils';
import {
  ServiceVisual,
  type ServiceVisualId,
} from './services/service-visuals';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ServiceIcon = {
  Icon: IconType;
  color: string;
  label: string;
};

type Service = {
  name: string;
  description: string;
  visualId: ServiceVisualId;
  icon: ServiceIcon;
};

function ServiceOrbitIcon({
  Icon,
  color,
  label,
  className,
}: ServiceIcon & { className?: string }) {
  return (
    <div
      className={cn(
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]/95 shadow-[0_8px_28px_oklch(0_0_0_/_0.12)] backdrop-blur-sm',
        className,
      )}
      title={label}>
      <Icon className='size-5' style={{ color }} aria-hidden />
    </div>
  );
}

const SERVICES: Service[] = [
  {
    name: 'Website development',
    description:
      'Fast, conversion-focused sites that earn trust on first visit.',
    visualId: 'website',
    icon: { Icon: FaGlobe, color: '#60A5FA', label: 'Website' },
  },
  {
    name: 'Mobile apps',
    description:
      'Native iOS and Android experiences your customers keep installed.',
    visualId: 'mobile',
    icon: { Icon: FaMobileScreenButton, color: '#818CF8', label: 'Mobile' },
  },
  {
    name: 'Digital transformation',
    description:
      'Modernize operations with the right stack — not the trendiest one.',
    visualId: 'transform',
    icon: { Icon: FaDesktop, color: '#A78BFA', label: 'Desktop' },
  },
  {
    name: 'E-commerce',
    description:
      'Stores with secure payments and inventory you can manage.',
    visualId: 'ecommerce',
    icon: { Icon: SiGoogleplay, color: '#00A173', label: 'Play Store' },
  },
  {
    name: 'Cloud infrastructure',
    description:
      'Hosting and DevOps that stay up when your busiest season hits.',
    visualId: 'cloud',
    icon: { Icon: SiGoogle, color: '#4285F4', label: 'Google Cloud' },
  },
];

function ServiceCard({
  name,
  description,
  visualId,
  icon,
}: Service) {
  return (
    <article className='service-card group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_12px_40px_oklch(0_0_0_/_0.06)] transition-[border-color,transform] duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/35 hover:shadow-[0_16px_48px_oklch(0_0_0_/_0.08)]'>
      <div className='flex flex-1 flex-col p-5'>
        <div className='flex items-start gap-3'>
          <ServiceOrbitIcon {...icon} className='mt-0.5' />
          <div className='min-w-0 flex-1'>
            <h3 className='font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-[var(--color-ink)] sm:text-lg'>
              {name}
            </h3>
            <p className='mt-1.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
              {description}
            </p>
          </div>
        </div>

        <div className='service-visual-wrap mt-auto pt-4'>
          <ServiceVisual id={visualId} />
        </div>
      </div>

      <div
        className='pointer-events-none absolute inset-0 rounded-2xl transition-colors duration-[var(--dur-base)] group-hover:bg-[var(--color-accent-muted)]/10'
        aria-hidden
      />
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        '.service-card',
        sectionRef.current,
      );

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(cards, { autoAlpha: 1, y: 0, clearProps: 'transform' });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const header = sectionRef.current?.querySelector('.services-header');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
        });

        if (header) {
          tl.from(header, { autoAlpha: 0, y: 24, duration: 0.65 });
        }

        tl.from(
          cards,
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.98,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
          },
          header ? '-=0.25' : 0,
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id='services'
      ref={sectionRef}
      className='relative border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='services-header mx-auto mb-14 max-w-2xl text-center'>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            One team for everything you need to go digital
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            Pick a starting point — we often combine web, mobile, and cloud in a
            single engagement so you are not juggling vendors.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
