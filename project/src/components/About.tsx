import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';

const achievements = [
  'Third-Year Computer Science student at BMS College of Engineering',
  'Academic Performance: CGPA 9.52',
  'Passionate about Full-Stack Development',
  'Interested in AI-powered applications',
  'Love building scalable web applications',
  'Looking for Software Development Internship opportunities',
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-cyan/80">
            01 — About
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Bio Text and Sub-Details */}
            <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
              <div>
                <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                  I am a passionate <strong>Computer Science engineering student</strong> at BMS College of Engineering, specializing in building responsive and intelligent web applications, translating complex problems into scalable code.
                </p>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  My focus lies at the intersection of robust full-stack development and modern AI integration. I love creating software that makes a real-world impact and am currently seeking Software Development Internship roles to contribute and grow in a dynamic tech ecosystem.
                </p>
              </div>

              {/* Checklist & Education sub-grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Achievements Checklist */}
                <div className="space-y-3 flex flex-col justify-center">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="text-neon-cyan shrink-0 mt-0.5" size={16} />
                      <span className="text-xs text-slate-300 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Education Glass Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass-strong rounded-3xl p-5 border border-neon-cyan/20 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <div className="glass flex items-center justify-center p-2 rounded-xl text-neon-cyan">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono text-neon-cyan tracking-wider uppercase">Education</h4>
                        <h3 className="text-sm font-bold text-white mt-0.5">BMS College of Engineering</h3>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block text-neon-cyan/70">DEGREE</span>
                        <span className="font-semibold text-slate-300">Bachelor of Engineering (B.E.)</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block text-neon-cyan/70">MAJOR</span>
                        <span className="font-semibold text-neon-purple">Computer Science & Engineering</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono block text-neon-cyan/70">RECORD</span>
                      <span className="text-lg font-bold font-display gradient-text">CGPA: 9.52</span>
                    </div>
                    <div className="glass-strong px-2 py-1 rounded-lg border border-neon-cyan/20 flex items-center gap-1 text-[10px] text-slate-300 font-medium">
                      <Award size={12} className="text-neon-cyan" /> Top Tier
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: 3D Profile Photo */}
            <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
              <ProfilePhoto />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
