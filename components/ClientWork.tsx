import { ArrowUpRight } from 'lucide-react';
import {
  CAPABILITIES,
  CLIENT_PROJECTS,
  type ClientProject,
} from '@/lib/client-projects';
import { ScrollReveal } from './motion/ScrollReveal';
import { Iphone } from './ui/iphone';
import { Safari } from './ui/safari';

function ProjectMedia({ project }: { project: ClientProject }) {
  const { image } = project;

  return (
    <div
      role='img'
      aria-label={image.alt}
      className='relative aspect-[16/10] overflow-hidden bg-[var(--color-paper-2)] px-[6%] pt-[7%]'>
      {image.device === 'desktop' ? (
        <Safari
          url={project.displayUrl}
          imageSrc={image.src}
          className='w-full drop-shadow-[0_12px_28px_var(--color-shadow)] transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] motion-safe:group-hover:-translate-y-1'
        />
      ) : (
        <Iphone
          src={image.src}
          className='mx-auto block w-[30%] drop-shadow-[0_12px_28px_var(--color-shadow)] transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] motion-safe:group-hover:-translate-y-1'
        />
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: ClientProject }) {
  return (
    <article className='group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_1px_2px_var(--color-shadow-soft)] transition-shadow duration-[var(--dur-base)] hover:shadow-[0_16px_40px_var(--color-shadow)]'>
      <ProjectMedia project={project} />

      <div className='flex flex-1 flex-col p-6 md:p-7'>
        <div className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
          <p className='text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)]'>
            {project.sector}
            {project.location ? ` · ${project.location}` : null}
          </p>
          {project.status ? (
            <span className='rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]'>
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className='mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
          {project.name}
        </h3>
        <p className='mt-1 text-[length:var(--text-sm)] font-semibold text-[var(--color-ink-muted)]'>
          {project.type}
        </p>
        <p className='mt-3 flex-1 leading-relaxed text-[var(--color-ink-muted)]'>
          {project.description}
        </p>

        <ul className='mt-5 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className='rounded-full border border-[var(--color-rule)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]'>
              {tag}
            </li>
          ))}
        </ul>

        <div className='mt-6 border-t border-[var(--color-rule)] pt-4'>
          {project.url ? (
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex max-w-full items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              <span className='truncate'>
                {project.status ? 'Preview' : 'Visit'} {project.displayUrl}
              </span>
              <ArrowUpRight className='h-4 w-4 shrink-0' aria-hidden />
              <span className='sr-only'>(opens in a new tab)</span>
            </a>
          ) : (
            <p className='text-sm text-[var(--color-ink-subtle)]'>
              Private platform. No public link.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ClientWork() {
  return (
    <section
      id='work'
      className='deferred-section relative scroll-mt-28 border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-14 max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>Client work</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Projects we have built for clients
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            Digital platforms and web applications across events, healthcare,
            jewellery, gemstones, hospitality, and travel, for clients in Sri
            Lanka, Australia, and the UK.
          </p>
        </ScrollReveal>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {CLIENT_PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className='mt-14'>
          <div className='rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 md:p-8'>
            <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10'>
              <p className='text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink)]'>
                Across different industries, the work is the same: understand
                what the business needs, then deliver a digital experience
                tailored to it.
              </p>
              <ul className='flex flex-wrap gap-2' aria-label='Capabilities'>
                {CAPABILITIES.map((capability) => (
                  <li
                    key={capability}
                    className='rounded-full bg-[var(--color-accent-muted)] px-3.5 py-1.5 text-sm font-semibold text-[var(--color-accent-strong)]'>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
