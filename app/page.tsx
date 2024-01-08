"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import './globals.css';
import 'tailwindcss/tailwind.css';

export default function Home() {
  useEffect(() => {
    const titleElement = document.querySelector('.animate-title');
    if (titleElement) {
      titleElement.classList.add('animate-title'); // Trigger the animation
    }
  }, []);

  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started checking &nbsp;
          <a href="/pages/portfolio" target="_blank" className="dark:green">
            <code className="font-mono font-bold">
              My Projects
            </code>
          </a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="flex place-items-center gap-2 p-8 group-hover:scale-110 group-hover:text-blue-500 motion-reduce:transform-none"
            href="https://github.com/jerangel1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile{' '}
            <Image
              src="/imgs/github-logo.png"
              alt="github Logo"
              className="dark:invert"
              width={44}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <div className="animate-title relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[460px] z-[-1] animate-logo">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/imgs/dev-logo.png"
          alt="Logo full Stack Developer Jesus Rangel"
          width={300}
          height={65}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/pages/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Full-Stack Developer Crafting Engaging Digital Experiences
          </p>
        </Link>

        <Link
          href="/pages/work"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Work{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore my work history to witness my evolution.
          </p>
        </Link>

        <Link
          href="/pages/skills"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Skills{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Bringing ideas to life with React, JavaScript, and TypeScript. 
          </p>
        </Link>

        <Link
          href="/pages/contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Ready to take the first step? Lets discuss your idea today.
          </p>
        </Link>
      </div>
    </main>
  )
}
