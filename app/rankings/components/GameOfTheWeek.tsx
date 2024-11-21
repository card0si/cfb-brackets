import { CalendarDays, MapPin, Trophy } from "lucide-react";
import type { GameOfTheWeek as GameOfTheWeekType } from "@/lib/types";

interface GameOfTheWeekProps {
  game: GameOfTheWeekType;
}

export function GameOfTheWeek({ game }: GameOfTheWeekProps) {
  return (
    <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-semibold">Game of the Week</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Teams */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full mb-2 border-2 border-background"
                style={{ backgroundColor: game.homeTeam.primaryColor }}
              />
              <div className="font-semibold">{game.homeTeam.name}</div>
              <div className="text-sm text-muted-foreground">
                #{game.homeTeam.currentRank}
              </div>
            </div>
            <div className="text-2xl font-bold">vs</div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full mb-2 border-2 border-background"
                style={{ backgroundColor: game.awayTeam.primaryColor }}
              />
              <div className="font-semibold">{game.awayTeam.name}</div>
              <div className="text-sm text-muted-foreground">
                #{game.awayTeam.currentRank}
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="w-4 h-4" />
              <span>{game.dateTime}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{game.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm max-w-2xl">
          {game.description}
        </p>
      </div>
    </div>
  );
}