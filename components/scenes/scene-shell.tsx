'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

/** Dims the legend at the start of a loop; `legendStep` lights each step. */
export function legendReset(tl: gsap.core.Timeline, q: SceneQuery) {
  tl.set(q('.s-legend-fill'), { drawSVG: '0% 0%' }, 0.001);
  tl.set(q('.s-legend-step'), { opacity: 0.35 }, 0.001);
}

export function legendStep(
  tl: gsap.core.Timeline,
  q: SceneQuery,
  index: number,
  position: gsap.Position,
) {
  tl.to(q(`.s-legend-step-${index}`), { opacity: 1, duration: 0.3 }, position);
  if (index > 0) {
    tl.to(
      q('.s-legend-fill'),
      { drawSVG: `0% ${index * 50}%`, duration: 0.5, ease: 'power2.out' },
      position,
    );
  }
}

/** A soft ring that grows from a point, to show a tap. */
export function tap(tl: gsap.core.Timeline, ring: Element | undefined, position: gsap.Position) {
  if (!ring) return;
  tl.fromTo(
    ring,
    { autoAlpha: 0.55, scale: 0.2, transformOrigin: '50% 50%' },
    { autoAlpha: 0, scale: 1.6, duration: 0.6, ease: 'power2.out', immediateRender: false },
    position,
  );
}

/** Moves a marker along a path element, start to end. */
export function travel(
  tl: gsap.core.Timeline,
  dot: Element | undefined,
  path: Element | undefined,
  position: gsap.Position,
  duration = 0.9,
) {
  if (!dot || !path) return;
  tl.set(dot, { autoAlpha: 1 }, position);
  tl.to(
    dot,
    {
      duration,
      ease: 'power1.inOut',
      motionPath: { path: path as SVGPathElement, align: path as SVGPathElement, alignOrigin: [0.5, 0.5] },
    },
    position,
  );
  tl.to(dot, { autoAlpha: 0, duration: 0.2 }, `>-0.05`);
}

export type SceneQuery = ReturnType<typeof gsap.utils.selector>;
export type SceneBuild = (tl: gsap.core.Timeline, q: SceneQuery) => void;

export type SceneState = {
  /** Short name for the screen, read by screen readers. */
  label: string;
  /** Adds this screen's entrance to a timeline. Use from-tweens so the
   * markup itself is the finished frame. */
  intro?: SceneBuild;
};

type ShellProps = {
  children: ReactNode;
  /** What the picture shows, in one sentence, for screen readers. */
  caption: string;
  className?: string;
};

/**
 * Plays a timeline only while the scene is on screen and the visitor has not
 * paused it. Under reduced motion nothing is built and the markup, which is
 * always the finished frame, is what people see.
 */
function useScenePlayback(enabled: boolean) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const inViewRef = useRef(false);
  const enabledRef = useRef(enabled);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [animated, setAnimated] = useState(false);

  const sync = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (inViewRef.current && enabledRef.current && !pausedRef.current) tl.play();
    else tl.pause();
  };

  useEffect(() => {
    enabledRef.current = enabled;
    pausedRef.current = paused;
    sync();
  });

  const attach = (tl: gsap.core.Timeline, trigger: Element) => {
    tlRef.current = tl;
    setAnimated(true);
    const st = ScrollTrigger.create({
      trigger,
      start: 'top 92%',
      end: 'bottom 8%',
      onToggle: (self) => {
        inViewRef.current = self.isActive;
        sync();
      },
    });
    inViewRef.current = st.isActive;
    sync();
    return () => {
      st.kill();
      tl.kill();
      tlRef.current = null;
      setAnimated(false);
    };
  };

  return { attach, paused, setPaused, animated };
}

function SceneToggle({
  paused,
  onToggle,
}: {
  paused: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type='button'
      className='scene-toggle'
      onClick={onToggle}
      aria-label={paused ? 'Play animation' : 'Pause animation'}>
      {paused ? (
        <Play className='size-4' aria-hidden />
      ) : (
        <Pause className='size-4' aria-hidden />
      )}
    </button>
  );
}

