"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[#0a0a0a] p-6 text-[#f5f5f5] md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-3 self-center">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#f5f5f5] text-[#0a0a0a]">
            <ShieldCheck className="size-5" />
          </div>

          <div>
            <div className="text-lg font-bold">AMIPO</div>
            <div className="text-[10px] text-[#737373]">
              Identity Protection
            </div>
          </div>
        </Link>

        <SignupForm />

        <p className="text-center text-xs text-[#737373]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#f5f5f5] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}