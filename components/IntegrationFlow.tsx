'use client'

import { AnimatedBeam } from '@/components/ui/animated-beam'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { PAYMENT_LOGOS, TECHNOLOGY_LOGOS, type BrandLogo } from '@/lib/brand-logos'
import { cn } from '@/lib/utils'
import {
  Bell,
  CreditCard,
  FolderLock,
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
  { id: 'customers', label: 'Customers', caption: 'On the web and on phones', Icon: Smartphone },
  { id: 'team', label: 'Your team', caption: 'Staff and managers', Icon: Users },
  { id: 'operations', label: 'Operations', caption: 'Orders, stock, delivery', Icon: Package },
]

const OUTPUT_NODES: FlowNode[] = [
  { id: 'payments', label: 'Payments', caption: 'Cards, wallets, PayHere', Icon: CreditCard },
  { id: 'records', label: 'Records', caption: 'Customers and orders, kept safe', Icon: FolderLock },
  { id: 'alerts', label: 'Alerts', caption: 'Emails and order updates', Icon: Bell },
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
        'relative z-10 flex min-w-0 items-center gap-4 rounded-[var(--radius-lg)] bg-[var(--color-paper-3)] px-5 py-4',
        align === 'right' && 'md:flex-row-reverse md:text-right',
      )}>
      <Icon className='size-6 shrink-0 text-[var(--color-accent)]' aria-hidden />
      <div className='min-w-0'>
        <p className='text-[length:var(--text-base)] font-semibold text-[var(--color-ink)]'>{node.label}</p>
        <p className='t-note'>{node.caption}</p>
      </div>
    </div>
  )
}

function LogoRow({ title, logos }: { title: string; logos: BrandLogo[] }) {
  return (
    <div>
      <h3 className='t-label text-[var(--color-ink-muted)]'>{title}</h3>
      <ul className='mt-5 flex flex-wrap items-center gap-x-8 gap-y-6'>
        {logos.map((logo) => (
          <li key={logo.id} title={logo.caption ?? logo.name}>
            {logo.src.endsWith('.png') || logo.src.endsWith('.webp') ? (
              <Image src={logo.src} alt={logo.name} width={96} height={28} className='h-6 w-auto object-contain' />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo.src} alt={logo.name} className='h-6 w-auto max-w-[6.5rem] object-contain' loading='lazy' decoding='async' />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function IntegrationFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  // Each hook is its own statement: React Compiler memoizes array literals,
  // so `[useRef(), useRef()]` would skip the calls after the first render.
  const customersRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const operationsRef = useRef<HTMLDivElement>(null)
  const paymentsRef = useRef<HTMLDivElement>(null)
  const recordsRef = useRef<HTMLDivElement>(null)
  const alertsRef = useRef<HTMLDivElement>(null)
  const inputRefs = [customersRef, teamRef, operationsRef]
  const outputRefs = [paymentsRef, recordsRef, alertsRef]

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  const curvatures = [40, 0, -40]

  return (
    <section id='integration' className='section relative overflow-hidden'>
      <div className='shell'>
        <ScrollReveal className='grid gap-5 lg:grid-cols-2 lg:items-end'>
          <h2 className='t-h2'>Connected to the tools you already use</h2>
          <p className='t-lead text-[var(--color-ink-muted)]'>
            Your website or app sits in the middle. Payments, records and alerts
            plug into it, so the business runs on software, not spreadsheets.
          </p>
        </ScrollReveal>

        <div
          ref={containerRef}
          className='relative mx-auto mt-16 max-w-5xl md:mt-20'>
          <div className='grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-12'>
            <div className='flex flex-col gap-4 md:gap-7'>
              {INPUT_NODES.map((node, index) => (
                <FlowNodeCard key={node.id} nodeRef={inputRefs[index]} node={node} align='left' />
              ))}
            </div>

            <div ref={hubRef} className='relative z-10 order-first flex flex-col items-center py-4 md:order-none md:py-0'>
              <div className='rounded-full bg-[var(--color-accent-soft)] p-2.5'>
                <div className='flex size-24 items-center justify-center rounded-full bg-[var(--color-paper-2)] lg:size-28'>
                  <Image src='/orbitra_logo.png' alt='' width={72} height={72} className='size-16' draggable={false} />
                </div>
              </div>
              <p className='mt-4 max-w-[9rem] text-center font-[family-name:var(--font-display)] text-[length:var(--text-lg)] font-semibold leading-tight'>
                Your website or app
              </p>
            </div>

            <div className='flex flex-col gap-4 md:gap-7'>
              {OUTPUT_NODES.map((node, index) => (
                <FlowNodeCard key={node.id} nodeRef={outputRefs[index]} node={node} align='right' />
              ))}
            </div>
          </div>

          <div className='hidden md:block'>
            {INPUT_NODES.map((node, index) => (
              <AnimatedBeam
                key={`in-${node.id}`}
                containerRef={containerRef}
                fromRef={inputRefs[index]}
                toRef={hubRef}
                curvature={curvatures[index]}
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
                curvature={curvatures[index]}
                reverse
                delay={0.2 + index * 0.35}
                duration={4.5}
                animate={!reducedMotion}
              />
            ))}
          </div>
        </div>

        <div className='mt-20 grid gap-12 rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-7 md:mt-28 md:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
          <LogoRow title='Ways your customers can pay' logos={PAYMENT_LOGOS} />
          <LogoRow title='Platforms we build with (tools, not clients)' logos={TECHNOLOGY_LOGOS} />
        </div>
      </div>
    </section>
  )
}