/** A looping scene. The timeline should place a `hold` label where every
 * part is in view; playback starts there, so the first frame is complete. */
export function SceneShell({
  children,
  caption,
  className,
  build,
  active = true,
}: ShellProps & { build: SceneBuild; active?: boolean }) {
  const root = useRef<HTMLElement>(null);
  const { attach, paused, setPaused, animated } = useScenePlayback(active);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.3 });
        build(tl, gsap.utils.selector(el));
        if (tl.labels.hold !== undefined) tl.seek('hold', false);
        return attach(tl, el);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <figure ref={root} className={cn('scene', className)}>
      {children}
      <figcaption className='sr-only'>{caption}</figcaption>
      {animated ? (
        <SceneToggle paused={paused} onToggle={() => setPaused((p) => !p)} />
      ) : null}
    </figure>
  );
}

/**
 * A scene made of screens, each a `[data-state="n"]` group. In `loop` mode it
 * walks through the screens on its own; otherwise it shows `active` and plays
 * that screen's entrance whenever `active` changes.
 */
export function StatefulScene({
  children,
  caption,
  className,
  states,
  active = 0,
  loop = false,
  hold = 2.6,
}: ShellProps & {
  states: SceneState[];
  active?: number;
  loop?: boolean;
  hold?: number;
}) {
  const root = useRef<HTMLElement>(null);
  const { attach, paused, setPaused, animated } = useScenePlayback(true);
  const switchRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || !loop) return;
      const q = gsap.utils.selector(el);
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const groups = q('[data-state]');
        const tl = gsap.timeline({ paused: true, repeat: -1 });
        states.forEach((state, index) => {
          const group = groups[index];
          tl.addLabel(`state-${index}`);
          tl.to(
            groups.filter((g) => g !== group),
            { autoAlpha: 0, duration: 0.22, ease: 'power1.in' },
            `state-${index}`,
          );
          tl.to(group, { autoAlpha: 1, duration: 0.3, ease: 'power1.out' }, `state-${index}+=0.2`);
          state.intro?.(tl, q);
          if (index === 0) tl.addLabel('hold');
          tl.to({}, { duration: hold });
        });
        tl.to(groups, { autoAlpha: 0, duration: 0.4, ease: 'power1.in' });
        tl.seek('hold', false);
        return attach(tl, el);
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [loop] },
  );

  // Controlled mode: crossfade to the active screen and play its entrance.
  useGSAP(
    () => {
      const el = root.current;
      if (!el || loop) return;
      const q = gsap.utils.selector(el);
      const groups = q('[data-state]');
      const target = groups[active];
      if (!target) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      switchRef.current?.progress(1).kill();
      if (reduced) {
        gsap.set(groups, { autoAlpha: 0 });
        gsap.set(target, { autoAlpha: 1 });
        return;
      }
      const tl = gsap.timeline();
      tl.to(groups.filter((g) => g !== target), { autoAlpha: 0, duration: 0.22, ease: 'power1.in' });
      tl.to(target, { autoAlpha: 1, duration: 0.3, ease: 'power1.out' }, '>-0.02');
      states[active]?.intro?.(tl, q);
      switchRef.current = tl;
    },
    { scope: root, dependencies: [active, loop] },
  );

  return (
    <figure ref={root} className={cn('scene', className)}>
      {children}
      <figcaption className='sr-only'>
        {caption}
        {!loop && states[active] ? ` Showing: ${states[active].label}.` : null}
      </figcaption>
      {loop && animated ? (
        <SceneToggle paused={paused} onToggle={() => setPaused((p) => !p)} />
      ) : null}
    </figure>
  );
}

/** Initial style for a screen group so the server render shows one screen. */
export function stateStyle(index: number, initial: number) {
  return index === initial
    ? undefined
    : ({ opacity: 0, visibility: 'hidden' } as const);
}
