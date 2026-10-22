'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Canvas, Card } from '../parts';
import { stateStyle, StatefulScene, type SceneBuild, type SceneState } from '../scene-shell';

export const SCREEN = { x: 100, y: 14, w: 200, h: 414, pad: 16 } as const;
/** Left edge of the phone's content area. */
export const SX = SCREEN.x + SCREEN.pad;
/** Width of the phone's content area. */
export const SW = SCREEN.w - SCREEN.pad * 2;

export type ProductScreen = {
  /** Short name shown in the legend under the phone. */
  short: string;
  /** What this screen shows, for screen readers. */
  label: string;
  /** The screen's own entrance. */
  intro?: SceneBuild;
  /** The screen's content, drawn over the phone. */
  render: () => ReactNode;
};

export type ProductSceneProps = {
  className?: string;
  /** `loop` walks through every screen; `controlled` shows `active` and
   * animates changes; `still` draws `active` alone with no motion. */
  mode?: 'loop' | 'controlled' | 'still';
  active?: number;
};

const LEGEND_Y = 448;

function legendIntro(index: number): SceneBuild {
  return (tl, q) => {
    tl.to(q('.pf-legend'), { opacity: 0.5, duration: 0.25 }, '<');
    tl.to(q(`.pf-legend-${index}`), { opacity: 1, duration: 0.25 }, '<');
    tl.to(q('.pf-legend-on'), { autoAlpha: 0, duration: 0.25 }, '<');
    tl.to(q(`.pf-legend-on-${index}`), { autoAlpha: 1, duration: 0.25 }, '<');
  };
}

/**
 * A product drawn as its phone screens. The phone stays put; each screen is a
 * group that crossfades in, and the legend underneath names the screen.
 */
export function ProductFrame({
  screens,
  caption,
  className,
  mode = 'controlled',
  active = 0,
  dark = false,
}: ProductSceneProps & {
  screens: ProductScreen[];
  caption: string;
  dark?: boolean;
}) {
  const initial = mode === 'loop' ? 0 : active;

  // A still: one screen, no legend, no motion. Used for small previews.
  if (mode === 'still') {
    const screen = screens[active] ?? screens[0];
    return (
      <figure className={cn('scene', className)}>
        <Canvas w={400} h={440}>
          <Card x={SCREEN.x} y={SCREEN.y} w={SCREEN.w} h={SCREEN.h} r={30} tone={dark ? 'screen' : 'card'} />
          {screen.render()}
        </Canvas>
        <figcaption className='sr-only'>{screen.label}</figcaption>
      </figure>
    );
  }
  const states: SceneState[] = screens.map((screen, index) => ({
    label: screen.label,
    intro: (tl, q) => {
      legendIntro(index)(tl, q);
      screen.intro?.(tl, q);
    },
  }));
  const step = 400 / screens.length;

  return (
    <StatefulScene
      states={states}
      active={active}
      loop={mode === 'loop'}
      caption={caption}
      className={className}
      hold={2.4}>
      <Canvas w={400} h={480}>
        <Card x={SCREEN.x} y={SCREEN.y} w={SCREEN.w} h={SCREEN.h} r={30} tone={dark ? 'screen' : 'card'} />
        {screens.map((screen, index) => (
          <g key={screen.short} data-state={index} style={stateStyle(index, initial)}>
            {screen.render()}
          </g>
        ))}
        <g>
          {screens.map((screen, index) => {
            const x = index * step + 4;
            const w = step - 8;
            return (
              <g
                key={screen.short}
                className={`pf-legend pf-legend-${index}`}
                style={{ opacity: index === initial ? 1 : 0.5 }}>
                <rect x={x} y={LEGEND_Y} width={w} height={30} rx={15} className='sv-tint' />
                <text
                  x={x + w / 2}
                  y={LEGEND_Y + 19.5}
                  textAnchor='middle'
                  className='sv-text'
                  style={{ fontSize: 12.5, fontWeight: 600 }}>
                  {screen.short}
                </text>
                <g
                  className={`pf-legend-on pf-legend-on-${index}`}
                  style={index === initial ? undefined : { opacity: 0, visibility: 'hidden' }}>
                  <rect x={x} y={LEGEND_Y} width={w} height={30} rx={15} className='sv-accent-2' />
                  <text
                    x={x + w / 2}
                    y={LEGEND_Y + 19.5}
                    textAnchor='middle'
                    className='sv-on-accent'
                    style={{ fontSize: 12.5, fontWeight: 600 }}>
                    {screen.short}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </Canvas>
    </StatefulScene>
  );
}
