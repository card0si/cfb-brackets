"use client";

import { cn } from "@/lib/utils";
import type { RankedTeam } from "@/lib/types";
import { Trophy, ArrowRight } from "lucide-react";

interface MiniBracketProps {
  rankings: RankedTeam[];
  selectedWeek: number;
}

export function MiniBracket({ rankings, selectedWeek }: MiniBracketProps) {
  // Ensure we have enough teams
  const byeTeams = rankings.slice(0, 4);
  const firstRoundTeams = rankings.slice(4, 12);

  // Fill any missing slots with placeholder teams
  while (byeTeams.length < 4) {
    byeTeams.push({
      currentRank: byeTeams.length + 1,
      previousRank: 0,
      trend: 'same',
      name: 'TBD',
      conference: '',
      record: '',
      primaryColor: '#94a3b8' // Use a default color
    });
  }

  while (firstRoundTeams.length < 8) {
    firstRoundTeams.push({
      currentRank: firstRoundTeams.length + 5,
      previousRank: 0,
      trend: 'same',
      name: 'TBD',
      conference: '',
      record: '',
      primaryColor: '#94a3b8' // Use a default color
    });
  }

  const matchups = [
    { teams: [firstRoundTeams[3], firstRoundTeams[4]], bye: byeTeams[0] }, // 8 vs 9 → 1
    { teams: [firstRoundTeams[0], firstRoundTeams[7]], bye: byeTeams[3] }, // 5 vs 12 → 4
    { teams: [firstRoundTeams[1], firstRoundTeams[6]], bye: byeTeams[2] }, // 6 vs 11 → 3
    { teams: [firstRoundTeams[2], firstRoundTeams[5]], bye: byeTeams[1] }, // 7 vs 10 → 2
  ];

  const TeamPill = ({ team }: { team: RankedTeam }) => (
    <div className="flex items-center gap-1.5">
      <div
        className="w-4 h-4 rounded shrink-0 flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
        style={{ backgroundColor: team.primaryColor }}
      >
        {team.currentRank}
      </div>
      <span className="text-xs font-medium truncate">{team.name}</span>
      {team.record && (
        <span className="text-[10px] text-muted-foreground">({team.record})</span>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border bg-card shadow-card overflow-hidden transition-shadow hover:shadow-card-hover">
      <div className="p-2.5 border-b flex items-center gap-2 bg-muted">
        <Trophy className="w-4 h-4 text-primary" />
        <h3 className="font-semibold text-sm">12-Team Playoff Bracket – Week {selectedWeek}</h3>
      </div>
      
      <div className="p-4 grid grid-cols-1 gap-3">
        {matchups.map((matchup, index) => (
          <div key={index} className="flex items-center justify-center gap-3">
            <div className="w-64 p-2 rounded bg-card border shadow-sm space-y-1">
              <TeamPill team={matchup.teams[0]} />
              <div className="h-px bg-border my-1" />
              <TeamPill team={matchup.teams[1]} />
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
            <div className="w-48 p-1.5 rounded bg-primary/5 border border-primary/20 shadow-sm">
              <TeamPill team={matchup.bye} />
              <span className="text-[10px] italic text-muted-foreground ml-6">bye</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}