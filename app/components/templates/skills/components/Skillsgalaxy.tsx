"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { skills, Skill, orbits } from "../types/skills";
import { useGalaxyRotation } from "@/app/hooks/usegalaxyrotation";

type SkillsGalaxyProps = {
    onSkillHover: (skill: Skill | null) => void;
};

export default function SkillsGalaxy({ onSkillHover }: SkillsGalaxyProps) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const { isRotating, setIsRotating, controls } = useGalaxyRotation();
    const sortedSkills = [...skills].sort((a, b) => b.level - a.level);



    const getOrbitIndex = (level: number) => {
        return orbits.findIndex(orbit => level >= orbit.minLevel);
    };


    const handleSkillHover = (skill: Skill | null) => {
        if (skill) {
            setHoveredSkill(skill.name);
            setIsRotating(false);
            onSkillHover(skill); // Asegúrate de que esta línea esté presente
        } else {
            setHoveredSkill(null);
            setIsRotating(true);
            onSkillHover(null);
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[800px] min-w-[280px]
                border border-cyan-900/20 rounded-full
                flex items-center justify-center
                bg-black/10 backdrop-blur-sm
                transform-gpu
                galaxy-container">

                {/* Fondo con gradiente y efectos */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-transparent 
                        rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                        from-cyan-900/10 via-transparent to-transparent rounded-full" />
                </div>

                {/* Órbitas estáticas */}
                {orbits.map((orbit, index) => (
                    <div
                        key={`orbit-${index}`}
                        className="absolute rounded-full
                            border border-cyan-500/10"
                        style={{
                            width: orbit.radius * 2,
                            height: orbit.radius * 2,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}

                {/* Astronauta central (fuera de la rotación) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[15%] aspect-square
                    flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full filter blur-3xl" />
                    <iframe
                        className="w-full h-full pointer-events-none relative z-20"
                        src="https://lottie.host/embed/42c31a9f-db5d-438c-8488-2945d105093f/AyobcxbbLF.json"
                    />
                </div>

                {/* Contenedor rotativo para las skills */}
                <motion.div
                    className="absolute inset-0 galaxy-rotation"
                    animate={controls}
                    initial={{ rotate: 0 }}
                >
                    {sortedSkills.map((skill, index) => {
                        const orbitIndex = getOrbitIndex(skill.level);
                        const orbit = orbits[orbitIndex];
                        const skillsInOrbit = sortedSkills.filter(s =>
                            getOrbitIndex(s.level) === orbitIndex
                        ).length;

                        const angleOffset = (2 * Math.PI) / skillsInOrbit;
                        const currentSkillInOrbit = sortedSkills.filter(s =>
                            getOrbitIndex(s.level) === orbitIndex
                        ).indexOf(skill);
                        const angle = currentSkillInOrbit * angleOffset;

                        const x = Math.cos(angle) * orbit.radius;
                        const y = Math.sin(angle) * orbit.radius;

                        return (
                            <motion.div
                                key={skill.name}
                                className="absolute"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    x,
                                    y,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    },
                                }}
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <motion.div
                                    className="relative group cursor-pointer"
                                    whileHover={{
                                        scale: 1.3,
                                        zIndex: 100,
                                        transition: { duration: 0.2 }
                                    }}
                                    onHoverStart={() => handleSkillHover(skill)}
                                    onHoverEnd={() => handleSkillHover(null)}
                                >
                                    <div
                                        className={`
            w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
            flex items-center justify-center
            bg-black/70 backdrop-blur-md
            border border-cyan-500/30
            transition-all duration-300
            hover:border-cyan-400
            ${hoveredSkill === skill.name ? 'scale-110 border-cyan-400 shadow-lg shadow-cyan-500/50' : ''}
        `}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}