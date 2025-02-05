// components/WaveBackground.tsx
'use client';

import Wave from 'react-wavify';

export function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-1">
      <div className="absolute -bottom-1 w-full">
        <Wave 
          fill="#004242"
          paused={false}
          opacity="0.2"
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <Wave 
          fill="#004242"
          paused={false}
          opacity="0.1"
          style={{ transform: 'translateY(10px)' }}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 4
          }}
        />
      </div>
    </div>
  );
}
