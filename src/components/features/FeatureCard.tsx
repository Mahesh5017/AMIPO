import FeatureItem from "./FeatureItem";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function FeatureCard({
  title,
  description,
  icon,
  features,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-lg">
          {icon}
        </div>

        <div>
          <h2 className="font-semibold">{title}</h2>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        {features.map((feature) => (
          <FeatureItem
            key={feature}
            name={feature}
            status="complete"
          />
        ))}
      </div>
    </div>
  );
}