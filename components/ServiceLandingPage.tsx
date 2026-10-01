import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { ServicePageData } from '@/lib/service-pages';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ServiceLandingPage({ page }: { page: ServicePageData }) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.name,
    description: page.description,
    url: `https://orbitratech.net/${page.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Orbitra Tech',
      url: 'https://orbitratech.net',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://orbitratech.net/' },
      { '@type': 'ListItem', position: 2, name: page.name, item: `https://orbitratech.net/${page.slug}` },
    ],
  };

  return (
    <>
      <Nav />
      <main id='content' tabIndex={-1} className='min-w-0 pt-28 outline-none'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
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
              Orbitra Tech · Beruwala, Sri Lanka
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
            <Link href={`/?service=${page.slug.replace(/-sri-lanka$/, '')}#contact`} className='btn-cta btn-cta-lg btn-brand group mt-8 inline-flex gap-2'>
              Discuss your project
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' aria-hidden />
            </Link>
          </div>
        </section>

        <section className='py-16 md:py-24'>
          <div className='container mx-auto max-w-6xl px-6'>
            <div className='max-w-2xl'>
              <p className='section-eyebrow mb-3'>What the work can include</p>
              <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]'>
                A scope shaped around your business
              </h2>
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
              <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]'>
                From the real problem to a useful first release
              </h2>
              <p className='mt-4 leading-relaxed text-[var(--color-ink-muted)]'>
                Orbitra works with Sri Lankan SMEs using clear scopes and fixed-scope pricing agreed before work starts.
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

        <section className='py-16 md:py-24'>
          <div className='container mx-auto max-w-4xl px-6'>
            <p className='section-eyebrow mb-3'>Common questions</p>
            <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)]'>
              About {page.name.toLowerCase()} with Orbitra
            </h2>
            <dl className='mt-8 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]'>
              {page.faqs.map((faq) => (
                <div key={faq.question} className='py-6'>
                  <dt className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>{faq.question}</dt>
                  <dd className='mt-2 leading-relaxed text-[var(--color-ink-muted)]'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <div className='mt-12 rounded-2xl bg-[var(--color-accent-muted)] p-6 md:p-8'>
              <h2 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>Planning a project in Sri Lanka?</h2>
              <p className='mt-3 max-w-2xl leading-relaxed text-[var(--color-ink-muted)]'>Share the business problem and what you have tried so far. Orbitra Tech is based in Beruwala and works remotely with businesses locally and worldwide.</p>
              <Link href='/#contact' className='btn-cta btn-cta-lg btn-brand group mt-6 inline-flex gap-2'>
                Contact Orbitra Tech
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' aria-hidden />
              </Link>
              <p className='mt-4 text-sm text-[var(--color-ink-muted)]'>
                <Link href='/' className='font-semibold underline underline-offset-4 hover:text-[var(--color-accent-strong)]'>Learn about Orbitra Tech</Link>
                {' · '}
                <Link href='/#services' className='font-semibold underline underline-offset-4 hover:text-[var(--color-accent-strong)]'>Explore all services</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
