'use client';

import { WHATSAPP_URL } from '@/lib/constants';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function StickyCta() {
  return (
    <div className='fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-rule)] bg-[var(--color-paper-2)]/95 p-3 shadow-[0_-4px_24px_var(--color-shadow-soft)] backdrop-blur-lg md:hidden'>
      <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='btn-whatsapp flex min-h-12 w-full items-center justify-center gap-2 rounded-full text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
        <WhatsAppIcon className='h-5 w-5' />
        WhatsApp us
      </a>
    </div>
  );
}
