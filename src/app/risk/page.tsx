"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";

type AnalysisData = {
  platform: string;
  post: string;
  selectedSources: string[];
};

type RiskFactor = {
  title: string;
  description: string;
  level: "Low" | "Medium" | "High";
  value: number;
  icon: string;
};

export default function RiskPage() {
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

  const riskFactors: RiskFactor[] = [
    {
      title: "Text Risk",
      description:
        "Linguistic patterns that may contribute to identity inference.",
      level: "Medium",
      value: 58,
      icon: "Aa",
    },
    {
      title: "Metadata Risk",
      description:
        "Metadata that may expose information about the content or device.",
      level: "High",
      value: 78,
      icon: "◫",
    },
    {
      title: "Behavior Risk",
      description:
        "Activity patterns that may make your identity more identifiable.",
      level: "Medium",
      value: 52,
      icon: "◷",
    },
    {
      title: "Interaction Risk",
      description:
        "Social relationships and interaction patterns that may reveal identity.",
      level: "Low",
      value: 31,
      icon: "◎",
    },
    {
      title: "Cross-Platform Risk",
      description:
        "Signals that could connect this activity with another platform.",
      level: "Medium",
      value: 64,
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
            Risk Assessment
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Evaluating how strongly the detected signals may contribute to
            identity leakage.
          </p>
        </div>

        {/* Overall Risk */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Overall Privacy Risk
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Medium Risk
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Multiple signals were detected that could potentially
                contribute to identifying the author or connecting this
                activity with other online activity.
              </p>

              {analysis && (
                <div className="mt-4 text-xs text-slate-500">
                  Platform:{" "}
                  <span className="text-slate-300">
                    {analysis.platform}
                  </span>
                </div>
              )}
            </div>

            {/* Overall Score */}
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-8 border-slate-700">
              <div className="text-center">
                <p className="text-2xl font-bold">
                  61
                </p>

                <p className="text-xs text-slate-500">
                  / 100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              Risk Factors
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Individual risk levels identified across the analyzed signals.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {riskFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sm font-semibold">
                      {factor.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {factor.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {factor.level} risk
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    {factor.value}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-400">
                  {factor.description}
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-slate-300"
                    style={{
                      width: `${factor.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div>
            <h2 className="text-xl font-semibold">
              Privacy Recommendations
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Actions that may help reduce the privacy risk of this content.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex gap-4 rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <span className="text-sm font-semibold text-slate-400">
                01
              </span>

              <div>
                <h3 className="text-sm font-semibold">
                  Review metadata
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Remove unnecessary metadata such as location or device
                  information before publishing.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <span className="text-sm font-semibold text-slate-400">
                02
              </span>

              <div>
                <h3 className="text-sm font-semibold">
                  Reduce identifying details
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Avoid combining personal details that could make the author
                  easier to identify.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <span className="text-sm font-semibold text-slate-400">
                03
              </span>

              <div>
                <h3 className="text-sm font-semibold">
                  Review cross-platform signals
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Consider whether similar content or behavior could link this
                  post to another account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between border-t border-slate-800 pt-6">
          <button
            onClick={() => router.push("/analysis")}
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            ← Back
          </button>

          <button
            onClick={() => router.push("/protection")}
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Continue to Protection →
          </button>
        </div>
      </div>
    </AppLayout>
  );
}