import { Globe, Mail } from 'lucide-react';
import Image from 'next/image';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { ScrollReveal } from './motion/ScrollReveal';

// Plain facts about how Orbitra works. Do not add client counts, project
// totals, or satisfaction scores here unless they can be verified and linked
// to evidence (named clients, case studies, or published reviews).
const FACTS = [
  {
    title: 'Founder-led',
    body: 'You talk directly to the people who scope and build your project.',
  },
  {
    title: 'Every platform',
    body: 'Web, iPhone, Android, and the systems behind them, from one team.',
  },
  {
    title: 'Fixed scope',
    body: 'Price and milestones agreed in writing before work starts.',
  },
  {
    title: 'UTC+5:30',
    body: 'Overlaps working hours in the Gulf, Europe and much of Asia-Pacific.',
  },
] as const;

const FOUNDERS = [
  {
    name: 'Bilal',
    role: 'Co-Founder & CEO',
    onYourProject:
      'Your main point of contact: scope, quotes, timelines, and keeping delivery on track.',
    image: '/bilal.png',
    socials: [
      {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/mohamed-suhair-bilal-ahamed-bb5766344/',
        label: 'LinkedIn',
      },
      { icon: Mail, url: 'mailto:bilalibnsuhair@gmail.com', label: 'Email' },
    ],
  },
  {
    name: 'Adhham',
    role: 'Co-Founder & CTO',
    onYourProject:
      'Owns the technical decisions: how your web and mobile apps are designed, built and released.',
    image: '/adhham.png',
    socials: [
      { icon: FaXTwitter, url: 'https://x.com/AdhhamDev', label: 'X' },
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/adhham', label: 'LinkedIn' },
      { icon: Mail, url: 'mailto:adhham.dev.mail@gmail.com', label: 'Email' },
      { icon: Globe, url: 'https://adhham.dev', label: 'Website' },
    ],
  },
] as const;

export default function About() {
  return (
    <section id='about' className='section band-white scroll-mt-24'>
      <div className='shell'>
        <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
          <ScrollReveal>
            <h2 className='t-h2'>Built in Beruwala for businesses that need practical tech</h2>
            <p className='t-body mt-6'>
              Orbitra Tech (Pvt) Ltd is a software studio in Beruwala, Sri
              Lanka. We help growing businesses replace spreadsheets, WhatsApp
              back-and-forth and dated websites with tools that run the
              business. We also build our own products, so we live with the
              same decisions we recommend.
            </p>
            <figure className='mt-10'>
              <blockquote className='t-statement text-[var(--color-accent-strong)]'>
                Make high-end web and mobile accessible to every Sri Lankan
                entrepreneur ready to digitise.
              </blockquote>
              <figcaption className='t-note mt-3'>Our mission</figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <dl className='grid gap-x-10 gap-y-12 sm:grid-cols-2'>
              {FACTS.map((fact) => (
                <div key={fact.title}>
                  <dt className='font-[family-name:var(--font-display)] text-[length:var(--text-xl)] font-semibold tracking-[-0.02em] text-[var(--color-ink)]'>
                    {fact.title}
                  </dt>
                  <dd className='t-body mt-2'>{fact.body}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <div id='founders' className='mt-24 scroll-mt-24 md:mt-32'>
          <h3 className='t-h3 text-[length:var(--text-2xl)]'>Who you will work with</h3>
          <p className='t-body mt-3'>
            Orbitra is founder-led. These two people scope, build and stand
            behind your project, and they are the people you talk to.
          </p>
          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name}
                className='grid grid-cols-[6.5rem_minmax(0,1fr)] gap-6 rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] md:p-8'>
                <Image
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role} of Orbitra Tech`}
                  width={272}
                  height={272}
                  className='aspect-square w-full rounded-[var(--radius-lg)] object-cover'
                />
                <div className='min-w-0'>
                  <h4 className='t-h3'>{founder.name}</h4>
                  <p className='t-label mt-1 text-[var(--color-accent-strong)]'>{founder.role}</p>
                  <p className='mt-3 text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink)]'>
                    {founder.onYourProject}
                  </p>
                  <div className='mt-5 flex flex-wrap gap-2'>
                    {founder.socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`${founder.name} on ${social.label}`}
                          className='inline-flex size-11 items-center justify-center rounded-full bg-[var(--color-paper-2)] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent-strong)]'>
                          <Icon className='size-[1.125rem]' aria-hidden />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
