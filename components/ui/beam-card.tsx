'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { BorderBeam } from './border-beam';

type BeamCardProps = {
  children: ReactNode;
  className?: string;
  beamDelay?: number;
  beamSize?: number;
};

export function BeamCard({
  children,
  className,
  beamDelay = 0,
  beamSize = 100,
}: BeamCardProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)}>
      {children}
      <BorderBeam
        size={beamSize}
        duration={10}
        delay={beamDelay}
        borderWidth={1}
        colorFrom='var(--color-accent-muted)'
        colorTo='var(--color-accent)'
      />
    </div>
  );
}
