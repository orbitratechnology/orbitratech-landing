import { Globe, Mail } from 'lucide-react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

const FOUNDERS = [
  {
    name: 'Bilal',
    role: 'Founder & CEO',
    bio: 'Leads client strategy, commercial development, and delivery - building Orbitra from zero into a full-service digital engineering firm.',
    image: '/bilal.jpg',
    socials: [
      {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/mohamed-suhair-bilal-ahamed-bb5766344/',
        label: 'LinkedIn',
      },
      {
        icon: Mail,
        url: 'mailto:ahamedbilal622@gmail.com',
        label: 'Email',
      },
    ],
  },
  {
    name: 'Adhham',
    role: 'Founder & CTO',
    bio: 'Architects native mobile and modern web systems - every build meets the bar we would ship for our own products.',
    image: '/adhham.jpg',
    website: 'https://adhham.dev',
    socials: [
      { icon: FaTwitter, url: 'https://x.com/AdhhamDev', label: 'Twitter' },
      {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/adhham',
        label: 'LinkedIn',
      },
      { icon: Mail, url: 'mailto:msmadhhamg@gmail.com', label: 'Email' },
      { icon: Globe, url: 'https://adhham.dev', label: 'Website' },
    ],
  },
] as const;

export default function Founders() {
  return (
    <section
      id='founders'
      className='deferred-section border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-14 max-w-2xl text-center'>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            The team behind your build
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            Two founders, one standard: software that earns trust with your
            customers and your books.
          </p>
        </ScrollReveal>

        <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-2'>
          {FOUNDERS.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={i * 0.1}>
              <BeamCard beamDelay={i * 1.3} className='h-full'>
                <article className='flex h-full min-w-0 flex-col items-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-8 text-center'>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={160}
                  height={160}
                  className='mb-6 h-36 w-36 rounded-full object-cover ring-2 ring-[var(--color-rule)]'
                  loading='lazy'
                />
                <h3 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                  {founder.name}
                </h3>
                <p className='mt-1 text-sm font-semibold text-[var(--color-accent)]'>
                  {founder.role}
                </p>
                <p className='mt-4 max-w-xs text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                  {founder.bio}
                </p>
                <div className='mt-6 flex flex-wrap justify-center gap-3'>
                  {founder.socials.map((social) => {
                    const Icon = social.icon;
                    const href =
                      social.label === 'Website' && 'website' in founder
                        ? founder.website
                        : social.url;
                    return (
                      <a
                        key={social.label}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        title={social.label}
                        className='rounded-full border border-[var(--color-rule)] p-3 text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                        <Icon className='h-5 w-5' aria-hidden />
                      </a>
                    );
                  })}
                </div>
                </article>
              </BeamCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
