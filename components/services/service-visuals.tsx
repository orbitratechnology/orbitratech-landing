'use client';

import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, type CSSProperties } from 'react';

import { cn } from '@/lib/utils';

import cloudAnimation from '@/lottie/Cloud Hosting.json';
import marketingAnimation from '@/lottie/Bullhorn and social media icons for marketing.json';
import mobileAnimation from '@/lottie/Mobile App Showcase.json';
import cartAnimation from '@/lottie/Supermarket Cart.json';
import websiteAnimation from '@/lottie/Website building.json';

export type ServiceVisualId =
  | 'website'
  | 'mobile'
  | 'transform'
  | 'ecommerce'
  | 'cloud';

type ServiceVisualProps = {
  id: ServiceVisualId;
  className?: string;
};

type LottieConfig = {
  data: object;
  scale?: number;
};

const SERVICE_LOTTIES: Record<ServiceVisualId, LottieConfig> = {
  website: {
    data: websiteAnimation,
    scale: 0.92,
  },
  mobile: {
    data: mobileAnimation,
    scale: 0.9,
  },
  transform: {
    data: marketingAnimation,
    scale: 0.88,
  },
  ecommerce: {
    data: cartAnimation,
    scale: 0.9,
  },
  cloud: {
    data: cloudAnimation,
    scale: 0.88,
  },
};

function ServiceLottiePlayer({
  config,
  className,
}: {
  config: LottieConfig;
  className?: string;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      lottie.goToAndStop(0, true);
      return;
    }

    const card = containerRef.current?.closest('.group');
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottie.goToAndPlay(0, true);
        } else {
          lottie.pause();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(card);

    const handleEnter = () => {
      lottie.setSpeed(1.15);
    };
    const handleLeave = () => {
      lottie.setSpeed(1);
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      observer.disconnect();
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const { data, scale = 1 } = config;

  return (
    <div
      ref={containerRef}
      className={cn('service-lottie h-full w-full', className)}
      style={{ '--lottie-scale': scale } as CSSProperties}>
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop
        autoplay={false}
        aria-hidden
        className='service-lottie__player h-full w-full'
      />
    </div>
  );
}

export function ServiceVisual({ id, className }: ServiceVisualProps) {
  const config = SERVICE_LOTTIES[id];

  return (
    <div
      className={cn(
        'service-visual flex h-full w-full items-center justify-center',
        className,
      )}>
      <ServiceLottiePlayer config={config} />
    </div>
  );
}
