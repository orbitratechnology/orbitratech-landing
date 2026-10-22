import { ArrowRight, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { ProductDetails } from '@/lib/product-data';
import { PRODUCT_DETAILS } from '@/lib/product-data';
import { PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { SITE_URL } from '@/lib/constants';
import Footer from './Footer';
import { ScrollReveal } from './motion/ScrollReveal';
import Nav from './Nav';
import { PillarStory } from './products/PillarStory';
import { ProductScene } from './scenes';
import { StepPath } from './StepPath';

function ProductSchema({ product }: { product: ProductDetails }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    description: product.description,
    url: `${SITE_URL}${product.path}`,
    creator: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ProductPage({ product }: { product: ProductDetails }) {
  const relatedProducts = Object.values(PRODUCT_DETAILS).filter(
    (relatedProduct) => relatedProduct.id !== product.id,
  );

  return (
    <div className={`product-${product.id} min-h-svh`}>
      <ProductSchema product={product} />
      <Nav />

      <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
        {/* Hero: the name, what it does, and the product walking through its screens. */}
        <section className='pt-28 pb-20 md:pt-36 md:pb-28'>
          <div className='shell grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16'>
            <div className='hero-rise'>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='flex size-14 items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-paper-2)]'>
                  <Image src={product.imageUrl} alt={product.imageAlt} width={56} height={56} className='size-11 object-contain' priority />
                </span>
                <span className='chip bg-[var(--p-soft)] text-[var(--p-accent-2)]'>{product.status}</span>
              </div>
              <h1 className='t-display mt-8 text-[clamp(3.5rem,2rem+6vw,7rem)]'>{product.title}</h1>
              <p className='t-statement mt-4 text-[var(--p-accent-2)]'>{product.tagline}</p>
              <p className='t-lead mt-6 text-[var(--color-ink-muted)]'>{product.heroLine}</p>
              <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
                <Link href='#how-it-helps' className='btn-cta btn-cta-lg btn-product'>
                  {product.ctaLabel}
                  <ArrowRight className='btn-arrow size-4' aria-hidden />
                </Link>
                <Link href='/#contact' className='btn-cta btn-cta-lg btn-soft'>
                  Talk to Orbitra
                </Link>
              </div>
            </div>
            <div>
              <ProductScene id={product.id} mode='loop' className='mx-auto w-full max-w-[30rem]' />
              <p className='t-note mx-auto mt-5 max-w-[30rem] text-center'>
                <span className='font-semibold text-[var(--color-ink)]'>{product.status}.</span>{' '}
                {PRODUCT_STATUS_NOTES[product.status]} Screens are illustrations.{' '}
                {product.title} is an Orbitra Tech product, not a client project.
              </p>
            </div>
          </div>
        </section>

        {/* In plain words, and who it is for. */}
        <section className='section band-tint'>
          <div className='shell grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20'>
            <ScrollReveal>
              <h2 className='t-statement max-w-[30ch] text-[length:var(--text-2xl)]'>{product.promise.title}</h2>
              <p className='t-body mt-6'>{product.promise.body}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className='rounded-[var(--radius-xl)] bg-[var(--color-paper-2)] p-7 md:p-9'>
                <Users className='size-7 text-[var(--p-accent)]' aria-hidden />
                <h3 className='t-h3 mt-5'>Who it is for</h3>
                <p className='mt-3 text-[length:var(--text-lg)] leading-relaxed'>{product.audience}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How it helps: the pinned screen story. */}
        <section id='how-it-helps' className='section scroll-mt-16'>
          <div className='shell'>
            <h2 className='t-h2'>{product.pillarsHeading}</h2>
            <PillarStory product={product} />
          </div>
        </section>

        {/* The journey, drawn as a route. */}
        <section className='section band-field'>
          <div className='shell'>
            <h2 className='t-h2 text-[var(--color-field-ink)]'>{product.journeyHeading}</h2>
            <StepPath
              steps={product.journey.map((step) => ({ title: step.title, description: step.description }))}
              tone='field'
              className='mt-16 md:mt-20'
            />
          </div>
        </section>

        {/* Close. */}
        <section className='section'>
          <div className='shell'>
            <div className='rounded-[var(--radius-xl)] bg-[var(--p-deep)] p-8 text-[var(--color-field-ink)] md:p-16'>
              <h2 className='t-h2 max-w-[18ch]'>{product.closingTitle}</h2>
              <p className='t-lead mt-6 max-w-[56ch] text-[var(--color-field-muted)]'>{product.closingBody}</p>
              <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
                <Link href='/#contact' className='btn-cta btn-cta-lg btn-brand'>
                  Talk to Orbitra
                  <ArrowRight className='btn-arrow size-4' aria-hidden />
                </Link>
                <Link href='/#products' className='btn-cta btn-cta-lg btn-on-field'>
                  See all products
                </Link>
              </div>
              {product.legalLinks ? (
                <ul className='mt-10 flex flex-wrap gap-x-6 gap-y-2'>
                  {product.legalLinks.map((legalLink) => (
                    <li key={legalLink.href}>
                      <Link href={legalLink.href} className='link-quiet text-[length:var(--text-sm)] text-[var(--color-field-muted)] hover:text-[var(--color-field-ink)]'>
                        {legalLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>

        {/* More products. */}
        <section className='pb-[var(--section-y)]'>
          <div className='shell'>
            <h2 className='t-h3 text-[length:var(--text-2xl)]'>Other products Orbitra is building</h2>
            <ul className='mt-8 grid gap-4 md:grid-cols-3'>
              {relatedProducts.map((relatedProduct) => (
                <li key={relatedProduct.id} className={`product-${relatedProduct.id}`}>
                  <Link
                    href={relatedProduct.path}
                    className='group flex h-full items-center gap-4 rounded-[var(--radius-lg)] bg-[var(--p-soft)] p-5 transition-transform duration-[var(--dur-base)] motion-safe:hover:-translate-y-0.5'>
                    <span className='flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-paper-2)]'>
                      <Image src={relatedProduct.imageUrl} alt='' width={56} height={56} className='size-10 object-contain' />
                    </span>
                    <span className='min-w-0 flex-1'>
                      <span className='block text-[length:var(--text-lg)] font-semibold'>{relatedProduct.title}</span>
                      <span className='t-note block'>{relatedProduct.tagline}</span>
                    </span>
                    <ArrowRight className='btn-arrow size-5 shrink-0 group-hover:translate-x-1' aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
