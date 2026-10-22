'use client';

import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleCheck,
  Gem,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Video,
  WalletCards,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { ProductScene } from '@/components/scenes';
import type { ProductDetails, ProductIcon } from '@/lib/product-data';
import { cn } from '@/lib/utils';

const ICONS: Record<ProductIcon, LucideIcon> = {
  briefcase: BriefcaseBusiness,
  calendar: CalendarDays,
  certificate: CircleCheck,
  check: Check,
  gem: Gem,
  heart: Heart,
  map: MapPin,
  message: MessageCircle,
  phone: Phone,
  search: Search,
  shield: ShieldCheck,
  sparkles: Sparkles,
  store: Store,
  users: Users,
  video: Video,
  wallet: WalletCards,
  wrench: Wrench,
};

/**
 * The product's four benefits as a story. On wide screens the product's
 * phone stays pinned beside the text and switches to the screen that shows
 * the benefit in view; on phones each benefit carries its own screen.
 */
export function PillarStory({ product }: { product: ProductDetails }) {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const blocks = blockRefs.current.filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='mt-14 grid gap-16 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20'>
      <ol className='grid gap-20 lg:gap-0'>
        {product.pillars.map((pillar, index) => {
          const Icon = ICONS[pillar.icon];
          return (
            <li
              key={pillar.title}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              data-index={index}
              className='flex flex-col justify-center lg:min-h-[78vh]'>
              <ProductScene
                id={product.id}
                mode='still'
                active={index}
                className='mx-auto mb-10 w-full max-w-[22rem] lg:hidden'
              />
              <div
                className={cn(
                  'transition-opacity duration-[var(--dur-slow)] lg:opacity-40',
                  active === index && 'lg:opacity-100',
                )}>
                <span className='flex size-12 items-center justify-center rounded-full bg-[var(--p-soft)] text-[var(--p-accent-2)]' aria-hidden>
                  <Icon className='size-6' />
                </span>
                <h3 className='mt-6 font-[family-name:var(--font-display)] text-[length:var(--text-2xl)] leading-tight font-semibold tracking-[-0.02em]'>
                  {pillar.title}
                </h3>
                <p className='t-lead mt-4'>{pillar.summary}</p>
                <ul className='mt-6 grid gap-3'>
                  {pillar.details.map((detail) => (
                    <li key={detail} className='flex items-start gap-3 text-[length:var(--text-base)] text-[var(--color-ink-muted)]'>
                      <Check className='mt-1 size-4 shrink-0 text-[var(--p-accent)]' strokeWidth={3} aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
      <div className='hidden lg:block'>
        <div className='sticky top-[max(6rem,calc(50vh-17rem))]'>
          <ProductScene id={product.id} mode='controlled' active={active} className='mx-auto w-full max-w-[28rem]' />
        </div>
      </div>
    </div>
  );
}
