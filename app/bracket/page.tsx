"use client";

import { BracketBuilder } from "./components/BracketBuilder";
import { BracketProvider } from "./components/BracketContext";

export default function BracketPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <BracketProvider>
          <BracketBuilder />
        </BracketProvider>
      </div>
    </div>
  );
}