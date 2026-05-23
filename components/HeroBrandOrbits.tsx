'use client';

import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
  FaAndroid,
  FaApple,
  FaDesktop,
  FaGlobe,
  FaMobileScreenButton,
  FaTabletScreenButton,
} from 'react-icons/fa6';
import { SiAppstore, SiGoogle, SiGoogleplay } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { OrbitingCircles } from './ui/orbiting-circles';

const OUTER_ORBIT_ICONS = [
  { id: 'android', label: 'Android', Icon: FaAndroid, color: '#3DDC84' },
  { id: 'ios', label: 'iOS', Icon: FaApple, color: 'var(--color-ink)' },
  { id: 'appstore', label: 'App Store', Icon: SiAppstore, color: 'var(--color-accent)' },
  { id: 'playstore', label: 'Play Store', Icon: SiGoogleplay, color: '#00A173' },
  { id: 'google', label: 'Google', Icon: SiGoogle, color: '#4285F4' },
] as const;

const INNER_ORBIT_ICONS = [
  { id: 'website', label: 'Website', Icon: FaGlobe, color: 'var(--color-accent)' },
  { id: 'mobile', label: 'Mobile', Icon: FaMobileScreenButton, color: 'var(--color-accent-strong)' },
  { id: 'desktop', label: 'Desktop', Icon: FaDesktop, color: 'var(--color-ink-muted)' },
  { id: 'ipad', label: 'iPad', Icon: FaTabletScreenButton, color: '#FB923C' },
] as const;

function OrbitPlatformIcon({
  Icon,
  color,
  label,
}: {
  Icon: IconType;
  color: string;
  label: string;
}) {
  return (
    <div
      className='flex size-full items-center justify-center'
      title={label}>
      <div className='flex size-full items-center justify-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_4px_16px_var(--color-shadow-soft)]'>
        <Icon
          className='size-[58%]'
          style={{ color }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export function HeroBrandOrbits({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative mx-auto aspect-square w-full max-w-[520px] overflow-visible lg:ml-auto',
        className,
      )}>
      <div className='absolute inset-0 overflow-visible'>
        <OrbitingCircles
          radius={158}
          duration={24}
          iconSize={50}
          path>
          {OUTER_ORBIT_ICONS.map(({ id, Icon, color, label }) => (
            <OrbitPlatformIcon
              key={id}
              Icon={Icon}
              color={color}
              label={label}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          radius={104}
          duration={18}
          iconSize={44}
          reverse
          speed={1.15}
          path>
          {INNER_ORBIT_ICONS.map(({ id, Icon, color, label }) => (
            <OrbitPlatformIcon
              key={id}
              Icon={Icon}
              color={color}
              label={label}
            />
          ))}
        </OrbitingCircles>
      </div>

      <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center'>
        <div
          className='absolute size-[52%] rounded-full'
          style={{
            background:
              'radial-gradient(circle, var(--color-accent-muted) 0%, transparent 68%)',
          }}
          aria-hidden
        />
        <div className='relative flex size-[5.5rem] items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_4px_20px_var(--color-shadow-soft)] sm:size-[6.5rem]'>
          <Image
            src='/orbitra_logo.png'
            alt=''
            width={96}
            height={96}
            className='size-[68%] object-contain'
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
