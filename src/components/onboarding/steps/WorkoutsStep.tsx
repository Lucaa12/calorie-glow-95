import { Slider } from "@/components/ui/slider";

interface WorkoutsStepProps {
  value?: number;
  onChange: (value: number) => void;
}

export const WorkoutsStep = ({ value = 0, onChange }: WorkoutsStepProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">How often do you work out?</h2>
        <p className="text-foreground-secondary">Days per week</p>
      </div>

      <div className="space-y-6 pt-4">
        <div className="text-center">
          <div className="text-6xl font-bold text-gradient mb-2">{value}</div>
          <div className="text-foreground-secondary text-sm uppercase tracking-wider">
            {value === 0 ? "No workouts" : value === 1 ? "workout per week" : "workouts per week"}
          </div>
        </div>

        <div className="px-4">
          <Slider
            value={[value]}
            onValueChange={([val]) => onChange(val)}
            max={14}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-foreground-secondary mt-2">
            <span>0</span>
            <span>7</span>
            <span>14</span>
          </div>
        </div>
      </div>
    </div>
  );
};
