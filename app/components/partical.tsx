'use client';

import React, { useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

// Lazy-load particles
const Particles = dynamic(() => import('react-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/20" />,
});

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: false },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    number: { value: 50, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    move: {
      enable: true,
      speed: 1,
      direction: 'none' as const,
      random: false,
      straight: false,
      outModes: { default: 'out' as const },
    },
  },
  detectRetina: true,
};

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = '' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Suspense fallback={null}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className={`absolute inset-0 ${className}`}
      />
    </Suspense>
  );
};

export default ParticleBackground;