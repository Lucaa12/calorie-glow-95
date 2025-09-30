import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onGetStarted: () => void;
}

export const Welcome = ({ onGetStarted }: WelcomeProps) => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full space-y-12 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Calorie tracking made easy
          </h1>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-sm mx-auto">
            Reach your health goals with personalized tracking and insights
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onGetStarted}
            className="w-full"
          >
            Get Started
          </Button>

          <Button
            variant="link"
            onClick={handleSignIn}
            className="w-full"
          >
            Already have an account? Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
