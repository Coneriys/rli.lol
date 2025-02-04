'use client';

import { useEffect, useRef } from 'react';

export const WaterBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.fillStyle = '#001414';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < canvas.width; i += 5) {
        for (let j = canvas.height - 200; j < canvas.height; j += 5) {
          const wave = Math.sin(i * 0.01 + time) * 20;
          ctx.fillStyle = `rgba(0, 255, 255, ${0.03 - (j / canvas.height) * 0.03})`;
          ctx.fillRect(i, j + wave, 3, 3);
        }
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};