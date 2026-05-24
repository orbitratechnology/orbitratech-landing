import About from '@/components/About'
import Contact from '@/components/Contact'
import DeviceShowcase from '@/components/DeviceShowcase'
import Footer from '@/components/Footer'
import Founders from '@/components/Founders'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import { PageMotion } from '@/components/PageMotion'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import { getLandingContent } from '@/lib/cms'

export default async function Home() {
  const { stats, showcaseStats, products } = await getLandingContent()

  return (
    <>
      <PageMotion />
      <Nav />
      <main id='content' tabIndex={-1} className='min-w-0 outline-none'>
        <Hero />
        <DeviceShowcase showcaseStats={showcaseStats} />
        <Process />
        <About stats={stats} />
        <Services />
        <Projects products={products} />
        <Contact />
        <Founders />
      </main>
      <Footer />
    </>
  )
}
