"use client";
import { HeaderWork } from "@/app/components/HeaderWork";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SpaceBackground } from "@/app/components/templates/Work/components/spacebackground";
import { experiences } from "@/app/components/templates/Work/types/experiences";
import { ExperienceCard } from "@/app/components/templates/Work/components/ExperienceCard";

export default function TemplatesWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background component */}
      <SpaceBackground />

      <div className="relative z-10">
        
        <HeaderWork />

        <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <motion.div 
            className="timeline-container relative max-w-4xl mx-auto"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
            }}
          >
            {/* Línea central del timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 
                        w-px h-full bg-gradient-to-b from-purple-500/50 
                        via-blue-500/50 to-transparent" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Dot en la línea del tiempo */}
                <div className="absolute left-1/2 transform -translate-x-1/2
                            w-4 h-4 rounded-full bg-purple-500
                            border-2 border-white/20 shadow-lg
                            shadow-purple-500/50" />

                {/* Contenido */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <ExperienceCard experience={experience} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie animation */}
          <motion.div 
            className="flex justify-center mt-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe 
              className="w-64 h-64 transform hover:scale-110 transition-transform duration-300"
              src="https://lottie.host/embed/f9e047cf-d7a4-41d3-b2bb-c17c60251be8/k8yHVOqLaC.json"
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

