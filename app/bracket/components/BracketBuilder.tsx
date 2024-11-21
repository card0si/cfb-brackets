"use client";

import { useState } from "react";
import { useBracket } from "./BracketContext";
import { Matchup } from "./Matchup";
import { PrintButton } from "./PrintButton";
import { ShareButton } from "./ShareButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gameLocations } from "@/lib/bracket-data"; // Fixed import path

export function BracketBuilder() {
  const { teams, bracketState, resetBracket } = useBracket();
  const [currentView, setCurrentView] = useState<'first' | 'second'>('first');

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
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Bracket Builder</h1>
          <div className="flex gap-2">
            <PrintButton />
            <ShareButton />
            <Button variant="outline" onClick={resetBracket}>
              Reset Bracket
            </Button>
          </div>
        </div>

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

        {/* Champion Display */}
        {bracketState.champion && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <h2 className="font-semibold text-primary mb-2">National Champion</h2>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: bracketState.champion.primaryColor }}
              />
              <span className="font-medium">{bracketState.champion.name}</span>
              <span className="text-sm text-muted-foreground">
                ({bracketState.champion.record})
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentView('first')}
          disabled={currentView === 'first'}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          First Round & Quarter Finals
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentView('second')}
          disabled={currentView === 'second'}
        >
          Semi Finals & Championship
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Bracket Container */}
      <div id="bracket-container" className="flex-1 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* First View: First Round & Quarter Finals */}
          <div className={`flex gap-4 ${currentView === 'first' ? 'block' : 'hidden md:flex'}`}>
            {/* First Round */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">First Round</h2>
              <div className="space-y-4">
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
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Quarter Finals</h2>
              <div className="space-y-4">
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
          </div>

          {/* Second View: Semi Finals & Championship */}
          <div className={`flex gap-4 ${currentView === 'second' ? 'block' : 'hidden md:flex'}`}>
            {/* Semi Finals */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Semi Finals</h2>
              <div className="space-y-4">
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
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">National Championship</h2>
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
    </div>
  );
}