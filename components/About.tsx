import { Check, MapPin, Target } from 'lucide-react';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';

// Plain facts about how Orbitra works. Do not add client counts, project
// totals, or satisfaction scores here unless they can be verified and linked
// to evidence (named clients, case studies, or published reviews).
const FACTS = [
  {
    title: 'Founder-led',
    body: 'You talk directly to the people who scope and build your project.',
  },
  {
    title: 'One team, every platform',
    body: 'Web, iOS, Android, and the back end they share.',
  },
  {
    title: 'Fixed scope',
    body: 'Price and milestones agreed in writing before work starts.',
  },
  {
    title: 'UTC+5:30',
    body: 'Overlaps working hours in the Gulf, Europe, and much of Asia-Pacific.',
  },
] as const;

const PRINCIPLES = [
  'Fixed, transparent pricing agreed before work starts',
  'Software your staff can use without a manual',
  'Local context with production-grade engineering',
] as const;

export default function About() {
  return (
    <section
      id='about'
      className='deferred-section relative scroll-mt-28 border-y border-[var(--color-rule)] bg-[var(--color-paper-2)]/50 py-20 md:py-28'>
      <div className='container relative z-10 mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-12 max-w-2xl text-center md:mb-14'>
          <p className='section-eyebrow mb-3'>About</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Built in Beruwala for businesses that need practical tech
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            Orbitra Tech (Pvt) Ltd is a software studio in Beruwala, Sri Lanka.
            We help growing businesses replace spreadsheets, WhatsApp
            back-and-forth, and outdated websites with tools that actually run
            the business. We also build our own products, so we live with the
            same engineering decisions we recommend.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <dl className='overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_1px_2px_var(--color-shadow-soft),0_12px_32px_var(--color-shadow)]'>
            <div className='grid grid-cols-1 divide-y divide-[var(--color-rule)] sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0'>
              {FACTS.map((fact) => (
                <div key={fact.title} className='flex flex-col px-6 py-7'>
                  <dt className='font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-accent)]'>
                    {fact.title}
                  </dt>
                  <dd className='mt-2 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                    {fact.body}
                  </dd>
                </div>
              ))}
            </div>
          </dl>
        </ScrollReveal>

        <div className='mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:mt-10 lg:gap-8'>
          <ScrollReveal delay={0.08}>
            <BeamCard beamDelay={0.5} className='h-full'>
              <div className='flex h-full flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <h3 className='font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]'>
                  Why teams work with us
                </h3>
                <p className='mt-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)] md:text-[length:var(--text-base)]'>
                  You get one accountable team from first call to launch - clear
                  scope, honest timelines, and software your staff can use without
                  a manual.
                </p>
                <ul className='mt-6 flex flex-col gap-4'>
                  {PRINCIPLES.map((item) => (
                    <li
                      key={item}
                      className='flex min-w-0 items-start gap-3 text-[length:var(--text-sm)] md:text-[length:var(--text-base)]'>
                      <span className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                        <Check className='h-3.5 w-3.5' aria-hidden />
                      </span>
                      <span className='font-semibold leading-relaxed text-[var(--color-ink)]'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BeamCard>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <BeamCard beamDelay={1.2} className='h-full'>
              <div className='flex h-full flex-col rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <span className='mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                  <Target className='h-5 w-5' aria-hidden />
                </span>
                <p className='text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]'>
                  Our mission
                </p>
                <blockquote className='mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-lg)] font-semibold leading-snug tracking-tight text-[var(--color-ink)] md:text-xl'>
                  Make high-end web and mobile accessible to every Sri Lankan
                  entrepreneur ready to digitize.
                </blockquote>
                <p className='mt-4 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                  We combine local market understanding with production-grade
                  engineering - so your digital presence earns trust on first
                  contact.
                </p>
                <div className='mt-auto flex items-center gap-2.5 border-t border-[var(--color-rule)] pt-6 text-[length:var(--text-sm)] font-semibold text-[var(--color-ink-muted)]'>
                  <MapPin
                    className='h-4 w-4 shrink-0 text-[var(--color-accent)]'
                    aria-hidden
                  />
                  <span>Beruwala, Sri Lanka · Remote worldwide</span>
                </div>
              </div>
            </BeamCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
