import type { Metadata } from 'next'

import About from '@/components/About'
import ClientWork from '@/components/ClientWork'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import IntegrationFlow from '@/components/IntegrationFlow'
import Nav from '@/components/Nav'
import Pricing from '@/components/Pricing'
import Products from '@/components/Products'
import Services from '@/components/Services'

// Self-canonical for the homepage only; child routes set their own.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
        <Hero />
        <Services />
        <ClientWork />
        <Products />
        <Pricing />
        <IntegrationFlow />
        <About />
        <FAQ />
        <div id='contact' className='scroll-mt-20'>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
