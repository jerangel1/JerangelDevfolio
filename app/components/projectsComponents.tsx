import { motion } from "framer-motion";
import Image from "next/image";
import TechButton from './TechButton';
import { Wrench } from 'lucide-react';
import Link from "next/link";

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
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="w-full sm:w-1/2 lg:w-1/2 mb-8 px-4"
    >
      <motion.article className="rounded-lg overflow-hidden shadow-lg transition-transform transform text-center items-center mx-auto">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{project.name}</h2>
          <p className="text-gray-500 mb-4">{project.description}</p>
          <div className="flex items-center text-center justify-center mb-2">
            <p className="mr-2">Build with</p>
            <Wrench className="w-5 h-5 mr-2" />
            <div className="flex items-center justify-center text-center gap-4 space-x-2">
              {project.techStack.map((tech, index) => (
                <TechButton key={index} imgSrc={tech.imgSrc} altText={tech.altText} />
              ))}
            </div>
          </div>
          <p className="text-blue-500 hover:underline text-center">
            <Link href={project.previewLink}>Live Version</Link>
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ProjectItem;