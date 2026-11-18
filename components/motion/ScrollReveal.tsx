import type { CSSProperties, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Offsets where the reveal starts within the element's entry into the
   * viewport, in the same units the old time-based API used (0.1 ≈ 10% of
   * the entry range). Use it to stagger siblings that enter together.
   */
  delay?: number;
  /** Reveal each direct child in turn instead of the wrapper as a whole. */
  staggerChildren?: boolean;
};

/**
 * Fades and lifts content in as it scrolls into view.
 *
 * Driven entirely by CSS scroll-driven animations (`animation-timeline: view()`
 * in globals.css), so it ships no JavaScript, runs off the main thread, and
 * never hides server-rendered content waiting for hydration. Browsers without
 * view timelines, and users who prefer reduced motion, see the content as-is.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  staggerChildren = false,
}: ScrollRevealProps) {
  const style = delay ? ({ '--reveal-delay': delay } as CSSProperties) : undefined;

  return (
    <div
      className={cn(staggerChildren ? 'scroll-reveal-stagger' : 'scroll-reveal', className)}
      style={style}>
      {children}
    </div>
  );
}
