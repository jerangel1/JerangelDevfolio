import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../components/projectsComponents";
import { Navigation } from "../components/nav";
import { HeaderProjects } from "../components/HeaderProjects";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const projects = [
  {
    id: 1,
    name: 'App Web to shared photos & Videos',
    imgSrc: '/projects-img/BODARK.png',
    altText: 'App web photos y videos',
    techStack: [
      { imgSrc: '/html-logo.png', altText: 'HTML5 Logo' },
      { imgSrc: '/css-logo.png', altText: 'CSS Logo' },
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
    ],
    description: 'Witness the magic of shared memories! 📸 This enchanted website lets users summon photos to Firebase Storage and share them across digital realms. An epic pixelated adventure awaits!',
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
    ],
    description: "Unleash the power of the Dashboard! 📊 This mystical repository houses a Next.js spell, weaving together a complete dashboard application. Navigate through the realms of data with the finesse of a code ninja.",
    previewLink: 'https://nextjs-dashboard-seven-alpha-95.vercel.app/',
  },
  {
    id: 3,
    name: 'Game of Mokepon!',
    imgSrc: '/projects-img/MOKEPON.png',
    altText: 'Juego Mokepon',
    techStack: [
      { imgSrc: '/javascript-logo.png', altText: 'JavaScript Logo' },
      { imgSrc: '/css-logo.png', altText: 'CSS Logo' },
      { imgSrc: '/html-logo.png', altText: 'HTML5 Logo' },
      { imgSrc: '/nodejs.png', altText: 'nodejs Logo' },
    ],
    description: "Embark on a pixelated quest! 🎮 Dive into a simple yet fierce battle in the game of Mokepon. Choose your mystical pet and unleash spells to conquer your digital foes..",
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
    ],
    description: "The website you're looking at",
    previewLink: 'http://www.jerangeldev.com/',
  },
  
];

// Función para determinar el tamaño de un proyecto (usando el número de tecnologías utilizadas)
const getProjectSize = (project) => project.techStack.length;

// Ordenar los proyectos por tamaño
const sortedProjects = projects.sort((a, b) => getProjectSize(a) - getProjectSize(b));

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 mt-15">
      <Navigation />
      <HeaderProjects />
      <div className="justify-center items-center">
        {sortedProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
