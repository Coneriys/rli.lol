// components/NewPreloader.tsx
'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function NewPreloader() {
  const [isComplete, setIsComplete] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const finalText = 'rli';
  
  useEffect(() => {
    const letters = finalText.split('');
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < letters.length) {
        setCurrentText(letters.slice(0, currentIndex + 1).join('')); // Исправляем здесь
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001414]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="text-6xl font-mono text-[#00ffff] tracking-wider relative z-10"
              style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}
            >
              {currentText}
              <motion.span
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                _
              </motion.span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#00ffff]/20"
              animate={{
                scaleX: [0, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
