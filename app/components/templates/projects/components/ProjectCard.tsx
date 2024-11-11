import { motion } from "framer-motion";
import { Project } from "@/app/components/templates/projects/projects";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br 
                from-purple-950/50 via-slate-900/50 to-black/50 
                backdrop-blur-sm border border-purple-500/20
                hover:border-purple-400/40 transition-colors duration-300"
        >
            <ProjectImage project={project} />
            <ProjectContent project={project} />
        </motion.div>
    );
}