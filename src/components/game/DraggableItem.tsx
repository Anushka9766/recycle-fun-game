import { WasteItem } from "@/types/game";
import { cn } from "@/lib/utils";

interface DraggableItemProps {
  item: WasteItem;
  onDragStart: () => void;
}

export const DraggableItem = ({ item, onDragStart }: DraggableItemProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("itemId", item.id);
    onDragStart();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={cn(
        "draggable-item flex flex-col items-center justify-center",
        "bg-white rounded-2xl p-6 shadow-xl border-4 border-primary/20",
        "min-w-[140px] animate-bounce-in"
      )}
    >
      <div className="text-6xl mb-2">{item.emoji}</div>
      <div className="text-center text-sm font-bold text-foreground">
        {item.name}
      </div>
    </div>
  );
};
