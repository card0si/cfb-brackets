"use client";

import { cn } from "@/lib/utils";
import { useBracket } from "./BracketContext";
import type { Team, GameInfo } from "@/lib/types";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MatchupProps {
  round: number;
  matchupIndex: number;
  team1: Team | null;
  team2: Team | null;
  isChampionship?: boolean;
  gameInfo?: GameInfo;
}

export function Matchup({
  round,
  matchupIndex,
  team1,
  team2,
  isChampionship = false,
  gameInfo,
}: MatchupProps) {
  const { updateMatchupWinner, bracketState } = useBracket();

  const handleTeamClick = (team: Team | null) => {
    if (!team) return;
    updateMatchupWinner(round, matchupIndex, team);
  };

  const isTeamWinner = (team: Team | null) => {
    if (!team) return false;
    switch (round) {
      case 0: return bracketState.firstRound[matchupIndex]?.name === team.name;
      case 1: return bracketState.quarterFinals[matchupIndex]?.name === team.name;
      case 2: return bracketState.semiFinals[matchupIndex]?.name === team.name;
      case 3: return bracketState.champion?.name === team.name;
      default: return false;
    }
  };

  const TeamSlot = ({ team }: { team: Team | null }) => {
    if (!team) return (
      <div className="h-[60px] flex items-center justify-center border border-dashed border-border/50 rounded-lg">
        <span className="text-sm text-muted-foreground">TBD</span>
      </div>
    );

    return (
      <button
        onClick={() => handleTeamClick(team)}
        className={cn(
          "flex items-center gap-2 p-2 h-[60px] rounded-lg text-left transition-all duration-200 w-full",
          "hover:bg-accent hover:text-accent-foreground group",
          "border border-transparent",
          isTeamWinner(team)
            ? "bg-primary/20 text-primary border-primary/50 hover:bg-primary/30"
            : "hover:bg-accent/50 active:scale-[0.98] hover:border-border/80",
          "dark:shadow-sm",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        )}
        style={{
          backgroundColor: isTeamWinner(team) ? team.primaryColor : undefined,
        }}
      >
        <div className="relative w-6 h-6 rounded-md bg-muted/80 flex items-center justify-center shrink-0">
          {team.logoUrl ? (
            <img
              src={team.logoUrl}
              alt={`${team.name} logo`}
              className="w-4 h-4 object-contain"
            />
          ) : (
            <span className="text-xs font-semibold">{team.seed}</span>
          )}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-semibold truncate text-sm">{team.name}</span>
          <span className="text-xs text-muted-foreground truncate">
            {team.conference} {team.record && `(${team.record})`}
          </span>
        </div>
        {team.stats && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-sm">
                  <p>Offense Rank: #{team.stats.offenseRank}</p>
                  <p>Defense Rank: #{team.stats.defenseRank}</p>
                  {team.stats.keyPlayer && (
                    <p className="mt-1">{team.stats.keyPlayer}</p>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </button>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full md:w-[280px] p-3 rounded-lg bg-card/90 shadow-sm",
        "border border-border/80",
        isChampionship && "ring-2 ring-primary/80 ring-offset-2 ring-offset-background"
      )}
    >
      <TeamSlot team={team1} />
      <TeamSlot team={team2} />
      {gameInfo && (
        <div className="text-xs text-muted-foreground">
          <p className="truncate">{gameInfo.location}</p>
          <p className="truncate">{gameInfo.dateTime}</p>
        </div>
      )}
    </div>
  );
}