import { BinType } from "@/types/game";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RecycleBinProps {
  type: BinType;
  label: string;
  onDrop: (type: BinType) => void;
  isCorrect?: boolean;
  showFeedback?: boolean;
}

const binEmojis: Record<BinType, string> = {
  wet: "🌱",
  dry: "🗑️",
  hazard: "☢️",
  recycle: "♻️",
};

export const RecycleBin = ({ type, label, onDrop, isCorrect, showFeedback }: RecycleBinProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsHovered(false);
    onDrop(type);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex flex-col items-center justify-center rounded-3xl p-6 transition-all duration-300",
        "min-h-[200px] w-full shadow-lg border-4 border-white/30",
        type === "wet" && "bin-wet",
        type === "dry" && "bin-dry",
        type === "hazard" && "bin-hazard",
        type === "recycle" && "bin-recycle",
        isHovered && "drop-zone-hover scale-105",
        showFeedback && isCorrect && "animate-glow-pulse",
        showFeedback && !isCorrect && "animate-wiggle"
      )}
    >
      <div className="text-6xl mb-3 transform transition-transform duration-300 hover:scale-110">
        {binEmojis[type]}
      </div>
      <div className="text-white text-2xl font-bold text-center drop-shadow-lg">
        {label}
      </div>
      {showFeedback && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {isCorrect ? (
            <div className="text-8xl animate-bounce-in">✨</div>
          ) : (
            <div className="text-6xl animate-wiggle">❌</div>
          )}
        </div>
      )}
    </div>
  );
};
