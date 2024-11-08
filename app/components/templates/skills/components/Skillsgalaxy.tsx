"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../types/skills";
import { Portal } from '@radix-ui/react-portal';

export default function SkillsGalaxy() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [isRotating, setIsRotating] = useState(true);
    const controls = useAnimationControls();

    const getCardPosition = (element: HTMLElement | null) => {
        if (!element) return { top: 0, left: 0 };
        const rect = element.getBoundingClientRect();
        const top = rect.bottom + 16;
        const left = rect.left + (rect.width / 2);
        return { top, left };
    };

    const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

    const getResponsiveRadius = (baseRadius: number) => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 640) return baseRadius * 0.4;
            if (width < 1024) return baseRadius * 0.6;
            return baseRadius;
        }
        return baseRadius;
    };

    const orbits = [
        { radius: getResponsiveRadius(100), speed: 1.2, minLevel: 90 },
        { radius: getResponsiveRadius(180), speed: 1, minLevel: 80 },
        { radius: getResponsiveRadius(260), speed: 0.8, minLevel: 70 },
        { radius: getResponsiveRadius(340), speed: 0.6, minLevel: 0 }
    ];

    const getOrbitIndex = (level: number) => {
        return orbits.findIndex(orbit => level >= orbit.minLevel);
    };

    const galaxyVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 200,
                repeat: Infinity,
                ease: "linear",
            },
        },
        stop: {
            rotate: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        }
    };

    useEffect(() => {
        if (!isRotating) {
            controls.start("stop");
        } else {
            controls.start("rotate");
        }
    }, [isRotating, controls]);

    return (
        <div className="w-full h-full flex items-center justify-center perspective-1000">
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]
                border border-purple-500/5 rounded-full
                flex items-center justify-center
                bg-black/20 backdrop-blur-sm
                transform-style-3d rotate-x-30"
                onMouseEnter={() => setIsRotating(false)}
                onMouseLeave={() => setIsRotating(true)}>

                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent 
                    rounded-full transform translate-z-[-50px] blur-md" />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
                    flex items-center justify-center z-10
                    transform translate-z-[20px]">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full filter blur-3xl" />
                    <iframe
                        className="w-full h-full pointer-events-none relative z-20"
                        src="https://lottie.host/embed/42c31a9f-db5d-438c-8488-2945d105093f/AyobcxbbLF.json"
                    />
                </div>

                {orbits.map((orbit, index) => (
                    <motion.div
                        key={`orbit-${index}`}
                        className="absolute rounded-full
                            border border-purple-500/10
                            backdrop-blur-sm
                            transform-style-3d"
                        style={{
                            width: orbit.radius * 2,
                            height: orbit.radius * 2,
                            transform: `translate(-50%, -50%) translateZ(${index * 10}px) rotateX(${index * 5}deg)`,
                            rotate: `${index * 15}deg`,
                        }}
                        animate={{
                            rotateZ: isRotating ? 360 : 0,
                            boxShadow: [
                                '0 0 15px rgba(168, 85, 247, 0.1)',
                                '0 0 20px rgba(168, 85, 247, 0.15)',
                                '0 0 15px rgba(168, 85, 247, 0.1)',
                            ],
                        }}
                        transition={{
                            rotateZ: {
                                duration: 100 / orbit.speed,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    />
                ))}

                <motion.div
                    className="absolute inset-0 transform-style-3d"
                    variants={galaxyVariants}
                    initial="rotate"
                    animate={controls}
                >
                    {sortedSkills.map((skill, index) => {
                        const orbitIndex = getOrbitIndex(skill.level);
                        const orbit = orbits[orbitIndex];
                        const skillsInOrbit = sortedSkills.filter(s =>
                            getOrbitIndex(s.level) === orbitIndex
                        ).length;
                        const angleOffset = (index * 30) % 360;
                        const angle = ((index * 2 * Math.PI) / skillsInOrbit) + (angleOffset * Math.PI / 180);
                        const x = Math.cos(angle) * orbit.radius;
                        const y = Math.sin(angle) * orbit.radius;
                        const z = Math.sin(angle * 2) * 20;

                        return (
                            <motion.div
                                key={skill.name}
                                className="absolute"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    x,
                                    y,
                                    z,
                                    rotateX: Math.sin(angle) * 15,
                                    rotateY: Math.cos(angle) * 15,
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
                                    className="relative group"
                                    whileHover={{ scale: 1.2, zIndex: 100 }}
                                    onHoverStart={() => setHoveredSkill(skill.name)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                >
                                    <a
                                        id={skill.name}
                                        href={skill.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            w-12 h-12 sm:w-16 sm:h-16 rounded-full 
                                            flex items-center justify-center
                                            bg-black/50 backdrop-blur-md
                                            border border-purple-500/30
                                            transition-all duration-300
                                            hover:border-purple-400
                                            ${hoveredSkill === skill.name ? 'scale-110 border-purple-400 shadow-lg shadow-purple-500/50' : ''}
                                        `}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                        />
                                    </a>

                                    {hoveredSkill === skill.name && (
                                        <Portal>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                style={{
                                                    position: 'fixed',
                                                    top: getCardPosition(document.getElementById(skill.name))?.top,
                                                    left: getCardPosition(document.getElementById(skill.name))?.left,
                                                    transform: 'translateX(-50%)',
                                                    zIndex: 9999,
                                                }}
                                                className="bg-gradient-to-b from-purple-900/90 to-black/90 
                                                    backdrop-blur-md rounded-lg p-4
                                                    border-2 border-purple-500/30 
                                                    w-[250px] sm:w-[300px]
                                                    shadow-xl shadow-purple-500/20"
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <p className="text-white font-bold">{skill.name}</p>
                                                    <p className="text-purple-400 font-mono">Lvl {skill.level}</p>
                                                </div>
                                                <div className="w-full bg-black/50 h-3 rounded-full p-[2px]">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                                        className="h-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 rounded-full
                                                            relative overflow-hidden"
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                                            animate-shine" />
                                                    </motion.div>
                                                </div>
                                                <p className="text-sm text-gray-300 mt-3 leading-tight">
                                                    {skill.description}
                                                </p>
                                            </motion.div>
                                        </Portal>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}