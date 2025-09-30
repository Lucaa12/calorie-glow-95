import { useState } from "react";
import { Welcome } from "@/components/Welcome";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { OnboardingData } from "@/types/onboarding";
import { toast } from "sonner";

type Screen = "welcome" | "onboarding" | "complete";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");

  const handleGetStarted = () => {
    setScreen("onboarding");
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log("Onboarding data:", data);
    toast.success("Welcome aboard! Your profile is all set up.");
    setScreen("complete");
  };

  if (screen === "welcome") {
    return <Welcome onGetStarted={handleGetStarted} />;
  }

  if (screen === "onboarding") {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl surface-glow bg-surface mb-4">
          <span className="text-3xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold">You're all set!</h1>
        <p className="text-foreground-secondary max-w-md">
          Your personalized calorie tracking journey starts now. Check the console for your profile data.
        </p>
      </div>
    </div>
  );
};

export default Index;
