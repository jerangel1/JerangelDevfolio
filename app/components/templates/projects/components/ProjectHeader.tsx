import Link from "next/link";
import { Project } from "@/app/components/templates/projects/projects";

type ProjectHeaderProps = {
    project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
    return (
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <div className="flex gap-2">
                {project.isPrivate ? (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-900/50 
                        border border-purple-500/30 text-purple-300">
                        Private
                    </span>
                ) : (
                    <Link
                        href={project.repository}
                        target="_blank"
                        className="px-2 py-1 text-xs rounded-full bg-purple-900/50 
                            border border-purple-500/30 text-purple-300
                            hover:bg-purple-800/50 transition-colors"
                    >
                        GitHub
                    </Link>
                )}
            </div>
        </div>
    );
}