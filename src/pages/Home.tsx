import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Flame, Drumstick, Wheat, Droplet } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

export default function Home() {
  const { user, signOut } = useAuth();
  const [currentDay] = useState(new Date().getDate());
  
  // Mock data - in a real app this would come from a backend
  const dailyGoal = 2000;
  const consumed = 591;
  const remaining = dailyGoal - consumed;
  
  const macros = {
    protein: { consumed: 23, goal: 150 },
    carbs: { consumed: 45, goal: 180 },
    fat: { consumed: 18, goal: 55 }
  };

  const getDayName = (offset: number) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return { name: days[date.getDay()], date: date.getDate() };
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-foreground">CalTrack</h1>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-6 space-y-6">
        {/* Week Calendar */}
        <div className="flex justify-between items-center gap-2">
          {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
            const day = getDayName(offset);
            const isToday = offset === 0;
            return (
              <button
                key={offset}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                  isToday
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-foreground-secondary hover:bg-muted/80'
                }`}
              >
                <span className="text-xs font-medium">{day.name}</span>
                <span className="text-sm font-semibold">{day.date}</span>
              </button>
            );
          })}
        </div>

        {/* Calories Card */}
        <div className="bg-muted rounded-3xl p-8 flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold text-foreground mb-1">{remaining}</p>
            <p className="text-foreground-secondary">Calories left</p>
          </div>
          <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
            <Flame className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-muted rounded-2xl p-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
              <Drumstick className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {macros.protein.goal - macros.protein.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary">Protein left</p>
            </div>
          </div>
          
          <div className="bg-muted rounded-2xl p-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <Wheat className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {macros.carbs.goal - macros.carbs.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary">Carbs left</p>
            </div>
          </div>
          
          <div className="bg-muted rounded-2xl p-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <Droplet className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {macros.fat.goal - macros.fat.consumed}g
              </p>
              <p className="text-xs text-foreground-secondary">Fat left</p>
            </div>
          </div>
        </div>

        {/* Recent Meals */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Today's meals</h2>
          
          <div className="bg-muted rounded-2xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-foreground-secondary" />
            </div>
            <p className="text-foreground-secondary">
              Tap the + button to log your first meal
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
        className="fixed right-6 bottom-24 w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        onClick={() => console.log('Add meal')}
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-foreground">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground" />
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs font-medium">Progress</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
