"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { weeklyRankings } from "@/lib/rankings-data";
import { RankingsTable } from "./components/RankingsTable";
import { MiniBracket } from "./components/MiniBracket";

export default function RankingsPage() {
  const [selectedWeek, setSelectedWeek] = useState(weeklyRankings[weeklyRankings.length - 1].week);

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentWeekData = weeklyRankings.find(w => w.week === selectedWeek) || weeklyRankings[weeklyRankings.length - 1];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Header with Mini Bracket */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">2024 College Football Top 25</h1>
              <p className="text-muted-foreground">
                Updated {lastUpdated}
              </p>
            </div>
            <MiniBracket 
              rankings={currentWeekData.rankings} 
              selectedWeek={currentWeekData.week}
            />
          </div>

          {/* Rankings Table */}
          <div className="rounded-xl border bg-card">
            <RankingsTable 
              weeklyRankings={weeklyRankings} 
              selectedWeek={selectedWeek}
              onWeekChange={setSelectedWeek}
            />
          </div>
        </div>
      </div>
    </div>
  );
}