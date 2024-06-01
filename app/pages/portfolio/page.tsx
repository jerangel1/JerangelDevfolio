"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../../components/projectsComponents";
import { Navigation } from "../../components/nav";
import { HeaderProjects } from "../../components/HeaderProjects";
// DarkModeContext.js
import { DarkModeProvider } from "../../DarkModeContext";
import CardProject from "@/app/components/CardProjects";

interface Tech {
  imgSrc: string;
  altText: string;
}

interface Project {
  id: number;
  name: string;
  repository: string;
  isPrivate: boolean;
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
    name: 'Real-Time Lottery Results Web App',
    repository: 'https://github.com/jerangel1',
    isPrivate: true,
    imgSrc: '/projects-img/LotteryResults.png',
    altText: 'App web photos y videos',
    techStack: [
      { imgSrc: '/LogoReact.png', altText: 'React Logo' },
      { imgSrc: '/typescript.png', altText: 'typesScript Logo' },
      { imgSrc: '/postgress.png', altText: 'Postgress Logo' }
    ],
    description: 'Leveraging HTML, CSS, and secure Firebase Storage, this platform boasts meticulous design and intuitive functionality. Figma-driven UI ensures consistent visuals across device.This platform was instrumental in the success of a recent wedding celebration. By enabling guests to contribute photos using a QR code, we eliminated 90% of photo management burden for the wedding couple. The platform also enriched the experience for guests by allowing them to share photos in real time, ❤️ Create a more engaging and memorable event.',
    previewLink: 'https://monitor.betsol.la/',
  },
  {
    id: 2,
    name: 'Landing Page for lottery products',
    repository: 'https://github.com/jerangel1',
    isPrivate: true,
    imgSrc: '/projects-img/PollaWeb.png',
    altText: 'Landing Page for lottery',
    techStack: [
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/tailwind.png', altText: 'JavaScript Logo' },
      { imgSrc: '/LogoReact.png', altText: 'React logo' },
    ],
    description: `
    I crafted a robust Financial Dashboard application from scratch using Next.js. This full-stack project showcases my expertise in building powerful and responsive web applications.

  `,
    previewLink: 'https://nextjs-dashboard-seven-alpha-95.vercel.app/',
  },
  {
    id: 3,
    name: 'Blog For Tips about Astro Framework',
    repository: 'https://github.com/jerangel1/astrobuild.tips',
    isPrivate: false,
    imgSrc: '/projects-img/Astrobuilds.png',
    altText: 'Blog para usar Astro',
    techStack: [
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/typescript.png', altText: 'Typescript Logo' },
      { imgSrc: '/netlify.png', altText: 'Netlify  Logo' },
    ],
    description: "Embark on Mokepon, my meticulously crafted fighting game that epitomizes technical excellence. Engineered with JavaScript, it intricately weaves game logic, showcasing sophisticated DOM manipulation and dynamic array structures. Deployment through Firebase ensures a seamless, high-performance gaming experience. 🎮",
    previewLink: 'https://astrobuild-tips-8c3.pages.dev/',
  },
  {
    id: 4,
    name: 'Landing page for GitCode',
    repository: 'https://github.com/jerangel1/gitCodeHtml',
    isPrivate: false,
    imgSrc: '/projects-img/gitCode.png',
    altText: 'Landing page for GitCode',
    techStack: [
      { imgSrc: '/html-logo.png', altText: 'html  Logo' },
      { imgSrc: '/css-logo.png', altText: 'CSS ogo' },
      { imgSrc: '/javascript-logo.png', altText: 'Javascript logo' },
    ],
    description: "The website you're looking at 🔝",
    previewLink: 'https://jerangel1.github.io/gitCodeHtml/',
  },
];

const Projects: React.FC = () => {

  return (
    <DarkModeProvider>
  <div className="dark text-white flex flex-col-4 gap-5 mt-15 overflow-x-hidden">
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