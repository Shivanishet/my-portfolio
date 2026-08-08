import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
      document.addEventListener('mouseenter', mEnter);
      document.addEventListener('mouseleave', mLeave);
      document.addEventListener('mousedown', mDown);
      document.addEventListener('mouseup', mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
      document.removeEventListener('mouseenter', mEnter);
      document.removeEventListener('mouseleave', mLeave);
      document.removeEventListener('mousedown', mDown);
      document.removeEventListener('mouseup', mUp);
    };

    const mMove = (el: MouseEvent) => {
      setPosition({ x: el.clientX, y: el.clientY });
      if (hidden) setHidden(false);
    };

    const mEnter = () => setHidden(false);
    const mLeave = () => setHidden(true);
    const mDown = () => setClicked(true);
    const mUp = () => setClicked(false);

    addEventListeners();

    // Check for hovered elements that should change cursor state (links, buttons, interactive cards)
    const handleLinkHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .group, [href]');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Run hover checks periodically to catch dynamically added items
    const interval = setInterval(handleLinkHoverEvents, 1000);

    return () => {
      removeEventListeners();
      clearInterval(interval);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          borderColor: linkHovered ? '#a855f7' : '#22d3ee',
          backgroundColor: linkHovered ? 'rgba(168, 85, 247, 0.05)' : 'rgba(34, 211, 238, 0)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.6 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.5 : linkHovered ? 0 : 1,
          backgroundColor: linkHovered ? '#a855f7' : '#22d3ee',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </>
  );
}
