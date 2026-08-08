import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  stack: string;
  description: string;
  icon: React.ElementType;
  accent: 'cyan' | 'purple' | 'blue';
  githubLink: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ ry: px * 14, rx: -py * 14 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  const accentMap = {
    cyan: { text: 'text-neon-cyan', glow: 'hover:shadow-neon-cyan', border: 'hover:border-neon-cyan/50', grad: 'from-neon-cyan/20' },
    purple: { text: 'text-neon-purple', glow: 'hover:shadow-neon-purple', border: 'hover:border-neon-purple/50', grad: 'from-neon-purple/20' },
    blue: { text: 'text-neon-blue', glow: 'hover:shadow-neon-cyan', border: 'hover:border-neon-blue/50', grad: 'from-neon-blue/20' },
  }[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className={`glass group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 ${accentMap.border} ${accentMap.glow}`}
      >
        {/* glow wash */}
        <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${accentMap.grad} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

        <div style={{ transform: 'translateZ(40px)' }} className="relative flex flex-col h-full justify-between">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className={`glass-strong flex h-12 w-12 items-center justify-center rounded-2xl ${accentMap.text}`}>
                <project.icon size={22} />
              </div>
            </div>

            <p className={`mb-2 font-mono text-[10px] uppercase tracking-[0.25em] ${accentMap.text}`}>
              {project.category}
            </p>
            <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-400">{project.stack}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="glass-strong flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <Github size={14} />
              Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-neon-cyan to-neon-purple text-space-900 flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold hover:scale-105 transition-all shadow-neon-cyan"
              >
                <Globe size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
