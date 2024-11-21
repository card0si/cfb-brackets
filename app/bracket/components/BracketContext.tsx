"use client";

import React, { createContext, useContext, useState } from "react";
import type { Team, BracketState } from "@/lib/types";
import { getInitialTeams, getInitialBracketState } from "@/lib/bracket-logic";

interface BracketContextType {
  teams: Team[];
  bracketState: BracketState;
  updateMatchupWinner: (roundIndex: number, matchupIndex: number, winner: Team) => void;
  resetBracket: () => void;
}

const BracketContext = createContext<BracketContextType | undefined>(undefined);

export function BracketProvider({ children }: { children: React.ReactNode }) {
  const [teams] = useState(getInitialTeams());
  const [bracketState, setBracketState] = useState<BracketState>(getInitialBracketState());

  const updateMatchupWinner = (roundIndex: number, matchupIndex: number, winner: Team) => {
    setBracketState((prev) => {
      const newState = { ...prev };
      
      switch (roundIndex) {
        case 0:
          newState.firstRound[matchupIndex] = winner;
          break;
        case 1:
          newState.quarterFinals[matchupIndex] = winner;
          break;
        case 2:
          newState.semiFinals[matchupIndex] = winner;
          break;
        case 3:
          newState.championship = winner;
          newState.champion = winner;
          break;
      }
      
      return newState;
    });
  };

  const resetBracket = () => {
    setBracketState(getInitialBracketState());
  };

  return (
    <BracketContext.Provider value={{ teams, bracketState, updateMatchupWinner, resetBracket }}>
      {children}
    </BracketContext.Provider>
  );
}

export function useBracket() {
  const context = useContext(BracketContext);
  if (context === undefined) {
    throw new Error("useBracket must be used within a BracketProvider");
  }
  return context;
}