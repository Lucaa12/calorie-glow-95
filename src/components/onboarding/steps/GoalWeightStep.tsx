import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GoalWeightStepProps {
  value?: number;
  currentWeight?: number;
  unitSystem?: "metric" | "imperial";
  onChange: (value: number) => void;
}

export const GoalWeightStep = ({
  value,
  currentWeight,
  unitSystem = "metric",
  onChange,
}: GoalWeightStepProps) => {
  const unit = unitSystem === "metric" ? "kg" : "lb";
  const difference = currentWeight && value ? Math.abs(currentWeight - value) : 0;
  const direction = currentWeight && value ? (value < currentWeight ? "lose" : "gain") : null;

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">What's your goal weight?</h2>
        <p className="text-foreground-secondary">Set a realistic target weight</p>
      </div>

      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label className="text-foreground-secondary uppercase tracking-wider text-sm">
            Goal Weight ({unit})
          </Label>
          <Input
            type="number"
            value={value || ""}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder={unitSystem === "metric" ? "65" : "143"}
            className="h-16 text-2xl font-bold bg-surface border-stroke text-center"
          />
        </div>

        {difference > 0 && direction && (
          <div className="p-4 rounded-xl bg-secondary border border-stroke">
            <div className="text-center">
              <div className="text-sm text-foreground-secondary uppercase tracking-wider mb-1">
                You'll need to
              </div>
              <div className="text-2xl font-bold text-gradient">
                {direction} {difference.toFixed(1)} {unit}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
