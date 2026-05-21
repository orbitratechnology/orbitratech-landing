import React from 'react';

import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <div className='pointer-events-none absolute inset-0 size-full'>
      {path ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 size-full'
          aria-hidden>
          <circle
            className='fill-none stroke-[var(--color-rule)] stroke-1 opacity-70'
            cx='50%'
            cy='50%'
            r={radius}
          />
        </svg>
      ) : null}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            key={index}
            style={
              {
                '--duration': calculatedDuration,
                '--radius': radius,
                '--angle': angle,
                '--icon-size': `${iconSize}px`,
                width: 'var(--icon-size)',
                height: 'var(--icon-size)',
                animationDelay: delay ? `${delay}s` : undefined,
              } as React.CSSProperties
            }
            className={cn(
              'animate-orbit absolute left-[calc(50%-var(--icon-size)/2)] top-[calc(50%-var(--icon-size)/2)] flex transform-gpu items-center justify-center rounded-full',
              reverse && '[animation-direction:reverse]',
              className,
            )}
            {...props}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
