"use client";

import { BracketBuilder } from "./components/BracketBuilder";
import { BracketProvider } from "./components/BracketContext";

export default function BracketPage() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80 overflow-y-auto">
      <div className="container h-full mx-auto px-4 py-4 pb-8 md:pb-16">
        <BracketProvider>
          <BracketBuilder />
        </BracketProvider>
      </div>
    </div>
  );
}