import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES, type ProductStatus } from '@/lib/landing-data';
import { ScrollReveal } from './motion/ScrollReveal';
import { ProductTile } from './ProductTile';

const STATUSES: ProductStatus[] = ['In Beta', 'In Development', 'Planning'];

export default function Products() {
  return (
    <section id='products' className='section band-tint scroll-mt-24'>
      <div className='shell'>
        <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
          <h2 className='t-h2'>Products we’re building ourselves</h2>
          <p className='t-lead text-[var(--color-ink-muted)]'>
            Alongside client work we design and build our own products. Each
            one is labelled with where it honestly stands today.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren='.product-cell' className='mt-14 grid gap-6 lg:grid-cols-2'>
          {LANDING_PRODUCTS.map((product) => (
            <div key={product.id} className='product-cell'>
              <ProductTile product={product} />
            </div>
          ))}
        </ScrollReveal>

        <dl className='mt-10 grid gap-4 md:grid-cols-3'>
          {STATUSES.map((status) => (
            <div key={status}>
              <dt className='t-label'>{status}</dt>
              <dd className='t-note mt-1'>{PRODUCT_STATUS_NOTES[status]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
