type IconProps = { className?: string };

export function WebIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' aria-hidden>
      <rect
        x='8'
        y='14'
        width='48'
        height='36'
        rx='5'
        stroke='currentColor'
        strokeWidth='2'
        fill='var(--color-accent-muted)'
      />
      <path d='M8 22H56' stroke='currentColor' strokeWidth='2' />
      <rect x='16' y='30' width='20' height='5' rx='2.5' fill='currentColor' />
      <path
        d='M42 34L48 40L42 46'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function MobileIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' aria-hidden>
      <rect
        x='20'
        y='8'
        width='24'
        height='48'
        rx='6'
        stroke='currentColor'
        strokeWidth='2'
        fill='var(--color-accent-muted)'
      />
      <rect x='26' y='14' width='12' height='3' rx='1.5' fill='currentColor' />
      <rect x='24' y='22' width='16' height='18' rx='4' fill='currentColor' opacity='0.85' />
    </svg>
  );
}

export function TransformIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' aria-hidden>
      <path
        d='M32 10L52 22V42L32 54L12 42V22L32 10Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinejoin='round'
        fill='var(--color-accent-muted)'
      />
      <path d='M32 10V32M32 32L52 22M32 32L12 22' stroke='currentColor' strokeWidth='2' />
      <circle cx='32' cy='32' r='4' fill='currentColor' />
    </svg>
  );
}

export function CommerceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' aria-hidden>
      <path
        d='M14 22H50L44 44H20L14 22Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinejoin='round'
        fill='var(--color-accent-muted)'
      />
      <circle cx='26' cy='50' r='5' stroke='currentColor' strokeWidth='2' />
      <circle cx='42' cy='50' r='5' stroke='currentColor' strokeWidth='2' />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' aria-hidden>
      <path
        d='M20 42C14.4772 42 10 37.5228 10 32C10 26.4772 14.4772 22 20 22C21.2 22 22.35 22.22 23.4 22.62C25.4 17.5 30.2 14 36 14C43.7 14 50 20.3 50 28C55.5 28.8 60 33.5 60 39C60 45.1 54.6 50 48 50H20Z'
        stroke='currentColor'
        strokeWidth='2'
        fill='var(--color-accent-muted)'
        strokeLinejoin='round'
      />
      <path d='M32 26V38M26 32L32 38L38 32' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
