import { WasteItem } from "@/types/game";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FallingItemProps {
  item: WasteItem;
  onDragStart: () => void;
  onAnimationComplete: () => void;
}

export const FallingItem = ({ item, onDragStart, onAnimationComplete }: FallingItemProps) => {
  const [isFalling, setIsFalling] = useState(true);

  useEffect(() => {
    // Item falls for 1 second then becomes draggable
    const timer = setTimeout(() => {
      setIsFalling(false);
      onAnimationComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const handleDragStart = (e: React.DragEvent) => {
    if (isFalling) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("itemId", item.id);
    onDragStart();
  };

  return (
    <div
      draggable={!isFalling}
      onDragStart={handleDragStart}
      className={cn(
        "flex flex-col items-center justify-center",
        "bg-white rounded-2xl p-6 shadow-xl border-4 border-primary/20",
        "min-w-[140px]",
        isFalling ? "animate-fall cursor-not-allowed opacity-70" : "draggable-item animate-bounce-in"
      )}
      style={{
        animation: isFalling 
          ? "fall 1s cubic-bezier(0.34, 1.56, 0.64, 1)" 
          : undefined
      }}
    >
      <div className="text-6xl mb-2">{item.emoji}</div>
      <div className="text-center text-sm font-bold text-foreground">
        {item.name}
      </div>
    </div>
  );
};
