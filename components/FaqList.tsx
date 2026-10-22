import { Plus } from 'lucide-react';

/** Questions as native disclosures: readable without script, one tap to open. */
export function FaqList({ faqs }: { faqs: ReadonlyArray<{ question: string; answer: string }> }) {
  return (
    <div className='flex flex-col gap-3'>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className='group rounded-[var(--radius-lg)] bg-[var(--color-paper-2)]'>
          <summary className='flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-[length:var(--text-base)] font-semibold text-[var(--color-ink)] md:px-7 md:py-6 [&::-webkit-details-marker]:hidden'>
            {faq.question}
            <span
              className='mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper-3)] text-[var(--color-ink)] transition-transform duration-[var(--dur-base)] group-open:rotate-45 group-open:bg-[var(--color-accent)] group-open:text-[var(--color-paper-2)]'
              aria-hidden>
              <Plus className='size-4' />
            </span>
          </summary>
          <p className='t-body max-w-[62ch] px-6 pb-6 md:px-7 md:pb-7'>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
