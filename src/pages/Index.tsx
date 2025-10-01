import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome } from "@/components/Welcome";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { OnboardingData } from "@/types/onboarding";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type Screen = "welcome" | "onboarding" | "complete";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const { user, signOut, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user && screen !== "welcome") {
      navigate("/auth");
    }
  }, [user, isLoading, screen, navigate]);

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
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4">
          <span className="text-3xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold">You're all set!</h1>
        <p className="text-foreground-secondary max-w-md">
          Your personalized calorie tracking journey starts now.
        </p>
        <Button
          variant="outline"
          onClick={signOut}
          className="mt-4"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Index;
