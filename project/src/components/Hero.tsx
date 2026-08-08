import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Linkedin, FileText } from 'lucide-react';
import HeroScene from './HeroScene';
import resumeUrl from '../resume/shivani_RESUME.pdf';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Gradient overlays for depth + readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-space-900/40 via-transparent to-space-900" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,15,25,0.65)_85%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl flex flex-col items-center">
          <motion.p
            variants={item}
            className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-neon-cyan/80 animate-pulse-slow"
          >
            Welcome to my universe
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-tight sm:text-7xl md:text-8xl text-white"
          >
            <span className="gradient-text">Shivani Shet</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-6 font-display text-lg font-semibold text-neon-cyan sm:text-xl md:text-2xl"
          >
            Full-Stack Developer | AI Enthusiast
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-sm font-medium text-slate-300 sm:text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Building intelligent web applications with modern technologies, AI, and scalable backend systems while continuously solving real-world problems through software engineering.
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3.5 font-medium text-space-900 shadow-neon-cyan transition-transform hover:scale-105"
            >
              <span className="relative z-10">Explore Projects</span>
            </a>
            
            <a
              href={resumeUrl}
              download="Shivani_Shet_Resume.pdf"
              className="glass flex items-center gap-2 rounded-full px-8 py-3.5 font-medium text-slate-100 transition-all hover:border-neon-cyan/60 hover:shadow-neon-cyan hover:bg-neon-cyan/5"
            >
              <FileText size={16} /> Download Resume
            </a>

            <a
              href="#contact"
              className="glass rounded-full px-8 py-3.5 font-medium text-slate-100 transition-all hover:border-neon-purple/60 hover:shadow-neon-purple hover:bg-neon-purple/5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Explore More GitHub Repos Button */}
          <motion.div variants={item} className="mt-4">
            <a
              href="https://github.com/Shivanishet?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-neon-cyan transition-colors"
            >
              Explore More Projects <Github size={14} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="mt-10 flex items-center justify-center gap-6 text-slate-400">
            <a
              href="https://github.com/Shivanishet"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neon-cyan"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivani-shet-147a73339"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neon-purple"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:shivanishet035@gmail.com"
              className="transition-colors hover:text-neon-cyan"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
