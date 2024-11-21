"use client";

import { cn } from "@/lib/utils";
import { useBracket } from "./BracketContext";
import type { Team, GameInfo } from "@/lib/types";
import { Info, Calendar, MapPin } from "lucide-react";
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
  isByeGame?: boolean;
}

export function Matchup({
  round,
  matchupIndex,
  team1,
  team2,
  isChampionship = false,
  gameInfo,
  isByeGame = false,
}: MatchupProps) {
  const { updateMatchupWinner, bracketState } = useBracket();

  const handleTeamClick = (team: Team) => {
    if (isByeGame) {
      updateMatchupWinner(round, matchupIndex, team);
      return;
    }
    if (!team1 || !team2) return;
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

  const TeamSlot = ({ team, isPlaceholder = false }: { team: Team | null; isPlaceholder?: boolean }) => {
    if (!team && !isPlaceholder) return (
      <div className="h-10 flex items-center justify-center border border-dashed border-border/50 rounded bg-black/5">
        <span className="text-sm text-muted-foreground">TBD</span>
      </div>
    );

    if (!team && isPlaceholder) return (
      <div className="h-10 flex items-center justify-center border border-dashed border-border/30 rounded bg-black/5">
        <span className="text-sm text-muted-foreground/50">Bye</span>
      </div>
    );

    return (
      <button
        onClick={() => handleTeamClick(team)}
        disabled={!isByeGame && (!team1 || !team2)}
        className={cn(
          "flex items-center gap-2 px-3 h-10 rounded text-left transition-all duration-200 w-full",
          "hover:bg-accent hover:text-accent-foreground group",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          isTeamWinner(team)
            ? "bg-primary text-primary-foreground"
            : "bg-black/5 hover:bg-accent/50 active:scale-[0.98]"
        )}
        style={{
          backgroundColor: isTeamWinner(team) ? team.primaryColor : undefined,
        }}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-sm font-semibold w-6 text-center">{team.seed}</span>
          <span className="font-semibold truncate">{team.name}</span>
          {round === 0 && team.seed <= 8 && (
            <span className="text-xs text-muted-foreground ml-auto">(Home)</span>
          )}
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
        "flex flex-col gap-1.5 w-[260px]"
      )}
    >
      <TeamSlot team={team1} />
      <TeamSlot team={team2} isPlaceholder={isByeGame} />
      {gameInfo && (
        <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
          {round === 0 ? (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <p>{gameInfo.dateTime}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <p>{gameInfo.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <p>{gameInfo.dateTime}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}