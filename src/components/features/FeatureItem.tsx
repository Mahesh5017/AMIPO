interface FeatureItemProps {
  name: string;
  status: "complete" | "analyzing" | "pending";
}

export default function FeatureItem({
  name,
  status,
}: FeatureItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 py-3 last:border-0">
      <span className="text-sm text-slate-300">{name}</span>

      {status === "complete" && (
        <span className="text-xs font-medium text-emerald-400">
          ✓ Complete
        </span>
      )}

      {status === "analyzing" && (
        <span className="text-xs font-medium text-yellow-400">
          Analyzing...
        </span>
      )}

      {status === "pending" && (
        <span className="text-xs text-slate-600">
          Pending
        </span>
      )}
    </div>
  );
}