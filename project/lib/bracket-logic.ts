import type { Team, BracketState, RankedTeam, WeeklyRankings } from "./types";
import { weeklyRankings } from "./rankings-data";

// Get the latest rankings
export function getLatestRankings(): RankedTeam[] {
  const latestWeek = weeklyRankings[weeklyRankings.length - 1];
  return latestWeek.rankings;
}

// Convert RankedTeam to Team format
function convertToTeam(rankedTeam: RankedTeam): Team {
  return {
    seed: rankedTeam.currentRank,
    name: rankedTeam.name,
    conference: rankedTeam.conference,
    record: rankedTeam.record,
    primaryColor: rankedTeam.primaryColor,
    stats: {
      offenseRank: Math.floor(Math.random() * 25) + 1, // Placeholder
      defenseRank: Math.floor(Math.random() * 25) + 1, // Placeholder
      keyPlayer: rankedTeam.lastWeek?.opponent // Placeholder
    }
  };
}

// Get initial teams for the bracket
export function getInitialTeams(): Team[] {
  const rankings = getLatestRankings();
  const top12Teams = rankings.slice(0, 12);
  return top12Teams.map(convertToTeam);
}

// Get first round matchups (seeds 5-12)
export function getFirstRoundMatchups(teams: Team[]): [Team, Team][] {
  // Order matches according to the specified format:
  // [12 vs 5, 9 vs 8, 11 vs 6, 10 vs 7]
  const seedPairs = [[12, 5], [9, 8], [11, 6], [10, 7]];
  return seedPairs.map(([seed1, seed2]) => {
    const team1 = teams.find(t => t.seed === seed1)!;
    const team2 = teams.find(t => t.seed === seed2)!;
    return [team1, team2];
  });
}

// Get teams with first round byes (top 4 seeds)
export function getByeTeams(teams: Team[]): Team[] {
  return teams.filter(team => team.seed <= 4).sort((a, b) => a.seed - b.seed);
}

// Get quarterfinal matchups based on first round results
export function getQuarterFinalMatchups(
  byeTeams: Team[],
  firstRoundWinners: (Team | null)[]
): [Team | null, Team | null][] {
  // Match winners with bye teams in correct order:
  // Winner of 12/5 vs 4
  // Winner of 9/8 vs 1
  // Winner of 11/6 vs 3
  // Winner of 10/7 vs 2
  return [
    [firstRoundWinners[0], byeTeams[3]], // Winner of 12/5 vs 4
    [firstRoundWinners[1], byeTeams[0]], // Winner of 9/8 vs 1
    [firstRoundWinners[2], byeTeams[2]], // Winner of 11/6 vs 3
    [firstRoundWinners[3], byeTeams[1]], // Winner of 10/7 vs 2
  ];
}

// Get semifinal matchups based on quarterfinal results
export function getSemiFinalMatchups(
  quarterFinalWinners: (Team | null)[]
): [Team | null, Team | null][] {
  return [
    [quarterFinalWinners[0], quarterFinalWinners[1]], // Top bracket semifinal
    [quarterFinalWinners[2], quarterFinalWinners[3]], // Bottom bracket semifinal
  ];
}

// Initialize empty bracket state
export function getInitialBracketState(): BracketState {
  return {
    firstRound: Array(4).fill(null),
    quarterFinals: Array(4).fill(null),
    semiFinals: Array(2).fill(null),
    championship: null,
    champion: null,
  };
}