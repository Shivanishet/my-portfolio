import { motion } from 'framer-motion';
import { Code2, Layout, Server, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: 'text-neon-cyan',
    glow: 'group-hover:shadow-neon-cyan/20 group-hover:border-neon-cyan/30',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    accent: 'text-neon-purple',
    glow: 'group-hover:shadow-neon-purple/20 group-hover:border-neon-purple/30',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    accent: 'text-neon-blue',
    glow: 'group-hover:shadow-neon-cyan/20 group-hover:border-neon-blue/30',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    title: 'Tools & Utilities',
    icon: Cpu,
    accent: 'text-neon-cyan',
    glow: 'group-hover:shadow-neon-purple/20 group-hover:border-neon-cyan/30',
    skills: ['Git', 'GitHub', 'VS Code', 'Canva'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-cyan/80">
            03 — Skills
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 border border-white/5"
            >
              {/* Background ambient lighting */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-neon-cyan/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`glass-strong flex h-10 w-10 items-center justify-center rounded-xl ${cat.accent}`}>
                  <cat.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{cat.title}</h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-strong text-xs font-semibold text-slate-300 px-3.5 py-2 rounded-xl border border-white/5 hover:border-neon-cyan/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
