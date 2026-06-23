'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { OrbitingCircles } from './ui/orbiting-circles';

type OrbitPlatform = {
  id: string;
  label: string;
  src: string;
};

const OUTER_ORBIT_PLATFORMS: OrbitPlatform[] = [
  { id: 'android', label: 'Android', src: '/platforms/android.png' },
  { id: 'apple', label: 'Apple', src: '/platforms/apple-logo.png' },
  { id: 'google', label: 'Google', src: '/platforms/google.png' },
  { id: 'app-store', label: 'App Store', src: '/platforms/app-store.png' },
  { id: 'google-play', label: 'Google Play', src: '/platforms/google-play.png' },
];

const INNER_ORBIT_PLATFORMS: OrbitPlatform[] = [
  { id: 'iphone', label: 'iPhone', src: '/platforms/iphone.png' },
  { id: 'desktop', label: 'Desktop', src: '/platforms/computer.png' },
  { id: 'ipad', label: 'iPad', src: '/platforms/ipad.png' },
];

function OrbitPlatformLogo({ label, src }: OrbitPlatform) {
  return (
    <div
      className='flex size-full items-center justify-center'
      title={label}>
      <Image
        src={src}
        alt={label}
        width={56}
        height={56}
        className='size-[88%] object-contain'
        draggable={false}
      />
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
          iconSize={52}
          path>
          {OUTER_ORBIT_PLATFORMS.map((platform) => (
            <OrbitPlatformLogo key={platform.id} {...platform} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          radius={104}
          duration={18}
          iconSize={48}
          reverse
          speed={1.15}
          path>
          {INNER_ORBIT_PLATFORMS.map((platform) => (
            <OrbitPlatformLogo key={platform.id} {...platform} />
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
        <div className='relative flex size-[5.5rem] items-center justify-center sm:size-[6.5rem]'>
          <Image
            src='/orbitra_logo.png'
            alt=''
            width={96}
            height={96}
            className='size-full object-contain'
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
