import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Vision from "./sections/Vision";
import PhotoCarousel from "./sections/PhotoCarousel";
import Features from "./sections/Features";
import Deploy from "./sections/Deploy";
import Team from "./sections/Team";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-medium text-neutral-900 bg-[#F5F2EB]">

      {/* Loader now overlays instead of blocking */}
      <Loader />

      {/* <Navbar /> */}

      <div className="relative z-10 bg-grid-pattern mb-[100vh]">
        <Hero />
        <Showcase />
        <Vision />
      </div>

      <div className="fixed inset-0 z-0 bg-[#F5F2EB]">
        <PhotoCarousel />
      </div>

      <div className="relative z-10 bg-grid-pattern">
        <Features />
        <Deploy />
        <Team />
        <Footer />
      </div>

    </div>
  );
}

export default App;