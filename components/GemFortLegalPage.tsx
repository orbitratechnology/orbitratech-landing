import type { ReactNode } from 'react';
import Link from 'next/link';

import Footer from './Footer';

export type LegalNavItem = {
  id: string;
  text: string;
};

type GemFortLegalPageProps = {
  badge: string;
  title: string;
  description: string;
  asideTitle: string;
  navItems: LegalNavItem[];
  children: ReactNode;
};

export default async function GemFortLegalPage({
  badge,
  title,
  description,
  asideTitle,
  navItems,
  children,
}: GemFortLegalPageProps) {
  return (
    <div className='min-h-screen overflow-x-hidden bg-[var(--color-paper)] text-[var(--color-ink)]'>
      <div className='mx-auto max-w-[1100px] px-6 py-16 md:py-20'>
        <Link
          href='/gemfort'
          className='mb-12 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-muted)] underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
          <span aria-hidden>←</span>
          Back to GemFort
        </Link>

        <header className='mb-16 border-b border-[var(--color-rule)] pb-10 md:mb-20'>
          <div className='mb-4 inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-muted)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]'>
            {badge}
          </div>
          <h1 className='max-w-4xl font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)]'>
            {title}
          </h1>
          <p className='mt-6 max-w-3xl text-[length:var(--text-xl)] leading-relaxed text-[var(--color-ink-muted)]'>
            {description}
          </p>
        </header>

        <div className='grid grid-cols-1 gap-14 md:grid-cols-[280px_1fr]'>
          <aside className='hidden md:block'>
            <div className='sticky top-10'>
              <h2 className='mb-6 text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--color-accent)]'>
                {asideTitle}
              </h2>
              <nav aria-label={asideTitle}>
                <ul className='space-y-4'>
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className='block text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className='mb-16 scroll-mt-10 last:mb-0'>
      <h2 className='mb-6 font-[family-name:var(--font-display)] text-[length:var(--text-2xl)] font-bold tracking-tight text-[var(--color-ink)]'>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalSubheading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h3 className='mb-3 mt-8 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)] first:mt-0'>
      {children}
    </h3>
  );
}

export function LegalParagraph({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className='mb-5 text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)] last:mb-0'>
      {children}
    </p>
  );
}

export function LegalList({
  children,
  ordered = false,
}: {
  children: ReactNode;
  ordered?: boolean;
}) {
  const className = 'my-5 space-y-3 text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)]';

  if (ordered) {
    return <ol className={`${className} list-decimal pl-6`}>{children}</ol>;
  }

  return <ul className={`${className} list-disc pl-6`}>{children}</ul>;
}

export function LegalCallout({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'warning';
}) {
  const toneClass =
    tone === 'warning'
      ? 'border-amber-300/70 bg-amber-50 text-amber-950'
      : 'border-[var(--color-accent)]/25 bg-[var(--color-accent-muted)] text-[var(--color-ink)]';

  return (
    <div className={`my-8 rounded-2xl border-l-4 p-6 ${toneClass}`}>
      <div className='text-sm leading-relaxed'>{children}</div>
    </div>
  );
}

export function LegalTable({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='my-8 overflow-x-auto rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]'>
      <table className='min-w-full border-collapse text-left text-sm leading-relaxed'>
        {children}
      </table>
    </div>
  );
}
