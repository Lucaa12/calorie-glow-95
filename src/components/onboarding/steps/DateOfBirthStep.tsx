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
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">When were you born?</h2>
        <p className="text-foreground-secondary">You must be at least 13 years old</p>
      </div>

      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => date && onChange(date)}
          disabled={(date) => date > maxDate || date < minDate}
          initialFocus
          className={cn("rounded-2xl bg-background border border-border pointer-events-auto")}
          classNames={{
            months: "space-y-4",
            month: "space-y-4 p-3",
            caption: "flex justify-center pt-1 relative items-center text-foreground",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 hover:bg-muted rounded-lg transition-smooth",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-foreground-secondary rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative",
            day: "h-9 w-9 p-0 font-normal hover:bg-muted rounded-lg transition-smooth",
            day_selected: "bg-foreground text-background hover:bg-foreground/90",
            day_today: "bg-muted",
            day_outside: "text-foreground-secondary opacity-30",
            day_disabled: "text-foreground-secondary opacity-30",
            day_hidden: "invisible",
          }}
        />
      </div>
    </div>
  );
};
