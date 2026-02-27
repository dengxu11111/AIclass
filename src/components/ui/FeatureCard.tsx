interface FeatureCardProps {
    feature: string;
    index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
    return (
        <div className="flex items-start rounded-xl bg-graybg p-6 border border-graybg-dark shadow-sm transition-all hover:border-accent hover:shadow-md">
            <div className="flex-shrink-0 mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-bold">
                {index + 1}
            </div>
            <p className="flex-1 text-primary-light font-medium leading-relaxed mt-1">
                {feature}
            </p>
        </div>
    );
}
