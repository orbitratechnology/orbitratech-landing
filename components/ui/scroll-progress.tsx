'use client';

import { motion, useScroll, type MotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-[var(--color-accent)] via-[var(--color-accent-strong)] to-[var(--color-success)]',
        className,
      )}
      style={{ scaleX: scrollYProgress }}
      {...props}
    />
  );
}
