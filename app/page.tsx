import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-200'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Founders />
      <Footer />
    </div>
  );
}
