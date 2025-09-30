export type BinType = "wet" | "dry" | "hazard" | "recycle";

export interface WasteItem {
  id: string;
  name: string;
  emoji: string;
  correctBin: BinType;
  funFact?: string;
}

export interface GameStats {
  score: number;
  itemsSorted: number;
  correctSorts: number;
  incorrectSorts: number;
}
