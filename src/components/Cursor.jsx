import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for tracking cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Physics springs for a delayed, organic drag effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/tablet to disable custom cursor
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px outer circle
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.portfolio-card') ||
        target.classList.contains('filter-tab');

      setIsHovered(!!isInteractive);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid var(--text)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(10, 10, 10, 0.05)' : 'rgba(0,0,0,0)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />

      {/* Tiny inner dot — offset = (32px outer ÷ 2) - (6px dot ÷ 2) = 13 */}
      <motion.div
        style={{
          position: 'fixed',
          top: 13,
          left: 13,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--text)',
          pointerEvents: 'none',
          zIndex: 10000,
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </>
  );
}
