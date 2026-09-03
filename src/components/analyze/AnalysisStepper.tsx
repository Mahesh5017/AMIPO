type AnalysisStepperProps = {
  currentStep: number;
};

export default function AnalysisStepper({
  currentStep,
}: AnalysisStepperProps) {
  const steps = [
    "Input",
    "Feature Analysis",
    "Risk Assessment",
    "Protection",
  ];

  return (
    <div className="flex items-center justify-center bg-[#0a0a0a] py-2">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = stepNumber <= currentStep;

        return (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-medium ${
                  active
                    ? "border-[#f5f5f5] bg-[#f5f5f5] text-[#0a0a0a]"
                    : "border-[#404040] bg-[#181818] text-[#a3a3a3]"
                }`}
              >
                {stepNumber}
              </div>

              <span
                className={`text-sm ${
                  active
                    ? "font-medium text-[#f5f5f5]"
                    : "text-[#737373]"
                }`}
              >
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-px w-16 ${
                  stepNumber < currentStep
                    ? "bg-[#f5f5f5]"
                    : "bg-[#303030]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}