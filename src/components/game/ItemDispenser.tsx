import { cn } from "@/lib/utils";

interface ItemDispenserProps {
  isDispensing?: boolean;
}

export const ItemDispenser = ({ isDispensing }: ItemDispenserProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Main Tank */}
      <div className="relative">
        {/* Tank Body */}
        <div className={cn(
          "relative w-64 h-32 rounded-t-3xl rounded-b-lg",
          "bg-gradient-to-b from-accent to-primary",
          "border-8 border-white/40 shadow-2xl",
          "flex items-center justify-center",
          isDispensing && "animate-pulse"
        )}>
          {/* Tank Face */}
          <div className="text-center">
            <div className="text-4xl mb-2">🏭</div>
            <div className="text-white font-bold text-lg drop-shadow-lg">
              Waste Tank
            </div>
          </div>
          
          {/* Tank Shine Effect */}
          <div className="absolute top-4 left-8 w-12 h-12 bg-white/30 rounded-full blur-xl" />
        </div>

        {/* Connecting Pipe */}
        <div className="relative w-20 h-16 mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-16 h-full bg-gradient-to-b from-primary to-secondary border-4 border-white/40 shadow-lg" />
        </div>

        {/* Circular Opening with animated chute */}
        <div className="relative flex items-center justify-center">
          <div className={cn(
            "relative w-32 h-32 rounded-full",
            "bg-gradient-to-br from-secondary via-accent to-primary",
            "border-8 border-white/50 shadow-2xl",
            "flex items-center justify-center overflow-hidden",
            isDispensing && "animate-glow-pulse"
          )}>
            {/* Inner Circle (hollow opening) */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-gray-800 to-gray-600 border-4 border-gray-700 shadow-inner flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/80 animate-pulse" />
            </div>
            
            {/* Sparkle effects when dispensing */}
            {isDispensing && (
              <>
                <div className="absolute top-2 left-4 w-3 h-3 bg-sparkle rounded-full animate-sparkle" style={{ animationDelay: '0s' }} />
                <div className="absolute top-4 right-6 w-2 h-2 bg-sparkle rounded-full animate-sparkle" style={{ animationDelay: '0.2s' }} />
                <div className="absolute bottom-6 left-8 w-3 h-3 bg-sparkle rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Drop indicator arrow */}
      <div className={cn(
        "mt-4 text-4xl transition-all duration-500",
        isDispensing ? "animate-bounce opacity-100" : "opacity-0"
      )}>
        ⬇️
      </div>
    </div>
  );
};
