"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function LoginPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Full-screen animated background */}
      <WavyBackground
        className="absolute inset-0 z-0 h-full w-full"
        containerClassName="h-full min-h-svh w-full"
        colors={["#404040", "#737373", "#a3a3a3", "#525252"]}
        waveWidth={50}
        backgroundFill="#0a0a0a"
        blur={10}
        speed="slow"
        waveOpacity={0.25}
      >
        {/* Background only */}

      {/* Dark overlay for better form readability */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Login content */}
      <div className="relative z-20 flex min-h-svh items-center justify-center p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 self-center transition-opacity hover:opacity-80"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#f5f5f5] text-[#0a0a0a] shadow-lg">
              <ShieldCheck className="size-5" />
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight">
                AMIPO
              </div>
              <div className="text-[10px] tracking-wide text-[#a3a3a3]">
                Identity Protection
              </div>
            </div>
          </Link>

          {/* Login form */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/75 p-6 shadow-2xl backdrop-blur-xl">
            <LoginForm />
          </div>

          {/* Signup */}
          <p className="text-center text-xs text-[#a3a3a3]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#f5f5f5] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
        <div />
      </WavyBackground>
    </div>
  )
}

