interface ExtractionProgressProps {
  progress: number;
}

export default function ExtractionProgress({
  progress,
}: ExtractionProgressProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Feature Extraction</h2>

          <p className="mt-1 text-sm text-slate-500">
            AMIPO is analyzing your selected signals.
          </p>
        </div>

        <span className="text-2xl font-bold">{progress}%</span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-600">
        <span>Extracting features</span>
        <span>{progress === 100 ? "Complete" : "Processing..."}</span>
      </div>
    </div>
  );
}