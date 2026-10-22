import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';

import { CLIENT_PROJECT_BY_ID } from '@/lib/client-projects';
import { SITE_URL } from '@/lib/constants';
import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import {
  INTERNATIONAL_FAQ,
  SERVICE_PAGES,
  type ServicePageData,
} from '@/lib/service-pages';
import { cn } from '@/lib/utils';
import { ProjectCard } from '@/components/ClientWork';
import { FaqList } from '@/components/FaqList';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import Nav from '@/components/Nav';
import { ProductTile } from '@/components/ProductTile';
import { SERVICE_ICONS, ServiceScene } from '@/components/scenes';
import { BriefBuilder } from '@/components/services/BriefBuilder';
import { DeliverableArt } from '@/components/services/DeliverableArt';
import { StepPath } from '@/components/StepPath';

const PRICE_PROMISES = [
  'A free first conversation',
  'A written scope with a fixed price',
  'Nothing billed by the hour',
  'Changes agreed with you first',
];

export default function ServiceLandingPage({ page }: { page: ServicePageData }) {
  const pageUrl = `${SITE_URL}/${page.slug}`;
  const faqs = [...page.faqs, INTERNATIONAL_FAQ];
  const evidenceProjects = (page.evidence?.clientProjectIds ?? []).map(
    (id) => CLIENT_PROJECT_BY_ID[id],
  );
  const evidenceProducts = LANDING_PRODUCTS.filter((product) =>
    page.evidence?.productIds?.includes(product.id),
  );
  const otherServices = SERVICE_PAGES.filter((other) => other.slug !== page.slug);
  const contactHref = `/?service=${page.slug.replace(/-sri-lanka$/, '')}#contact`;
  const longTitle = page.title.length > 34;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.name,
    description: page.description,
    url: pageUrl,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [{ '@type': 'Country', name: 'Sri Lanka' }, 'Worldwide (remote)'],
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.name, item: pageUrl },
    ],
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <Nav />
      <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
        {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((schema) => (
          <script
            key={schema['@type']}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Hero: what it is, and the service working, side by side. */}
        <section className='pt-28 pb-20 md:pt-36 md:pb-28'>
          <div className='shell grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16'>
            <div className='hero-rise'>
              <nav aria-label='Breadcrumb' className='t-note'>
                <ol className='flex flex-wrap items-center gap-2'>
                  <li>
                    <Link href='/' className='link-quiet'>
                      Home
                    </Link>
                  </li>
                  <li aria-hidden='true'>/</li>
                  <li aria-current='page'>{page.name}</li>
                </ol>
              </nav>
              <h1 className={cn('t-display mt-6', longTitle && 'text-[length:var(--text-3xl)] lg:text-[clamp(2.5rem,1.4rem+3vw,4.5rem)]')}>
                {page.title}
              </h1>
              <p className='t-lead mt-6 text-[var(--color-ink-muted)]'>{page.summary}</p>
              <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
                <Link href={contactHref} className='btn-cta btn-cta-lg btn-brand'>
                  Discuss your project
                  <ArrowRight className='btn-arrow size-4' aria-hidden />
                </Link>
                <Link href='#pricing' className='btn-cta btn-cta-lg btn-soft'>
                  What affects the price
                </Link>
              </div>
            </div>
            <ServiceScene id={page.scene} className='mx-auto w-full max-w-[34rem] lg:mr-0' />
          </div>
        </section>

        {/* Sound familiar: each problem beside what changes. */}
        <section className='section band-tint'>
          <div className='shell'>
            <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
              <h2 className='t-h2'>Sound familiar?</h2>
              <p className='t-lead text-[var(--color-ink-muted)]'>{page.audience.buyers}.</p>
            </ScrollReveal>
            <div className='mt-12 hidden grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] gap-6 px-7 md:grid'>
              <p className='t-label text-[var(--color-ink-muted)]'>Today</p>
              <span />
              <p className='t-label text-[var(--color-ink-muted)]'>With Orbitra</p>
            </div>
            <ScrollReveal staggerChildren='.fix-row' y={20} className='mt-4 grid gap-3'>
              {page.audience.problems.map((problem, index) => (
                <div
                  key={problem}
                  className='fix-row grid items-center gap-3 rounded-[var(--radius-lg)] bg-[var(--color-paper-2)] p-5 md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:gap-6 md:p-7'>
                  <p className='flex items-start gap-3 text-[length:var(--text-base)] text-[var(--color-ink-muted)]'>
                    <span className='mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper-3)]' aria-hidden>
                      <X className='size-3.5' strokeWidth={2.5} />
                    </span>
                    <span>
                      <span className='sr-only'>Today: </span>
                      {problem}
                    </span>
                  </p>
                  <ArrowRight className='ml-1.5 size-5 rotate-90 text-[var(--color-accent)] md:ml-0 md:rotate-0' aria-hidden />
                  <p className='flex items-start gap-3 text-[length:var(--text-base)] font-semibold text-[var(--color-ink)]'>
                    <span className='mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)] text-[var(--color-paper-2)]' aria-hidden>
                      <Check className='size-3.5' strokeWidth={3} />
                    </span>
                    <span>
                      <span className='sr-only'>With Orbitra: </span>
                      {page.audience.fixes[index]}
                    </span>
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* What you get: each deliverable drawn. */}
        <section className='section'>
          <div className='shell'>
            <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
              <h2 className='t-h2'>What you get</h2>
              <p className='t-lead text-[var(--color-ink-muted)]'>{page.intro}</p>
            </ScrollReveal>
            <ScrollReveal staggerChildren='.deliverable' className='mt-14 grid gap-12 md:grid-cols-3 md:gap-8'>
              {page.deliverables.map((item) => (
                <article key={item.title} className='deliverable'>
                  <DeliverableArt art={item.art} />
                  <h3 className='t-h3 mt-7'>{item.title}</h3>
                  <p className='t-body mt-2'>{item.description}</p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* How it works. */}
        <section className='section band-field'>
          <div className='shell'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end'>
              <h2 className='t-h2 text-[var(--color-field-ink)]'>How we work together</h2>
              <p className='t-lead text-[var(--color-field-muted)]'>
                You work directly with Orbitra’s founders, with a fixed price
                agreed before work starts.
              </p>
            </div>
            <StepPath steps={page.process} tone='field' className='mt-16 md:mt-20' />
          </div>
        </section>

        {/* Pricing, with the brief builder. */}
        <section id='pricing' className='section scroll-mt-20'>
          <div className='shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16'>
            <ScrollReveal>
              <h2 className='t-h2'>A fixed price for a written scope</h2>
              <p className='t-body mt-5'>
                Every project is quoted as one price for an agreed scope. A
                short description is enough for us to give you a price range.
              </p>
              <ul className='mt-8 grid gap-3'>
                {PRICE_PROMISES.map((promise) => (
                  <li key={promise} className='flex items-center gap-3 text-[length:var(--text-base)] font-semibold'>
                    <span className='flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]' aria-hidden>
                      <Check className='size-4' strokeWidth={2.5} />
                    </span>
                    {promise}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h3 className='t-h3 mb-5'>What affects the price</h3>
              <BriefBuilder service={page.name} factors={page.costFactors} />
            </ScrollReveal>
          </div>
        </section>

        {/* Proof. */}
        {page.evidence ? (
          <section className='section band-white'>
            <div className='shell'>
              <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
                <h2 className='t-h2'>What we have built</h2>
                <p className='t-body'>{page.evidence.body}</p>
              </ScrollReveal>
              {evidenceProjects.length > 0 ? (
                <div
                  className={cn(
                    'mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2',
                    evidenceProjects.length >= 3 && 'lg:grid-cols-3',
                  )}>
                  {evidenceProjects.map((project) => (
                    <ScrollReveal key={project.id}>
                      <ProjectCard project={project} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : null}
              {evidenceProducts.length > 0 ? (
                <div className='mt-14'>
                  <h3 className='t-h3'>Orbitra’s own products</h3>
                  <div className='mt-6 grid gap-6 lg:grid-cols-2'>
                    {evidenceProducts.map((product) => (
                      <ProductTile key={product.id} product={product} showDemonstrates />
                    ))}
                  </div>
                  <ul className='mt-6 grid gap-1'>
                    {[...new Set(evidenceProducts.map((product) => product.status))].map((status) => (
                      <li key={status} className='t-note'>
                        <span className='font-semibold text-[var(--color-ink)]'>{status}:</span>{' '}
                        {PRODUCT_STATUS_NOTES[status]}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Questions. */}
        <section className='section band-tint'>
          <div className='shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16'>
            <h2 className='t-h2'>Questions about {page.name.toLowerCase()}</h2>
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* Close. */}
        <section className='section'>
          <div className='shell'>
            <div className='band-field grid gap-8 rounded-[var(--radius-xl)] p-8 md:p-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end'>
              <div>
                <h2 className='t-h2 text-[var(--color-field-ink)]'>Tell us what you’re trying to fix</h2>
                <p className='t-lead mt-4 text-[var(--color-field-muted)]'>
                  No commitment, and you don’t need a technical brief.
                </p>
              </div>
              <Link href={contactHref} className='btn-cta btn-cta-lg btn-brand self-start lg:self-end'>
                Discuss your project
                <ArrowRight className='btn-arrow size-4' aria-hidden />
              </Link>
            </div>

            <nav aria-labelledby='other-services' className='mt-16'>
              <h2 id='other-services' className='t-h3'>
                Other services
              </h2>
              <ul className='mt-6 grid gap-4 sm:grid-cols-3'>
                {otherServices.map((other) => {
                  const Icon = SERVICE_ICONS[other.scene];
                  return (
                    <li key={other.slug}>
                      <Link
                        href={`/${other.slug}`}
                        className='group flex h-full items-center gap-4 rounded-[var(--radius-lg)] bg-[var(--color-paper-3)] p-5 transition-colors hover:bg-[var(--color-accent-soft)]'>
                        <Icon className='size-6 shrink-0 text-[var(--color-accent)]' aria-hidden />
                        <span className='flex-1 text-[length:var(--text-base)] font-semibold'>{other.name}</span>
                        <ArrowRight className='btn-arrow size-4 shrink-0 group-hover:translate-x-1' aria-hidden />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
