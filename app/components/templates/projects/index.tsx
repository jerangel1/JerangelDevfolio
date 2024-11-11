"use client";
import { motion } from "framer-motion";
import Background from "./components/background";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";

export default function ProjectsTemplate() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            <Background />
            
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold 
                                bg-clip-text text-transparent 
                                bg-gradient-to-r from-purple-400 to-blue-400"
                        >
                            Featured Projects
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-300 text-lg sm:text-xl"
                        >
                            Explore my latest work and technical achievements
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}