const risks = [
  {
    name: "Text",
    value: 58,
  },
  {
    name: "Metadata",
    value: 72,
  },
  {
    name: "Behavior",
    value: 45,
  },
  {
    name: "Cross-Platform",
    value: 61,
  },
];

function getRiskLabel(value: number) {
  if (value >= 70) return "High";
  if (value >= 40) return "Medium";
  return "Low";
}

function getRiskStyle(value: number) {
  if (value >= 70) {
    return {
      text: "text-red-400",
      bar: "bg-red-400",
    };
  }

  if (value >= 40) {
    return {
      text: "text-yellow-400",
      bar: "bg-yellow-400",
    };
  }

  return {
    text: "text-emerald-400",
    bar: "bg-emerald-400",
  };
}

export default function RiskOverview() {
  return (
    <div className="rounded-xl border border-[#303030] bg-[#181818] p-6 transition-colors hover:bg-[#1f1f1f]">
      <div>
        <h2 className="text-lg font-semibold text-[#f5f5f5]">
          Risk by Modality
        </h2>

        <p className="mt-1 text-sm text-[#737373]">
          Identity leakage across different data sources.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {risks.map((risk) => {
          const style = getRiskStyle(risk.value);

          return (
            <div key={risk.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#a3a3a3]">
                  {risk.name}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#f5f5f5]">
                    {risk.value}
                  </span>

                  <span
                    className={`text-xs font-medium ${style.text}`}
                  >
                    {getRiskLabel(risk.value)}
                  </span>
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#303030]">
                <div
                  className={`h-full rounded-full ${style.bar}`}
                  style={{ width: `${risk.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}