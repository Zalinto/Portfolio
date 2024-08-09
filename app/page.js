"use client";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSections";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image( {id} ) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // console.log(`/${id}.jpeg`);
  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpeg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* {[1, 1, 1, 1, 1].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
 */}

      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}