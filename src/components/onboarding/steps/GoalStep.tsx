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
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">What's your goal?</h2>
        <p className="text-foreground-secondary">Choose your primary fitness objective</p>
      </div>

      <div className="space-y-3 pt-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <button
              key={goal.value}
              onClick={() => onChange(goal.value)}
              className={`w-full p-6 rounded-2xl border-2 transition-spring surface-glow text-left hover:scale-[1.02] ${
                value === goal.value
                  ? "border-primary bg-primary/10"
                  : "border-stroke bg-surface hover:border-stroke/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${value === goal.value ? "bg-primary/20" : "bg-secondary"}`}>
                  <Icon className={value === goal.value ? "text-primary" : "text-foreground-secondary"} size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">{goal.label}</div>
                  <div className="text-foreground-secondary text-sm">{goal.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
