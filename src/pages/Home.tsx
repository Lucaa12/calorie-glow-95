import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Flame, Drumstick, Wheat, Droplet } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { signOut } = useAuth();
  const [selectedDay, setSelectedDay] = useState(0);
  
  // Mock data - in a real app this would come from a backend
  const dailyGoal = 2000;
  const consumed = 591;
  const remaining = dailyGoal - consumed;
  
  const macros = {
    protein: { consumed: 23, goal: 150 },
    carbs: { consumed: 45, goal: 180 },
    fat: { consumed: 18, goal: 55 }
  };

  const getWeekDays = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dates = [];
    const today = new Date();
    
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: days[date.getDay()],
        date: date.getDate(),
        offset: i
      });
    }
    return dates;
  };

  const weekDays = getWeekDays();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-background sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">CalTrack</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 space-y-6">
        {/* Minimal Week Selector */}
        <div className="flex justify-center items-center gap-1">
          {weekDays.map((day) => {
            const isSelected = day.offset === selectedDay;
            return (
              <button
                key={day.offset}
                onClick={() => setSelectedDay(day.offset)}
                className="flex flex-col items-center justify-center w-12 h-16 rounded-xl transition-all"
              >
                <span className={`text-sm font-medium mb-0.5 ${
                  isSelected ? 'text-foreground' : 'text-foreground-secondary'
                }`}>
                  {day.day}
                </span>
                <span className={`text-base font-semibold w-8 h-8 rounded-full flex items-center justify-center ${
                  isSelected 
                    ? 'bg-foreground text-background' 
                    : 'text-foreground-secondary'
                }`}>
                  {day.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Calories Card - More Prominent */}
        <div className="bg-card rounded-[32px] p-10 flex items-center justify-between shadow-sm border border-border">
          <div>
            <p className="text-6xl font-bold text-foreground mb-2 tracking-tight">{remaining}</p>
            <p className="text-base text-foreground-secondary">Calories left</p>
          </div>
          <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center shadow-sm">
            <Flame className="w-12 h-12 text-orange-500" />
          </div>
        </div>

        {/* Macros Grid - Cleaner Design */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card rounded-3xl p-5 text-center space-y-4 border border-border shadow-sm">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto">
              <Drumstick className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">
                {macros.protein.goal - macros.protein.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary font-medium">Protein left</p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-5 text-center space-y-4 border border-border shadow-sm">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto">
              <Wheat className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">
                {macros.carbs.goal - macros.carbs.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary font-medium">Carbs left</p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-5 text-center space-y-4 border border-border shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <Droplet className="w-7 h-7 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">
                {macros.fat.goal - macros.fat.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary font-medium">Fat left</p>
            </div>
          </div>
        </div>

        {/* Recent Meals */}
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-bold text-foreground">Recently uploaded</h2>
          
          <div className="bg-card rounded-3xl p-8 text-center border border-border shadow-sm">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <div className="w-12 h-1 bg-border rounded-full" />
            </div>
            <p className="text-sm text-foreground-secondary">
              Tap + to add your first meal of the day
            </p>
          </div>
        </div>

        {/* Sign Out Button */}
        <Button
          variant="outline"
          onClick={signOut}
          className="w-full"
        >
          Sign Out
        </Button>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed right-6 bottom-28 w-16 h-16 rounded-full bg-foreground text-background shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        onClick={() => console.log('Add meal')}
      >
        <Plus className="w-7 h-7" />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1.5 text-foreground">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xs font-semibold">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs font-medium">Progress</span>
          </button>
          
          <button className="flex flex-col items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
