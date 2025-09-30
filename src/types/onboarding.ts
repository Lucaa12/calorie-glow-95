export interface OnboardingData {
  gender?: string;
  workoutsPerWeek?: number;
  source?: string;
  height?: number;
  weight?: number;
  unitSystem?: "metric" | "imperial";
  dateOfBirth?: Date;
  goal?: string;
  goalWeight?: number;
  pace?: string;
  obstacles?: string[];
  diet?: string;
}

export const ONBOARDING_STEPS = 10;
