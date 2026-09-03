"use client"

import { usePathname } from "next/navigation"
import Sidebar from "@/components/layout/Sidebar"
import AnalysisStepper from "../analyze/AnalysisStepper"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isAnalysisFlow =
    pathname === "/analyze" ||
    pathname === "/analysis" ||
    pathname === "/risk" ||
    pathname === "/protection"

  let currentStep = 1

  if (pathname === "/analysis") currentStep = 2
  if (pathname === "/risk") currentStep = 3
  if (pathname === "/protection") currentStep = 4

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Sidebar />

      <main className="relative ml-64 min-h-screen overflow-hidden">
        <StarsBackground
          className="absolute inset-0 z-0"
          starDensity={0.00015}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
        />

        <ShootingStars
          className="absolute inset-0 z-0"
          minSpeed={10}
          maxSpeed={30}
          minDelay={4200}
          maxDelay={8700}
          starColor="#ffffff"
          trailColor="#737373"
          starWidth={10}
          starHeight={1}
        />

        <div className="relative z-10">
          {isAnalysisFlow && (
            <div className="border-b border-[#303030] px-8 py-5">
              <AnalysisStepper currentStep={currentStep} />
            </div>
          )}

          <div className="p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}