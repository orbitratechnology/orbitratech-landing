import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page not found | Orbitra Tech',
  description:
    'This path does not exist on orbitratech.net. See the homepage, llms.txt, or sitemap.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const recovery = `# 404 — Page not found

This path does not exist on **orbitratech.net**.

- [Homepage](https://orbitratech.net/)
- [llms.txt](https://orbitratech.net/llms.txt)
- [sitemap.xml](https://orbitratech.net/sitemap.xml)
- [robots.txt](https://orbitratech.net/robots.txt)

WhatsApp: https://wa.me/94702495311`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-2 text-sm font-medium text-[var(--color-ink-subtle)]">404</p>
      <h1 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-[var(--color-ink-muted)]">
        This URL is not on orbitratech.net. Use the homepage or agent index below.
      </p>
      <ul className="mb-8 space-y-2 text-left text-sm">
        <li>
          <Link href="/" className="text-[var(--color-accent)] underline underline-offset-4">
            Homepage
          </Link>
        </li>
        <li>
          <Link href="/llms.txt" className="text-[var(--color-accent)] underline underline-offset-4">
            /llms.txt
          </Link>
        </li>
        <li>
          <Link href="/sitemap.xml" className="text-[var(--color-accent)] underline underline-offset-4">
            /sitemap.xml
          </Link>
        </li>
        <li>
          <Link href="/robots.txt" className="text-[var(--color-accent)] underline underline-offset-4">
            /robots.txt
          </Link>
        </li>
      </ul>
      <pre className="mb-10 max-w-lg w-full overflow-x-auto whitespace-pre-wrap rounded-lg border border-[var(--color-border)] bg-[var(--color-paper)] p-4 text-left text-xs text-[var(--color-ink-muted)]">
        {recovery}
      </pre>
      <Link
        href="/"
        className="btn-cta btn-cta-lg inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium">
        Back to homepage
      </Link>
    </main>
  );
}
