import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface MeasurementsStepProps {
  height?: number;
  weight?: number;
  unitSystem?: "metric" | "imperial";
  onHeightChange: (value: number) => void;
  onWeightChange: (value: number) => void;
  onUnitSystemChange: (system: "metric" | "imperial") => void;
}

export const MeasurementsStep = ({
  height,
  weight,
  unitSystem = "metric",
  onHeightChange,
  onWeightChange,
  onUnitSystemChange,
}: MeasurementsStepProps) => {
  const convertHeight = (value: number, fromSystem: "metric" | "imperial") => {
    if (fromSystem === "metric") {
      // cm to inches
      return Math.round(value / 2.54);
    } else {
      // inches to cm
      return Math.round(value * 2.54);
    }
  };

  const convertWeight = (value: number, fromSystem: "metric" | "imperial") => {
    if (fromSystem === "metric") {
      // kg to lb
      return Math.round(value * 2.205);
    } else {
      // lb to kg
      return Math.round(value / 2.205);
    }
  };

  const handleUnitToggle = () => {
    const newSystem = unitSystem === "metric" ? "imperial" : "metric";
    if (height) {
      onHeightChange(convertHeight(height, unitSystem));
    }
    if (weight) {
      onWeightChange(convertWeight(weight, unitSystem));
    }
    onUnitSystemChange(newSystem);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">Your measurements</h2>
        <p className="text-foreground-secondary">We'll use this to calculate your goals</p>
      </div>

      <div className="flex justify-start">
        <div className="inline-flex rounded-full bg-muted p-1">
          <Button
            variant={unitSystem === "metric" ? "primary" : "ghost"}
            size="sm"
            onClick={() => unitSystem !== "metric" && handleUnitToggle()}
          >
            Metric
          </Button>
          <Button
            variant={unitSystem === "imperial" ? "primary" : "ghost"}
            size="sm"
            onClick={() => unitSystem !== "imperial" && handleUnitToggle()}
          >
            Imperial
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-foreground-secondary text-sm">
            Height {unitSystem === "metric" ? "(cm)" : "(inches)"}
          </Label>
          <Input
            type="number"
            value={height || ""}
            onChange={(e) => onHeightChange(Number(e.target.value))}
            placeholder={unitSystem === "metric" ? "170" : "67"}
            className="h-14 text-lg bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground-secondary text-sm">
            Weight {unitSystem === "metric" ? "(kg)" : "(lb)"}
          </Label>
          <Input
            type="number"
            value={weight || ""}
            onChange={(e) => onWeightChange(Number(e.target.value))}
            placeholder={unitSystem === "metric" ? "70" : "154"}
            className="h-14 text-lg bg-background border-border"
          />
        </div>
      </div>
    </div>
  );
};
