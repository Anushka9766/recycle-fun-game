import { GameStats } from "@/types/game";
import { Star } from "lucide-react";

interface ScoreBoardProps {
  stats: GameStats;
}

export const ScoreBoard = ({ stats }: ScoreBoardProps) => {
  const stars = Math.min(Math.floor(stats.correctSorts / 2), 5);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border-4 border-primary/20">
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-primary">{stats.itemsSorted}</div>
          <div className="text-sm font-semibold text-muted-foreground">Items Sorted</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-success">{stats.correctSorts}</div>
          <div className="text-sm font-semibold text-muted-foreground">Correct</div>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-8 h-8 ${
                i < stars
                  ? "fill-secondary text-secondary animate-sparkle"
                  : "fill-muted text-muted"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
