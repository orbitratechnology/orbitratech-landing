import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductScene } from '@/components/scenes';
import type { LandingProduct } from '@/lib/landing-data';
import { PRODUCT_DETAILS } from '@/lib/product-data';
import { cn } from '@/lib/utils';

/** Which screen of each product's scene makes the best preview. */
const PREVIEW_SCREEN: Record<string, number> = {
  callnet: 0,
  worknet: 1,
  gemfort: 1,
  hermade: 0,
};

/**
 * A product shown in its own colours, with one real screen from its scene.
 * The whole tile is one link to the product page.
 */
export function ProductTile({
  product,
  showDemonstrates = false,
  className,
}: {
  product: LandingProduct;
  showDemonstrates?: boolean;
  className?: string;
}) {
  const id = product.id as keyof typeof PRODUCT_DETAILS;
  const details = PRODUCT_DETAILS[id];

  return (
    <Link
      href={product.href}
      className={cn(
        `product-${id} group relative grid min-h-full grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] bg-[var(--p-soft)] transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] motion-safe:hover:-translate-y-1`,
        className,
      )}>
      <div className='flex flex-col p-7 md:p-9'>
        <div className='flex items-center gap-3'>
          <span className='flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-paper-2)]'>
            <Image src={product.imageUrl} alt='' width={48} height={48} className='size-10 object-contain' />
          </span>
          <span className='chip bg-[var(--color-paper-2)] text-[var(--color-ink)]'>{product.status}</span>
        </div>
        <h3 className='t-h3 mt-6 text-[length:var(--text-2xl)]'>{product.title}</h3>
        <p className='mt-2 text-[length:var(--text-base)] font-semibold leading-snug text-[var(--p-accent-2)]'>
          {details.tagline}
        </p>
        <p className='t-body mt-4 flex-1 text-[var(--color-ink)]'>
          {showDemonstrates ? product.demonstrates : details.heroLine}
        </p>
        <span className='mt-6 inline-flex items-center gap-2 text-[length:var(--text-sm)] font-semibold text-[var(--color-ink)]'>
          See how {product.title} works
          <ArrowRight className='btn-arrow size-4 group-hover:translate-x-1' aria-hidden />
        </span>
      </div>
      <div className='relative hidden min-h-[20rem] overflow-hidden sm:block' aria-hidden='true'>
        <ProductScene
          id={id}
          mode='still'
          active={PREVIEW_SCREEN[id] ?? 0}
          className='absolute top-8 left-1/2 w-[125%] max-w-none -translate-x-[42%]'
        />
      </div>
    </Link>
  );
}
