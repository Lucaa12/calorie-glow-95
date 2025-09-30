import { Leaf, Fish, Drumstick, Flame, Salad } from "lucide-react";

interface DietStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const diets = [
  { value: "classic", label: "Classic", description: "No restrictions", icon: Drumstick },
  { value: "vegetarian", label: "Vegetarian", description: "No meat", icon: Salad },
  { value: "vegan", label: "Vegan", description: "No animal products", icon: Leaf },
  { value: "pescatarian", label: "Pescatarian", description: "Fish & seafood", icon: Fish },
  { value: "keto", label: "Keto", description: "Low carb, high fat", icon: Flame },
];

export const DietStep = ({ value, onChange }: DietStepProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">Your diet preference</h2>
        <p className="text-foreground-secondary">We'll tailor recommendations accordingly</p>
      </div>

      <div className="space-y-3">
        {diets.map((diet) => {
          return (
            <button
              key={diet.value}
              onClick={() => onChange(diet.value)}
              className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-center gap-4 ${
                value === diet.value
                  ? "border-foreground bg-muted"
                  : "border-border bg-background hover:bg-surface"
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                value === diet.value ? "border-foreground" : "border-border"
              }`}>
                {value === diet.value && (
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground mb-0.5">{diet.label}</div>
                <div className="text-foreground-secondary text-sm">{diet.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
