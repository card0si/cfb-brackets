"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ShareButton() {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "My CFB Playoff Bracket",
        text: "Check out my College Football Playoff predictions!",
        url: window.location.href
      });
    } catch (err) {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share this link with your friends to show them your bracket."
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleShare}
      className="flex items-center gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share Bracket
    </Button>
  );
}