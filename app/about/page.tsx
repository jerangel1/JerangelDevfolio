import Image from 'next/image'
import Particles from '../components/particles';

const navigation = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h1>About me</h1>
        </p>
        
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-1xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            { <span className="inline-block transform transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
              -&gt;
            </span> }How I Built My Portfolio?{' '}
            <Image
              src="/icons8-build-64.png"
              alt="build Logo"
              className=""
              width={64}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className='text-2xl'>Hello, and welcome to my portfolio</h2>
      </div>

      <div className="mb-32 grid text-center lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer "
        >
          <h2 className={`mb-3 text-1xl text-center`}>
            Im a <b>full-stack developer</b> with 2 years of experience in web development. I love the process of creating beautiful and functional user experiences, and Im always looking for new ways to use technology to solve problems.
            <p className='mt-3'>
            Im also a quick learner and Im always up for a challenge. Im excited to see what the future holds for me as a developer.</p>{' '}
            
            <Particles />
          </h2>
        </div>
      </div>
    </main>
  )
}
