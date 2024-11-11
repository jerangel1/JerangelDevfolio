import Link from "next/link";

type PreviewLinkProps = {
    previewLink: string;
}

export default function PreviewLink({ previewLink }: PreviewLinkProps) {
    return (
        <Link
            href={previewLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-400 
                hover:text-purple-300 transition-colors text-sm
                group"
        >
            <span>Visit Project</span>
            <span className="transform group-hover:translate-x-1 transition-transform">
                →
            </span>
        </Link>
    );
}