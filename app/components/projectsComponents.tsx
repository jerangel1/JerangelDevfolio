import Image from 'next/image';
import TechButton from './TechButton';
import { Wrench } from 'lucide-react';

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

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="max-w-xl mx-auto mb-10 container fluid md:w-1/2 lg:w-1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 p-0">
      <article className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="relative h-48">
          <Image
            src={project.imgSrc}
            alt={project.altText}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          <p className="text-gray-500 mb-4">{project.description}</p>
          <div className="flex items-center mb-2">
            <p className="mr-2">Build with</p>
            <Wrench className="mr-2" />
            <div className="flex flex items-center">
              {project.techStack.map((tech, index) => (
                <TechButton key={index} imgSrc={tech.imgSrc} altText={tech.altText} />
              ))}
            </div>
          </div>
          <p className="text-blue-500 hover:underline text-center">
            <a href={project.previewLink}>Preview</a>
          </p>
        </div>
      </article>
    </div>
  );
};

export default ProjectItem;
