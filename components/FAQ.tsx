import { RESPONSE_TIME } from '@/lib/constants';

import { FaqList } from './FaqList';
import { ScrollReveal } from './motion/ScrollReveal';

const FAQS = [
  {
    question: 'How much does a website, app, or custom software project cost?',
    answer:
      'It depends on scope: the number of pages or features, links to other systems, how custom the design is, and who supplies the content. After a free first conversation we send a written scope with a fixed price, so you know the total before you commit. If you want a ballpark first, a short description is enough for an indicative range.',
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
      'The founders. Bilal handles scope, communication, and delivery, and Adhham leads the technical work. You talk to the people building your project, not an account manager.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We train your team and hand over simple guides so you are not dependent on us for day-to-day use. If you want ongoing updates, fixes, or new features, that can be included in your quote or arranged later.',
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
    <section id='faq' className='section band-tint scroll-mt-24'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className='shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16'>
        <ScrollReveal>
          <h2 className='t-h2'>Questions people ask before hiring us</h2>
          <p className='t-body mt-5'>
            Something else on your mind? Ask us on WhatsApp or by email.{' '}
            {RESPONSE_TIME}
          </p>
        </ScrollReveal>
        <FaqList faqs={FAQS} />
      </div>
    </section>
  );
}
