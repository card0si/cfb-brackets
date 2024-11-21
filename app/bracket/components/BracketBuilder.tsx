"use client";

import { Button } from "@/components/ui/button";
import { Matchup } from "./Matchup";
import { ShareButton } from "./ShareButton";
import { PrintButton } from "./PrintButton";
import { useBracket } from "./BracketContext";
import { gameLocations } from "@/lib/bracket-data";
import { getFirstRoundMatchups, getByeTeams, getQuarterFinalMatchups, getSemiFinalMatchups } from "@/lib/bracket-logic";

export function BracketBuilder() {
  const { teams, bracketState, resetBracket } = useBracket();

  const firstRoundMatchups = getFirstRoundMatchups(teams);
  const byeTeams = getByeTeams(teams);
  const quarterFinalMatchups = getQuarterFinalMatchups(byeTeams, bracketState.firstRound);
  const semiFinalMatchups = getSemiFinalMatchups(bracketState.quarterFinals);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {/* Header and Controls */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Bracket Builder</h1>
            <p className="text-muted-foreground">
              Click on teams to advance them through the bracket
            </p>
          </div>
          <div className="flex items-center gap-4">
            <PrintButton />
            <Button variant="outline" onClick={resetBracket}>
              Reset Bracket
            </Button>
            <ShareButton />
          </div>
        </div>

        {/* Instructions and Champion Display */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Instructions */}
          <div className="bg-card/50 rounded-xl border p-4 space-y-2">
            <h3 className="font-semibold">How to Fill Out Your Bracket:</h3>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
              <li>First Round: Select winners from seeds 5-12 matchups</li>
              <li>Quarter Finals: Winners face top 4 seeded teams</li>
              <li>Semi Finals: Quarter Final winners compete</li>
              <li>Championship: Select the national champion</li>
            </ol>
          </div>

          {/* Champion Display */}
          {bracketState.champion ? (
            <div className="flex items-center gap-4 bg-primary/10 rounded-xl border border-primary/20 p-4">
              <div
                className="w-12 h-12 rounded-lg shrink-0"
                style={{ backgroundColor: bracketState.champion.primaryColor }}
              />
              <div>
                <div className="text-sm font-medium text-muted-foreground">National Champion</div>
                <div className="text-2xl font-bold">{bracketState.champion.name}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 bg-muted/50 rounded-xl border p-4">
              <div className="w-12 h-12 rounded-lg bg-muted/50 shrink-0" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">National Champion</div>
                <div className="text-2xl font-bold text-muted-foreground">Not Selected</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bracket Layout */}
      <div className="relative min-h-[600px] w-full overflow-x-auto pb-8" id="bracket-container">
        <div className="min-w-[1200px] px-8">
          {/* Round Headers */}
          <div className="grid grid-cols-[280px_280px_280px_280px] gap-6 mb-4">
            <h2 className="text-lg font-semibold text-center">First Round</h2>
            <h2 className="text-lg font-semibold text-center">Quarter Finals</h2>
            <h2 className="text-lg font-semibold text-center">Semi Finals</h2>
            <h2 className="text-lg font-semibold text-center">National Championship</h2>
          </div>

          {/* Bracket Structure */}
          <div className="relative grid grid-cols-[280px_280px_280px_280px] gap-6">
            {/* SVG Lines Layer */}
            <svg 
              className="absolute inset-0 pointer-events-none" 
              width="100%" 
              height="100%" 
              style={{ overflow: 'visible' }}
            >
              {/* First Round to Quarter Finals */}
              <g>
                {/* 12/5 to 4 */}
                <path 
                  d={`
                    M 260,25 
                    H 280 
                    V 65 
                    H 300
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* 9/8 to 1 */}
                <path 
                  d={`
                    M 260,145 
                    H 280 
                    V 185 
                    H 300
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* 11/6 to 3 */}
                <path 
                  d={`
                    M 260,265 
                    H 280 
                    V 305 
                    H 300
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* 10/7 to 2 */}
                <path 
                  d={`
                    M 260,385 
                    H 280 
                    V 425 
                    H 300
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Quarter Finals to Semi Finals */}
              <g>
                {/* Top bracket */}
                <path 
                  d={`
                    M 540,125 
                    H 560 
                    V 185 
                    H 580
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Bottom bracket */}
                <path 
                  d={`
                    M 540,365 
                    H 560 
                    V 305 
                    H 580
                  `}
                  stroke="#666" 
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Semi Finals to Championship */}
              <path 
                d={`
                  M 820,245 
                  H 860
                `}
                stroke="#666" 
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* First Round Column */}
            <div className="space-y-8 relative z-10">
              {firstRoundMatchups.map(([team1, team2], index) => (
                <Matchup
                  key={`first-${index}`}
                  round={0}
                  matchupIndex={index}
                  team1={team1}
                  team2={team2}
                  gameInfo={gameLocations[0]?.[index]}
                />
              ))}
            </div>

            {/* Quarter Finals Column */}
            <div className="space-y-16 pt-4 relative z-10">
              {quarterFinalMatchups.map(([team1, team2], index) => (
                <Matchup
                  key={`quarter-${index}`}
                  round={1}
                  matchupIndex={index}
                  team1={team1}
                  team2={team2}
                  gameInfo={gameLocations[1]?.[index]}
                />
              ))}
            </div>

            {/* Semi Finals Column */}
            <div className="space-y-32 pt-16 relative z-10">
              {semiFinalMatchups.map(([team1, team2], index) => (
                <Matchup
                  key={`semi-${index}`}
                  round={2}
                  matchupIndex={index}
                  team1={team1}
                  team2={team2}
                  gameInfo={gameLocations[2]?.[index]}
                />
              ))}
            </div>

            {/* Championship */}
            <div className="pt-32 relative z-10">
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