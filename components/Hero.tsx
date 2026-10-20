import { RESPONSE_TIME, WHATSAPP_URL } from '@/lib/constants';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroBrandOrbits } from './HeroBrandOrbits';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const HERO_BG = '/hero-bg.png';

const TRUST_POINTS = [
  'Fixed scope and price, agreed in writing before work starts',
  'You work directly with the founders who build it',
  'Client work in Sri Lanka, Australia, and the UK',
] as const;

export default function Hero() {
  return (
    <section className='hero-intro relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28'>
      <Image
        src={HERO_BG}
        alt=''
        fill
        priority
        sizes='100vw'
        className='pointer-events-none object-cover object-center'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 z-[1]'
        aria-hidden
        style={{
          background: `linear-gradient(
            105deg,
            rgb(255 255 255 / 0.22) 0%,
            rgb(255 255 255 / 0.08) 42%,
            transparent 100%
          )`,
        }}
      />
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 md:h-36'
        aria-hidden
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--color-paper))',
        }}
      />

      <div className='container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16'>
        <div className='min-w-0 text-center lg:text-left'>
          <h1>
            <span className='hero-eyebrow mb-4 block text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]'>
              Website &amp; app development in Sri Lanka
            </span>
            <span className='sr-only'>: </span>
            <span className='hero-title block font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.08] tracking-tight text-[var(--color-ink)]'>
              Software that wins customers and{' '}
              <span className='text-[var(--color-accent)]'>
                saves your team hours
              </span>
            </span>
          </h1>

          <p className='hero-lead mx-auto mt-6 max-w-xl text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)] lg:mx-0'>
            <strong className='font-semibold text-[var(--color-ink)]'>
              Orbitra Tech
            </strong>{' '}
            designs and builds websites, mobile apps, online stores, and
            business automation for growing companies in Sri Lanka and
            worldwide. We scope the smallest build that fixes your problem, at
            a price agreed before we start.
          </p>

          <div className='hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <Link
              href='#contact'
              className='btn-cta btn-cta-lg btn-cta-fluid btn-cta-fluid-sm btn-brand group gap-2'>
              Discuss your project
              <ArrowRight
                className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5'
                aria-hidden
              />
            </Link>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-cta btn-cta-lg btn-cta-fluid btn-cta-fluid-sm btn-outline group gap-2.5'>
              <WhatsAppIcon className='h-5 w-5 text-[var(--color-whatsapp-strong)]' aria-hidden />
              Ask a quick question
            </a>
          </div>

          <p className='hero-trust mt-4 text-sm text-[var(--color-ink-subtle)]'>
            No commitment needed. {RESPONSE_TIME}
          </p>

          <ul className='hero-trust mt-8 flex flex-col gap-3 sm:gap-2'>
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className='flex min-w-0 items-start justify-center gap-2.5 text-sm text-[var(--color-ink-muted)] md:text-[length:var(--text-sm)] lg:justify-start'>
                <Check
                  className='mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]'
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
