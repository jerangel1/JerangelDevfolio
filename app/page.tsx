'use client'
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import NavLink from "./components/NavLink";
// DarkModeContext.js
import { DarkModeProvider } from "./DarkModeContext";

const navigation = [
  { name: "Projects", href: "/pages/portfolio" },
  { name: "Contact", href: "/pages/contact" },
];
export default function Home() {
  
  return (
    <DarkModeProvider>
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
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <h1 className="z-10 text-3xl text-transparent duration-3000 bg-white bg-opacity-90 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Jesús Rangel
      </h1>
      <p className="text-transparent bg-white mt-5 text-4xl dark:drop-shadow-[0_0_0.7rem_#ffffff70]">
        Full Stack developer
      </p>

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
    </DarkModeProvider>
  );
}
