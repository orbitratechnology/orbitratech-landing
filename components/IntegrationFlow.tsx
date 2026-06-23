'use client'

import { AnimatedBeam } from '@/components/ui/animated-beam'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { cn } from '@/lib/utils'
import {
  Bell,
  CreditCard,
  Database,
  Package,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useSyncExternalStore } from 'react'

type FlowNode = {
  id: string
  label: string
  caption: string
  Icon: LucideIcon
}

const INPUT_NODES: FlowNode[] = [
  {
    id: 'customers',
    label: 'Customers',
    caption: 'Web & mobile buyers',
    Icon: Smartphone,
  },
  {
    id: 'team',
    label: 'Your team',
    caption: 'Staff & admin users',
    Icon: Users,
  },
  {
    id: 'operations',
    label: 'Operations',
    caption: 'Orders, stock & fulfilment',
    Icon: Package,
  },
]

const OUTPUT_NODES: FlowNode[] = [
  {
    id: 'payments',
    label: 'Payments',
    caption: 'Cards, wallets & local gateways',
    Icon: CreditCard,
  },
  {
    id: 'database',
    label: 'Database',
    caption: 'Secure customer & order data',
    Icon: Database,
  },
  {
    id: 'alerts',
    label: 'Alerts',
    caption: 'Email & order notifications',
    Icon: Bell,
  },
]

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function FlowNodeCard({
  nodeRef,
  node,
  align,
}: {
  nodeRef?: React.RefObject<HTMLDivElement | null>
  node: FlowNode
  align: 'left' | 'right'
}) {
  const { Icon } = node

  return (
    <div
      ref={nodeRef}
      className={cn(
        'integration-node relative z-10 flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-3 py-2.5 shadow-[0_4px_20px_var(--color-shadow-soft)] sm:gap-3.5 sm:px-4 sm:py-3',
        align === 'right' && 'sm:flex-row-reverse sm:text-right',
      )}>
      <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] sm:size-11'>
        <Icon
          className='size-[1.125rem] text-[var(--color-accent)] sm:size-5'
          aria-hidden
        />
      </div>
      <div className='min-w-0'>
        <p className='font-[family-name:var(--font-display)] text-[length:var(--text-sm)] font-semibold text-[var(--color-ink)]'>
          {node.label}
        </p>
        <p className='mt-0.5 text-[length:var(--text-xs)] leading-snug text-[var(--color-ink-muted)] sm:text-[length:var(--text-sm)]'>
          {node.caption}
        </p>
      </div>
    </div>
  )
}

export default function IntegrationFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const inputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const outputRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  const inputCurvatures = [40, 0, -40]
  const outputCurvatures = [40, 0, -40]

  return (
    <section
      id='integration'
      className='deferred-section relative overflow-hidden border-t border-[var(--color-rule)] py-20 md:py-28'>
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/25 to-transparent'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 opacity-40'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklch, var(--color-surface-tint) 65%, transparent), transparent 72%)',
        }}
      />

      <div className='container relative mx-auto max-w-6xl px-6'>
        <ScrollReveal className='mx-auto max-w-2xl text-center'>
          <p className='section-eyebrow mb-3'>How it connects</p>
          <h2 className='font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--color-ink)] [overflow-wrap:anywhere] md:text-[length:var(--text-display-s)]'>
            One platform. Every system wired in.
          </h2>
          <p className='mt-4 text-[length:var(--text-lg)] leading-relaxed text-[var(--color-ink-muted)]'>
            We build your website or app as the hub — then connect payments,
            data, and notifications so your business runs on software,
            not spreadsheets.
          </p>
        </ScrollReveal>

        <div
          ref={containerRef}
          className='relative mx-auto mt-14 hidden min-h-[22rem] max-w-5xl md:mt-16 md:block md:min-h-[26rem] lg:min-h-[28rem]'>
          <div className='grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 lg:gap-10'>
            <div className='flex flex-col justify-center gap-6 lg:gap-8'>
              {INPUT_NODES.map((node, index) => (
                <FlowNodeCard
                  key={node.id}
                  nodeRef={inputRefs[index]}
                  node={node}
                  align='left'
                />
              ))}
            </div>

            <div
              ref={hubRef}
              className='relative z-10 flex flex-col items-center justify-center px-2'>
              <div className='flex size-[5.5rem] items-center justify-center rounded-3xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_8px_32px_var(--color-shadow-soft)] ring-4 ring-[var(--color-paper)] lg:size-24'>
                <Image
                  src='/orbitra_logo.png'
                  alt='Orbitra Tech'
                  width={72}
                  height={72}
                  className='size-14 lg:size-16'
                  draggable={false}
                />
              </div>
              <p className='mt-3 max-w-[8rem] text-center font-[family-name:var(--font-display)] text-[length:var(--text-sm)] font-semibold text-[var(--color-ink)]'>
                Your digital product
              </p>
            </div>

            <div className='flex flex-col justify-center gap-5 lg:gap-6'>
              {OUTPUT_NODES.map((node, index) => (
                <FlowNodeCard
                  key={node.id}
                  nodeRef={outputRefs[index]}
                  node={node}
                  align='right'
                />
              ))}
            </div>
          </div>

          {INPUT_NODES.map((node, index) => (
            <AnimatedBeam
              key={`in-${node.id}`}
              containerRef={containerRef}
              fromRef={inputRefs[index]}
              toRef={hubRef}
              curvature={inputCurvatures[index]}
              delay={index * 0.35}
              duration={4.5}
              animate={!reducedMotion}
            />
          ))}

          {OUTPUT_NODES.map((node, index) => (
            <AnimatedBeam
              key={`out-${node.id}`}
              containerRef={containerRef}
              fromRef={hubRef}
              toRef={outputRefs[index]}
              curvature={outputCurvatures[index]}
              reverse
              delay={0.2 + index * 0.35}
              duration={4.5}
              animate={!reducedMotion}
            />
          ))}
        </div>

        <div className='mt-12 space-y-8 md:hidden'>
          <div className='flex flex-col items-center'>
            <div className='flex size-20 items-center justify-center rounded-3xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[0_8px_24px_var(--color-shadow-soft)]'>
              <Image
                src='/orbitra_logo.png'
                alt='Orbitra Tech'
                width={56}
                height={56}
                className='size-14'
                draggable={false}
              />
            </div>
            <p className='mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-base)] font-semibold text-[var(--color-ink)]'>
              Your digital product
            </p>
          </div>

          <div className='grid min-w-0 grid-cols-1 gap-3'>
            <p className='text-center text-[length:var(--text-xs)] font-semibold uppercase tracking-wide text-[var(--color-ink-subtle)]'>
              Connected touchpoints
            </p>
            {[...INPUT_NODES, ...OUTPUT_NODES].map((node) => (
              <FlowNodeCard key={node.id} node={node} align='left' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
