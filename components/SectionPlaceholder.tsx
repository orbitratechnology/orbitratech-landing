import { cn } from '@/lib/utils'

type SectionPlaceholderProps = {
  minHeight?: string
  className?: string
}

export function SectionPlaceholder({
  minHeight = '12rem',
  className,
}: SectionPlaceholderProps) {
  return (
    <div
      className={cn('border-t border-[var(--color-rule)]', className)}
      style={{ minHeight }}
      aria-hidden
    />
  )
}
