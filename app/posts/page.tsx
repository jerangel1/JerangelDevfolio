import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from 'next/image'

export default function Post() {
  return (
    <div className="relative pb-16">
      {<Navigation />}
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
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">

          {/* Tailwind Card */}
          <Card>
            <Link href='https://tailwindcss.com/'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    This utility-first CSS framework makes it easy to create responsive and custom layouts.
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className="dark:invert"
                    src="/tailwindcssLogo.png"
                    width={250}
                    height={250}
                    alt="Tailwind Logo"
                  />
                </h2>
                <p className="mt-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          {/* uptash card */}
          <Card>
            <Link href='https://upstash.com/'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    This MongoDB database service provides a scalable and reliable way to store my portfolio data.
                    {/* <span>SOON</span> */}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className=""
                    src="/uptashLogo.png"
                    width={250}
                    height={250}
                    alt="Uptash Logo"
                  />
                </h2>
                <p className="mt-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          {/* vercel card */}
          <Card>
            <Link href='http://vercel.com'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    This hosting platform provides lightning-fast deployment and global scalability
                    {/* <span>SOON</span> */}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className=""
                    src="/vercelLogo.png"
                    width={250}
                    height={250}
                    alt="Vercel Logo"
                  />
                </h2>
                <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          {/* card contentlayer */}
          <Card>
            <Link href='https://contentlayer.dev'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    This content management platform makes it easy to create and organize content.
                    {/* <span>SOON</span> */}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className=""
                    src="/ContentLayerLogo.png"
                    width={150}
                    height={150}
                    alt="content layer Logo"
                  />Contentlayer
                </h2>
                <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          {/* Card node.js */}
          <Card>
            <Link href='https://nodejs.org/en'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    Node.js and its ubiquitous package manager, npm, for dependency management and efficient installation of essential tools
                    {/* <span>SOON</span> */}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className=""
                    src="/nodejsLogo.png"
                    width={150}
                    height={150}
                    alt="content layer Logo"
                  />
                </h2>
                <p className="mt-5 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className=" hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://www.typescriptlang.org/'>
              <article className="relative w-1xl h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-m text-zinc-100">
                    Benefit from robust type safety and enhanced code structure, leading to fewer bugs, improved maintainability, and a developer-friendly experience
                    {/* <span>SOON</span> */}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">

                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Image
                    className=""
                    src="/typescriptLogo.png"
                    width={150}
                    height={150}
                    alt="content layer Logo"
                  />
                </h2>
                <p className="mt-5 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className=" hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
        {/* Footer Card */}
        <Card>
          <div className="flex flex-col items-center justify-center  gap-8 mx-auto  text-center  hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p className="font-mono font-bold">Im always looking for new ways to improve my portfolio and this its my version 2.0, so Im excited to see what the future holds. Im always eager to explore new technologies and push my boundaries, so stay tuned for future enhancements and innovations!</p>

            <p className="font-mono font-bold">Thanks for your Time. Happy browsing! <span className="inline-block transition-all group-hover:scale-110 group-hover:text-blue-500 motion-reduce:transform-none">💙</span></p>
          </div>
        </Card>


      </div>
    </div>
  );
}
