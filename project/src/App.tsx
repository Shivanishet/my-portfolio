import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />

      <div className="relative min-h-screen bg-space-900 text-slate-100 selection:bg-neon-cyan/30 selection:text-white">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple origin-left z-50"
          style={{ scaleX }}
        />

        {/* Ambient background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-neon-purple/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[35rem] w-[35rem] rounded-full bg-neon-cyan/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-[120px]" />
        </div>

        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>

            <footer className="border-t border-white/5 py-8 text-center bg-space-950/20 backdrop-blur-sm">
              <p className="font-mono text-xs text-slate-500">
                © {new Date().getFullYear()} Shivani Shet — Built with React, Three.js & Framer Motion
              </p>
            </footer>
          </>
        )}
      </div>
    </>
  );
}

export default App;
