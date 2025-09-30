import { Target, TrendingUp, Activity } from "lucide-react";

interface GoalStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const goals = [
  {
    value: "lose-weight",
    label: "Lose Weight",
    description: "Reduce body fat and reach your target weight",
    icon: TrendingUp,
  },
  {
    value: "gain-muscle",
    label: "Gain Muscle",
    description: "Build strength and increase muscle mass",
    icon: Activity,
  },
  {
    value: "maintain",
    label: "Maintain",
    description: "Stay at your current weight and fitness level",
    icon: Target,
  },
];

export const GoalStep = ({ value, onChange }: GoalStepProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">What's your goal?</h2>
        <p className="text-foreground-secondary">Choose your primary fitness objective</p>
      </div>

      <div className="space-y-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <button
              key={goal.value}
              onClick={() => onChange(goal.value)}
              className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-start gap-4 ${
                value === goal.value
                  ? "border-foreground bg-muted"
                  : "border-border bg-background hover:bg-surface"
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                value === goal.value ? "border-foreground" : "border-border"
              }`}>
                {value === goal.value && (
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground mb-0.5">{goal.label}</div>
                <div className="text-foreground-secondary text-sm">{goal.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
