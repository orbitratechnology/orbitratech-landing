import { Mail, MapPin, Phone } from 'lucide-react';
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  RESPONSE_TIME,
} from '@/lib/constants';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import WhatsAppContactForm from './WhatsAppContactForm';

const NEXT_STEPS = [
  'We reply with questions or a time for a short call.',
  'We talk through the problem, what you have tried, and what success looks like.',
  'You get a written scope with a fixed price and milestones. No obligation.',
] as const;

export default function Contact() {
  return (
    <section className='deferred-section relative border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-12 max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>Contact</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Tell us what you are trying to fix
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            A short message is enough to start, and there is no commitment. You
            do not need to know yet whether you need a website, an app, or
            custom software.
          </p>
        </ScrollReveal>

        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
          <ScrollReveal>
            <div className='flex h-full flex-col gap-8 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
              <div>
                <h3 className='mb-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]'>
                  Contact details
                </h3>
                <ul className='space-y-6'>
                  <li className='flex min-w-0 gap-4'>
                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                      <Phone className='h-5 w-5' aria-hidden />
                    </span>
                    <div className='min-w-0'>
                      <p className='font-semibold text-[var(--color-ink)]'>
                        Phone & WhatsApp
                      </p>
                      <a
                        href={`tel:${PHONE_E164}`}
                        className='mt-1 block text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]'>
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </li>
                  <li className='flex min-w-0 gap-4'>
                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                      <Mail className='h-5 w-5' aria-hidden />
                    </span>
                    <div className='min-w-0'>
                      <p className='font-semibold text-[var(--color-ink)]'>Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className='mt-1 block break-all text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]'>
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className='flex min-w-0 gap-4'>
                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]'>
                      <MapPin className='h-5 w-5' aria-hidden />
                    </span>
                    <div className='min-w-0'>
                      <p className='font-semibold text-[var(--color-ink)]'>
                        Location
                      </p>
                      <p className='mt-1 text-[var(--color-ink-muted)]'>
                        Beruwala, Sri Lanka
                        <br />
                        Remote engagements worldwide
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='border-t border-[var(--color-rule)] pt-6'>
                <h3 className='font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]'>
                  What happens next
                </h3>
                <ol className='mt-4 space-y-3'>
                  {NEXT_STEPS.map((step, index) => (
                    <li
                      key={step}
                      className='flex gap-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--color-ink-muted)]'>
                      <span className='flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-xs font-bold text-[var(--color-accent-strong)]'>
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className='mt-4 text-xs leading-relaxed text-[var(--color-ink-subtle)]'>
                  {RESPONSE_TIME}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <BeamCard beamDelay={0} beamSize={120}>
              <div className='flex h-full flex-col justify-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-whatsapp-muted)]'>
                    <WhatsAppIcon className='h-6 w-6 text-[var(--color-whatsapp-strong)]' />
                  </span>
                  <h3 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                    Tell us about your project
                  </h3>
                </div>
                <p className='mt-3 text-[length:var(--text-sm)] text-[var(--color-ink-muted)]'>
                  Fill in what you know, then send it by WhatsApp or email,
                  whichever you prefer.
                </p>
                <WhatsAppContactForm />
              </div>
            </BeamCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
