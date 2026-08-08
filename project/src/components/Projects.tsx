import { motion } from 'framer-motion';
import ProjectCard, { type Project } from './ProjectCard';
import { Wallet, Languages, ShieldAlert } from 'lucide-react';

const featuredProjects: Project[] = [
  {
    title: 'FinSight – AI-Powered Personal Finance Platform',
    category: 'Full-Stack Web App / AI',
    stack: 'React • TypeScript • Vite • Tailwind CSS • Supabase',
    description: 'Developed a full-stack AI-powered personal finance platform that helps users manage income, expenses, and budgets with secure authentication and cloud synchronization. Implemented AI-assisted expense categorization, AI-generated financial insights, and interactive analytics dashboards with a responsive user interface.',
    icon: Wallet,
    accent: 'cyan',
    githubLink: 'https://github.com/Shivanishet/FinSight',
    // Live deployed link (update this URL if your deployment domain changes)
    liveLink: 'https://fin-sight-rust.vercel.app',
  },
  {
    title: 'Voice Translator – AI Real-Time Speech Translation',
    category: 'AI / Speech Processing',
    stack: 'React • FastAPI • Whisper • Gemini AI • Firebase • Google TTS',
    description: 'Built a real-time multilingual speech translation platform that records voice in the browser, detects spoken language, translates speech using AI, converts translated text back to speech, and stores translation history in the cloud.',
    icon: Languages,
    accent: 'purple',
    githubLink: 'https://github.com/Shivanishet/Voice-Translator',
    // Live deployed link (update this URL if your deployment domain changes)
    liveLink: 'https://voice-translator-chi-silk.vercel.app',
  },
  {
    title: 'Student Complaint Management System',
    category: 'MERN Stack Web App',
    stack: 'React • Node.js • Express • MongoDB',
    description: 'Built a MERN-based complaint management platform that allows students to submit and track complaints while providing administrators with a streamlined dashboard for efficient issue resolution.',
    icon: ShieldAlert,
    accent: 'blue',
    githubLink: 'https://github.com/Shivanishet/Student-complaint',
    // Live deployed link (update this URL if your deployment domain changes)
    liveLink: 'https://student-complaint-ten.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-purple/80">
            02 — Projects
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            A curated showcase of academic projects and full-stack solutions built using cutting-edge developer stacks.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/Shivanishet?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="glass-strong inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-neon-cyan/40 hover:bg-white/5"
          >
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
