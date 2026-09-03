interface DataSource {
  id: string;
  name: string;
  description: string;
}

interface DataSourceSelectorProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const sources: DataSource[] = [
  {
    id: "text",
    name: "Text",
    description: "Writing style and linguistic patterns",
  },
  {
    id: "metadata",
    name: "Metadata",
    description: "Timestamp, device and location information",
  },
  {
    id: "behavior",
    name: "Behavior",
    description: "Posting and interaction patterns",
  },
  {
    id: "interactions",
    name: "Interactions",
    description: "Engagement and social relationships",
  },
  {
    id: "cross-platform",
    name: "Cross-Platform",
    description: "Signals across multiple platforms",
  },
];

export default function DataSourceSelector({
  selected,
  onChange,
}: DataSourceSelectorProps) {
  function toggleSource(id: string) {
    if (selected.includes(id)) {
      onChange(selected.filter((source) => source !== id));
    } else {
      onChange([...selected, id]);
    }
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-sm font-medium text-slate-300">
          Data sources
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Select the information you want AMIPO to analyze.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {sources.map((source) => {
          const isSelected = selected.includes(source.id);

          return (
            <button
              type="button"
              key={source.id}
              onClick={() => toggleSource(source.id)}
              className={`rounded-lg border p-4 text-left transition ${
                isSelected
                  ? "border-slate-500 bg-slate-800"
                  : "border-slate-800 bg-slate-950 hover:border-slate-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded border text-xs ${
                    isSelected
                      ? "border-white bg-white text-slate-950"
                      : "border-slate-700"
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {source.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {source.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}