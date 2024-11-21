"use client";

import { ArrowUpCircle, ArrowDownCircle, Minus } from "lucide-react";
import type { RankedTeam, WeeklyRankings } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { motion } from "framer-motion";

interface RankingsTableProps {
  weeklyRankings: WeeklyRankings[];
  selectedWeek: number;
  onWeekChange: (week: number) => void;
}

export function RankingsTable({ weeklyRankings, selectedWeek, onWeekChange }: RankingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const currentWeekRankings = weeklyRankings.find(w => w.week === selectedWeek)?.rankings || [];
  const previousWeekRankings = weeklyRankings.find(w => w.week === selectedWeek - 1)?.rankings || [];
  
  const filteredRankings = currentWeekRankings.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.conference.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTrendIcon = (team: RankedTeam) => {
    // Check if team was not ranked in previous week
    const wasRankedLastWeek = previousWeekRankings.some(prevTeam => prevTeam.name === team.name);
    if (!wasRankedLastWeek) {
      return <span className="text-green-500 font-medium text-xs">NEW</span>;
    }

    const difference = team.previousRank - team.currentRank;
    
    if (difference === 0) {
      return <Minus className="w-4 h-4 text-muted-foreground" />;
    }

    if (difference > 0) {
      return <ArrowUpCircle className="w-4 h-4 text-green-500" />;
    }

    return <ArrowDownCircle className="w-4 h-4 text-red-500" />;
  };

  const getTrendValue = (team: RankedTeam) => {
    const wasRankedLastWeek = previousWeekRankings.some(prevTeam => prevTeam.name === team.name);
    if (!wasRankedLastWeek) {
      return "-";
    }

    const difference = team.previousRank - team.currentRank;
    if (difference === 0) return "-";
    return difference > 0 ? `+${difference}` : difference;
  };

  return (
    <div className="w-full">
      <div className="p-4 border-b flex flex-col sm:flex-row gap-4 items-center justify-between bg-muted/50">
        <Select
          value={selectedWeek.toString()}
          onValueChange={(value) => onWeekChange(parseInt(value, 10))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Week" />
          </SelectTrigger>
          <SelectContent>
            {weeklyRankings.map((week) => (
              <SelectItem key={week.week} value={week.week.toString()}>
                Week {week.week}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Search by team or conference..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-[80px] font-semibold">Rank</TableHead>
            <TableHead className="font-semibold">Team</TableHead>
            <TableHead className="font-semibold">Record</TableHead>
            <TableHead className="hidden md:table-cell font-semibold">Conference</TableHead>
            <TableHead className="hidden lg:table-cell font-semibold">Last Week</TableHead>
            <TableHead className="hidden lg:table-cell font-semibold">Next Game</TableHead>
            <TableHead className="w-[100px] text-center font-semibold">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRankings.map((team) => (
            <motion.tr
              key={team.name}
              className={cn(
                "hover:bg-muted/50",
                team.currentRank <= 4 && "bg-primary/5"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <TableCell className="font-semibold">{team.currentRank}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: team.primaryColor }}
                  />
                  <span className="font-medium">{team.name}</span>
                </div>
              </TableCell>
              <TableCell>{team.record}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {team.conference}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <div className="text-sm">
                  {team.lastWeek ? (
                    <>
                      <span className={cn(
                        team.lastWeek.result === 'W' && "text-green-500",
                        team.lastWeek.result === 'L' && "text-red-500"
                      )}>
                        {team.lastWeek.result}
                      </span>
                      {' '}
                      {team.lastWeek.opponent} {team.lastWeek.score}
                    </>
                  ) : (
                    <span className="text-muted-foreground">Bye</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <div className="text-sm">
                  {team.nextGame ? (
                    <>
                      {team.nextGame.location === 'home' ? 'vs' : '@'}{' '}
                      {team.nextGame.opponent}
                    </>
                  ) : (
                    <span className="text-muted-foreground">Bye</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  {getTrendIcon(team)}
                  <span className={cn(
                    "text-xs font-medium",
                    team.previousRank - team.currentRank > 0 && "text-green-500",
                    team.previousRank - team.currentRank < 0 && "text-red-500",
                    team.previousRank - team.currentRank === 0 && "text-muted-foreground"
                  )}>
                    {getTrendValue(team)}
                  </span>
                </div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}