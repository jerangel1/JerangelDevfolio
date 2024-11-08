
import { motion } from "framer-motion";
import React from "react";
// Nuevo componente para las tarjetas de experiencia
export const ExperienceCard = ({ experience }: { experience: any }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-xl p-6
               backdrop-blur-md bg-black/40 
               border border-purple-500/20
               shadow-lg shadow-purple-500/20 
               transition-all duration-300
               hover:bg-black/50"
    >
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 to-blue-400">
                {experience.position}
            </h3>
            <span className="text-sm text-purple-300">{experience.date}</span>
        </div>

        <h4 className="text-lg text-white/90 mb-2">{experience.company}</h4>

        <p className="text-sm text-gray-300 mb-4 text-justify">{experience.content}</p>

        <div className="flex justify-between items-center">
            <span className="px-3 py-1 text-sm rounded-full
                      bg-purple-500/20 text-purple-300
                      border border-purple-500/30">
                {experience.category.tag}
            </span>

            <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:text-purple-300
                  transition-colors duration-300"
            >
                {experience.link.text} →
            </a>
        </div>
    </motion.div>
);
