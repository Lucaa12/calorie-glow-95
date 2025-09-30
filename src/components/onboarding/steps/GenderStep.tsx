interface GenderStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-binary" },
  { value: "prefer-not-say", label: "Prefer not to say" },
];

export const GenderStep = ({ value, onChange }: GenderStepProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">What's your gender?</h2>
        <p className="text-foreground-secondary">This helps us personalize your experience</p>
      </div>

      <div className="space-y-3">
        {genderOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-center gap-4 ${
              value === option.value
                ? "border-foreground bg-muted"
                : "border-border bg-background hover:bg-surface"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              value === option.value ? "border-foreground" : "border-border"
            }`}>
              {value === option.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
              )}
            </div>
            <div className="font-medium text-foreground">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
