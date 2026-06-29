import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Results from "./components/sections/Results";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Cases from "./components/sections/Cases";
import AISection from "./components/sections/AISection";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import Resources from "./components/sections/Resources";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/sections/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-dark text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Results />
      <Services />
      <About />
      <Cases />
      <AISection />
      <Process />
      <Testimonials />
      <Resources />
      <CTASection />
      <Footer />
    </main>
  );
}
