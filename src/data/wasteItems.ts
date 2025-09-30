import { WasteItem } from "@/types/game";

export const wasteItems: WasteItem[] = [
  // Wet Waste (Green)
  {
    id: "banana",
    name: "Banana Peel",
    emoji: "🍌",
    correctBin: "wet",
    funFact: "Banana peels make great compost and help plants grow!",
  },
  {
    id: "apple",
    name: "Apple Core",
    emoji: "🍎",
    correctBin: "wet",
    funFact: "Apple cores decompose in just 2 months!",
  },
  {
    id: "veggie",
    name: "Vegetable Scraps",
    emoji: "🥕",
    correctBin: "wet",
    funFact: "Food waste can become energy through composting!",
  },
  {
    id: "eggshell",
    name: "Egg Shell",
    emoji: "🥚",
    correctBin: "wet",
    funFact: "Egg shells add calcium to the soil!",
  },

  // Dry Waste (Blue)
  {
    id: "wrapper",
    name: "Candy Wrapper",
    emoji: "🍬",
    correctBin: "dry",
    funFact: "Wrappers should go to dry waste, not wet waste!",
  },
  {
    id: "diaper",
    name: "Used Diaper",
    emoji: "🧷",
    correctBin: "dry",
    funFact: "Diapers take 500 years to decompose!",
  },
  {
    id: "tissue",
    name: "Tissue Paper",
    emoji: "🧻",
    correctBin: "dry",
    funFact: "Used tissues belong in dry waste!",
  },

  // Hazardous Waste (Red)
  {
    id: "battery",
    name: "Battery",
    emoji: "🔋",
    correctBin: "hazard",
    funFact: "Batteries contain harmful chemicals that need special disposal!",
  },
  {
    id: "bulb",
    name: "Light Bulb",
    emoji: "💡",
    correctBin: "hazard",
    funFact: "Light bulbs contain materials that can be dangerous!",
  },
  {
    id: "paint",
    name: "Paint Can",
    emoji: "🎨",
    correctBin: "hazard",
    funFact: "Paint should never go in regular trash!",
  },
  {
    id: "glass",
    name: "Broken Glass",
    emoji: "🔪",
    correctBin: "hazard",
    funFact: "Sharp glass needs careful handling!",
  },

  // Recyclable Waste (Yellow)
  {
    id: "bottle",
    name: "Plastic Bottle",
    emoji: "🍾",
    correctBin: "recycle",
    funFact: "One plastic bottle can be recycled into a T-shirt!",
  },
  {
    id: "can",
    name: "Soda Can",
    emoji: "🥫",
    correctBin: "recycle",
    funFact: "Aluminum cans can be recycled forever!",
  },
  {
    id: "newspaper",
    name: "Newspaper",
    emoji: "📰",
    correctBin: "recycle",
    funFact: "Recycling newspapers saves trees!",
  },
  {
    id: "cardboard",
    name: "Cardboard Box",
    emoji: "📦",
    correctBin: "recycle",
    funFact: "Cardboard can be recycled up to 7 times!",
  },
  {
    id: "jar",
    name: "Glass Jar",
    emoji: "🫙",
    correctBin: "recycle",
    funFact: "Glass can be recycled endlessly without losing quality!",
  },
];

export const funFacts = [
  "Recycling one aluminum can saves enough energy to run a TV for 3 hours!",
  "Plastic takes 450 years to decompose in nature!",
  "We can save 17 trees by recycling one ton of paper!",
  "Recycling plastic bottles can make fleece jackets!",
  "Composting reduces methane emissions from landfills!",
  "Glass never wears out and can be recycled forever!",
  "Recycling helps keep our oceans clean!",
  "Every ton of recycled paper saves 7,000 gallons of water!",
];
