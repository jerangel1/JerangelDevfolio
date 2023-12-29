// components/ProjectItem.js
import Image from 'next/image';
import TechButton from './TechButton';

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

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="container fluid 1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-10 p-0 max-w-screen-md">
      <article className="card flex cursor-pointer min-h-[360px] flex-col md:flex-row hover:shadow-lg">
        <div className="background w-full md:flex-3 overflow-hidden">
          <Image src={project.imgSrc} alt={project.altText} width={500} height={500} className="w-full h-full object-cover" />
        </div>
        <div className="content-project flex flex-col justify-between p-4 md:flex-4">
          <div className="card-header-project justify-between">
            <div className="card-type-project h-36px px-4 flex items-center justify-center rounded font-bold text-xl">
              {project.name}
            </div>
            <p className='text-center mt-2 mb-2 font-mono text-sm'>Created with</p>
            <div className='flex space-x-2 mb-5'>
              {project.techStack.map((tech, index) => (
                <TechButton key={index} imgSrc={tech.imgSrc} altText={tech.altText} />
              ))}
            </div>
          </div>
          <div className="card-content-project flex flex-col gap-4">
            <h2 className="font-mono text-sm">
              {project.description}
            </h2>
            <p className="text-gray-200 line-clamp-3 container fluid 1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <a href={project.previewLink}>Preview</a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectItem;
