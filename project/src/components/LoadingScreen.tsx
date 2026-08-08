import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Small delay before fading out
          return 100;
        }
        // Random incremental progress
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19] text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing loader logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-3xl sm:text-4xl font-display font-bold mb-8 tracking-widest gradient-text"
        >
          SHIVANI SHET
        </motion.div>

        {/* Outer progress ring / bar */}
        <div className="w-56 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="mt-4 font-mono text-[10px] text-slate-400 tracking-[0.25em] uppercase">
          Initializing Portfolio... {Math.min(progress, 100)}%
        </div>

        {/* Hexagonal or glowing design elements */}
        <div className="absolute -z-10 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[90px]" />
        <div className="absolute -z-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-[90px] translate-x-10 translate-y-10" />
      </div>
    </motion.div>
  );
}
