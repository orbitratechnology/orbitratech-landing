import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense, type ReactNode } from 'react'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import { SectionPlaceholder } from '@/components/SectionPlaceholder'

const Technologies = dynamic(() => import('@/components/Technologies'), {
  loading: () => <SectionPlaceholder minHeight='14rem' />,
})

const IntegrationFlow = dynamic(() => import('@/components/IntegrationFlow'), {
  loading: () => <SectionPlaceholder minHeight='16rem' />,
})

const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <SectionPlaceholder minHeight='18rem' />,
})

const About = dynamic(() => import('@/components/About'), {
  loading: () => <SectionPlaceholder minHeight='22rem' />,
})

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <SectionPlaceholder minHeight='24rem' className='deferred-section--tall' />,
})

const ClientWork = dynamic(() => import('@/components/ClientWork'), {
  loading: () => <SectionPlaceholder minHeight='28rem' />,
})

const Products = dynamic(() => import('@/components/Products'), {
  loading: () => <SectionPlaceholder minHeight='20rem' />,
})

const Payments = dynamic(() => import('@/components/Payments'), {
  loading: () => <SectionPlaceholder minHeight='14rem' />,
})

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <SectionPlaceholder minHeight='24rem' />,
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <SectionPlaceholder minHeight='20rem' />,
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <SectionPlaceholder minHeight='20rem' />,
})

const Founders = dynamic(() => import('@/components/Founders'), {
  loading: () => <SectionPlaceholder minHeight='18rem' />,
})

const PageMotion = dynamic(
  () => import('@/components/PageMotion').then((mod) => mod.PageMotion),
  { loading: () => null },
)

function DeferredSection({
  fallback,
  children,
}: {
  fallback: ReactNode
  children: ReactNode
}) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}

// Self-canonical for the homepage only; child routes set their own.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <DeferredSection fallback={null}>
        <PageMotion />
      </DeferredSection>
      <Nav />
      <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
        <Hero />
        <DeferredSection fallback={<SectionPlaceholder minHeight='24rem' className='deferred-section--tall' />}>
          <Services />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='28rem' />}>
          <ClientWork />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='20rem' />}>
          <Products />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='18rem' />}>
          <Process />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='24rem' />}>
          <Pricing />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='16rem' />}>
          <IntegrationFlow />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='14rem' />}>
          <Technologies />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='14rem' />}>
          <Payments />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='20rem' />}>
          <FAQ />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='22rem' />}>
          <About />
        </DeferredSection>
        <DeferredSection fallback={<SectionPlaceholder minHeight='18rem' />}>
          <Founders />
        </DeferredSection>
        <div id='contact' className='scroll-mt-28'>
          <DeferredSection fallback={<SectionPlaceholder minHeight='20rem' />}>
            <Contact />
          </DeferredSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
