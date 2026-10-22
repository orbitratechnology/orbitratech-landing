import { RESPONSE_TIME, WHATSAPP_URL } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { OrbitScene } from './scenes/OrbitScene';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Hero() {
  return (
    <section className='relative pt-28 pb-16 md:pt-36 md:pb-24'>
      <div className='shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10'>
        <div className='hero-rise'>
          <h1 className='t-display max-w-[15ch] text-[clamp(2.75rem,1.5rem+4vw,5rem)]'>
            Software that wins customers and saves hours
          </h1>
          <p className='t-lead mt-7 text-[var(--color-ink-muted)]'>
            Websites, apps and online stores for growing businesses, at a price
            agreed first.
          </p>
          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <Link href='#contact' className='btn-cta btn-cta-lg btn-brand'>
              Discuss your project
              <ArrowRight className='btn-arrow size-4' aria-hidden />
            </Link>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-cta btn-cta-lg btn-soft'>
              <WhatsAppIcon className='size-5 text-[var(--color-whatsapp-strong)]' aria-hidden />
              Ask a quick question
            </a>
          </div>
          <p className='t-note mt-5 max-w-[46ch]'>Based in Beruwala, Sri Lanka, working worldwide. {RESPONSE_TIME}</p>
        </div>
        <OrbitScene className='mx-auto w-full max-w-[38rem] lg:mr-0' />
      </div>
    </section>
  );
}
