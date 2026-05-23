import About from '@/components/About';
import Contact from '@/components/Contact';
import DeviceShowcase from '@/components/DeviceShowcase';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import { PageMotion } from '@/components/PageMotion';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <PageMotion />
      <Nav />
      <main className='min-w-0'>
        <Hero />
        <DeviceShowcase />
        <Process />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Founders />
      </main>
      <Footer />
    </>
  );
}
