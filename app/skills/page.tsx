"use client";
import Image from 'next/image'
import { Rocket } from 'lucide-react';
import { Navigation } from "../components/nav";



const navigation = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {<Navigation />}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
          Dive into my Skills
          <a href="/projects" target="_blank" className="dark:green">
          <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           <Rocket />
            </span>
          </a>
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center  bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto">
        <iframe src="https://lottie.host/embed/42c31a9f-db5d-438c-8488-2945d105093f/AyobcxbbLF.json"></iframe>
        </p>
      </div>
      <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>Frontend</h2>
      <div className="w-full h-px bg-zinc-800 mt-5" />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <a
          href="https://www.freecodecamp.org/espanol/news/aprende-html-y-css-curso-desde-cero/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Html5 y CSS{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/html-logo.png"
            width={50}
            height={50}
            alt="HTML LOGO"
          />
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/css-logo.png"
            width={50}
            height={50}
            alt="CSS LOGO"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I can use these technologies to create well-structured, responsive, and visually appealing web pages.
          </p>
        </a>

        <a
          href="https://getbootstrap.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Bootstrap{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/bootstrap-logo.png"
            width={50}
            height={50}
            alt="Bootstrap Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I can use Bootstrap, a popular CSS framework, to build responsive and mobile-first web pages
          </p>
        </a>

        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            JavaScript{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/javascript-logo.png"
            width={50}
            height={50}
            alt="javascript Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
          I can use JavaScript to add interactivity and functionality to a web page, such as animations, forms, and games.
          </p>
        </a>

        <a
          href="https://tailwindcss.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tailwind CSS{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/tailwind.png"
            width={50}
            height={50}
            alt="Tailwind Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
          A utility-first CSS framework. I can use Tailwind CSS to quickly and easily build responsive and modern user interfaces
          </p>
        </a>
      </div>
      <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>Backend</h2>
      <div className="w-full h-px bg-zinc-800 mt-5" />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <a
          href="https://nodejs.org/en"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Node.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/nodejs.png"
            width={50}
            height={50}
            alt="Nodejs Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I can use Node.js to create server-side web applications.
          </p>
        </a>

        <a
          href="https://www.python.org/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Python{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2><Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/python-logo.png"
            width={50}
            height={50}
            alt="Python Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I can use Python to Build server-side web applications with frameworks such as Flask.
          </p>
        </a>

        <a
          href="https://www.mongodb.com/es"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            MongoDB{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/mongo-db.png"
            width={50}
            height={50}
            alt="Mongodb Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            A document-oriented database that is often used for web applications. I can use MongoDB to store data in a flexible and efficient way.
          </p>
        </a>

        <a
          href="https://www.php.net/manual/es/intro-whatis.php"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            PHP{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/php.png"
            width={50}
            height={50}
            alt="PHP Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I am proficient in PHP, a general-purpose scripting language that is often used for web development. I can use PHP to create dynamic web pages and web applications.
          </p>
        </a>
      </div>
      <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>Frameworks</h2>
      <div className="w-full h-px bg-zinc-800 mt-5" />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <a
          href="https://es.react.dev/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            React:{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
            src="/react.png"
            width={50}
            height={50}
            alt="React Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
           I can use React to create fast, scalable, and interactive user interfaces.
          </p>
        </a>

        <a
          href="https://nextjs.org/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Next.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none dark:invert"
            src="/next.svg"
            width={50}
            height={50}
            alt="Next Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            A React framework that makes it easy to build server-rendered and static web applications.
          </p>
        </a>

        <a
          href="https://firebase.google.com/?gad_source=1&gclid=CjwKCAiA-bmsBhAGEiwAoaQNmijCWnoQJza7N8q3a44cDHoIBF1D4u1cgI_Lgd9ctVE5-P7UJUsW9hoCcukQAvD_BwE&gclsrc=aw.ds&hl=es-419"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Firebase{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2> 
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none "
            src="/firebase-logo.png"
            width={50}
            height={50}
            alt="Firebase Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            A platform that provides a variety of services for building and deploying web applications. I can use Firebase to store data, authenticate users, and send push notifications.
          </p>
        </a>

        <a
          href="https://vercel.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vercel{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <Image
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none dark:invert "
            src="/vercel.svg"
            width={50}
            height={50}
            alt="Vercel Logo"
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-5`}>
            I am proficient in Vercel, a platform that provides a powerful and easy-to-use hosting service for web applications.
          </p>
        </a>
      </div>
    </main>
  )
}
