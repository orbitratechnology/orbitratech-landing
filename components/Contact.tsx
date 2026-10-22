import { Mail, MapPin, Phone } from 'lucide-react';
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  RESPONSE_TIME,
} from '@/lib/constants';
import { ScrollReveal } from './motion/ScrollReveal';
import WhatsAppContactForm from './WhatsAppContactForm';

const NEXT_STEPS = [
  'We reply with questions or a time for a short call.',
  'We talk through the problem and what success looks like.',
  'You get a written scope with a fixed price. No obligation.',
] as const;

const DETAILS = [
  { Icon: Phone, label: 'Phone and WhatsApp', value: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
  { Icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { Icon: MapPin, label: 'Location', value: 'Beruwala, Sri Lanka. Working worldwide.', href: null },
] as const;

export default function Contact() {
  return (
    <section className='section'>
      <div className='shell grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20'>
        <ScrollReveal>
          <h2 className='t-h2'>Tell us what you’re trying to fix</h2>
          <p className='t-lead mt-5 text-[var(--color-ink-muted)]'>
            A short message is enough. You don’t need to know yet whether you
            need a website, an app or custom software.
          </p>

          <ol className='mt-10 grid gap-5'>
            {NEXT_STEPS.map((step, index) => (
              <li key={step} className='flex items-start gap-4'>
                <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-[family-name:var(--font-display)] font-semibold text-[var(--color-accent-strong)]'>
                  {index + 1}
                </span>
                <span className='pt-1.5 text-[length:var(--text-base)]'>{step}</span>
              </li>
            ))}
          </ol>
          <p className='t-note mt-6'>{RESPONSE_TIME}</p>

          <ul className='mt-10 grid gap-5'>
            {DETAILS.map(({ Icon, label, value, href }) => (
              <li key={label} className='flex items-start gap-4'>
                <Icon className='mt-1 size-5 shrink-0 text-[var(--color-accent)]' aria-hidden />
                <div className='min-w-0'>
                  <p className='t-note'>{label}</p>
                  {href ? (
                    <a href={href} className='link-quiet break-all text-[length:var(--text-base)] font-semibold'>
                      {value}
                    </a>
                  ) : (
                    <p className='text-[length:var(--text-base)] font-semibold'>{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className='rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-6 md:p-10'>
            <h3 className='t-h3'>Tell us about your project</h3>
            <p className='t-note mt-2'>
              Fill in what you know, then send it by WhatsApp or email.
            </p>
            <WhatsAppContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
