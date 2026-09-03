"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
// import AnalysisStepper from "@/components/analyze/AnalysisStepper";
import PlatformSelector from "@/components/analyze/PlatformSelector";
import PostInput from "@/components/analyze/PostInput";
import DataSourceSelector from "@/components/analyze/DataSourceSelector";

export default function AnalyzePage() {
  const router = useRouter();

  const [platform, setPlatform] = useState("Instagram");
  const [post, setPost] = useState("");
  const [selectedSources, setSelectedSources] = useState([
    "text",
    "metadata",
  ]);

  function handleAnalysis() {
    if (!post.trim()) return;

    sessionStorage.setItem(
      "amipo-analysis",
      JSON.stringify({
        platform,
        post,
        selectedSources,
      })
    );

    router.push("/analysis");
  }

  return (
    <AppLayout>
      <div className="mx-auto max-w-5xl p-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Privacy Analysis
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            New Analysis
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Analyze your content for potential identity leakage.
          </p>
        </div>

        {/* <AnalysisStepper /> */}

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              Analyze a Social Post
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Provide the content and signals you want AMIPO to evaluate.
            </p>
          </div>

          <div className="space-y-8">
            <PlatformSelector
              value={platform}
              onChange={setPlatform}
            />

            <PostInput
              value={post}
              onChange={setPost}
            />

            <DataSourceSelector
              selected={selectedSources}
              onChange={setSelectedSources}
            />
          </div>

          <div className="mt-8 flex justify-end border-t border-slate-800 pt-6">
            <button
              onClick={handleAnalysis}
              disabled={!post.trim()}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Start Analysis
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}