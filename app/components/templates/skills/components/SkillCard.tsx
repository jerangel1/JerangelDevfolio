import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "../types/skills";

type SkillCardProps = {
    skill: Skill | null;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <AnimatePresence mode="wait">
            {skill ? (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-black/80 via-slate-900/90 to-black/80 
                        backdrop-blur-md rounded-xl p-5
                        border border-cyan-500/20 
                        w-full max-w-lg
                        shadow-lg shadow-cyan-500/10
                        relative overflow-hidden"
                >
                    {/* Efecto de brillo en el borde */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent 
                        animate-shimmer" />

                    <div className="relative z-10">
                        {/* Encabezado */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-cyan-200 
                                bg-clip-text text-transparent">
                                {skill.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-cyan-400 font-mono text-sm">Level</span>
                                <div className="bg-cyan-950/50 rounded-md px-2 py-1 border border-cyan-500/20">
                                    <span className="text-cyan-400 font-mono font-bold">
                                        {skill.level}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Barra de progreso */}
                        <div className="w-full bg-black/50 h-2 rounded-full mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            />
                        </div>

                        {/* Descripción */}
                        <p className="text-sm text-gray-300/90 leading-relaxed">
                            {skill.description}
                        </p>

                        {/* Link */}
                        <a
                            href={skill.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-xs text-cyan-400 hover:text-cyan-300 
                                transition-colors duration-200"
                        >
                            Learn more →
                        </a>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="placeholder"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-black/80 via-slate-900/90 to-black/80 
                        backdrop-blur-md rounded-xl p-5
                        border border-cyan-500/20 
                        w-full max-w-lg
                        shadow-lg shadow-cyan-500/10
                        relative overflow-hidden"
                >
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-cyan-200 
                            bg-clip-text text-transparent">
                            Frontend Developer with Full-Stack Capabilities
                        </h3>
                        
                        <div className="space-y-2 text-gray-300/90">
                            <p className="text-sm leading-relaxed">
                                <span className="text-cyan-400 font-semibold">Core Stack:</span> TypeScript + Next.js + React
                            </p>
                            
                            <p className="text-sm leading-relaxed">
                                <span className="text-cyan-400 font-semibold">Frontend Expertise:</span> 
                                <span className="text-cyan-400">90-100%:</span> TypeScript, Next.js, HTML, Tailwind CSS
                                <br />
                                <span className="text-cyan-400">80-89%:</span> React, CSS, Python
                            </p>
                            
                            <p className="text-sm leading-relaxed">
                                <span className="text-cyan-400 font-semibold">Tools & Deployment:</span>
                                <br />
                                <span className="text-cyan-400">90-100%:</span> Git, Vercel
                                <br />
                                <span className="text-cyan-400">80-89%:</span> GitHub, Canva
                            </p>
                            
                            <p className="text-sm leading-relaxed">
                                <span className="text-cyan-400 font-semibold">Currently Learning:</span> Expanding knowledge in Docker, Firebase, and UI/UX design with Figma
                            </p>
                        </div>
                        
                        <p className="text-cyan-400 text-sm italic mt-4">
                            🚀 Hover over the skills in the galaxy to explore my tech stack in detail!
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}