'use client';

import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6'>
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-[background,border-color,box-shadow] duration-[var(--dur-base)] md:px-5',
          scrolled
            ? 'border-[var(--color-rule)] bg-[var(--color-paper)]/90 shadow-[0_8px_32px_oklch(0%_0_0/0.35)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
        aria-label='Primary'>
        <Link href='/' className='flex shrink-0 items-center gap-2.5'>
          <Image
            src='/orbitra_logo.png'
            alt='Orbitra Tech'
            width={40}
            height={40}
            className='h-9 w-9 md:h-10 md:w-10'
            priority
          />
          <span className='hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--color-ink)] sm:inline'>
            Orbitra Tech
          </span>
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='rounded-full px-3.5 py-2 text-sm font-medium text-[var(--color-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-paper-3)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-[var(--color-paper)] transition-[transform,background] duration-[var(--dur-base)] hover:scale-[1.02] hover:bg-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] md:inline-flex'>
          <WhatsAppIcon className='h-4 w-4' />
          Book a call
        </a>

        <button
          type='button'
          onClick={() => setOpen((v) => !v)}
          className='inline-flex rounded-full p-2.5 text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-paper-3)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] md:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'>
          {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id='mobile-nav'
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4 shadow-xl md:hidden'>
            <div className='flex flex-col gap-1'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='rounded-xl px-4 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper-3)]'>
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3.5 text-base font-semibold text-[var(--color-paper)]'>
                <WhatsAppIcon className='h-5 w-5' />
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
