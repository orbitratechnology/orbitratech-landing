'use client';

import { WHATSAPP_URL } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HeroBrandOrbits } from './HeroBrandOrbits';
import { WhatsAppIcon } from './ui/whatsapp-icon';

gsap.registerPlugin(useGSAP);

const HERO_BG_VIDEO = '/Ocean_waves_rolling_onto_beach_202606240203.mp4';
const HERO_BG_POSTER = '/hero-bg.png';

const TRUST_POINTS = [
  'Fixed pricing for growing SMEs',
  'Web and mobile under one team',
  'Based in Beruwala - remote worldwide',
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData =
      'connection' in navigator &&
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData;

    setAllowVideo(!motionQuery.matches && !saveData);
  }, []);

  useEffect(() => {
    if (!allowVideo) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const play = () => {
      if (document.hidden) return;
      void video.play().catch(() => {});
    };

    const pause = () => {
      if (!video.paused) video.pause();
    };

    const onVisibilityChange = () => {
      if (document.hidden) pause();
      else if (section.getBoundingClientRect().bottom > 0) play();
    };

    video.addEventListener('canplay', play, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) play();
        else pause();
      },
      { threshold: 0.05, rootMargin: '50px 0px' },
    );

    observer.observe(section);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      video.removeEventListener('canplay', play);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      pause();
    };
  }, [allowVideo]);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(q('.hero-eyebrow, .hero-title, .hero-lead, .hero-cta, .hero-trust, .hero-visual'), {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          clearProps: 'transform',
        });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = q(
          '.hero-eyebrow, .hero-title, .hero-lead, .hero-cta, .hero-trust',
        );
        gsap.set(intro, { autoAlpha: 0, y: 16 });
        gsap.set(q('.hero-visual'), { autoAlpha: 0, scale: 0.96 });

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.to(q('.hero-eyebrow'), { autoAlpha: 1, y: 0, duration: 0.5 })
          .to(q('.hero-title'), { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.2')
          .to(q('.hero-lead'), { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.35')
          .to(q('.hero-cta'), { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.25')
          .to(q('.hero-trust'), { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 }, '-=0.2')
          .to(q('.hero-visual'), { autoAlpha: 1, scale: 1, duration: 0.9 }, '-=0.5');
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className='hero-intro relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28'>
      {/* Static hero background — restore if removing video
      <Image
        src={HERO_BG_POSTER}
        alt=''
        fill
        priority
        sizes='100vw'
        className='object-cover object-center'
        aria-hidden
      />
      */}
      <div
        className='pointer-events-none absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${HERO_BG_POSTER})` }}
        aria-hidden
      />
      {allowVideo ? (
        <video
          ref={videoRef}
          className=' hero-bg-video pointer-events-none absolute inset-0 -z-1 block h-full w-full border-0 object-cover object-center shadow-none outline-none'
          poster={HERO_BG_POSTER}
          muted
          playsInline
          loop
          autoPlay
          preload='metadata'
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden>
          <source src={HERO_BG_VIDEO} type='video/mp4' />
        </video>
      ) : null}
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

          <h1 className='hero-title font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.08] tracking-tight text-[var(--color-ink)]'>
            Get more customers.{' '}
            <span className='text-[var(--color-accent)]'>
              Run your business smoother.
            </span>
          </h1>

          <p className='hero-lead mx-auto mt-6 max-w-xl text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)] lg:mx-0'>
            <strong className='font-semibold text-[var(--color-ink)]'>
              Orbitra Tech
            </strong>{' '}
            designs and builds websites and mobile apps that help local
            businesses win customers and save hours every week.
          </p>

          <div className='hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-cta btn-cta-lg btn-cta-fluid btn-cta-fluid-sm btn-whatsapp group gap-2.5'>
              <WhatsAppIcon className='h-5 w-5' aria-hidden />
              Talk on WhatsApp
            </a>
            <Link
              href='#contact'
              className='btn-cta btn-cta-lg btn-cta-fluid btn-cta-fluid-sm btn-outline group'>
              Book a free consultation
              <ArrowRight
                className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5'
                aria-hidden
              />
            </Link>
          </div>

          <p className='hero-trust mt-4 text-sm text-[var(--color-ink-subtle)]'>
            We reply within 2 hours (9am–8pm, Mon–Sat).
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
