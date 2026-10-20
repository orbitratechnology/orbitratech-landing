import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

export default function Products() {
  const products = LANDING_PRODUCTS;
  return (
    <section
      id='products'
      className='deferred-section relative scroll-mt-28 border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-14 max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>Our products</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Products we are building ourselves
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            Alongside client work, we design and build our own products. They
            show how we take software from idea to release, and each is
            labelled with where it honestly stands today.
          </p>
        </ScrollReveal>

        <div className='grid gap-6 lg:grid-cols-2'>
          {products.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <BeamCard beamDelay={i * 1.5} beamSize={120} className='h-full'>
                <article className='flex h-full min-w-0 flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <div className='mb-6 flex items-start justify-between gap-4'>
                  <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]'>
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      sizes='80px'
                      loading='lazy'
                      className='rounded-2xl object-contain'
                    />
                  </div>
                  <span className='shrink-0 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]'>
                    {project.status}
                  </span>
                </div>

                <h3 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                  {project.title}
                </h3>
                <p className='mt-3 text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)]'>
                  {project.description}
                </p>

                <div className='mt-5 flex-1 rounded-xl border border-[var(--color-rule)] p-4'>
                  <p className='text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)]'>
                    What it shows we can build
                  </p>
                  <p className='mt-1.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink)]'>
                    {project.demonstrates}
                  </p>
                </div>

                <p className='mt-4 text-xs leading-relaxed text-[var(--color-ink-subtle)]'>
                  <span className='font-semibold text-[var(--color-ink-muted)]'>
                    {project.status}:
                  </span>{' '}
                  {PRODUCT_STATUS_NOTES[project.status]}
                </p>

                {(project.legal?.privacyPolicyUrl || project.legal?.termsUrl) && (
                  <div className='mt-6 flex flex-wrap gap-4 border-t border-[var(--color-rule)] pt-4'>
                    {project.legal.privacyPolicyUrl && (
                      <Link
                        href={project.legal.privacyPolicyUrl}
                        className='text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-accent)]'>
                        Privacy policy
                      </Link>
                    )}
                    {project.legal.termsUrl && (
                      <Link
                        href={project.legal.termsUrl}
                        className='text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-accent)]'>
                        Terms
                      </Link>
                    )}
                  </div>
                )}
                <Link
                  href={project.href}
                  className='mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                  Explore {project.title}
                  <ArrowUpRight className='h-4 w-4' aria-hidden />
                </Link>
                </article>
              </BeamCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
