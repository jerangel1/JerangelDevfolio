"use client";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { Navigation } from "../../components/nav";
import Link from "next/link";
import Particles from "../../components/particles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const navigation = [
  { name: "About", href: "/pages/about" },
  { name: "Work", href: "/pages/work" },
  { name: "Skills", href: "/pages/skills" },
  { name: "Contact", href: "/pages/contact" },
  { name: "Projects", href: "/pages/projects" },
];
const sections = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        logos: "/javascript-logo.png",
        description:
          "I utilize JavaScript to enhance user interfaces with interactivity, animations, and dynamic functionality on web pages.",
      },
      {
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        logos: "/typescript.png",
        description:
          "I leverage TypeScript, a superset of JavaScript, for scalable and maintainable web development projects, adding static typing for improved code quality.",
      },
      {
        title: "HTML",
        href: "https://www.freecodecamp.org/espanol/news/aprende-html-y-css-curso-desde-cero/",
        logos: "/html-logo.png",
        description:
          "I use HTML to structure content and create visually appealing and responsive web pages.",
      },
      {
        title: "CSS",
        href: "https://css-tricks.com/",
        logos: "/css-logo.png",
        description:
          "I apply CSS for styling and layout, ensuring a consistent and attractive presentation of web content across different devices.",
      },
      {
        title: "Python",
        href: "https://www.python.org/",
        logos: "/python-logo.png",
        description:
          "I employ Python for various applications, including web development, scripting, and data analysis, leveraging its simplicity and versatility.",
      },
      {
        title: "PHP",
        href: "https://www.php.net/manual/es/intro-whatis.php",
        logos: "/php.png",
        description:
          "I use PHP to develop dynamic and server-side web applications, integrating it seamlessly with databases for efficient data processing.",
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      {
        title: "React",
        href: "https://es.react.dev/",
        logos: "/react.png",
        description:
          "I harness the power of React to build fast, scalable, and interactive user interfaces, creating seamless single-page applications.",
      },
      {
        title: "Next.js",
        href: "https://nextjs.org/",
        logos: "/logoNext.png",
        description:
          "I utilize Next.js to enhance React applications with features like server-side rendering and optimized performance.",
      },
      {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        logos: "/tailwind.png",
        description:
          "I employ Tailwind CSS for efficient styling, streamlining the development process and ensuring consistent and maintainable designs.",
      },
      {
        title: "Bootstrap",
        href: "https://getbootstrap.com/",
        logos: "/bootstrap-logo.png",
        description:
          "I use Bootstrap to create responsive and visually appealing designs, accelerating the development of mobile-friendly web applications.",
      },
      {
        title: "Flask",
        href: "https://flask.palletsprojects.com/en/3.0.x/",
        logos: ["/flask.png"],
        description:
          "I leverage Flask to build lightweight and modular web applications in Python, focusing on simplicity and ease of use.",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      {
        title: "Node.js",
        href: "https://nodejs.org/en",
        logos: ["/nodejs.png"],
        description:
          "I use Node.js to develop scalable and server-side web applications, leveraging its asynchronous and event-driven architecture.",
      },
      {
        title: "Git",
        href: "https://git-scm.com/",
        logos: ["/git.png"],
        description:
          "I utilize Git for version control, ensuring collaborative and efficient development workflows, and maintaining code integrity.",
      },
      {
        title: "GitHub",
        href: "https://github.com/",
        logos: ["/github.png"],
        description:
          "I use GitHub as a collaborative platform for version control, code review, and project management, facilitating team collaboration.",
      },
      {
        title: "Netlify",
        href: "https://www.netlify.com/",
        logos: ["/netlify.png"],
        description:
          "I deploy web applications seamlessly with Netlify, benefiting from its continuous integration, deployment, and serverless functions.",
      },
      {
        title: "Vercel",
        href: "https://vercel.com",
        logos: ["/vercelLogo.png"],
        description:
          "I leverage Vercel for hosting and deploying applications with a focus on performance, scalability, and serverless functions.",
      },
      {
        title: "WordPress",
        href: "https://wordpress.com",
        logos: ["/wordpress.png"],
        description:
          "I use WordPress to create dynamic and customizable websites, leveraging its user-friendly content management system.",
      },
      {
        title: "Firebase",
        href: "https://firebase.google.com",
        logos: ["/firebase-logo.png"],
        description:
          "I integrate Firebase to develop real-time applications, leverage cloud services, and ensure seamless authentication and data storage.",
      },
      {
        title: "Figma",
        href: "https://www.figma.com",
        logos: ["/figma.png"],
        description:
          "I use Figma for collaborative design and prototyping, streamlining the design-to-development workflow for web and mobile applications.",
      },
      {
        title: "Canva",
        href: "https://www.canva.com ",
        logos: ["/canva.png"],
        description:
          "I use Canva for graphic design, creating visual content, and enhancing the overall aesthetics of various projects.",
      },

      {
        title: "Docker",
        href: "https://www.docker.com/",
        logos: ["/docker.png"],
        description:
          "I implement Docker for containerization, enabling consistent deployment and scalability of applications across different environments.",
      },
    ],
  },
];
interface LogoItemProps {
  logos: string | string[];
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ logos, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.25 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`inline-block transition-transform ${
        inView ? "group-hover:translate-y-1 motion-reduce:transform-none" : ""
      }`}
    >
      {Array.isArray(logos) ? (
        logos.map((logoSrc, index) => (
          <motion.img
            key={index}
            src={logoSrc}
            width={50}
            height={50}
            alt={alt}
            className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
          />
        ))
      ) : (
        <motion.img
          src={logos}
          width={50}
          height={50}
          alt={alt}
          className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none"
        />
      )}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-300/20 to-black">
      {<Navigation />}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        <p className="lg:hidden flex w-full justify-center border-b pb-6 pt-8  dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
          Dive into my Skills
          <Link href="/projects" target="_blank" className="">
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Rocket />
            </span>
          </Link>
        </p>
        <p className="lg:hidden flex w-full justify-center  pb-6 pt-8  dark:from-inherit lg:static lg:w-auto">
          <iframe
            className=""
            src="https://lottie.host/embed/42c31a9f-db5d-438c-8488-2945d105093f/AyobcxbbLF.json"
          ></iframe>
        </p>
      </div>
      <div className="flex flex-col items-center">
        {sections.map((section, index) => (
          <div key={index} className="text-center lg:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl  p-8">
              {section.title}
            </h2>
            <div className="w-full h-px bg-zinc-800 mt-15" />
            <div className="mb-20 mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold">
                    {item.title}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  {Array.isArray(item.logos) ? (
                    item.logos.map((logo, logoIndex) => (
                      <LogoItem
                        key={logoIndex}
                        logos={logo}
                        alt={`${item.title} Logo`}
                        layout=responsive
                      />
                    ))
                  ) : (
                    <LogoItem logos={item.logos} alt={`${item.title} Logo`} />
                  )}
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 mt-5">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1300}
      />
    </main>
  );
}
