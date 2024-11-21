export interface Team {
  seed: number;
  name: string;
  conference: string;
  record?: string;
  primaryColor?: string;
  logoUrl?: string;
}

export interface GameInfo {
  location: string;
  dateTime: string;
}

export interface GameResult {
  opponent: string;
  result: 'W' | 'L';
  score: string;
}

export interface NextGame {
  opponent: string;
  location: 'home' | 'away';
  date?: string;
}

export interface BracketState {
  firstRound: (Team | null)[];
  quarterFinals: (Team | null)[];
  semiFinals: (Team | null)[];
  championship: Team | null;
  champion: Team | null;
}

export interface RankedTeam extends Team {
  currentRank: number;
  previousRank: number;
  trend: 'up' | 'down' | 'same';
  lastWeek?: GameResult;
  nextGame?: NextGame;
}

export interface WeeklyRankings {
  week: number;
  rankings: RankedTeam[];
}