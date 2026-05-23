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
  variant?: 'compact' | 'showcase';
  serviceIndex?: number;
};

type LottieConfig = {
  data: object;
  scale?: number;
};

const SERVICE_LOTTIES: Record<ServiceVisualId, LottieConfig> = {
  website: { data: websiteAnimation, scale: 1 },
  mobile: { data: mobileAnimation, scale: 1 },
  transform: { data: marketingAnimation, scale: 0.96 },
  ecommerce: { data: cartAnimation, scale: 0.98 },
  cloud: { data: cloudAnimation, scale: 0.96 },
};

function ServiceLottiePlayer({
  config,
  className,
  serviceIndex,
  variant = 'compact',
}: {
  config: LottieConfig;
  className?: string;
  serviceIndex?: number;
  variant?: 'compact' | 'showcase';
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lottie = lottieRef.current;
    const container = containerRef.current;
    if (!lottie || !container) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      lottie.goToAndStop(0, true);
      return;
    }

    const play = () => lottie.goToAndPlay(0, true);
    const pause = () => lottie.pause();

    const syncFromStage = () => {
      const stage = container.closest('.services-stage');
      if (!stage || serviceIndex === undefined) return;

      const active = stage.getAttribute('data-active-service');
      if (active === String(serviceIndex)) play();
      else pause();
    };

    const stage = container.closest('.services-stage');
    if (stage && serviceIndex !== undefined) {
      syncFromStage();
      const observer = new MutationObserver(syncFromStage);
      observer.observe(stage, {
        attributes: true,
        attributeFilter: ['data-active-service'],
      });

      return () => observer.disconnect();
    }

    const section = container.closest(
      '.service-mobile-section, .service-visual-panel',
    );
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else pause();
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [serviceIndex]);

  const { data, scale = 1 } = config;
  const showcaseScale =
    variant === 'showcase' ? scale : Math.min(scale, 0.92);

  return (
    <div
      ref={containerRef}
      className={cn('service-lottie h-full w-full', className)}
      data-service-index={serviceIndex}
      style={{ '--lottie-scale': showcaseScale } as CSSProperties}>
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

export function ServiceVisual({
  id,
  className,
  variant = 'compact',
  serviceIndex,
}: ServiceVisualProps) {
  const config = SERVICE_LOTTIES[id];

  return (
    <div
      className={cn(
        'service-visual flex h-full w-full items-center justify-center',
        variant === 'showcase' && 'service-visual--showcase',
        className,
      )}>
      <ServiceLottiePlayer
        config={config}
        variant={variant}
        serviceIndex={serviceIndex}
      />
    </div>
  );
}
