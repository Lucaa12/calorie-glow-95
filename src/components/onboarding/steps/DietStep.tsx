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
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Your diet preference</h2>
        <p className="text-foreground-secondary">We'll tailor recommendations accordingly</p>
      </div>

      <div className="space-y-3 pt-4">
        {diets.map((diet) => {
          const Icon = diet.icon;
          return (
            <button
              key={diet.value}
              onClick={() => onChange(diet.value)}
              className={`w-full p-5 rounded-2xl border-2 transition-spring surface-glow text-left hover:scale-[1.02] ${
                value === diet.value
                  ? "border-primary bg-primary/10"
                  : "border-stroke bg-surface hover:border-stroke/60"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${value === diet.value ? "bg-primary/20" : "bg-secondary"}`}>
                  <Icon className={value === diet.value ? "text-primary" : "text-foreground-secondary"} size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-0.5">{diet.label}</div>
                  <div className="text-foreground-secondary text-sm">{diet.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
