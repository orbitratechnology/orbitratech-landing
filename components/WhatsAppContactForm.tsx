'use client';

import { useEffect, useId, useRef } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { CircleAlert, Mail } from 'lucide-react';
import { createEmailUrl, createWhatsAppUrl } from '@/lib/constants';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const FIELD_CLASS =
  'form-field mt-1.5 w-full rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-shadow placeholder:text-[var(--color-ink-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]';

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

/**
 * Error text for a required field. It sits right after the control and is
 * shown by CSS only while the control matches :user-invalid (globals.css), so
 * it never appears before the person has interacted or tried to submit.
 */
function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className='field-error'>
      <CircleAlert className='size-4 shrink-0' role='img' aria-label='Error' />
      <span>{children}</span>
    </p>
  );
}

/**
 * Keeps aria-invalid and aria-describedby in step with the visual
 * :user-invalid state, and announces an error that appears when someone
 * leaves a field. Returns a cleanup function.
 */
function syncValidityForAssistiveTech(form: HTMLFormElement, announcer: HTMLElement) {
  type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
  const isField = (el: EventTarget | null): el is Field =>
    el instanceof Element && el.matches('input, select, textarea');

  const flagged = new WeakSet<Field>();
  const announced = new WeakSet<Field>();
  let announceTimer: ReturnType<typeof setTimeout> | undefined;
  let announcedField: Field | null = null;

  // List the error (the id in data-error) in aria-describedby only while it is
  // shown: referenced text is announced even when it is hidden.
  const linkError = (el: Field, shown: boolean) => {
    const errorId = el.dataset.error;
    if (!errorId) return;
    const ids = (el.getAttribute('aria-describedby') ?? '')
      .split(/\s+/)
      .filter((id) => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
    else el.removeAttribute('aria-describedby');
  };

  const announceError = (el: Field) => {
    const error = el.dataset.error ? document.getElementById(el.dataset.error) : null;
    if (!error) return;
    const label = el.labels?.[0]?.textContent?.trim();
    clearTimeout(announceTimer);
    announcer.textContent = '';
    announcedField = el;
    // Wait until the screen reader has read the field that receives focus next.
    announceTimer = setTimeout(() => {
      announcer.textContent = `${label ? `${label}: ` : ''}Error: ${error.textContent?.trim() ?? ''}`;
    }, 500);
  };

  const sync = (el: Field, announce = false) => {
    if (el.matches(':user-invalid')) {
      if (announce && !announced.has(el)) {
        announceError(el);
        announced.add(el);
      }
      el.setAttribute('aria-invalid', 'true');
      linkError(el, true);
      flagged.add(el);
    } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
      el.setAttribute('aria-invalid', 'false');
      linkError(el, false);
      flagged.delete(el);
      announced.delete(el);
      if (announcedField === el) {
        clearTimeout(announceTimer);
        announcer.textContent = '';
      }
    }
  };

  for (const el of form.querySelectorAll<Field>('input, select, textarea')) sync(el);

  const onBlur = (event: Event) => isField(event.target) && sync(event.target, true);
  const onInput = (event: Event) =>
    isField(event.target) && event.target.hasAttribute('aria-invalid') && sync(event.target);
  // A failed submit fires 'invalid' on every failing field; focus then moves to
  // the first one, which reads its error, so these are not announced.
  const onInvalid = (event: Event) => {
    if (!isField(event.target)) return;
    announced.add(event.target);
    sync(event.target);
  };

  form.addEventListener('blur', onBlur, true);
  form.addEventListener('change', onBlur, true);
  form.addEventListener('input', onInput);
  form.addEventListener('invalid', onInvalid, true);

  return () => {
    clearTimeout(announceTimer);
    form.removeEventListener('blur', onBlur, true);
    form.removeEventListener('change', onBlur, true);
    form.removeEventListener('input', onInput);
    form.removeEventListener('invalid', onInvalid, true);
  };
}

export default function WhatsAppContactForm() {
  const serviceRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLParagraphElement>(null);
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    details: `${uid}-details`,
  };

  useEffect(() => {
    if (!formRef.current || !announcerRef.current) return;
    return syncValidityForAssistiveTech(formRef.current, announcerRef.current);
  }, []);

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
    <form ref={formRef} onSubmit={handleSubmit} className='mt-6 space-y-4 text-left'>
      <p ref={announcerRef} aria-live='polite' className='sr-only' />
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor={ids.name} className={LABEL_CLASS}>
            Your name
          </label>
          <input
            id={ids.name}
            name='name'
            type='text'
            autoComplete='name'
            maxLength={100}
            placeholder='Full name'
            className={FIELD_CLASS}
            data-error={`${ids.name}-error`}
            required
          />
          <FieldError id={`${ids.name}-error`}>Enter your name.</FieldError>
        </div>
        <div>
          <label htmlFor={ids.email} className={LABEL_CLASS}>
            Email address
          </label>
          <input
            id={ids.email}
            name='email'
            type='email'
            autoComplete='email'
            maxLength={254}
            placeholder='you@company.com'
            className={FIELD_CLASS}
            data-error={`${ids.email}-error`}
            required
          />
          <FieldError id={`${ids.email}-error`}>
            Enter an email address, like name@company.com.
          </FieldError>
        </div>
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
      <div>
        <label htmlFor={ids.details} className={LABEL_CLASS}>
          What are you trying to achieve?
        </label>
        <textarea
          id={ids.details}
          name='details'
          rows={4}
          maxLength={1500}
          placeholder='e.g. We get orders through WhatsApp and track them in a spreadsheet. We want customers to order online and staff to see orders in one place.'
          className={`${FIELD_CLASS} resize-y`}
          data-error={`${ids.details}-error`}
          required
        />
        <FieldError id={`${ids.details}-error`}>
          Tell us a little about what you need.
        </FieldError>
      </div>
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
