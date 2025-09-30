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
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">What's been stopping you?</h2>
        <p className="text-foreground-secondary">Select all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4">
        {obstacles.map((obstacle) => {
          const Icon = obstacle.icon;
          const isSelected = value.includes(obstacle.value);
          
          return (
            <button
              key={obstacle.value}
              onClick={() => toggleObstacle(obstacle.value)}
              className={`p-6 rounded-2xl border-2 transition-spring surface-glow hover:scale-105 ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-stroke bg-surface hover:border-stroke/60"
              }`}
            >
              <div className={`p-3 rounded-xl mx-auto w-fit mb-3 ${isSelected ? "bg-primary/20" : "bg-secondary"}`}>
                <Icon className={isSelected ? "text-primary" : "text-foreground-secondary"} size={24} />
              </div>
              <div className="font-medium text-sm">{obstacle.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
