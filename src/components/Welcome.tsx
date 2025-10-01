import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface WelcomeProps {
  onGetStarted: () => void;
}

export const Welcome = ({ onGetStarted }: WelcomeProps) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full space-y-12 text-center">
        <div className="space-y-8">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-20 h-20 mx-auto"
          />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Calorie tracking made easy
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed max-w-sm mx-auto">
              Reach your health goals with personalized tracking and insights
            </p>
          </div>
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
