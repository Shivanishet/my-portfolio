import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    value: 'github.com/Shivanishet',
    href: 'https://github.com/Shivanishet',
    icon: Github,
    accent: 'cyan',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shivani-shet-147a73339',
    href: 'https://www.linkedin.com/in/shivani-shet-147a73339',
    icon: Linkedin,
    accent: 'purple',
  },
  {
    label: 'Email',
    value: 'shivanishet035@gmail.com',
    href: 'mailto:shivanishet035@gmail.com',
    icon: Mail,
    accent: 'blue',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-purple/80">
            04 — Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Open to internships, hackathons, and software engineering opportunities. Reach out
            and let's build something great together.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {links.map((l, i) => {
            const accentCls =
              l.accent === 'cyan'
                ? 'hover:border-neon-cyan/50 hover:shadow-neon-cyan'
                : l.accent === 'purple'
                ? 'hover:border-neon-purple/50 hover:shadow-neon-purple'
                : 'hover:border-neon-blue/50 hover:shadow-neon-cyan';
            return (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass group relative flex flex-col gap-3 rounded-2xl p-6 transition-all duration-300 ${accentCls}`}
              >
                <div className="flex items-center justify-between">
                  <l.icon
                    className={
                      l.accent === 'cyan'
                        ? 'text-neon-cyan'
                        : l.accent === 'purple'
                        ? 'text-neon-purple'
                        : 'text-neon-blue'
                    }
                    size={26}
                  />
                  <ArrowUpRight className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {l.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-slate-200">{l.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:shivanishet035@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3.5 font-medium text-space-900 shadow-neon-cyan transition-transform hover:scale-105"
          >
            <Mail size={18} /> Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
