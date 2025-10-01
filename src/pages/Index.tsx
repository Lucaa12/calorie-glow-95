import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome } from "@/components/Welcome";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { OnboardingData } from "@/types/onboarding";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import Home from "./Home";

type Screen = "welcome" | "onboarding" | "home";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (user && screen === "welcome") {
        setScreen("home");
      } else if (!user && screen !== "welcome") {
        navigate("/auth");
      }
    }
  }, [user, isLoading, screen, navigate]);

  const handleGetStarted = () => {
    setScreen("onboarding");
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log("Onboarding data:", data);
    toast.success("Welcome aboard! Your profile is all set up.");
    setScreen("home");
  };

  if (screen === "welcome") {
    return <Welcome onGetStarted={handleGetStarted} />;
  }

  if (screen === "onboarding") {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  if (screen === "home") {
    return <Home />;
  }

  return null;
};

export default Index;
