// components/WaveBackground.tsx
'use client';

import Wave from 'react-wavify';

export function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div className="absolute bottom-0 w-full">
        <Wave 
          fill="#004242"
          paused={false}
          opacity="0.2"
          options={{
            height: 40,
            amplitude: 40,
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
            height: 30,
            amplitude: 30,
            speed: 0.2,
            points: 4
          }}
        />
      </div>
    </div>
  );
}
