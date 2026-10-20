import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './motion/ScrollReveal';

const QUOTE_STEPS = [
  {
    title: 'Free first conversation',
    body: 'Tell us the problem and what you have tried so far. No brief or preparation needed.',
  },
  {
    title: 'Written scope and fixed price',
    body: 'What is included, what is not, the milestones, and the total — in writing, before any work starts.',
  },
  {
    title: 'Build to the agreed scope',
    body: 'You review the work at each milestone. If something needs to change, we agree the change and its cost with you first.',
  },
] as const;

const COST_FACTORS = [
  'Number of pages, screens, or features',
  'Design complexity and custom interactions',
  'Integrations with payments, accounting, or existing systems',
  'Content: who writes the copy and supplies photos',
  'Security, privacy, and compliance requirements',
  'Hosting, maintenance, and support after launch',
  'Third-party services and licences',
] as const;

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='deferred-section relative scroll-mt-28 border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14'>
        <ScrollReveal>
          <p className='section-eyebrow mb-3'>Pricing</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            A fixed price for a clear scope
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            We do not bill by the hour. Every project is quoted as a fixed price
            for a written scope, so you know the total before you commit.
          </p>

          <ol className='mt-8 space-y-4'>
            {QUOTE_STEPS.map((step, index) => (
              <li
                key={step.title}
                className='flex gap-4 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5'>
                <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-sm font-bold text-[var(--color-accent-strong)]'>
                  {index + 1}
                </span>
                <div>
                  <h3 className='font-semibold text-[var(--color-ink)]'>
                    {step.title}
                  </h3>
                  <p className='mt-1 leading-relaxed text-[var(--color-ink-muted)]'>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className='h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 shadow-[0_1px_2px_var(--color-shadow-soft),0_12px_32px_var(--color-shadow)] md:p-8'>
            <h3 className='font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]'>
              What affects the price
            </h3>
            <p className='mt-2 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
              Two projects of the same type can cost very different amounts.
              These are the factors that move a quote up or down.
            </p>
            <ul className='mt-6 space-y-3'>
              {COST_FACTORS.map((factor) => (
                <li
                  key={factor}
                  className='flex gap-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink)] md:text-[length:var(--text-base)]'>
                  <span
                    className='mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]'
                    aria-hidden
                  />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <div className='mt-8 border-t border-[var(--color-rule)] pt-6'>
              <p className='text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                Want a ballpark before a call? A short description of the
                project is enough for an indicative range.
              </p>
              <Link
                href='#contact'
                className='btn-cta btn-cta-lg btn-brand group mt-4 gap-2'>
                Ask for a price range
                <ArrowRight
                  className='h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-0.5'
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
