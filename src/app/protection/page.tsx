"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";

type AnalysisData = {
  platform: string;
  post: string;
  selectedSources: string[];
};

type ProtectionItem = {
  title: string;
  description: string;
  impact: string;
  action: string;
  icon: string;
};

export default function ProtectionPage() {
  const router = useRouter();

  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);

  useEffect(() => {
    const storedAnalysis = sessionStorage.getItem("amipo-analysis");

    if (!storedAnalysis) {
      return;
    }

    try {
      const parsedAnalysis: AnalysisData = JSON.parse(storedAnalysis);
      setAnalysis(parsedAnalysis);
    } catch (error) {
      console.error("Failed to parse analysis data:", error);
    }
  }, []);

  const protectionItems: ProtectionItem[] = [
    {
      title: "Remove Location Information",
      description:
        "Location signals may make it easier to associate the content with a specific place.",
      impact: "High impact",
      action: "Remove location",
      icon: "⌖",
    },
    {
      title: "Minimize Metadata",
      description:
        "Unnecessary metadata can expose information about the device or circumstances surrounding the post.",
      impact: "High impact",
      action: "Strip metadata",
      icon: "◫",
    },
    {
      title: "Reduce Personal Details",
      description:
        "Personal references can provide additional clues that increase the likelihood of identity inference.",
      impact: "Medium impact",
      action: "Review content",
      icon: "◉",
    },
    {
      title: "Limit Cross-Platform Signals",
      description:
        "Similar usernames, writing patterns, or content can make accounts easier to connect.",
      impact: "Medium impact",
      action: "Review connections",
      icon: "⇄",
    },
  ];

  return (
    <AppLayout>
      <div className="mx-auto max-w-6xl p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Privacy Analysis
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Protection
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Review the detected privacy risks and take steps to reduce
            identity leakage.
          </p>
        </div>

        {/* Final Result */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Protection Status
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Action Recommended
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Your content contains privacy signals that may increase the
                possibility of identity inference. Review the recommendations
                below before publishing.
              </p>

              {analysis && (
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300">
                    Platform: {analysis.platform}
                  </span>

                  <span className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300">
                    Sources: {analysis.selectedSources.length}
                  </span>
                </div>
              )}
            </div>

            {/* Score Comparison */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-700">
                  <div>
                    <p className="text-2xl font-bold">
                      61
                    </p>

                    <p className="text-[10px] text-slate-500">
                      CURRENT
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Current Risk
                </p>
              </div>

              <div className="text-xl text-slate-600">
                →
              </div>

              <div className="text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-600">
                  <div>
                    <p className="text-2xl font-bold">
                      24
                    </p>

                    <p className="text-[10px] text-slate-500">
                      TARGET
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              Recommended Protection
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Prioritized actions based on the detected privacy signals.
            </p>
          </div>

          <div className="space-y-4">
            {protectionItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  {/* Number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-sm">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                        {item.impact}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Action */}
                  <button
                    className="shrink-0 rounded-lg border border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-800"
                  >
                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Summary */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sm">
              ✓
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Privacy Summary
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Applying the recommended actions can significantly reduce the
                number of identifying signals associated with this content.
                Review each recommendation before publishing.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between border-t border-slate-800 pt-6">
          <button
            onClick={() => router.push("/risk")}
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            ← Back to Risk
          </button>

          <button
            onClick={() => router.push("/analyze")}
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Start New Analysis →
          </button>
        </div>
      </div>
    </AppLayout>
  );
}