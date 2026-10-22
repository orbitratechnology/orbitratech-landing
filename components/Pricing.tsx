import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { StepPath } from './StepPath';

const STEPS = [
  {
    title: 'A free first chat',
    description: 'Tell us the problem on WhatsApp, email or a call. No brief needed.',
  },
  {
    title: 'A fixed price in writing',
    description: 'What is included, the milestones and the total, before any work starts.',
  },
  {
    title: 'Design and build',
    description: 'You review the work at each milestone. Any change is agreed with you first.',
  },
  {
    title: 'Launch and support',
    description: 'We go live, train your team, and stay on for updates if you want us to.',
  },
];

const COST_FACTORS = [
  'Number of pages, screens or features',
  'How custom the design is',
  'Payments and links to other systems',
  'Who writes the words and supplies photos',
  'Security and privacy needs',
  'Hosting and support after launch',
];

export default function Pricing() {
  return (
    <section id='pricing' className='section band-field scroll-mt-20'>
      <div className='shell'>
        <div className='grid gap-5 lg:grid-cols-2 lg:items-end'>
          <h2 className='t-h2 text-[var(--color-field-ink)]'>A fixed price, agreed before we start</h2>
          <p className='t-lead text-[var(--color-field-muted)]'>
            We don’t bill by the hour. You know the total before you commit,
            and you work directly with the founders who build it.
          </p>
        </div>

        <StepPath steps={STEPS} tone='field' className='mt-16 md:mt-24' />

        <div className='mt-20 grid gap-8 rounded-[var(--radius-xl)] bg-[var(--color-field-2)] p-7 md:mt-28 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center'>
          <div>
            <h3 className='t-h3 text-[var(--color-field-ink)]'>What affects the price</h3>
            <ul className='mt-5 flex flex-wrap gap-2.5'>
              {COST_FACTORS.map((factor) => (
                <li
                  key={factor}
                  className='rounded-full bg-[var(--color-field)] px-4 py-2 text-[length:var(--text-sm)] font-semibold text-[var(--color-field-ink)]'>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
          <Link href='#contact' className='btn-cta btn-cta-lg btn-brand self-start lg:self-center'>
            Ask for a price range
            <ArrowRight className='btn-arrow size-4' aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
