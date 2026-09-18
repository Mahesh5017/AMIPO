"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import ExtractionProgress from "@/components/features/ExtractionProgress";
import FeatureCard from "@/components/features/FeatureCard";

export default function AnalysisPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          return 100;
        }

        return current + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppLayout>
      <div className="mx-auto max-w-6xl p-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Privacy Analysis
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Feature Analysis
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Examining signals that may reveal your identity.
          </p>
        </div>

        <ExtractionProgress progress={progress} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Text Analysis"
            description="Linguistic and stylistic characteristics."
            icon="Aa"
            features={[
              "Vocabulary",
              "Sentence Structure",
              "POS Patterns",
              "N-grams",
              "Writing Style",
            ]}
          />

          <FeatureCard
            title="Metadata Analysis"
            description="Information associated with the content."
            icon="◫"
            features={[
              "Timestamp",
              "Location",
              "Device",
              "Platform",
            ]}
          />

          <FeatureCard
            title="Behavior Analysis"
            description="Patterns in your activity and posting behavior."
            icon="◷"
            features={[
              "Posting Frequency",
              "Active Hours",
              "Engagement Patterns",
            ]}
          />

          <FeatureCard
            title="Interaction Analysis"
            description="Social interaction and relationship signals."
            icon="◎"
            features={[
              "Social Relationships",
              "Engagement Network",
              "Interaction Patterns",
            ]}
          />

          <FeatureCard
            title="Cross-Platform Analysis"
            description="Signals that may connect activity across platforms."
            icon="⇄"
            features={[
              "Shared Activity Patterns",
              "Content Similarity",
              "Platform Correlation",
            ]}
          />
        </div>

        {progress === 100 && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => router.push("/risk")}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Continue to Risk Assessment →
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}