"use client";

import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  ShieldCheck,
  Brain,
  Activity,
  Database,
  ArrowRight,
  Lock,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">AMIPO</h1>
              <p className="text-[10px] text-[#737373]">
                Identity Protection
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[#a3a3a3] md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#technology" className="transition hover:text-white">
              Technology
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm text-[#a3a3a3] transition hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e5e5e5]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <WavyBackground
          className="mx-auto max-w-7xl px-6 pt-28"
          containerClassName="min-h-screen"
          colors={["#404040", "#737373", "#a3a3a3", "#525252"]}
          waveWidth={50}
          backgroundFill="#0a0a0a"
          blur={10}
          speed="slow"
          waveOpacity={0.25}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#a3a3a3] backdrop-blur">
              <Lock size={13} />
              AI-Powered Identity Privacy
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Protect Your
              <span className="block text-[#a3a3a3]">
                Digital Identity
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg">
              AMIPO analyzes your social media content, metadata, behavior,
              and cross-platform signals to identify identity leakage before
              attackers can exploit it.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5e5e5]"
              >
                Start Protecting
                <ArrowRight size={16} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore AMIPO
              </a>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-[#303030] bg-[#0a0a0a] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#737373]">
              PRIVACY INTELLIGENCE
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Understand what your data reveals
            </h2>

            <p className="mt-4 text-[#737373]">
              AMIPO looks beyond the text you publish and analyzes multiple
              sources of identity information that can contribute to
              deanonymization.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Brain}
              title="Text Analysis"
              description="Analyze linguistic patterns and identify textual signals that can reveal authorship."
            />

            <FeatureCard
              icon={Database}
              title="Metadata Analysis"
              description="Detect privacy risks hidden inside timestamps, platform metadata, and contextual information."
            />

            <FeatureCard
              icon={Activity}
              title="Behavior Analysis"
              description="Analyze behavioral and interaction patterns that may contribute to identity leakage."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Cross-Platform Risk"
              description="Identify signals that can connect activity across different social platforms."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-[#303030] bg-[#111111] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-medium text-[#737373]">
              HOW AMIPO WORKS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From exposure to protection
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#737373]">
              AMIPO combines privacy assessment, AI attack simulation, and
              adaptive protection into a single workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            <Step number="01" title="Input" text="Submit your social media data." />
            <Step number="02" title="Extract" text="Extract text, metadata, and behavioral signals." />
            <Step number="03" title="Assess" text="Calculate your Identity Leakage Index." />
            <Step number="04" title="Simulate" text="Test AI-powered deanonymization attacks." />
            <Step number="05" title="Protect" text="Apply adaptive privacy transformations." />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        id="technology"
        className="border-t border-[#303030] bg-[#0a0a0a] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-[#737373]">
              PRIVACY TECHNOLOGY
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built to measure and reduce identity leakage
            </h2>

            <p className="mt-5 leading-7 text-[#737373]">
              AMIPO uses a multi-modal privacy pipeline to understand how
              easily an individual could be identified from their digital
              footprint.
            </p>

            <div className="mt-8 space-y-5">
              <TechItem
                icon={ShieldCheck}
                title="Identity Leakage Index"
                text="A quantitative measure of overall identity exposure."
              />

              <TechItem
                icon={Brain}
                title="AI Attack Simulation"
                text="Simulate transformer-based and graph-based deanonymization attacks."
              />

              <TechItem
                icon={Zap}
                title="Adaptive Protection"
                text="Recommend targeted transformations based on detected privacy risks."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[#303030] bg-[#181818] p-8">
            <div className="rounded-xl border border-[#303030] bg-[#0a0a0a] p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#737373]">
                  Identity Leakage Index
                </span>

                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                  High Risk
                </span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-bold">64</span>
                <span className="mb-2 text-sm text-[#737373]">/ 100</span>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#303030]">
                <div className="h-full w-[64%] rounded-full bg-red-400" />
              </div>

              <div className="mt-8 space-y-4">
                <RiskRow name="Text" value="58" />
                <RiskRow name="Metadata" value="72" />
                <RiskRow name="Behavior" value="45" />
                <RiskRow name="Cross-Platform" value="61" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#303030] bg-[#111111] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-[#a3a3a3]" />

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Take control of your digital identity
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#737373]">
            Analyze your privacy exposure and discover how AI-driven attacks
            could identify you across the digital world.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5e5e5]"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#303030] bg-[#0a0a0a] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#737373] sm:flex-row">
          <p>© 2026 AMIPO. Identity Protection Platform.</p>

          <div className="flex gap-6">
            <Link href="/login" className="hover:text-white">
              Login
            </Link>
            <Link href="/signup" className="hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#303030] bg-[#181818] p-6 transition hover:bg-[#1f1f1f]">
      <Icon className="h-6 w-6 text-[#a3a3a3]" />

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#737373]">
        {description}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-[#404040] pt-5">
      <span className="text-xs text-[#737373]">{number}</span>

      <h3 className="mt-3 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#737373]">{text}</p>
    </div>
  );
}

function TechItem({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#303030] bg-[#181818]">
        <Icon size={18} />
      </div>

      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-[#737373]">{text}</p>
      </div>
    </div>
  );
}

function RiskRow({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[#a3a3a3]">{name}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}