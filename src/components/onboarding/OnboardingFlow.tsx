import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { OnboardingData, ONBOARDING_STEPS } from "@/types/onboarding";
import { GenderStep } from "./steps/GenderStep";
import { WorkoutsStep } from "./steps/WorkoutsStep";
import { SourceStep } from "./steps/SourceStep";
import { MeasurementsStep } from "./steps/MeasurementsStep";
import { DateOfBirthStep } from "./steps/DateOfBirthStep";
import { GoalStep } from "./steps/GoalStep";
import { GoalWeightStep } from "./steps/GoalWeightStep";
import { PaceStep } from "./steps/PaceStep";
import { ObstaclesStep } from "./steps/ObstaclesStep";
import { DietStep } from "./steps/DietStep";

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

export const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({});

  const updateData = (field: keyof OnboardingData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!data.gender;
      case 2:
        return data.workoutsPerWeek !== undefined;
      case 3:
        return !!data.source;
      case 4:
        return !!data.height && !!data.weight;
      case 5:
        return !!data.dateOfBirth;
      case 6:
        return !!data.goal;
      case 7:
        return !!data.goalWeight;
      case 8:
        return !!data.pace;
      case 9:
        return data.obstacles && data.obstacles.length > 0;
      case 10:
        return !!data.diet;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === ONBOARDING_STEPS) {
      onComplete(data);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <GenderStep value={data.gender} onChange={(v) => updateData("gender", v)} />;
      case 2:
        return <WorkoutsStep value={data.workoutsPerWeek} onChange={(v) => updateData("workoutsPerWeek", v)} />;
      case 3:
        return <SourceStep value={data.source} onChange={(v) => updateData("source", v)} />;
      case 4:
        return (
          <MeasurementsStep
            height={data.height}
            weight={data.weight}
            unitSystem={data.unitSystem}
            onHeightChange={(v) => updateData("height", v)}
            onWeightChange={(v) => updateData("weight", v)}
            onUnitSystemChange={(v) => updateData("unitSystem", v)}
          />
        );
      case 5:
        return <DateOfBirthStep value={data.dateOfBirth} onChange={(v) => updateData("dateOfBirth", v)} />;
      case 6:
        return <GoalStep value={data.goal} onChange={(v) => updateData("goal", v)} />;
      case 7:
        return (
          <GoalWeightStep
            value={data.goalWeight}
            currentWeight={data.weight}
            unitSystem={data.unitSystem}
            onChange={(v) => updateData("goalWeight", v)}
          />
        );
      case 8:
        return <PaceStep value={data.pace} onChange={(v) => updateData("pace", v)} />;
      case 9:
        return <ObstaclesStep value={data.obstacles} onChange={(v) => updateData("obstacles", v)} />;
      case 10:
        return <DietStep value={data.diet} onChange={(v) => updateData("diet", v)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col px-6 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
          <div className="flex-1">
            <ProgressBar currentStep={currentStep} totalSteps={ONBOARDING_STEPS} />
          </div>
        </div>

        <div className="flex-1 flex items-start pt-8">
          <div className="w-full">{renderStep()}</div>
        </div>

        <div className="pt-6">
          <Button
            variant="default"
            size="lg"
            onClick={handleNext}
            disabled={!canProceed()}
            className="w-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
