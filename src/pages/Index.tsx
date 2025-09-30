import { useState, useEffect } from "react";
import { RecycleBin } from "@/components/game/RecycleBin";
import { FallingItem } from "@/components/game/FallingItem";
import { ItemDispenser } from "@/components/game/ItemDispenser";
import { ScoreBoard } from "@/components/game/ScoreBoard";
import { FunFactModal } from "@/components/game/FunFactModal";
import { BinType, WasteItem, GameStats } from "@/types/game";
import { wasteItems, funFacts } from "@/data/wasteItems";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const Index = () => {
  const [currentItem, setCurrentItem] = useState<WasteItem | null>(null);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    itemsSorted: 0,
    correctSorts: 0,
    incorrectSorts: 0,
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState<{ correct: boolean; bin: BinType } | null>(null);
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFact, setCurrentFact] = useState("");
  const [usedItems, setUsedItems] = useState<Set<string>>(new Set());
  const [isDispensing, setIsDispensing] = useState(false);
  const [itemReady, setItemReady] = useState(false);

  const getRandomItem = () => {
    const availableItems = wasteItems.filter((item) => !usedItems.has(item.id));
    if (availableItems.length === 0) {
      setUsedItems(new Set());
      return wasteItems[Math.floor(Math.random() * wasteItems.length)];
    }
    return availableItems[Math.floor(Math.random() * availableItems.length)];
  };

  useEffect(() => {
    dispenseNewItem();
  }, []);

  const dispenseNewItem = () => {
    setIsDispensing(true);
    setItemReady(false);
    
    setTimeout(() => {
      setCurrentItem(getRandomItem());
      setIsDispensing(false);
    }, 500);
  };

  const handleDrop = (binType: BinType) => {
    if (!currentItem) return;

    const isCorrect = currentItem.correctBin === binType;
    setLastResult({ correct: isCorrect, bin: binType });
    setShowFeedback(true);

    if (isCorrect) {
      toast.success("Awesome job! 🎉", {
        description: "You sorted that perfectly!",
      });
      
      setStats((prev) => ({
        ...prev,
        score: prev.score + 10,
        itemsSorted: prev.itemsSorted + 1,
        correctSorts: prev.correctSorts + 1,
      }));

      // Show fun fact every 5 correct sorts
      if ((stats.correctSorts + 1) % 5 === 0) {
        const fact = currentItem.funFact || funFacts[Math.floor(Math.random() * funFacts.length)];
        setCurrentFact(fact);
        setShowFunFact(true);
      }
    } else {
      toast.error("Oops! Try again! 🤔", {
        description: `This goes in the ${currentItem.correctBin} bin!`,
      });
      
      setStats((prev) => ({
        ...prev,
        itemsSorted: prev.itemsSorted + 1,
        incorrectSorts: prev.incorrectSorts + 1,
      }));
    }

    setTimeout(() => {
      setShowFeedback(false);
      setLastResult(null);
      setUsedItems((prev) => new Set([...prev, currentItem.id]));
      dispenseNewItem();
    }, 1500);
  };

  const handleReset = () => {
    setStats({
      score: 0,
      itemsSorted: 0,
      correctSorts: 0,
      incorrectSorts: 0,
    });
    setUsedItems(new Set());
    setItemReady(false);
    dispenseNewItem();
    toast.success("Game reset! Let's start fresh! 🎮");
  };

  return (
    <div className="min-h-screen game-bg p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg animate-bounce-in">
            ♻️ Recycling Puzzle 🌍
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Help save the planet! Drag items to the correct bin!
          </p>
        </div>

        {/* Score Board */}
        <div className="flex justify-center">
          <ScoreBoard stats={stats} />
        </div>

        {/* Item Dispenser */}
        <div className="flex justify-center">
          <ItemDispenser isDispensing={isDispensing} />
        </div>

        {/* Current Item - Falls from dispenser */}
        <div className="flex justify-center items-center min-h-[180px]">
          {currentItem && !showFeedback && (
            <FallingItem 
              item={currentItem} 
              onDragStart={() => {}} 
              onAnimationComplete={() => setItemReady(true)}
            />
          )}
          {showFeedback && (
            <div className="text-center animate-bounce-in">
              <div className="text-8xl mb-4">
                {lastResult?.correct ? "🎉" : "🤔"}
              </div>
              <div className="text-3xl font-bold text-primary">
                {lastResult?.correct ? "Perfect!" : "Not quite!"}
              </div>
            </div>
          )}
        </div>

        {/* Bins Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <RecycleBin
            type="wet"
            label="Wet Waste"
            onDrop={handleDrop}
            isCorrect={lastResult?.bin === "wet" ? lastResult.correct : undefined}
            showFeedback={showFeedback && lastResult?.bin === "wet"}
          />
          <RecycleBin
            type="dry"
            label="Dry Waste"
            onDrop={handleDrop}
            isCorrect={lastResult?.bin === "dry" ? lastResult.correct : undefined}
            showFeedback={showFeedback && lastResult?.bin === "dry"}
          />
          <RecycleBin
            type="hazard"
            label="Hazardous"
            onDrop={handleDrop}
            isCorrect={lastResult?.bin === "hazard" ? lastResult.correct : undefined}
            showFeedback={showFeedback && lastResult?.bin === "hazard"}
          />
          <RecycleBin
            type="recycle"
            label="Recyclable"
            onDrop={handleDrop}
            isCorrect={lastResult?.bin === "recycle" ? lastResult.correct : undefined}
            showFeedback={showFeedback && lastResult?.bin === "recycle"}
          />
        </div>

        {/* Reset Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleReset}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 rounded-full shadow-xl"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Start Over
          </Button>
        </div>

        {/* Fun Fact Modal */}
        <FunFactModal
          isOpen={showFunFact}
          onClose={() => setShowFunFact(false)}
          fact={currentFact}
        />
      </div>
    </div>
  );
};

export default Index;
