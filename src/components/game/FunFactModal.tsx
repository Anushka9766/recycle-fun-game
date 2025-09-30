import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

interface FunFactModalProps {
  isOpen: boolean;
  onClose: () => void;
  fact: string;
}

export const FunFactModal = ({ isOpen, onClose, fact }: FunFactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-gradient-to-br from-primary to-accent text-white border-4 border-white/30 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-3xl font-bold">
            <Sparkles className="w-8 h-8 text-sparkle animate-sparkle" />
            Fun Fact!
          </DialogTitle>
          <DialogDescription className="text-white/90 text-lg pt-4">
            {fact}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button
            onClick={onClose}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 rounded-full"
          >
            Awesome! 🎉
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
