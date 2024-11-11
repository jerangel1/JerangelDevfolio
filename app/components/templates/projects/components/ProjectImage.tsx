import { Project } from "@/app/components/templates/projects/projects";

type ProjectImageProps = {
    project: Project;
}

export default function ProjectImage({ project }: ProjectImageProps) {
    return (
        <div className="relative aspect-video overflow-hidden">
            <img
                src={project.imgSrc}
                alt={project.altText}
                className="w-full h-full object-cover transition-transform duration-300
                    group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
    );
}