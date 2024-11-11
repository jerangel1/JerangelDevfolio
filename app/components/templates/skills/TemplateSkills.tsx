"use client";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Particles from "@/app/components/particles";
import SkillsGalaxy from "./components/Skillsgalaxy";
import SkillCard from "./components/SkillCard";
import { Skill } from "./types/skills";
const Background = () => (
    <>
        <div className="fixed inset-0 bg-gradient-to-tr 
                    from-black via-black/95 
                    via-[#000022] via-[rgba(0,0,102,0.6)] 
                    to-[rgba(0,0,139,0.2)]" />

        <div className="fixed inset-0 -z-30
                    bg-gradient-to-r from-black 
                    via-black/90 via-[rgba(0,0,51,0.5)] 
                    to-[rgba(0,0,102,0.3)]
                    backdrop-blur-xl" />

        <Particles
            className="fixed inset-0 -z-10"
            quantity={1000}
        />
    </>
);

export default function TemplateSkills() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    // Función para manejar el hover de las skills
    const handleSkillHover = (skill: Skill | null) => {
        setSelectedSkill(skill);
    };
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Background />
            
            <div className="relative z-10 min-h-screen">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
                    {/* Cambiar a flex en móvil y grid en desktop */}
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 
                        items-center md:items-start min-h-[calc(100vh-4rem)] md:mt-10">
                        
                        {/* Left Column - Ajustar espaciado y tamaños */}
                        <div className="flex flex-col space-y-6 md:space-y-8 w-full max-w-xl mx-auto md:mx-0">
                            <div className="space-y-4 md:space-y-6 text-center md:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold 
                                    bg-clip-text text-transparent 
                                    bg-gradient-to-r from-purple-400 to-blue-400
                                    leading-tight">
                                    Dive into my Skills
                                </h1>
                                <p className="text-gray-300 text-lg sm:text-xl">
                                    Explore my technical expertise and professional capabilities
                                    through this interactive skills galaxy.
                                </p>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 text-purple-400 
                                        hover:text-purple-300 transition-colors duration-300
                                        text-base sm:text-lg"
                                >
                                    <span>Explore Projects</span>
                                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                        
                                </Link>
                            </div>
    
                            {/* Skill Card - Ajustar tamaño y posición */}
                            <div className="w-full">
                                <AnimatePresence mode="wait">
                                    <SkillCard skill={selectedSkill} />
                                </AnimatePresence>
                            </div>
                        </div>
    
                        {/* Right Column - Skills Galaxy */}
                        <div className="w-full aspect-square md:min-h-[600px] 
                            flex items-center justify-center order-first md:order-last">
                              <SkillsGalaxy onSkillHover={handleSkillHover} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};