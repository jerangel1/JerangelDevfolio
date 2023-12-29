// projects/page.tsx
import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import ProjectItem from "../components/projectsComponents";
import { Navigation } from "../components/nav";
import { HeaderProjects } from "../components/HeaderProjects";
import { Card } from "../components/card";

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
    description: 'This website allows users to upload photos to Firebase Storage. Photos can be shared with other users by sending them the photos URL',
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
    description: "This repository hosts a Next.js building a complete dashboard application.",
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
    description: "A simple fighting game inspired by an iconic series in which the player must choose a pet and an attack to defeat an enemy.",
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

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 mt-15">
      <Navigation />
      <HeaderProjects />
      <div className="flex justify-center items-center">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}