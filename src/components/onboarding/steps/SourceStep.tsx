import { Button } from "@/components/ui/button";
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
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">How did you hear about us?</h2>
        <p className="text-foreground-secondary">Help us improve our reach</p>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4">
        {sources.map((source) => (
          <Button
            key={source}
            variant={value === source ? "default" : "outline"}
            onClick={() => handleSourceClick(source)}
            className={`h-auto py-4 ${
              value === source ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            {source}
          </Button>
        ))}
      </div>

      {showCustomInput && (
        <div className="pt-2">
          <Input
            placeholder="Please specify..."
            value={value && !sources.includes(value) ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            className="h-12 bg-surface border-stroke"
            autoFocus
          />
        </div>
      )}
    </div>
  );
};
