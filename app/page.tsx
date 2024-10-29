'use client'
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import NavLink from "./components/NavLink";
import { TypeAnimation } from 'react-type-animation';

const navigation = [
  { name: "Projects", href: "/pages/portfolio" },
  { name: "Contact", href: "/pages/contact" },
];
export default function Home() {
  const WebDev = () => (
    <div className="relative">
      <span>Web Developer</span>
      <div className="absolute bottom-0 left-0 h-0.5 bg-white w-[20%] transition-all duration-1000" />
    </div>
  );
  
  const FrontendDev = () => (
    <div className="relative">
      <span>Frontend Developer</span>
      <div className="absolute bottom-0 left-0 h-0.5 bg-white w-[40%] transition-all duration-1000" />
    </div>
  );
  return (

    <div className="dark flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 " />
      <Particles
        className="absolute inset-0 -z-10 "
        quantity={1000}
      />
      <h1 className="z-10 text-3xl text-transparent duration-3000 bg-white bg-opacity-90 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Jesús Rangel
      </h1>
      <TypeAnimation
        sequence={[
          'Frontend Developer 💪',
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
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
            <NavLink
              href="/pages/about"
              title="About"
              description="Full-Stack Developer Crafting Engaging Digital Experiences"
            />

            <NavLink
              href="/pages/work"
              title="Work"
              description="Explore my work history to witness my evolution."
            />

            <NavLink
              href="/pages/skills"
              title="Skills"
              description="Bringing ideas to life with React, JavaScript, and TypeScript."
            />
          </div>
        </h2>
      </div>
    </div>
  );
}
