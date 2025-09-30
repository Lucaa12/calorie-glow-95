import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SourceStepProps {
  value?: string;
  onChange: (value: string) => void;
}

const sources = [
  "Social Media",
  "Friend Recommendation",
  "App Store",
  "Google Search",
  "Advertisement",
  "Other",
];

export const SourceStep = ({ value, onChange }: SourceStepProps) => {
  const [showCustomInput, setShowCustomInput] = useState(value && !sources.includes(value));

  const handleSourceClick = (source: string) => {
    if (source === "Other") {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
      onChange(source);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">How did you hear about us?</h2>
        <p className="text-foreground-secondary">Help us improve our reach</p>
      </div>

      <div className="space-y-3">
        {sources.map((source) => (
          <button
            key={source}
            onClick={() => handleSourceClick(source)}
            className={`w-full p-5 rounded-2xl border transition-smooth text-left flex items-center gap-4 ${
              value === source
                ? "border-foreground bg-muted"
                : "border-border bg-background hover:bg-surface"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              value === source ? "border-foreground" : "border-border"
            }`}>
              {value === source && (
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
              )}
            </div>
            <div className="font-medium text-foreground">{source}</div>
          </button>
        ))}

        {showCustomInput && (
          <Input
            placeholder="Please specify..."
            value={value && !sources.includes(value) ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            className="h-12 bg-background border-border mt-2"
            autoFocus
          />
        )}
      </div>
    </div>
  );
};
