// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { WaveBackground } from './components/WaveBackground';
import { NewPreloader } from './components/NewPreloader';
import ProfileCard from './components/ProfileCard';
import { Stats } from './components/Stats';
import { ActivityGraph } from './components/ActivityGraph';
import { QuickLinks } from './components/QuickLinks';

export default function Home() {
  return (
    <>
      <NewPreloader />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
      >
        <WaveBackground />
        <ProfileCard />
        <Stats />
        <ActivityGraph />
        <QuickLinks />
      </motion.main>
    </>
  );
}
