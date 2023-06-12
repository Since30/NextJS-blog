import Image from "next/image";

interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, className }) => {
    return <div className={`flex flex-col ${className || ''}`}>
        <h1>{title}</h1>
        <Image className="p-5" src={image} alt={title} width={768} height={512} />
        <span>{description}</span>
    </div>
}