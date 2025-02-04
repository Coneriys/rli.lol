// app/components/Particles.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const particles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));

    const container = containerRef.current;
    if (!container) return;

    particles.forEach((particle) => {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full bg-[#004242]/20';
      dot.style.width = `${particle.size}px`;
      dot.style.height = `${particle.size}px`;
      dot.style.left = `${particle.x}%`;
      dot.style.top = `${particle.y}%`;
      container.appendChild(dot);

      const animate = () => {
        const newX = parseFloat(dot.style.left) + (Math.random() - 0.5) * 0.5;
        const newY = parseFloat(dot.style.top) + (Math.random() - 0.5) * 0.5;
        dot.style.left = `${newX}%`;
        dot.style.top = `${newY}%`;
        requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-5 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};
