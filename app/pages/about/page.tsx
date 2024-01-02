import Image from 'next/image';
import Particles from '../../components/particles';
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-4 md:p-8 lg:p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 sm:w-full text-center mb-25">
          About me
        </h1>
      </div>

      <div className="relative flex flex-col items-center lg:flex-row py-10">
        <div className="lg:w-1/2 lg:mr-4 py-10">
          <iframe src="https://lottie.host/embed/1b42b9b3-0187-4c82-a09d-c34ecb5e1a0d/Zu2IjUG0Zn.json"></iframe>
        </div>
        <h2 className='relative flex place-items-center text-3xl font-bold tracking-tight text-center lg:text-left text-zinc-100'>Hello, and welcome to my portfolio</h2>
      </div>
      <div className="max-w-2xl text-center lg:text-left py-5">
        <div className="group rounded-lg border border-transparent px-5  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" rel="noopener noreferrer">
          <h2 className={`mb-10 text-xl text-center`}>
            I am <b>full-stack developer</b> with 2 years of experience in web development. I love the process of creating beautiful and functional user experiences, and Im always looking for new ways to use technology to solve problems.
            <p className='mt-3'>
              Im also a quick learner and Im always up for a challenge.
            </p>
            <p className="font-mono font-bold mt-10">Happy browsing! <span className="inline-block transition-all group-hover:scale-110 group-hover:text-blue-500 motion-reduce:transform-none">💙</span></p>
          </h2>
        </div>
      </div>

      <div className="sm:w-full md:w-2/3 lg:w-1/2 text-center flex justify-center">
      <div className="text-center bottom-0 w-full justify-center border-t border-gray-300 bg-gradient-to-t from-zinc-200 pb-6 pt-8 backdrop-blur-1xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Link
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/pages/buildingPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<span className="justify-center inline-block transition-all group-hover:scale-110 group-hover:text-blue-500 motion-reduce:transform-none">-&gt;</span>}How I Built My Portfolio?{' '}
            <Image
              src="/icons8-build-64.png"
              alt="build Logo"
              className=" justify-center inline-block transition-all group-hover:scale-110 group-hover:text-blue-500 motion-reduce:transform-none"
              width={64}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={700} />
    </main>
  );
}
