import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { CLIENT_PROJECT_BY_ID } from '@/lib/client-projects';
import { SITE_URL } from '@/lib/constants';
import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import {
  INTERNATIONAL_FAQ,
  SERVICE_PAGES,
  type ServicePageData,
} from '@/lib/service-pages';
import { ProjectCard } from '@/components/ClientWork';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const H2_CLASS =
  'font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]';

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
      <main id='content' tabIndex={-1} className='min-w-0 pt-28 outline-none'>
        {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((schema) => (
          <script
            key={schema['@type']}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <section className='border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] py-16 md:py-24'>
          <div className='container mx-auto max-w-6xl px-6'>
            <nav aria-label='Breadcrumb' className='mb-8 text-sm text-[var(--color-ink-muted)]'>
              <ol className='flex flex-wrap items-center gap-2'>
                <li><Link href='/' className='hover:text-[var(--color-accent)]'>Home</Link></li>
                <li aria-hidden='true'>/</li>
                <li aria-current='page'>{page.name}</li>
              </ol>
            </nav>
            <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]'>
              Orbitra Tech · Beruwala, Sri Lanka · Remote worldwide
            </p>
            <h1 className='max-w-4xl font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.08] tracking-tight text-[var(--color-ink)]'>
              {page.title}
            </h1>
            <p className='mt-6 max-w-3xl text-[length:var(--text-xl)] leading-relaxed text-[var(--color-ink-muted)]'>
              {page.summary}
            </p>
            <p className='mt-4 max-w-3xl leading-relaxed text-[var(--color-ink-muted)]'>
              {page.intro}
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link href={contactHref} className='btn-cta btn-cta-lg btn-brand group gap-2'>
                Discuss your project
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' aria-hidden />
              </Link>
              <Link href='#pricing' className='btn-cta btn-cta-lg btn-outline'>
                How pricing works
              </Link>
            </div>
          </div>
        </section>

        <section className='py-16 md:py-24'>
          <div className='container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <p className='section-eyebrow mb-3'>Who this is for</p>
              <h2 className={H2_CLASS}>{page.audience.buyers}</h2>
              <p className='mt-4 leading-relaxed text-[var(--color-ink-muted)]'>
                If any of these sound familiar, this service is a good place to start.
              </p>
            </div>
            <ul className='grid gap-4 sm:grid-cols-2'>
              {page.audience.problems.map((problem) => (
                <li
                  key={problem}
                  className='flex gap-3 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 leading-relaxed text-[var(--color-ink)]'>
                  <Check className='mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]' aria-hidden />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='border-t border-[var(--color-rule)] py-16 md:py-24'>
          <div className='container mx-auto max-w-6xl px-6'>
            <div className='max-w-2xl'>
              <p className='section-eyebrow mb-3'>What the work can include</p>
              <h2 className={H2_CLASS}>A scope shaped around your business</h2>
            </div>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
              {page.deliverables.map((item) => (
                <article key={item.title} className='rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6'>
                  <Check className='mb-4 h-5 w-5 text-[var(--color-accent)]' aria-hidden />
                  <h3 className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>{item.title}</h3>
                  <p className='mt-3 leading-relaxed text-[var(--color-ink-muted)]'>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='border-y border-[var(--color-rule)] bg-[var(--color-paper-2)] py-16 md:py-24'>
          <div className='container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <p className='section-eyebrow mb-3'>How we work</p>
              <h2 className={H2_CLASS}>From the real problem to a useful first release</h2>
              <p className='mt-4 leading-relaxed text-[var(--color-ink-muted)]'>
                You work directly with Orbitra&rsquo;s founders, with a clear
                scope and a fixed price agreed before work starts.
              </p>
            </div>
            <ol className='space-y-5'>
              {page.process.map((step, index) => (
                <li key={step.title} className='flex gap-4 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-5'>
                  <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-sm font-bold text-[var(--color-accent-strong)]'>{index + 1}</span>
                  <div>
                    <h3 className='font-semibold text-[var(--color-ink)]'>{step.title}</h3>
                    <p className='mt-1 leading-relaxed text-[var(--color-ink-muted)]'>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id='pricing' className='scroll-mt-28 py-16 md:py-24'>
          <div className='container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <p className='section-eyebrow mb-3'>Pricing</p>
              <h2 className={H2_CLASS}>A fixed price for a written scope</h2>
              <p className='mt-4 leading-relaxed text-[var(--color-ink-muted)]'>
                After a free first conversation, you get a written scope with a
                fixed price and milestones. Nothing is billed by the hour, and
                changes are agreed with you before they are made. A short
                description is enough for an indicative range.
              </p>
            </div>
            <div className='rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
              <h3 className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>
                What affects the price
              </h3>
              <ul className='mt-5 grid gap-3 sm:grid-cols-2'>
                {page.costFactors.map((factor) => (
                  <li key={factor} className='flex gap-3 leading-relaxed text-[var(--color-ink-muted)]'>
                    <span className='mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]' aria-hidden />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {page.evidence ? (
          <section className='border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] py-16 md:py-24'>
            <div className='container mx-auto max-w-6xl px-6'>
              <div className='max-w-2xl'>
                <p className='section-eyebrow mb-3'>Proof of work</p>
                <h2 className={H2_CLASS}>What we have built</h2>
                <p className='mt-4 leading-relaxed text-[var(--color-ink-muted)]'>
                  {page.evidence.body}
                </p>
              </div>
              {evidenceProjects.length > 0 ? (
                <div
                  className={`mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 ${evidenceProjects.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
                  {evidenceProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : null}
              {evidenceProducts.length > 0 ? (
                <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2'>
                  {evidenceProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      className='group flex flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 transition-[border-color,box-shadow] duration-[var(--dur-base)] hover:border-[var(--color-accent)]/40 hover:shadow-[0_12px_32px_var(--color-shadow-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                      <div className='flex items-center gap-4'>
                        <div className='flex size-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-2'>
                          <Image src={product.imageUrl} alt='' width={56} height={56} className='size-full object-contain' />
                        </div>
                        <div className='min-w-0 flex-1'>
                          <p className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>
                            {product.title}
                          </p>
                          <p className='text-xs font-semibold text-[var(--color-accent-strong)]'>
                            Orbitra product · {product.status}
                          </p>
                        </div>
                        <ArrowUpRight className='size-5 shrink-0 text-[var(--color-ink-subtle)] transition-colors group-hover:text-[var(--color-accent)]' aria-hidden />
                      </div>
                      <p className='mt-4 leading-relaxed text-[var(--color-ink)]'>{product.demonstrates}</p>
                      <p className='mt-3 text-sm leading-relaxed text-[var(--color-ink-subtle)]'>
                        {PRODUCT_STATUS_NOTES[product.status]}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className='border-t border-[var(--color-rule)] py-16 md:py-24'>
          <div className='container mx-auto max-w-4xl px-6'>
            <p className='section-eyebrow mb-3'>Common questions</p>
            <h2 className={H2_CLASS}>
              About {page.name.toLowerCase()} with Orbitra
            </h2>
            <dl className='mt-8 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]'>
              {faqs.map((faq) => (
                <div key={faq.question} className='py-6'>
                  <dt className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>{faq.question}</dt>
                  <dd className='mt-2 leading-relaxed text-[var(--color-ink-muted)]'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <div className='mt-12 rounded-2xl bg-[var(--color-accent-muted)] p-6 md:p-8'>
              <h2 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>Tell us what you are trying to fix</h2>
              <p className='mt-3 max-w-2xl leading-relaxed text-[var(--color-ink-muted)]'>
                Share the business problem and what you have tried so far. There
                is no commitment, and you do not need a technical brief.
              </p>
              <Link href={contactHref} className='btn-cta btn-cta-lg btn-brand group mt-6 inline-flex gap-2'>
                Discuss your project
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' aria-hidden />
              </Link>
            </div>

            <nav aria-label='Other services' className='mt-12'>
              <p className='section-eyebrow mb-4'>Other services</p>
              <ul className='grid gap-3 sm:grid-cols-3'>
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/${other.slug}`}
                      className='group flex h-full items-center justify-between gap-3 rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent-strong)]'>
                      {other.linkLabel}
                      <ArrowRight className='size-4 shrink-0 transition-transform group-hover:translate-x-0.5' aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
