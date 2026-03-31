import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  // ✅ Lenis smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    // make Lenis globally accessible for Navbar
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Projects />
      </section>

      <section id="experience">
        <Experiences />
      </section>

      <Testimonial />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;