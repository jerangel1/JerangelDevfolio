type DescriptionProps = {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    return (
        <p className="text-gray-300 text-sm leading-relaxed">
            {description}
        </p>
    );
}