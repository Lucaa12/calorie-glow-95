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
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">How fast do you want to reach your goal?</h2>
        <p className="text-foreground-secondary">Choose a pace that works for you</p>
      </div>

      <div className="space-y-3">
        {paces.map((pace) => {
          return (
            <button
              key={pace.value}
              onClick={() => onChange(pace.value)}
              className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-start gap-4 ${
                value === pace.value
                  ? "border-foreground bg-muted"
                  : "border-border bg-background hover:bg-surface"
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                value === pace.value ? "border-foreground" : "border-border"
              }`}>
                {value === pace.value && (
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground mb-1">{pace.label}</div>
                <div className="text-foreground text-sm mb-1">{pace.description}</div>
                <div className="text-foreground-secondary text-xs">{pace.helper}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
