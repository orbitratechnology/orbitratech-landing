import Image from 'next/image';
import Link from 'next/link';
import type { LandingProduct } from '@/lib/cms';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

type ProjectsProps = {
  products: LandingProduct[];
};

export default function Projects({ products }: ProjectsProps) {
  return (
    <section
      id='projects'
      className='deferred-section relative border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-14 max-w-2xl text-center'>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Products we are building in the open
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            Alongside client work, Orbitra ships its own apps — proof of how we
            design, ship, and maintain long-running software.
          </p>
        </ScrollReveal>

        <div className='grid gap-6 lg:grid-cols-2'>
          {products.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <BeamCard beamDelay={i * 1.5} beamSize={120} className='h-full'>
                <article className='flex h-full min-w-0 flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 md:p-8'>
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
                <p className='mt-3 flex-1 text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)]'>
                  {project.description}
                </p>

                <ul className='mt-6 flex flex-wrap gap-2'>
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className='rounded-full border border-[var(--color-rule)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]'>
                      {feature}
                    </li>
                  ))}
                </ul>

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
                </article>
              </BeamCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
