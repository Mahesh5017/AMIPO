const analyses = [
  {
    platform: "Instagram",
    date: "Today",
    score: 64,
    risk: "High",
  },
  {
    platform: "Twitter / X",
    date: "Yesterday",
    score: 41,
    risk: "Medium",
  },
  {
    platform: "Reddit",
    date: "Aug 30",
    score: 27,
    risk: "Low",
  },
];

function getRiskStyle(risk: string) {
  if (risk === "High") {
    return "bg-red-500/10 text-red-400";
  }

  if (risk === "Medium") {
    return "bg-yellow-500/10 text-yellow-400";
  }

  return "bg-emerald-500/10 text-emerald-400";
}

export default function RecentAnalyses() {
  return (
    <div className="rounded-xl border border-[#303030] bg-[#181818] p-6 transition-colors hover:bg-[#1f1f1f]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#f5f5f5]">
            Recent Analyses
          </h2>

          <p className="mt-1 text-sm text-[#737373]">
            Your latest privacy assessments.
          </p>
        </div>

        <a
          href="/history"
          className="text-sm text-[#a3a3a3] transition hover:text-white"
        >
          View all →
        </a>
      </div>

      <div className="mt-6 divide-y divide-[#303030]">
        {analyses.map((analysis) => (
          <div
            key={analysis.platform}
            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium text-[#f5f5f5]">
                {analysis.platform}
              </p>

              <p className="mt-1 text-xs text-[#737373]">
                {analysis.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#f5f5f5]">
                {analysis.score}
              </span>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${getRiskStyle(
                  analysis.risk
                )}`}
              >
                {analysis.risk}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}