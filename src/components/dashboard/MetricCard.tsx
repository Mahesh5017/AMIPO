interface MetricCardProps {
  title: string;
  value: number;
  description: string;
  type: "danger" | "warning" | "safe";
}

const styles = {
  danger: {
    text: "text-red-400",
    badge: "bg-red-500/10 text-red-400",
  },
  warning: {
    text: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400",
  },
  safe: {
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400",
  },
};

export default function MetricCard({
  title,
  value,
  description,
  type,
}: MetricCardProps) {
  const style = styles[type];

  return (
    <div className="rounded-xl border border-[#303030] bg-[#181818] p-6 transition-colors hover:bg-[#1f1f1f]">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-[#a3a3a3]">
          {title}
        </p>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.badge}`}
        >
          {description}
        </span>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className={`text-4xl font-bold ${style.text}`}>
          {value}
        </span>

        <span className="mb-1 text-sm text-[#737373]">
          / 100
        </span>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#303030]">
        <div
          className={`h-full rounded-full ${style.text.replace(
            "text-",
            "bg-"
          )}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}