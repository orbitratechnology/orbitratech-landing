'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { createWhatsAppUrl } from '@/lib/constants';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const FIELD_CLASS =
  'mt-1.5 w-full rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-shadow placeholder:text-[var(--color-ink-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]';

const SERVICE_OPTIONS = [
  { value: 'Not sure yet', label: 'Not sure yet' },
  { value: 'website-development', label: 'Website development' },
  { value: 'mobile-app-development', label: 'Mobile app development' },
  { value: 'ecommerce-development', label: 'E-commerce development' },
  { value: 'digital-transformation', label: 'Digital transformation' },
];

export default function WhatsAppContactForm() {
  const [service, setService] = useState('Not sure yet');

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get('service');
    const option = SERVICE_OPTIONS.find(({ value }) => value === requestedService);
    if (option) setService(option.value);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const business = String(formData.get('business') ?? '').trim();
    const serviceValue = String(formData.get('service') ?? 'Not sure yet');
    const serviceLabel = SERVICE_OPTIONS.find((option) => option.value === serviceValue)?.label ?? 'Not sure yet';
    const details = String(formData.get('details') ?? '').trim();
    const message = [
      '*New project enquiry — Orbitra Tech*',
      '',
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      ...(business ? [`*Business:* ${business}`] : []),
      `*Service:* ${serviceLabel}`,
      '',
      '*Project details:*',
      details,
    ].join('\n');

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className='mt-6 space-y-4 text-left'>
      <label className='block text-sm font-semibold text-[var(--color-ink)]'>
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
      <label className='block text-sm font-semibold text-[var(--color-ink)]'>
        Email address
        <input
          name='email'
          type='email'
          autoComplete='email'
          maxLength={254}
          placeholder='you@example.com'
          className={FIELD_CLASS}
          required
        />
      </label>
      <label className='block text-sm font-semibold text-[var(--color-ink)]'>
        Business name <span className='font-normal text-[var(--color-ink-subtle)]'>(optional)</span>
        <input
          name='business'
          type='text'
          autoComplete='organization'
          maxLength={120}
          placeholder='Your business'
          className={FIELD_CLASS}
        />
      </label>
      <label className='block text-sm font-semibold text-[var(--color-ink)]'>
        What do you need?
        <select name='service' value={service} onChange={(event) => setService(event.target.value)} className={FIELD_CLASS}>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label className='block text-sm font-semibold text-[var(--color-ink)]'>
        Project details
        <textarea
          name='details'
          rows={4}
          maxLength={1500}
          placeholder='What are you trying to build or improve?'
          className={`${FIELD_CLASS} resize-y`}
          required
        />
      </label>
      <p className='text-xs leading-relaxed text-[var(--color-ink-subtle)]'>
        WhatsApp opens with your message ready to review. You choose whether to send it.
      </p>
      <button type='submit' className='btn-cta btn-cta-lg btn-whatsapp w-full'>
        <WhatsAppIcon className='h-5 w-5' aria-hidden />
        Continue to WhatsApp
      </button>
    </form>
  );
}
