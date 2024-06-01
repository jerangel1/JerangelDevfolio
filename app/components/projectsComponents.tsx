import { motion } from "framer-motion";
import Image from "next/image";
import TechButton from "./TechButton";
import { Wrench } from "lucide-react";
import Link from "next/link";
import "../pages/portfolio/styles.css";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

interface Tech {
  imgSrc: string;
  altText: string;
}

interface Project {
  id: number;
  name: string;
  repository: string;
  imgSrc: string;
  altText: string;
  techStack: Tech[];
  description: string;
  previewLink: string;
  isPrivate: boolean;
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="card">
        <div className="top-section cursor-pointer">
          <img
            src={project.imgSrc}
            alt={project.altText}
            className="top-section-image"
          />
          <div className="icons">
            <div className="logo">
              <Link href={project.previewLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right-square"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 8h8v8" />
                  <path d="m8 16 8-8" />
                </svg>
              </Link>
            </div>
            <div className="social-media">
              {project.isPrivate ? (
                <Tooltip title="Es Privadoooo Viteh...">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Tooltip>
              ) : (
                <Link href={project.repository}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <span className="title">{project.name}</span>
          <div className="row row1">
            Build with
            {project.techStack.map((tech, index) => (
              <TechButton key={index} imgSrc={tech.imgSrc} altText={tech.altText} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
