'use client';

import { Check, Mail } from 'lucide-react';
import { useState } from 'react';

import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { createEmailUrl, createWhatsAppUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';

function briefText(service: string, picked: string[]) {
  const intro = `Hi Orbitra Tech, I'm interested in ${service.toLowerCase()}.`;
  if (picked.length === 0) {
    return `${intro} Could you give me an idea of the price?`;
  }
  return [
    intro,
    '',
    'These apply to my project:',
    ...picked.map((item) => `- ${item}`),
    '',
    'Could you give me an idea of the price?',
  ].join('\n');
}

/**
 * The price factors as toggles. Picking the ones that apply turns them into
 * a short brief the visitor can send on WhatsApp or by email.
 */
export function BriefBuilder({ service, factors }: { service: string; factors: string[] }) {
  const [picked, setPicked] = useState<string[]>([]);
  const text = briefText(service, picked);

  const toggle = (factor: string) =>
    setPicked((current) =>
      current.includes(factor)
        ? current.filter((item) => item !== factor)
        : factors.filter((item) => item === factor || current.includes(item)),
    );

  return (
    <div className='rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-6 md:p-8'>
      <p className='t-label'>Tap what applies to you</p>
      <ul className='mt-5 flex flex-wrap gap-2.5'>
        {factors.map((factor) => {
          const on = picked.includes(factor);
          return (
            <li key={factor}>
              <button
                type='button'
                aria-pressed={on}
                onClick={() => toggle(factor)}
                className={cn(
                  'inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-left text-[length:var(--text-sm)] font-semibold transition-colors duration-[var(--dur-fast)]',
                  on
                    ? 'bg-[var(--color-accent)] text-[var(--color-paper-2)]'
                    : 'bg-[var(--color-paper-2)] text-[var(--color-ink)] hover:bg-[var(--color-paper-4)]',
                )}>
                <span
                  className={cn(
                    'flex size-5 shrink-0 items-center justify-center rounded-full transition-colors',
                    on ? 'bg-[var(--color-paper-2)] text-[var(--color-accent-strong)]' : 'bg-[var(--color-paper-2)] text-[var(--color-paper-2)]',
                  )}
                  aria-hidden>
                  <Check className='size-3.5' strokeWidth={3} />
                </span>
                {factor}
              </button>
            </li>
          );
        })}
      </ul>
      <p className='t-note mt-6' aria-live='polite'>
        {picked.length === 0
          ? 'Nothing picked yet. You can still ask for a price range.'
          : `${picked.length} of ${factors.length} picked. We will use these to give you a price range.`}
      </p>
      <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
        <a
          href={createWhatsAppUrl(text)}
          target='_blank'
          rel='noopener noreferrer'
          className='btn-cta btn-cta-lg btn-whatsapp'>
          <WhatsAppIcon className='size-5' aria-hidden />
          Send on WhatsApp
        </a>
        <a
          href={createEmailUrl(`Price range: ${service}`, text)}
          className='btn-cta btn-cta-lg btn-soft'>
          <Mail className='size-5' aria-hidden />
          Send by email
        </a>
      </div>
    </div>
  );
}
