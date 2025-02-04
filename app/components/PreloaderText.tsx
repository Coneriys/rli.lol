'use client';

import { motion } from "framer-motion";

const Letter = ({ char, index }: { char: string; index: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, -20],
        rotateX: [90, 0, 0, -90],
        filter: [
          'brightness(1) blur(0px)',
          'brightness(1.5) blur(0px)',
          'brightness(1.5) blur(0px)',
          'brightness(1) blur(2px)'
        ]
      }}
      transition={{
        duration: 2,
        delay: index * 2,
        ease: [0.45, 0, 0.55, 1],
      }}
      style={{ 
        display: 'inline-block',
        transformStyle: 'preserve-3d',
        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
      }}
      className="mx-4"
    >
      {char}
    </motion.span>
  );
};

export function PreloaderText() {
  return (
    <div className="relative text-6xl font-mono text-[#00ffff]">
      {'rli'.split('').map((char, index) => (
        <Letter key={index} char={char} index={index} />
      ))}
    </div>
  );
}
