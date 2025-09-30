import { Button } from "@/components/ui/button";
import { Clock, Heart, Users, Brain, Utensils, Home } from "lucide-react";

interface ObstaclesStepProps {
  value?: string[];
  onChange: (value: string[]) => void;
}

const obstacles = [
  { value: "consistency", label: "Consistency", icon: Clock },
  { value: "motivation", label: "Motivation", icon: Heart },
  { value: "social-pressure", label: "Social Pressure", icon: Users },
  { value: "stress", label: "Stress", icon: Brain },
  { value: "food-choices", label: "Food Choices", icon: Utensils },
  { value: "home-environment", label: "Home Environment", icon: Home },
];

export const ObstaclesStep = ({ value = [], onChange }: ObstaclesStepProps) => {
  const toggleObstacle = (obstacle: string) => {
    if (value.includes(obstacle)) {
      onChange(value.filter((v) => v !== obstacle));
    } else {
      onChange([...value, obstacle]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">What's been stopping you?</h2>
        <p className="text-foreground-secondary">Select all that apply</p>
      </div>

      <div className="space-y-3">
        {obstacles.map((obstacle) => {
          const isSelected = value.includes(obstacle.value);
          
          return (
            <button
              key={obstacle.value}
              onClick={() => toggleObstacle(obstacle.value)}
              className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-center gap-4 ${
                isSelected
                  ? "border-foreground bg-muted"
                  : "border-border bg-background hover:bg-surface"
              }`}
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                isSelected ? "border-foreground bg-foreground" : "border-border"
              }`}>
                {isSelected && (
                  <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="font-medium text-foreground">{obstacle.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
