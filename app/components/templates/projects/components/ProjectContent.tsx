import { Project } from "@/app/components/templates/projects/projects";
import ProjectHeader from "./ProjectHeader";
import TechStack from "./TechStack";
import Description from "./Description";
import PreviewLink from "./PreviewLink";

type ProjectContentProps = {
    project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
    return (
        <div className="p-6 space-y-4">
            <ProjectHeader project={project} />
            <TechStack techStack={project.techStack} />
            <Description description={project.description} />
            <PreviewLink previewLink={project.previewLink} />
        </div>
    );
}