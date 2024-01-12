"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../../components/projectsComponents";
import { Navigation } from "../../components/nav";
import { HeaderProjects } from "../../components/HeaderProjects";

interface Tech {
  imgSrc: string;
  altText: string;
}

interface Project {
  id: number;
  name: string;
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
    imgSrc: '/projects-img/BODARK.png',
    altText: 'App web photos y videos',
    techStack: [
      { imgSrc: '/html-logo.png', altText: 'HTML5 Logo' },
      { imgSrc: '/css-logo.png', altText: 'CSS Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/firebase-logo.png', altText: 'Firebase Logo' }
    ],
    description: 'Leveraging HTML, CSS, and secure Firebase Storage, this platform boasts meticulous design and intuitive functionality. Figma-driven UI ensures consistent visuals across device.This platform was instrumental in the success of a recent wedding celebration. By enabling guests to contribute photos using a QR code, we eliminated 90% of photo management burden for the wedding couple. The platform also enriched the experience for guests by allowing them to share photos in real time, ❤️ Create a more engaging and memorable event.',
    previewLink: 'https://bodark20oct2023.web.app/',
  },
  {
    id: 2,
    name: 'Dashboard with Nextjs',
    imgSrc: '/projects-img/dashboard-nextjs.png',
    altText: 'Dashboard app',
    techStack: [
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/next.svg', altText: 'Next Logo' },
      { imgSrc: '/postgress.png', altText: 'Postgress logo' },
      { imgSrc: '/logoReact.png', altText: 'React logo' },
    ],
    description: `
    I crafted a robust Financial Dashboard application from scratch using Next.js. This full-stack project showcases my expertise in building powerful and responsive web applications.

  `,
    previewLink: 'https://nextjs-dashboard-seven-alpha-95.vercel.app/',
  },
  {
    id: 3,
    name: 'Multiplayer game',
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
    imgSrc: '/projects-img/portfolioversion2jerangel.png',
    altText: 'Portfolio jerangel',
    techStack: [
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/css-logo.png', altText: 'CSS Logo' },
      { imgSrc: '/tailwind.png', altText: 'tailwind Logo' },
      { imgSrc: '/uptashLogo.png', altText: 'uptash Logo' },
      { imgSrc: '/logoReact.png', altText: 'React logo' },
      { imgSrc: '/vercel.svg', altText: 'Vercel logo' },
    ],
    description: "The website you're looking at 🔝",
    previewLink: 'http://www.jerangeldev.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mt-15 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-300/20 to-black">
      <Navigation />
      <HeaderProjects />
      <div className="flex flex-col items-center justify-center container mx-auto px-4 sm:px-8">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;