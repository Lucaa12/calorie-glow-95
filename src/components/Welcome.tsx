import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WelcomeProps {
  onGetStarted: () => void;
}

export const Welcome = ({ onGetStarted }: WelcomeProps) => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-start/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-md w-full space-y-8 text-center">
        {/* Icon/Logo placeholder */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl surface-glow bg-surface mb-4">
          <div className="text-gradient text-4xl font-bold">C</div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Calorie tracking{" "}
            <span className="text-gradient">made easy</span>
          </h1>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-sm mx-auto">
            Reach your health goals with personalized tracking and insights
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <Button
            variant="gradient"
            size="lg"
            onClick={onGetStarted}
            className="w-full group"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="ghost"
            onClick={handleSignIn}
            className="w-full text-foreground-secondary hover:text-foreground"
          >
            Already have an account? Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
