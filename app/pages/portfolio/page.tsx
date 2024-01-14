"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../../components/projectsComponents";
import { Navigation } from "../../components/nav";
import { HeaderProjects } from "../../components/HeaderProjects";
// DarkModeContext.js
import { DarkModeProvider } from "../../DarkModeContext";

interface Tech {
  imgSrc: string;
  altText: string;
}

interface Project {
  id: number;
  name: string;
  repository:string;
  imgSrc: string;
  altText: string;
  techStack: Tech[];
  description: string;
  previewLink: string;
}

const navigation = [
  { name: "About", href: "/pages/about" },
  { name: "Work", href: "/pages/work" },
  { name: "Skills", href: "/pages/skills" },
  { name: "Contact", href: "/pages/contact" },
  { name: "Projects", href: "/pages/projects" },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'Web app for events',
    repository: 'https://github.com/jerangel1/weddingRK',
    imgSrc: '/projects-img/BODARK.png',
    altText: 'App web photos y videos',
    techStack: [
      { imgSrc: '/html-logo.png', altText: 'HTML5 Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/firebase-logo.png', altText: 'Firebase Logo' }
    ],
    description: 'Leveraging HTML, CSS, and secure Firebase Storage, this platform boasts meticulous design and intuitive functionality. Figma-driven UI ensures consistent visuals across device.This platform was instrumental in the success of a recent wedding celebration. By enabling guests to contribute photos using a QR code, we eliminated 90% of photo management burden for the wedding couple. The platform also enriched the experience for guests by allowing them to share photos in real time, ❤️ Create a more engaging and memorable event.',
    previewLink: 'https://bodark20oct2023.web.app/',
  },
  {
    id: 2,
    name: 'Dashboard App',
    repository: 'https://github.com/jerangel1',
    imgSrc: '/projects-img/dashboard-nextjs.png',
    altText: 'Dashboard app',
    techStack: [
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/LogoReact.png', altText: 'React logo' },
    ],
    description: `
    I crafted a robust Financial Dashboard application from scratch using Next.js. This full-stack project showcases my expertise in building powerful and responsive web applications.

  `,
    previewLink: 'https://nextjs-dashboard-seven-alpha-95.vercel.app/',
  },
  {
    id: 3,
    name: 'Multiplayer game',
    repository: 'https://github.com/jerangel1/Mokepon',
    imgSrc: '/projects-img/MOKEPON.png',
    altText: 'Juego Mokepon',
    techStack: [
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/html-logo.png', altText: 'HTML5 Logo' },
      { imgSrc: '/nodejs.png', altText: 'nodejs Logo' },
    ],
    description: "Embark on Mokepon, my meticulously crafted fighting game that epitomizes technical excellence. Engineered with JavaScript, it intricately weaves game logic, showcasing sophisticated DOM manipulation and dynamic array structures. Deployment through Firebase ensures a seamless, high-performance gaming experience. 🎮",
    previewLink: 'https://apimokepon.firebaseapp.com/',
  },
  {
    id: 4,
    name: 'Devfolio',
    repository: 'https://github.com/jerangel1/JerangelDevfolio',
    imgSrc: '/projects-img/portfolioversion2jerangel.png',
    altText: 'Portfolio jerangel',
    techStack: [
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/LogoReact.png', altText: 'React logo' },
    ],
    description: "The website you're looking at 🔝",
    previewLink: 'http://www.jerangeldev.com/',
  },
];

const Projects: React.FC = () => {

  return (
    <DarkModeProvider>
  <div className="dark text-white flex flex-col-4 gap-5 mt-15 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-300/20 to-black">
    <Navigation />
    <HeaderProjects />
    <div className="flex flex-col-4 items-center justify-center container p-5 mx-auto px-4 sm:px-8">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  </div>
</DarkModeProvider>
);
};

export default Projects;