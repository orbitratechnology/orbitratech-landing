import { cn } from '@/lib/utils';

type ScrollProgressProps = {
  className?: string;
};

/**
 * Reading-progress bar linked to the root scroller with a CSS scroll timeline
 * (see `.scroll-progress` in globals.css). Decorative, so it is simply not
 * shown in browsers without scroll-driven animations or for reduced motion.
 */
export function ScrollProgress({ className }: ScrollProgressProps) {
  return <div className={cn('scroll-progress', className)} aria-hidden />;
}
