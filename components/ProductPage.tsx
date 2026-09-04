import {
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  Gem,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  Check,
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
import Image from 'next/image';
import Link from 'next/link';

import type { ProductDetails, ProductIcon } from '@/lib/product-data';
import { PRODUCT_DETAILS } from '@/lib/product-data';
import Footer from './Footer';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

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

function ProductIconVisual({ product }: { product: ProductDetails }) {
  return (
    <div className='relative mx-auto flex min-h-[22rem] w-full max-w-[28rem] items-center justify-center rounded-[1.25rem] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-10 shadow-[0_24px_56px_var(--color-shadow-soft)]'>
      <Image
        src={product.imageUrl}
        alt={product.imageAlt}
        width={240}
        height={240}
        className='size-48 object-contain drop-shadow-[0_20px_28px_var(--color-shadow)] sm:size-56'
      />
    </div>
  );
}

function ProductSchema({ product }: { product: ProductDetails }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    description: product.description,
    url: `https://orbitratech.net${product.path}`,
    creator: {
      '@type': 'Organization',
      name: 'Orbitra Tech',
      url: 'https://orbitratech.net',
    },
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
    <div className='min-h-screen overflow-x-clip bg-[var(--color-paper)]'>
      <ProductSchema product={product} />

      <header className='border-b border-[var(--color-rule)] bg-[var(--color-paper)]/85 px-6 py-5 backdrop-blur-sm'>
        <div className='container mx-auto flex max-w-7xl items-center justify-between gap-4'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
            <span>Home</span>
          </Link>
          <span className='rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]'>
            {product.status}
          </span>
        </div>
      </header>

      <main>
        <section className='relative isolate overflow-hidden border-b border-[var(--color-rule)] py-16 md:py-24'>
          <div className='container mx-auto max-w-7xl px-6'>
            <div className='grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-24'>
              <div className='max-w-3xl'>
                <h1 className='max-w-3xl font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)]'>
                  {product.title}
                  <span className='mt-3 block text-[var(--color-accent)]'>
                    {product.tagline}
                  </span>
                </h1>
                <p className='mt-7 max-w-2xl text-[length:var(--text-xl)] leading-relaxed text-[var(--color-ink-muted)]'>
                  {product.description}
                </p>

                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href='#inside'
                    className='btn-cta btn-cta-lg btn-brand group gap-2'>
                    {product.ctaLabel}
                    <ArrowRight
                      className='size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5'
                      aria-hidden
                    />
                  </Link>
                  <Link
                    href='/#contact'
                    className='btn-cta btn-cta-lg btn-outline'>
                    Talk to Orbitra
                  </Link>
                </div>

              </div>

              <ProductIconVisual product={product} />
            </div>
          </div>
        </section>

        <section id='inside' className='py-20 md:py-28'>
          <div className='container mx-auto max-w-7xl px-6'>
            <ScrollReveal className='mx-auto max-w-3xl text-center'>
              <p className='section-eyebrow mb-3'>In plain English</p>
              <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
                {product.promise.title}
              </h2>
              <p className='mt-5 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
                {product.promise.body}
              </p>
            </ScrollReveal>

            <div className='mt-14 grid gap-6 md:grid-cols-2'>
              <ScrollReveal>
                <BeamCard className='h-full' beamSize={110}>
                  <div className='h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-7 md:p-9'>
                    <p className='text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]'>
                      Built for
                    </p>
                    <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink)]'>
                      {product.audience}
                    </p>
                  </div>
                </BeamCard>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <BeamCard className='h-full' beamSize={110}>
                  <div className='h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-7 md:p-9'>
                    <p className='text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]'>
                      Why this shape matters
                    </p>
                    <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink)]'>
                      {product.closingBody}
                    </p>
                  </div>
                </BeamCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className='border-y border-[var(--color-rule)] bg-[var(--color-paper-2)] py-20 md:py-28'>
          <div className='container mx-auto max-w-7xl px-6'>
            <ScrollReveal className='max-w-2xl'>
              <p className='section-eyebrow mb-3'>How {product.title} helps</p>
              <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
                {product.pillarsHeading}
              </h2>
            </ScrollReveal>

            <div className='mt-12 grid gap-5 md:grid-cols-2'>
              {product.pillars.map((pillar, index) => {
                const Icon = ICONS[pillar.icon];

                return (
                  <ScrollReveal key={pillar.title} delay={index * 0.06}>
                    <BeamCard className='h-full' beamDelay={index * 1.2} beamSize={100}>
                      <article className='h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-7 md:p-8'>
                        <div className='flex items-start gap-4'>
                          <div className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                            <Icon className='size-5' aria-hidden />
                          </div>
                          <h3 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                            {pillar.title}
                          </h3>
                        </div>
                        <p className='mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]'>
                          {pillar.summary}
                        </p>
                        <ul className='mt-6 space-y-3'>
                          {pillar.details.map((detail) => (
                            <li
                              key={detail}
                              className='flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]'>
                              <Check
                                className='mt-0.5 size-4 shrink-0 text-[var(--color-accent)]'
                                aria-hidden
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </BeamCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className='py-20 md:py-28'>
          <div className='container mx-auto max-w-7xl px-6'>
            <ScrollReveal className='mx-auto max-w-2xl text-center'>
              <p className='section-eyebrow mb-3'>In practice</p>
              <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
                {product.journeyHeading}
              </h2>
            </ScrollReveal>

            <div className='relative mt-14 grid gap-5 md:grid-cols-4'>
              <div
                className='pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/35 to-transparent md:block'
                aria-hidden
              />
              {product.journey.map((step, index) => (
                <ScrollReveal key={step.label} delay={index * 0.08}>
                  <div className='relative h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 text-center shadow-[0_8px_24px_var(--color-shadow-soft)]'>
                    <div className='relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-[var(--color-paper-2)] bg-[var(--color-accent)] font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-paper)] shadow-[0_0_0_1px_var(--color-accent)]'>
                      {step.label}
                    </div>
                    <h3 className='mt-5 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]'>
                      {step.title}
                    </h3>
                    <p className='mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]'>
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className='border-t border-[var(--color-rule)] bg-[var(--color-ink)] py-20 text-[var(--color-paper)] md:py-28'>
          <div className='container mx-auto max-w-7xl px-6 text-center'>
            <ScrollReveal>
              <p className='text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-muted)]'>
                {product.title} by Orbitra Tech
              </p>
              <h2 className='mt-4 font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight md:text-[length:var(--text-display-s)]'>
                {product.closingTitle}
              </h2>
              <p className='mx-auto mt-5 max-w-2xl text-[length:var(--text-lg)] leading-relaxed text-[var(--color-paper-3)]'>
                {product.closingBody}
              </p>
              <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                <Link
                  href='/#contact'
                  className='btn-cta btn-cta-lg btn-brand'>
                  Talk to Orbitra
                </Link>
                <Link
                  href='/#projects'
                  className='btn-cta btn-cta-lg border border-[var(--color-paper-3)]/30 bg-transparent text-[var(--color-paper)] hover:bg-[var(--color-paper)]/10'>
                  See all products
                </Link>
              </div>
              {product.legalLinks ? (
                <div className='mt-8 flex justify-center gap-5 text-sm text-[var(--color-paper-3)]'>
                  {product.legalLinks.map((legalLink) => (
                    <Link
                      key={legalLink.href}
                      href={legalLink.href}
                      className='underline decoration-[var(--color-paper-3)]/40 underline-offset-4 hover:text-[var(--color-paper)]'>
                      {legalLink.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </ScrollReveal>
          </div>
        </section>

        <section className='border-t border-[var(--color-rule)] py-16 md:py-20'>
          <div className='container mx-auto max-w-7xl px-6'>
            <div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
              <div>
                <p className='section-eyebrow mb-3'>More from Orbitra Tech</p>
                <h2 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                  Explore the other products in our Work
                </h2>
              </div>
              <Link
                href='/#projects'
                className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)] hover:text-[var(--color-ink)]'>
                View Work
                <ArrowRight className='size-4' aria-hidden />
              </Link>
            </div>
            <div className='mt-8 grid gap-4 md:grid-cols-2'>
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={relatedProduct.path}
                  className='group flex items-center gap-4 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 transition-[border-color,box-shadow,transform] duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_12px_32px_var(--color-shadow-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                  <div className='flex size-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-3'>
                    <Image
                      src={relatedProduct.imageUrl}
                      alt=''
                      width={56}
                      height={56}
                      className='size-full object-contain'
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>
                      {relatedProduct.title}
                    </p>
                    <p className='mt-1 text-sm text-[var(--color-ink-muted)]'>
                      {relatedProduct.tagline}
                    </p>
                  </div>
                  <ArrowRight
                    className='size-5 shrink-0 text-[var(--color-ink-subtle)] transition-transform duration-[var(--dur-base)] group-hover:translate-x-1 group-hover:text-[var(--color-accent)]'
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
