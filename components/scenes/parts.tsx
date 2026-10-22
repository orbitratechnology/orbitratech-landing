import type { ReactNode, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** A floating piece of interface inside a scene. */
export function Card({
  x,
  y,
  w,
  h,
  r = 14,
  className,
  children,
  tone = 'card',
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  className?: string;
  children?: ReactNode;
  tone?: 'card' | 'tint' | 'dark' | 'note' | 'screen';
}) {
  return (
    <g className={cn('scene-card', className)}>
      <rect x={x} y={y} width={w} height={h} rx={r} className={`sv-${tone}`} />
      {children}
    </g>
  );
}

/** One or more lines of text; `lines` become tspans so long labels wrap. */
export function Text({
  x,
  y,
  lines,
  size = 13,
  weight,
  lineHeight = 1.3,
  className,
  anchor,
}: {
  x: number;
  y: number;
  lines: string | string[];
  size?: number;
  weight?: 400 | 600;
  lineHeight?: number;
  className?: string;
  anchor?: 'start' | 'middle' | 'end';
}) {
  const list = Array.isArray(lines) ? lines : [lines];
  return (
    <text
      x={x}
      y={y}
      className={cn('sv-text', className)}
      style={{ fontSize: size, fontWeight: weight }}
      textAnchor={anchor}>
      {list.map((line, index) => (
        <tspan key={line} x={x} dy={index === 0 ? 0 : size * lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

/** A numbered step marker with its caption, used under each scene part. */
export function Step({
  n,
  x,
  y,
  lines,
  className,
}: {
  n: number;
  x: number;
  y: number;
  lines: string | string[];
  className?: string;
}) {
  return (
    <g className={cn('sv-step', className)}>
      <circle cx={x + 11} cy={y - 5} r={11} className='sv-accent' />
      <text
        x={x + 11}
        y={y - 1}
        textAnchor='middle'
        className='sv-on-accent'
        style={{ fontSize: 12, fontWeight: 600 }}>
        {n}
      </text>
      <Text x={x + 30} y={y} lines={lines} size={15} weight={600} />
    </g>
  );
}

/** A rounded label: a button, a status or a choice inside a screen. */
export function Pill({
  x,
  y,
  w,
  h = 26,
  label,
  tone = 'tint',
  size = 12,
  className,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  tone?: 'tint' | 'accent' | 'success' | 'success-soft' | 'warning-soft' | 'accent-soft' | 'outline' | 'dark';
  size?: number;
  className?: string;
}) {
  return (
    <g className={cn('sv-pill', `sv-pill--${tone}`, className)}>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} />
      <text
        x={x + w / 2}
        y={y + h / 2 + size * 0.36}
        textAnchor='middle'
        style={{ fontSize: size, fontWeight: 600 }}>
        {label}
      </text>
    </g>
  );
}

/** A tick inside a circle, for "done" moments. */
export function Tick({
  cx,
  cy,
  r = 10,
  className,
}: {
  cx: number;
  cy: number;
  r?: number;
  className?: string;
}) {
  return (
    <g className={cn('sv-tick', className)}>
      <circle cx={cx} cy={cy} r={r} className='sv-success' />
      <path
        d={`M${cx - r * 0.42} ${cy + r * 0.02} L${cx - r * 0.1} ${cy + r * 0.34} L${cx + r * 0.45} ${cy - r * 0.32}`}
        className='sv-tick-mark'
      />
    </g>
  );
}

/** The scene canvas. Decorative to assistive tech; the figure caption says what it shows. */
export function Canvas({
  w,
  h,
  children,
  className,
  ...rest
}: { w: number; h: number; children: ReactNode; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      aria-hidden='true'
      focusable='false'
      {...rest}>
      {children}
    </svg>
  );
}
