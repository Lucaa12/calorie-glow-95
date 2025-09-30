import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DateOfBirthStepProps {
  value?: Date;
  onChange: (date: Date) => void;
}

export const DateOfBirthStep = ({ value, onChange }: DateOfBirthStepProps) => {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 13);
  
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">When were you born?</h2>
        <p className="text-foreground-secondary">You must be at least 13 years old</p>
      </div>

      <div className="flex justify-center pt-4">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => date && onChange(date)}
          disabled={(date) => date > maxDate || date < minDate}
          initialFocus
          className={cn("surface-glow rounded-2xl bg-surface border-0 pointer-events-auto")}
          classNames={{
            months: "space-y-4",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center text-foreground",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-surface rounded-lg transition-spring",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-foreground-secondary rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary/20 first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl focus-within:relative focus-within:z-20",
            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-surface rounded-lg transition-spring",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent/20 text-accent-foreground",
            day_outside: "text-foreground-secondary opacity-30",
            day_disabled: "text-foreground-secondary opacity-30",
            day_hidden: "invisible",
          }}
        />
      </div>
    </div>
  );
};
