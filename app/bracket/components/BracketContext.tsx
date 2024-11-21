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
      
      // Only update the current round's winner
      switch (roundIndex) {
        case 0: // First Round
          newState.firstRound[matchupIndex] = winner;
          break;
          
        case 1: // Quarter Finals
          newState.quarterFinals[matchupIndex] = winner;
          break;
          
        case 2: // Semi Finals
          newState.semiFinals[matchupIndex] = winner;
          break;
          
        case 3: // Championship
          newState.championship = winner;
          newState.champion = winner;
          break;
      }

      // Clear subsequent rounds when a team is selected in an earlier round
      if (roundIndex === 0) {
        // Clear related quarterfinal slot
        newState.quarterFinals[matchupIndex] = null;
        // Clear potential semifinal and championship slots
        newState.semiFinals[Math.floor(matchupIndex / 2)] = null;
        newState.championship = null;
        newState.champion = null;
      } else if (roundIndex === 1) {
        // Clear related semifinal slot
        newState.semiFinals[Math.floor(matchupIndex / 2)] = null;
        newState.championship = null;
        newState.champion = null;
      } else if (roundIndex === 2) {
        // Clear championship slot
        newState.championship = null;
        newState.champion = null;
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