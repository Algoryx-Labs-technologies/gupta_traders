import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { About } from '../components/About';
import { VisionMission } from '../components/VisionMission';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Stats } from '../components/Stats';
import { Projects } from '../components/Projects';
import { Clients } from '../components/Clients';
import { Brands } from '../components/Brands';
import { Process } from '../components/Process';
import { NationWideTrust } from '../components/NationWideTrust';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div id="top">
      <Hero />
      <div
        aria-hidden
        className="h-16 -mt-16 relative z-20 bg-gradient-to-b from-transparent to-white pointer-events-none"
      />
      <main className="site-light bg-white text-ink-900 relative z-10">
        <TrustBar />
        <About />
        <VisionMission />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Projects />
        <Clients />
        <Brands />
        <Process />
        <NationWideTrust />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
