import { Rabbit, Turtle, Gauge } from "lucide-react";

interface PaceStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const paces = [
  {
    value: "slow",
    label: "Slow & Steady",
    description: "0.25 kg (0.5 lb) per week",
    helper: "More sustainable, easier to maintain",
    icon: Turtle,
  },
  {
    value: "moderate",
    label: "Moderate",
    description: "0.5 kg (1 lb) per week",
    helper: "Balanced approach, recommended",
    icon: Gauge,
  },
  {
    value: "aggressive",
    label: "Aggressive",
    description: "0.75 kg (1.5 lb) per week",
    helper: "Faster results, requires discipline",
    icon: Rabbit,
  },
];

export const PaceStep = ({ value, onChange }: PaceStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">How fast do you want to reach your goal?</h2>
        <p className="text-foreground-secondary">Choose a pace that works for you</p>
      </div>

      <div className="space-y-3 pt-4">
        {paces.map((pace) => {
          const Icon = pace.icon;
          return (
            <button
              key={pace.value}
              onClick={() => onChange(pace.value)}
              className={`w-full p-6 rounded-2xl border-2 transition-spring surface-glow text-left hover:scale-[1.02] ${
                value === pace.value
                  ? "border-primary bg-primary/10"
                  : "border-stroke bg-surface hover:border-stroke/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${value === pace.value ? "bg-primary/20" : "bg-secondary"}`}>
                  <Icon className={value === pace.value ? "text-primary" : "text-foreground-secondary"} size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">{pace.label}</div>
                  <div className="text-foreground text-sm mb-2">{pace.description}</div>
                  <div className="text-foreground-secondary text-xs">{pace.helper}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
