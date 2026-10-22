import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { CLIENT_PROJECTS, type ClientProject } from '@/lib/client-projects';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './motion/ScrollReveal';

function ProjectMedia({ project, tall }: { project: ClientProject; tall?: boolean }) {
  const { image } = project;

  if (image.device === 'mobile') {
    return (
      <div
        className={cn(
          'relative flex items-end justify-center overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] px-6 pt-10',
          tall ? 'h-full min-h-[26rem]' : 'aspect-[16/10]',
        )}>
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={2000}
          sizes='(min-width: 1024px) 22rem, 60vw'
          className='w-[min(15rem,58%)] rounded-t-[1.75rem] object-cover object-top transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] motion-safe:group-hover:-translate-y-1.5'
        />
      </div>
    );
  }

  return (
    <div className='relative aspect-[16/10] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] px-[7%] pt-[7%]'>
      <Image
        src={image.src}
        alt={image.alt}
        width={2000}
        height={1136}
        sizes='(min-width: 1024px) 40rem, 90vw'
        className='h-full w-full rounded-t-[var(--radius-md)] object-cover object-top transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] motion-safe:group-hover:-translate-y-1.5'
      />
    </div>
  );
}

export function ProjectCard({
  project,
  tall = false,
  className,
}: {
  project: ClientProject;
  tall?: boolean;
  className?: string;
}) {
  const place = [project.type, project.location].filter(Boolean).join(', ');

  return (
    <article className={cn('group flex h-full min-w-0 flex-col', className)}>
      <ProjectMedia project={project} tall={tall} />
      <div className='mt-6 flex flex-1 flex-col'>
        <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
          <h3 className='t-h3'>{project.name}</h3>
          {project.status ? <span className='chip'>{project.status}</span> : null}
        </div>
        <p className='t-note mt-1'>{place}</p>
        <p className='t-body mt-3'>{project.summary}</p>
        {project.url ? (
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 inline-flex max-w-full items-center gap-1.5 self-start text-[length:var(--text-sm)] font-semibold text-[var(--color-accent-strong)] hover:text-[var(--color-ink)]'>
            <span className='truncate'>
              {project.status ? 'Preview' : 'Visit'} {project.displayUrl}
            </span>
            <ArrowUpRight className='size-4 shrink-0' aria-hidden />
            <span className='sr-only'>(opens in a new tab)</span>
          </a>
        ) : (
          <p className='t-note mt-4'>Private platform, no public link.</p>
        )}
      </div>
    </article>
  );
}

export default function ClientWork() {
  const [featured, second, ...rest] = CLIENT_PROJECTS;

  return (
    <section id='work' className='section band-white scroll-mt-24'>
      <div className='shell'>
        <ScrollReveal className='grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end'>
          <h2 className='t-h2'>Work we’ve built for clients</h2>
          <p className='t-lead text-[var(--color-ink-muted)]'>
            Platforms and websites for clients in Sri Lanka, Australia and the
            United Kingdom.
          </p>
        </ScrollReveal>

        <div className='mt-14 grid gap-x-8 gap-y-14 md:mt-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]'>
          <ScrollReveal>
            <ProjectCard project={featured} />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <ProjectCard project={second} tall />
          </ScrollReveal>
        </div>

        <ScrollReveal staggerChildren='.project-cell' className='mt-16 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2'>
          {rest.map((project) => (
            <div key={project.id} className='project-cell'>
              <ProjectCard project={project} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
