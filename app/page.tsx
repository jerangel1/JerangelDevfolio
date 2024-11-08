'use client'

import React from "react";
import dynamic from 'next/dynamic';
import Particles from "./components/particles";
import { GradientBackground, ParticleContainer, Earth, EarthHalo, SpaceFog } from "./components/templates/home/StyledComponents";


const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false }
);

export default function Home() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark flex flex-col w-screen min-h-screen overflow-x-hidden relative">
      <GradientBackground style={{
        opacity: 1 - (scrollPosition * 0.001)
      }} />
      <SpaceFog className="-z-30" />

      <ParticleContainer>
        <Particles
          className="absolute inset-0 -z-10"
          quantity={1000}
        />
      </ParticleContainer>

      <Earth className="-z-20" />
      <EarthHalo className="-z-20" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 mt-16 md:mt-0">
        <h1 className="z-10 text-2xl md:text-3xl text-transparent duration-3000 bg-white bg-opacity-90 
          cursor-default text-edge-outline animate-title font-display 
          sm:text-4xl md:text-6xl lg:text-9xl whitespace-normal md:whitespace-nowrap 
          bg-clip-text text-center">
          Jesús Rangel
        </h1>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            5500,
            'Backend Developer (still learning) 🌱',
            2000,
            'REST API Enthusiast 🚀',
            2000,
            'CSS Wizard ✨',
            2000,
            'Bug Hunter 🐛',
            2500,
            'Frontend Ninja ⚔️',
            8000,
          ]}
          wrapper="div"
          speed={50}
          className="text-white mt-5 text-xl md:text-2xl lg:text-4xl font-bold 
            dark:drop-shadow-[0_0_1.9rem_#ffffff70] animate-fade-in relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:h-0.5 after:bg-white after:animate-loading-bar 
            min-h-[64px] py-2 text-center px-4"
          repeat={Infinity}
          cursor={false}
          style={{ display: 'inline-block' }}
        />
      </main>
    </div>
  );
}