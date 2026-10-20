'use client';

import { useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { createEmailUrl, createWhatsAppUrl } from '@/lib/constants';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const FIELD_CLASS =
  'mt-1.5 w-full rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-shadow placeholder:text-[var(--color-ink-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]';

const LABEL_CLASS = 'block text-sm font-semibold text-[var(--color-ink)]';

const OPTIONAL = (
  <span className='font-normal text-[var(--color-ink-subtle)]'>(optional)</span>
);

// Values match the `?service=` param that service landing pages link with.
const SERVICE_OPTIONS = [
  { value: 'not-sure', label: 'Not sure yet' },
  { value: 'website-development', label: 'Website' },
  { value: 'mobile-app-development', label: 'Mobile app' },
  { value: 'ecommerce-development', label: 'Online store / e-commerce' },
  { value: 'digital-transformation', label: 'Business automation / custom software' },
];

const TIMEFRAME_OPTIONS = [
  'Not sure yet',
  'As soon as possible',
  'Within 1–3 months',
  'In 3–6 months',
  'Just exploring',
];

const SOURCE_OPTIONS = [
  'Google search',
  'ChatGPT or another AI assistant',
  'Recommendation from someone',
  'LinkedIn, Facebook, or Instagram',
  'Other',
];

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? '').trim();
}

export default function WhatsAppContactForm() {
  const serviceRef = useRef<HTMLSelectElement>(null);

  // Preselect the service a landing page linked with (`/?service=...#contact`).
  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get('service');
    const option = SERVICE_OPTIONS.find(({ value }) => value === requestedService);
    if (option && serviceRef.current) serviceRef.current.value = option.value;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === 'email' ? 'email' : 'whatsapp';

    const formData = new FormData(event.currentTarget);
    const serviceValue = field(formData, 'service');
    const serviceLabel =
      SERVICE_OPTIONS.find((option) => option.value === serviceValue)?.label ?? 'Not sure yet';

    const optionalLines = [
      ['Business', field(formData, 'business')],
      ['Country', field(formData, 'country')],
      ['Timeframe', field(formData, 'timeframe')],
      ['Budget', field(formData, 'budget')],
      ['Found us via', field(formData, 'source')],
    ].filter(([, value]) => value);

    const bold = (label: string) => (channel === 'whatsapp' ? `*${label}:*` : `${label}:`);
    const lines = [
      `${bold('Name')} ${field(formData, 'name')}`,
      `${bold('Email')} ${field(formData, 'email')}`,
      `${bold('Project type')} ${serviceLabel}`,
      ...optionalLines.map(([label, value]) => `${bold(label)} ${value}`),
      '',
      bold('What I am trying to achieve'),
      field(formData, 'details'),
    ];

    if (channel === 'email') {
      window.location.href = createEmailUrl(
        `Project enquiry: ${serviceLabel}`,
        lines.join('\n'),
      );
      return;
    }

    const message = ['*New project enquiry — Orbitra Tech*', '', ...lines].join('\n');
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className='mt-6 space-y-4 text-left'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className={LABEL_CLASS}>
          Your name
          <input
            name='name'
            type='text'
            autoComplete='name'
            maxLength={100}
            placeholder='Full name'
            className={FIELD_CLASS}
            required
          />
        </label>
        <label className={LABEL_CLASS}>
          Email address
          <input
            name='email'
            type='email'
            autoComplete='email'
            maxLength={254}
            placeholder='you@company.com'
            className={FIELD_CLASS}
            required
          />
        </label>
        <label className={LABEL_CLASS}>
          Business name {OPTIONAL}
          <input
            name='business'
            type='text'
            autoComplete='organization'
            maxLength={120}
            placeholder='Your business'
            className={FIELD_CLASS}
          />
        </label>
        <label className={LABEL_CLASS}>
          Country {OPTIONAL}
          <input
            name='country'
            type='text'
            autoComplete='country-name'
            maxLength={60}
            placeholder='e.g. Sri Lanka'
            className={FIELD_CLASS}
          />
        </label>
      </div>
      <label className={LABEL_CLASS}>
        What do you need?
        <select ref={serviceRef} name='service' defaultValue='not-sure' className={FIELD_CLASS}>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label className={LABEL_CLASS}>
        What are you trying to achieve?
        <textarea
          name='details'
          rows={4}
          maxLength={1500}
          placeholder='e.g. We get orders through WhatsApp and track them in a spreadsheet. We want customers to order online and staff to see orders in one place.'
          className={`${FIELD_CLASS} resize-y`}
          required
        />
      </label>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className={LABEL_CLASS}>
          Timeframe {OPTIONAL}
          <select name='timeframe' defaultValue='' className={FIELD_CLASS}>
            <option value=''>Select…</option>
            {TIMEFRAME_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className={LABEL_CLASS}>
          Rough budget {OPTIONAL}
          <input
            name='budget'
            type='text'
            maxLength={60}
            placeholder='Any currency'
            className={FIELD_CLASS}
          />
        </label>
      </div>
      <label className={LABEL_CLASS}>
        How did you find us? {OPTIONAL}
        <select name='source' defaultValue='' className={FIELD_CLASS}>
          <option value=''>Select…</option>
          {SOURCE_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <p className='text-xs leading-relaxed text-[var(--color-ink-subtle)]'>
        Your message opens in WhatsApp or your email app, ready to review. Nothing
        is sent until you press send there.
      </p>
      <div className='flex flex-col gap-3 sm:flex-row'>
        <button type='submit' name='channel' value='whatsapp' className='btn-cta btn-cta-lg btn-whatsapp flex-1'>
          <WhatsAppIcon className='h-5 w-5' aria-hidden />
          Send via WhatsApp
        </button>
        <button type='submit' name='channel' value='email' className='btn-cta btn-cta-lg btn-outline flex-1'>
          <Mail className='h-5 w-5' aria-hidden />
          Send by email
        </button>
      </div>
    </form>
  );
}
