interface WorkoutsStepProps {
  value?: number;
  onChange: (value: number) => void;
}

const workoutOptions = [
  { value: 1, label: "0-2", description: "Workouts now and then" },
  { value: 4, label: "3-5", description: "A few workouts per week" },
  { value: 7, label: "6+", description: "Dedicated athlete" },
];

export const WorkoutsStep = ({ value = 1, onChange }: WorkoutsStepProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">How many workouts do you do per week?</h2>
        <p className="text-foreground-secondary">This will be used to calibrate your custom plan.</p>
      </div>

      <div className="space-y-3">
        {workoutOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-start gap-4 ${
              value === option.value
                ? "border-foreground bg-muted"
                : "border-border bg-background hover:bg-surface"
            }`}
          >
            <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              value === option.value ? "border-foreground" : "border-border"
            }`}>
              {value === option.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
              )}
            </div>
            <div>
              <div className="font-semibold text-foreground mb-0.5">{option.label}</div>
              <div className="text-sm text-foreground-secondary">{option.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
