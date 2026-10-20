import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './motion/ScrollReveal';

const FAQS = [
  {
    question: 'How much does a website, app, or custom software project cost?',
    answer:
      'It depends on scope: the number of pages or features, integrations, design complexity, and who supplies the content. After a free first conversation we send a written scope with a fixed price, so you know the total before you commit. If you want a ballpark first, a short description is enough for an indicative range.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'That also depends on scope. Your quote includes a timeline broken into milestones, and you review the work at each one. Well-defined projects move faster, so we often suggest starting with the smallest release that solves the main problem.',
  },
  {
    question: 'I am not sure whether I need a website, an app, or custom software. Can you help?',
    answer:
      'Yes. Describe the problem you want to solve, such as more enquiries, fewer manual steps, or taking orders online, and we will recommend the simplest option that solves it. Sometimes that is a better website rather than an app.',
  },
  {
    question: 'Do you work with businesses outside Sri Lanka?',
    answer:
      'Yes. Orbitra Tech is based in Beruwala, Sri Lanka, and works with clients remotely by video call, email, and WhatsApp. Clients include Event Hero, an Australian events startup, and OncsCare, a UK healthcare platform. Sri Lanka is on UTC+5:30, which overlaps working hours in the Gulf, Europe, and much of Asia-Pacific. We do not have offices outside Sri Lanka.',
  },
  {
    question: 'Who will I actually work with?',
    answer:
      'The founders. Bilal handles scope, communication, and delivery, and Adhham leads architecture and engineering. You talk to the people building your project, not an account manager.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We train your team and hand over documentation so you are not dependent on us for day-to-day use. If you want ongoing updates, fixes, or new features, that can be included in your quote or arranged later.',
  },
  {
    question: 'What is the difference between your client work and your products?',
    answer:
      'Client work, such as Event Hero and OncsCare, is built for a client and their business. Callnet, Worknet, GemFort, and Hermade are Orbitra’s own products, at stages from planning to beta, and each one is labelled with its current status.',
  },
] as const;

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
