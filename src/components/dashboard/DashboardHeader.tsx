import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-[#737373]">
          Overview
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#f5f5f5]">
          Privacy Dashboard
        </h1>

        <p className="mt-2 text-sm text-[#a3a3a3]">
          Monitor and protect your digital identity.
        </p>
      </div>

      <Link
        href="/analyze"
        className="inline-flex items-center justify-center rounded-lg border border-[#303030] bg-[#f5f5f5] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-white"
      >
        Start New Analysis
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}