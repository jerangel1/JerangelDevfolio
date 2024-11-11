import { Tech } from "@/app/components/templates/projects/projects"
type TechStackProps = {
    techStack: Tech[];
}

export default function TechStack({ techStack }: TechStackProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            {techStack.map((tech, index) => (
                <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-black/50 p-1.5
                        border border-purple-500/30
                        hover:border-purple-400/60 transition-colors
                        group-hover:scale-105"
                >
                    <img
                        src={tech.imgSrc}
                        alt={tech.altText}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
}