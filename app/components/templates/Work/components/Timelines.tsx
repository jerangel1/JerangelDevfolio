import { motion, useScroll, useTransform } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "@/app/components/templates/Work/types/experiences";
import { useRef } from "react";

type TimelineProps = {
    experiences: Experience[];
}

export const Timeline = ({ experiences }: TimelineProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <motion.div
            ref={containerRef}
            className="timeline-container relative max-w-4xl mx-auto"
            style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
            }}
        >
            {/* Línea central */}
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
                    className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''
                        }`}
                >
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2
                      w-4 h-4 rounded-full bg-purple-500
                      border-2 border-white/20 shadow-lg
                      shadow-purple-500/50" />

                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                        <ExperienceCard experience={experience} />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};