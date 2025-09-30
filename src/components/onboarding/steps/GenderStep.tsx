import { Button } from "@/components/ui/button";

interface GenderStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const genderOptions = [
  { value: "male", label: "Male", icon: "♂" },
  { value: "female", label: "Female", icon: "♀" },
  { value: "non-binary", label: "Non-binary", icon: "⚥" },
  { value: "prefer-not-say", label: "Prefer not to say", icon: "—" },
];

export const GenderStep = ({ value, onChange }: GenderStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">What's your gender?</h2>
        <p className="text-foreground-secondary">This helps us personalize your experience</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
        {genderOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`p-6 rounded-2xl border-2 transition-spring surface-glow hover:scale-105 ${
              value === option.value
                ? "border-primary bg-primary/10"
                : "border-stroke bg-surface hover:border-stroke/60"
            }`}
          >
            <div className="text-4xl mb-2">{option.icon}</div>
            <div className="font-medium">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
