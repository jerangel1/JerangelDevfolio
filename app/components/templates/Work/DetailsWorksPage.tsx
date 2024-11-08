"use client";
import { SpaceBackground } from "@/app/components/templates/Work/components/spacebackground";
import { experiences } from "@/app/components/templates/Work/types/experiences";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperienceDetail({ params }: { params: { id: string } }) {
    const experience = experiences.find(exp => exp.id === parseInt(params.id));

    if (!experience) return <div>Experience not found</div>;

    return (
        <div className="relative min-h-screen">
            <SpaceBackground />

            <div className="relative z-10 container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md 
                    rounded-xl p-8 border border-purple-500/20"
                >
                    <Link
                        href="/work"
                        className="text-purple-400 hover:text-purple-300 mb-8 inline-block"
                    >
                        ← Back to timeline
                    </Link>

                    <h1 className="text-4xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                        {experience.position}
                    </h1>

                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl text-white/90">{experience.company}</h2>
                        <span className="text-purple-300">{experience.date}</span>
                    </div>

                    {/* Aquí puedes agregar más detalles específicos de cada experiencia */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300">{experience.content}</p>

                        {/* Agrega más secciones según necesites */}
                    </div>

                    <div className="mt-8">
                        <a
                            href={experience.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg
                       bg-purple-500/20 text-purple-300 hover:bg-purple-500/30
                       border border-purple-500/30 transition-colors"
                        >
                            Visit Project →
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}