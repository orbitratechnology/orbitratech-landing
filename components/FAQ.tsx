import { ChevronDown } from 'lucide-react';
import { HOME_FAQS } from '@/lib/home-content';
import { ScrollReveal } from './motion/ScrollReveal';

const FAQS = HOME_FAQS;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQ() {
  return (
    <section
      id='faq'
      className='deferred-section relative scroll-mt-28 border-t border-[var(--color-rule)] py-20 md:py-28'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className='container mx-auto max-w-4xl px-6'>
        <ScrollReveal className='mx-auto mb-10 max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>Questions</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            What people ask before hiring us
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className='divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]'>
            {FAQS.map((faq) => (
              <details key={faq.question} className='group py-5'>
                <summary className='flex cursor-pointer list-none items-start justify-between gap-4 rounded-md font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)] [&::-webkit-details-marker]:hidden'>
                  {faq.question}
                  <ChevronDown
                    className='mt-1 size-5 shrink-0 text-[var(--color-ink-subtle)] transition-transform duration-[var(--dur-base)] group-open:rotate-180'
                    aria-hidden
                  />
                </summary>
                <p className='mt-3 max-w-3xl leading-relaxed text-[var(--color-ink-muted)]'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
