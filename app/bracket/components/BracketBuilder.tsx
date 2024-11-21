"use client";

import { useState } from "react";
import { useBracket } from "./BracketContext";
import { Matchup } from "./Matchup";
import { PrintButton } from "./PrintButton";
import { ShareButton } from "./ShareButton";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { gameLocations } from "@/lib/bracket-data";

export function BracketBuilder() {
  const { teams, bracketState, resetBracket } = useBracket();

  // Get first round matchups (seeds 5-12)
  const firstRoundMatchups = [
    { seed1: 12, seed2: 5 },
    { seed1: 9, seed2: 8 },
    { seed1: 11, seed2: 6 },
    { seed1: 10, seed2: 7 }
  ];

  // Get teams with first round byes (top 4 seeds)
  const byeTeams = teams.filter(team => team.seed <= 4).sort((a, b) => a.seed - b.seed);

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold">Bracket Builder</h1>
        <div className="flex gap-2">
          <PrintButton />
          <ShareButton />
          <Button variant="outline" onClick={resetBracket}>
            Reset
          </Button>
        </div>
      </div>

      {/* Instructions and Champion Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Instructions */}
        <div className="bg-card rounded-lg p-4 text-sm text-muted-foreground">
          <h2 className="font-semibold mb-2">How to Fill Out Your Bracket:</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>First Round: Select winners from seeds 5-12</li>
            <li>Quarter Finals: Winners face top 4 seeded teams</li>
            <li>Semi Finals: Quarter Final winners compete</li>
            <li>Championship: Select the national champion</li>
          </ol>
        </div>

        {/* Champion Box */}
        <div className={`bg-card rounded-lg p-4 flex items-center gap-4 ${bracketState.champion ? 'bg-primary/10 border border-primary/20' : ''}`}>
          <Trophy className={`h-8 w-8 ${bracketState.champion ? 'text-primary' : 'text-muted-foreground'}`} />
          <div>
            <h2 className="font-semibold mb-1">National Champion</h2>
            {bracketState.champion ? (
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: bracketState.champion.primaryColor }}
                />
                <span className="font-medium">{bracketState.champion.name}</span>
                <span className="text-sm text-muted-foreground">
                  ({bracketState.champion.record})
                </span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Complete your bracket to crown a champion
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bracket Container */}
      <div id="bracket-container" className="flex-1 overflow-x-auto pb-4">
        <div className="min-w-[1000px] md:min-w-0 grid grid-cols-4 gap-4 md:gap-8">
          {/* First Round */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold mb-3 sticky left-0">First Round</h2>
            <div className="space-y-3">
              {firstRoundMatchups.map((matchup, index) => {
                const team1 = teams.find(t => t.seed === matchup.seed1);
                const team2 = teams.find(t => t.seed === matchup.seed2);
                return (
                  <Matchup
                    key={`first-${index}`}
                    round={0}
                    matchupIndex={index}
                    team1={team1 || null}
                    team2={team2 || null}
                    gameInfo={gameLocations[0]?.[index]}
                  />
                );
              })}
            </div>
          </div>

          {/* Quarter Finals */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold mb-3">Quarter Finals</h2>
            <div className="space-y-3">
              {byeTeams.map((byeTeam, index) => (
                <Matchup
                  key={`quarter-${index}`}
                  round={1}
                  matchupIndex={index}
                  team1={bracketState.firstRound[index]}
                  team2={byeTeam}
                  gameInfo={gameLocations[1]?.[index]}
                />
              ))}
            </div>
          </div>

          {/* Semi Finals */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold mb-3">Semi Finals</h2>
            <div className="space-y-3">
              {[0, 1].map(index => (
                <Matchup
                  key={`semi-${index}`}
                  round={2}
                  matchupIndex={index}
                  team1={bracketState.quarterFinals[index * 2]}
                  team2={bracketState.quarterFinals[index * 2 + 1]}
                  gameInfo={gameLocations[2]?.[index]}
                />
              ))}
            </div>
          </div>

          {/* Championship */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold mb-3">National Championship</h2>
            <Matchup
              round={3}
              matchupIndex={0}
              team1={bracketState.semiFinals[0]}
              team2={bracketState.semiFinals[1]}
              isChampionship
              gameInfo={gameLocations[3]?.[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}