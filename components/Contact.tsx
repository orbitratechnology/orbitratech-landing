'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { WHATSAPP_SHORT } from '@/lib/constants';
import { ScrollReveal } from './motion/ScrollReveal';
import { BeamCard } from './ui/beam-card';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Contact() {
  return (
    <section
      id='contact'
      className='deferred-section relative border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto mb-12 max-w-2xl text-center'>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] md:text-[length:var(--text-display-s)]'>
            Tell us what you are trying to fix
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] text-[var(--color-ink-muted)]'>
            A short WhatsApp message is enough to start. We reply with next steps
            and a realistic timeline — usually within an hour.
          </p>
        </ScrollReveal>

        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]'>
          <ScrollReveal>
            <div className='h-full rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8'>
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
                      href='tel:+94702495311'
                      className='mt-1 block text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]'>
                      +94 70 249 5311
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
                      href='mailto:admin@orbitratech.net'
                      className='mt-1 block break-all text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]'>
                      admin@orbitratech.net
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
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <BeamCard beamDelay={0} beamSize={120}>
              <div className='flex h-full flex-col justify-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 text-center md:p-10'>
                <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp-muted)]'>
                  <WhatsAppIcon className='h-7 w-7 text-[var(--color-whatsapp-strong)]' />
                </div>
                <h3 className='font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]'>
                  Start on WhatsApp
                </h3>
                <p className='mx-auto mt-3 max-w-sm text-[length:var(--text-sm)] text-[var(--color-ink-muted)]'>
                  Describe your business and what is not working today. We will
                  suggest the smallest useful first step.
                </p>
                <a
                  href={WHATSAPP_SHORT}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-whatsapp mt-8 inline-flex min-h-12 items-center justify-center gap-2 self-center rounded-full px-8 py-3.5 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                  <WhatsAppIcon className='h-5 w-5' />
                  Open WhatsApp
                </a>
              </div>
            </BeamCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
