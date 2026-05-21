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
  { id: 'ios', label: 'iOS', Icon: FaApple, color: '#F5F5F7' },
  { id: 'appstore', label: 'App Store', Icon: SiAppstore, color: '#0D96FF' },
  { id: 'playstore', label: 'Play Store', Icon: SiGoogleplay, color: '#00A173' },
  { id: 'google', label: 'Google', Icon: SiGoogle, color: '#4285F4' },
] as const;

const INNER_ORBIT_ICONS = [
  { id: 'website', label: 'Website', Icon: FaGlobe, color: '#60A5FA' },
  { id: 'mobile', label: 'Mobile', Icon: FaMobileScreenButton, color: '#818CF8' },
  { id: 'desktop', label: 'Desktop', Icon: FaDesktop, color: '#A78BFA' },
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
      <div className='flex size-full items-center justify-center rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)]/95 shadow-[0_8px_28px_oklch(0_0_0_/_0.35)] backdrop-blur-sm'>
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
          className='absolute size-[38%] rounded-full bg-[var(--color-accent-muted)] blur-3xl'
          aria-hidden
        />
        <Image
          src='/orbitra_logo.png'
          alt=''
          width={96}
          height={96}
          className='relative size-20 sm:size-24'
          aria-hidden
        />
      </div>
    </div>
  );
}
