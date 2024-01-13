"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Image from 'next/image'
import {TechnologyCard} from "@/app/components/TechnologyCard";
// DarkModeContext.js
import { DarkModeProvider } from "../../DarkModeContext";

// Datos de tecnologías
const technologies = [
  {
    name: "Tailwind CSS",
    description: "I used Tailwind CSS, a utility-first CSS framework that makes it easy to create responsive and custom layouts.",
    logoSrc: "/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "TypeScript",
    description: "I leveraged TypeScript for robust type safety and enhanced code structure, leading to fewer bugs and a developer-friendly experience.",
    logoSrc: "/typescript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    description: "I utilized Node.js and its npm package manager for dependency management and efficient installation of essential tools, ensuring efficient backend development.",
    logoSrc: "/nodejs.png",
    link: "https://nodejs.org/en",
  },
  {
    name: "Upstash",
    description: "I integrated Upstash, a MongoDB database service providing scalable and reliable storage for my portfolio data, ensuring optimal performance.",
    logoSrc: "/uptashLogo.png",
    link: "https://upstash.com/",
  },
  {
    name: "React",
    description: "I developed my portfolio using React, a content management platform that makes it easy to create and organize content efficiently.",
    logoSrc: "/LogoReact.png",
    link: "https://react.dev/",
  },
  {
    name: "Vercel",
    description: "I deployed my portfolio on Vercel, a hosting platform that offers lightning-fast deployment and global scalability, ensuring an exceptional user experience.",
    logoSrc: "/vercelLogo.png",
    link: "http://vercel.com",
  },
];

export default function howBuild() {
  return (
    <DarkModeProvider>
    <div className=" dark relative pb-16 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-300/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            My portfolio was built with <a href="https://nextjs.org">Next.js</a> and <a href="https://nextra.vercel.app">Nextra</a>
          </h2>
          <p className="mt-4 text-xl text-zinc-400">
            a library that makes it easy to create a beautiful and functional portfolio with Markdown. I chose these technologies because they offer the following benefits:
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800 " />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">I also used the following technologies to build my portfolio</h2>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
    </DarkModeProvider>
 )
          }