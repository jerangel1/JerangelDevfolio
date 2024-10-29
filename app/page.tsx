'use client'
import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic';
import Particles from "./components/particles";
import NavLink from "./components/NavLink";
import styled from "styled-components";
import  Bb8Switch  from "./components/bb8/Bb8Switch";



const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false }
);

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    #000000 0%,
    #000000 30%,
    #000022 50%,
    rgba(0, 0, 102, 0.6) 70%,
    rgba(0, 0, 139, 0.4) 85%,
    rgba(0, 0, 139, 0.2) 100%
  );
`;

const SpaceFog = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9) 30%,
    rgba(0, 0, 51, 0.5) 60%,
    rgba(0, 0, 102, 0.3) 100%
  );
  backdrop-filter: blur(12px);
`;

const ParticleContainer = styled.div`
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 90%
  );
`;

const Earth = styled.div`
  position: absolute;
  inset: 0;
  top: 450px;
  left: 1080px;
  right: -200px;
  background-image: url('/FondoTierra.webp');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  filter: contrast(1.1) brightness(1.1) drop-shadow(0 0 150px rgba(0, 149, 255, 0.5));
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  z-index: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    top: 80vh;
    left: 50%;
    transform: translateX(-25%);
    width: 150vw;
    height: 150vw;
    background-position: center top;
  }
`;

// Añade estas animaciones al CSS global
const ScrollAnimations = styled.div`
  @keyframes earthScroll {
    from {
      transform: translateY(0) scale(1);
    }
    to {
      transform: translateY(-20vh) scale(1.2);
    }
  }
`;

const EarthHalo = styled.div`
  position: absolute;
  inset: 0;
  top: 450px;
  left: 980px;
  right: -100px;
  background: radial-gradient(
    circle at bottom right,
    rgba(0, 149, 255, 0.3) 0%,
    rgba(0, 98, 255, 0.2) 20%,
    rgba(0, 47, 167, 0.1) 40%,
    transparent 70%
  );
  filter: blur(40px);
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at bottom right,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    filter: blur(30px);
  }
`;

const navigation = [
  { name: "About", href: "/pages/about", description: "Full-Stack Developer Crafting Engaging Digital Experiences" },
  { name: "Work", href: "/pages/work", description: "Explore my work history to witness my evolution." },
  { name: "Skills", href: "/pages/skills", description: "Bringing ideas to life with React, JavaScript, and TypeScript." },
  { name: "Projects", href: "/pages/portfolio", description: "Check out my latest projects and experiments" },
  { name: "Contact", href: "/pages/contact", description: "Let's connect and create something amazing" },
];

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

      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-md z-50 p-6">
        {/* Logo */}
        <Link href="/" className="block mb-12">
          <span className="text-white text-2xl font-bold hover:text-zinc-300 transition-colors">
          <Bb8Switch />
          </span>
         
        </Link>

        {/* Navigation Links */}
        <div className="space-y-4">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              title={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center pl-80">
        <h1 className="z-10 text-3xl text-transparent duration-3000 bg-white bg-opacity-90 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
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
          className="text-white mt-5 text-4xl font-bold dark:drop-shadow-[0_0_1.9rem_#ffffff70] animate-fade-in relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:animate-loading-bar min-h-[64px] py-2"
          repeat={Infinity}
          cursor={false}
          style={{ display: 'inline-block' }}
        />
      </main>
    </div>
  );
}