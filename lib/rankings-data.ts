import type { WeeklyRankings } from "./types";

export const weeklyRankings: WeeklyRankings[] = [
  {
    week: 10,
    rankings: [
      { currentRank: 1, name: "Oregon", conference: "Pac-12", record: "9-0", previousRank: 1, trend: "same", primaryColor: "#154733", lastWeek: { result: "W", opponent: "Utah", score: "35-6" }, nextGame: { opponent: "@Michigan", location: "away" } },
      { currentRank: 2, name: "Ohio State", conference: "Big Ten", record: "7-1", previousRank: 2, trend: "same", primaryColor: "#BB0000", lastWeek: { result: "W", opponent: "Wisconsin", score: "24-10" }, nextGame: { opponent: "@Penn State", location: "away" } },
      { currentRank: 3, name: "Georgia", conference: "SEC", record: "7-1", previousRank: 3, trend: "same", primaryColor: "#BA0C2F", lastWeek: { result: "W", opponent: "Missouri", score: "43-6" }, nextGame: { opponent: "Florida", location: "home" } },
      { currentRank: 4, name: "Miami", conference: "ACC", record: "9-0", previousRank: 4, trend: "same", primaryColor: "#F47321", lastWeek: { result: "W", opponent: "NC State", score: "31-17" }, nextGame: { opponent: "Duke", location: "home" } },
      { currentRank: 5, name: "Texas", conference: "SEC", record: "7-1", previousRank: 5, trend: "same", primaryColor: "#BF5700", lastWeek: { result: "W", opponent: "Kansas State", score: "33-30" }, nextGame: { opponent: "Florida", location: "home" } },
      { currentRank: 6, name: "Penn State", conference: "Big Ten", record: "7-1", previousRank: 6, trend: "same", primaryColor: "#041E42", lastWeek: { result: "W", opponent: "Indiana", score: "45-14" }, nextGame: { opponent: "Washington", location: "home" } },
      { currentRank: 7, name: "Tennessee", conference: "SEC", record: "7-1", previousRank: 7, trend: "same", primaryColor: "#FF8200", lastWeek: { result: "W", opponent: "Alabama", score: "34-24" }, nextGame: { opponent: "Kentucky", location: "home" } },
      { currentRank: 8, name: "Indiana", conference: "Big Ten", record: "9-0", previousRank: 8, trend: "same", primaryColor: "#990000", lastWeek: { result: "W", opponent: "Rutgers", score: "31-7" }, nextGame: { opponent: "Michigan State", location: "away" } },
      { currentRank: 9, name: "BYU", conference: "Big 12", record: "8-0", previousRank: 9, trend: "same", primaryColor: "#002E5D", lastWeek: { result: "W", opponent: "Texas Tech", score: "27-14" }, nextGame: { opponent: "Bye", location: "home" } },
      { currentRank: 10, name: "Notre Dame", conference: "FBS Indep.", record: "7-1", previousRank: 10, trend: "same", primaryColor: "#0C2340", lastWeek: { result: "W", opponent: "Pittsburgh", score: "42-3" }, nextGame: { opponent: "Bye", location: "home" } },
      { currentRank: 11, name: "Alabama", conference: "SEC", record: "6-2", previousRank: 11, trend: "same", primaryColor: "#9E1B32", lastWeek: { result: "L", opponent: "Tennessee", score: "34-24" }, nextGame: { opponent: "@LSU", location: "away" } },
      { currentRank: 12, name: "Boise State", conference: "Mountain West", record: "7-1", previousRank: 12, trend: "same", primaryColor: "#D64309", lastWeek: { result: "W", opponent: "Wyoming", score: "20-17" }, nextGame: { opponent: "Nevada", location: "home" } },
      { currentRank: 13, name: "SMU", conference: "American", record: "8-1", previousRank: 13, trend: "same", primaryColor: "#0033A0", lastWeek: { result: "W", opponent: "Tulsa", score: "45-21" }, nextGame: { opponent: "Memphis", location: "home" } },
      { currentRank: 14, name: "Texas A&M", conference: "SEC", record: "7-2", previousRank: 14, trend: "same", primaryColor: "#500000", lastWeek: { result: "W", opponent: "South Carolina", score: "30-17" }, nextGame: { opponent: "@Ole Miss", location: "away" } },
      { currentRank: 15, name: "LSU", conference: "SEC", record: "6-2", previousRank: 15, trend: "same", primaryColor: "#461D7C", lastWeek: { result: "W", opponent: "Auburn", score: "48-18" }, nextGame: { opponent: "Alabama", location: "home" } },
      { currentRank: 16, name: "Mississippi", conference: "SEC", record: "7-2", previousRank: 16, trend: "same", primaryColor: "#CE1126", lastWeek: { result: "W", opponent: "Vanderbilt", score: "33-7" }, nextGame: { opponent: "Texas A&M", location: "home" } },
      { currentRank: 17, name: "Iowa State", conference: "Big 12", record: "7-1", previousRank: 17, trend: "same", primaryColor: "#C8102E", lastWeek: { result: "W", opponent: "Cincinnati", score: "30-10" }, nextGame: { opponent: "Kansas", location: "home" } },
      { currentRank: 18, name: "Pittsburgh", conference: "ACC", record: "7-1", previousRank: 18, trend: "same", primaryColor: "#003594", lastWeek: { result: "L", opponent: "Notre Dame", score: "42-3" }, nextGame: { opponent: "Syracuse", location: "home" } },
      { currentRank: 19, name: "Kansas State", conference: "Big 12", record: "7-2", previousRank: 19, trend: "same", primaryColor: "#512888", lastWeek: { result: "L", opponent: "Texas", score: "33-30" }, nextGame: { opponent: "Baylor", location: "home" } },
      { currentRank: 20, name: "Colorado", conference: "Pac-12", record: "6-2", previousRank: 20, trend: "same", primaryColor: "#CFB87C", lastWeek: { result: "W", opponent: "Arizona State", score: "28-14" }, nextGame: { opponent: "Oregon State", location: "home" } },
      { currentRank: 21, name: "Washington State", conference: "Pac-12", record: "7-1", previousRank: 21, trend: "same", primaryColor: "#981E32", lastWeek: { result: "W", opponent: "Stanford", score: "38-28" }, nextGame: { opponent: "@Arizona", location: "away" } },
      { currentRank: 22, name: "Louisville", conference: "ACC", record: "6-3", previousRank: 22, trend: "same", primaryColor: "#AD0000", lastWeek: { result: "L", opponent: "Duke", score: "24-14" }, nextGame: { opponent: "Virginia Tech", location: "home" } },
      { currentRank: 23, name: "Clemson", conference: "ACC", record: "6-2", previousRank: 23, trend: "same", primaryColor: "#F66733", lastWeek: { result: "W", opponent: "NC State", score: "31-20" }, nextGame: { opponent: "Notre Dame", location: "home" } },
      { currentRank: 24, name: "Missouri", conference: "SEC", record: "6-2", previousRank: 24, trend: "same", primaryColor: "#F1B82D", lastWeek: { result: "L", opponent: "Georgia", score: "43-6" }, nextGame: { opponent: "Tennessee", location: "home" } },
      { currentRank: 25, name: "Army", conference: "FBS Indep.", record: "8-0", previousRank: 25, trend: "same", primaryColor: "#D4BF91", lastWeek: { result: "W", opponent: "UMass", score: "21-14" }, nextGame: { opponent: "Air Force", location: "home" } }
    ]
  },
  {
    week: 11,
    rankings: [
      { currentRank: 1, name: "Oregon", conference: "Pac-12", record: "10-0", previousRank: 1, trend: "same", primaryColor: "#154733", lastWeek: { result: "W", opponent: "@Michigan", score: "38-17" }, nextGame: { opponent: "Maryland", location: "home" } },
      { currentRank: 2, name: "Ohio State", conference: "Big Ten", record: "8-1", previousRank: 2, trend: "same", primaryColor: "#BB0000", lastWeek: { result: "W", opponent: "@Penn State", score: "20-13" }, nextGame: { opponent: "Purdue", location: "home" } },
      { currentRank: 3, name: "Texas", conference: "SEC", record: "8-1", previousRank: 5, trend: "up", primaryColor: "#BF5700", lastWeek: { result: "W", opponent: "Florida", score: "49-17" }, nextGame: { opponent: "@Arkansas", location: "away" } },
      { currentRank: 4, name: "Penn State", conference: "Big Ten", record: "8-1", previousRank: 6, trend: "up", primaryColor: "#041E42", lastWeek: { result: "L", opponent: "Ohio State", score: "20-13" }, nextGame: { opponent: "Washington", location: "home" } },
      { currentRank: 5, name: "Indiana", conference: "Big Ten", record: "10-0", previousRank: 8, trend: "up", primaryColor: "#990000", lastWeek: { result: "W", opponent: "@Michigan State", score: "47-10" }, nextGame: { opponent: "Michigan", location: "home" } },
      { currentRank: 6, name: "BYU", conference: "Big 12", record: "9-0", previousRank: 9, trend: "up", primaryColor: "#002E5D", lastWeek: { result: "W", opponent: "Bye", score: "-" }, nextGame: { opponent: "@Utah", location: "away" } },
      { currentRank: 7, name: "Tennessee", conference: "SEC", record: "8-1", previousRank: 7, trend: "same", primaryColor: "#FF8200", lastWeek: { result: "W", opponent: "Kentucky", score: "28-18" }, nextGame: { opponent: "Mississippi State", location: "home" } },
      { currentRank: 8, name: "Notre Dame", conference: "FBS Indep.", record: "8-1", previousRank: 10, trend: "up", primaryColor: "#0C2340", lastWeek: { result: "W", opponent: "Bye", score: "-" }, nextGame: { opponent: "Florida State", location: "home" } },
      { currentRank: 9, name: "Miami", conference: "ACC", record: "9-1", previousRank: 4, trend: "down", primaryColor: "#F47321", lastWeek: { result: "W", opponent: "Duke", score: "53-31" }, nextGame: { opponent: "@Georgia Tech", location: "away" } },
      { currentRank: 10, name: "Alabama", conference: "SEC", record: "7-2", previousRank: 11, trend: "up", primaryColor: "#9E1B32", lastWeek: { result: "W", opponent: "@LSU", score: "42-13" }, nextGame: { opponent: "Mercer", location: "home" } },
      { currentRank: 11, name: "Mississippi", conference: "SEC", record: "8-2", previousRank: 16, trend: "up", primaryColor: "#CE1126", lastWeek: { result: "W", opponent: "Texas A&M", score: "38-35" }, nextGame: { opponent: "Georgia", location: "home" } },
      { currentRank: 12, name: "Georgia", conference: "SEC", record: "7-2", previousRank: 3, trend: "down", primaryColor: "#BA0C2F", lastWeek: { result: "L", opponent: "Florida", score: "34-20" }, nextGame: { opponent: "@Ole Miss", location: "away" } },
      { currentRank: 13, name: "Boise State", conference: "Mountain West", record: "8-1", previousRank: 12, trend: "down", primaryColor: "#D64309", lastWeek: { result: "W", opponent: "Nevada", score: "42-14" }, nextGame: { opponent: "New Mexico", location: "home" } },
      { currentRank: 14, name: "SMU", conference: "American", record: "8-1", previousRank: 13, trend: "down", primaryColor: "#0033A0", lastWeek: { result: "W", opponent: "Memphis", score: "38-34" }, nextGame: { opponent: "@Navy", location: "away" } },
      { currentRank: 15, name: "Texas A&M", conference: "SEC", record: "7-2", previousRank: 14, trend: "down", primaryColor: "#500000", lastWeek: { result: "L", opponent: "@Ole Miss", score: "38-35" }, nextGame: { opponent: "Mississippi State", location: "home" } },
      { currentRank: 16, name: "Kansas State", conference: "Big 12", record: "7-2", previousRank: 19, trend: "up", primaryColor: "#512888", lastWeek: { result: "W", opponent: "Baylor", score: "28-20" }, nextGame: { opponent: "@Kansas", location: "away" } },
      { currentRank: 17, name: "Colorado", conference: "Pac-12", record: "7-2", previousRank: 20, trend: "up", primaryColor: "#CFB87C", lastWeek: { result: "W", opponent: "Oregon State", score: "35-31" }, nextGame: { opponent: "Arizona", location: "home" } },
      { currentRank: 18, name: "Washington State", conference: "Pac-12", record: "8-1", previousRank: 21, trend: "up", primaryColor: "#981E32", lastWeek: { result: "W", opponent: "@Arizona", score: "31-20" }, nextGame: { opponent: "California", location: "home" } },
      { currentRank: 19, name: "Louisville", conference: "ACC", record: "6-3", previousRank: 22, trend: "up", primaryColor: "#AD0000", lastWeek: { result: "W", opponent: "Virginia Tech", score: "34-3" }, nextGame: { opponent: "@Pittsburgh", location: "away" } },
      { currentRank: 20, name: "Clemson", conference: "ACC", record: "7-2", previousRank: 23, trend: "up", primaryColor: "#F66733", lastWeek: { result: "W", opponent: "Notre Dame", score: "31-23" }, nextGame: { opponent: "Georgia Tech", location: "home" } },
      { currentRank: 21, name: "South Carolina", conference: "SEC", record: "6-3", previousRank: 0, trend: "up", primaryColor: "#73000A", lastWeek: { result: "W", opponent: "Jacksonville State", score: "38-7" }, nextGame: { opponent: "Vanderbilt", location: "home" } },
      { currentRank: 22, name: "LSU", conference: "SEC", record: "6-3", previousRank: 15, trend: "down", primaryColor: "#461D7C", lastWeek: { result: "L", opponent: "Alabama", score: "42-13" }, nextGame: { opponent: "Florida", location: "home" } },
      { currentRank: 23, name: "Missouri", conference: "SEC", record: "7-2", previousRank: 24, trend: "up", primaryColor: "#F1B82D", lastWeek: { result: "W", opponent: "Tennessee", score: "35-31" }, nextGame: { opponent: "@Arkansas", location: "away" } },
      { currentRank: 24, name: "Army", conference: "FBS Indep.", record: "9-0", previousRank: 25, trend: "up", primaryColor: "#D4BF91", lastWeek: { result: "W", opponent: "Air Force", score: "17-14" }, nextGame: { opponent: "Holy Cross", location: "home" } },
      { currentRank: 25, name: "Tulane", conference: "American", record: "8-2", previousRank: 0, trend: "up", primaryColor: "#006747", lastWeek: { result: "W", opponent: "East Carolina", score: "42-21" }, nextGame: { opponent: "@FAU", location: "away" } }
    ]
  },
  {
    week: 12,
    rankings: [
      { currentRank: 1, name: "Oregon", conference: "Pac-12", record: "11-0", previousRank: 1, trend: "same", primaryColor: "#154733", lastWeek: { result: "W", opponent: "Maryland", score: "39-18" }, nextGame: { opponent: "@Wisconsin", location: "away" } },
      { currentRank: 2, name: "Ohio State", conference: "Big Ten", record: "9-1", previousRank: 2, trend: "same", primaryColor: "#BB0000", lastWeek: { result: "W", opponent: "Purdue", score: "45-0" }, nextGame: { opponent: "@Northwestern", location: "away" } },
      { currentRank: 3, name: "Texas", conference: "SEC", record: "9-1", previousRank: 3, trend: "same", primaryColor: "#BF5700", lastWeek: { result: "W", opponent: "@Arkansas", score: "20-10" }, nextGame: { opponent: "Kentucky", location: "home" } },
      { currentRank: 4, name: "Penn State", conference: "Big Ten", record: "9-1", previousRank: 4, trend: "same", primaryColor: "#041E42", lastWeek: { result: "W", opponent: "Washington", score: "35-6" }, nextGame: { opponent: "@Purdue", location: "away" } },
      { currentRank: 5, name: "Indiana", conference: "Big Ten", record: "10-0", previousRank: 5, trend: "same", primaryColor: "#990000", lastWeek: { result: "W", opponent: "Michigan", score: "20-15" }, nextGame: { opponent: "Bye", location: "home" } },
      { currentRank: 6, name: "Notre Dame", conference: "FBS Indep.", record: "9-1", previousRank: 8, trend: "up", primaryColor: "#0C2340", lastWeek: { result: "W", opponent: "Florida State", score: "52-3" }, nextGame: { opponent: "Virginia", location: "home" } },
      { currentRank: 7, name: "Alabama", conference: "SEC", record: "8-2", previousRank: 10, trend: "up", primaryColor: "#9E1B32", lastWeek: { result: "W", opponent: "Mercer", score: "52-7" }, nextGame: { opponent: "@Oklahoma", location: "away" } },
      { currentRank: 8, name: "Miami", conference: "ACC", record: "9-1", previousRank: 9, trend: "up", primaryColor: "#F47321", lastWeek: { result: "L", opponent: "@Georgia Tech", score: "28-23" }, nextGame: { opponent: "Bye", location: "home" } },
      { currentRank: 9, name: "Mississippi", conference: "SEC", record: "8-2", previousRank: 11, trend: "up", primaryColor: "#CE1126", lastWeek: { result: "W", opponent: "Georgia", score: "28-10" }, nextGame: { opponent: "Bye", location: "home" } },
      { currentRank: 10, name: "Georgia", conference: "SEC", record: "8-2", previousRank: 12, trend: "up", primaryColor: "#BA0C2F", lastWeek: { result: "L", opponent: "@Ole Miss", score: "28-10" }, nextGame: { opponent: "Tennessee", location: "home" } },
      { currentRank: 11, name: "Tennessee", conference: "SEC", record: "8-2", previousRank: 7, trend: "down", primaryColor: "#FF8200", lastWeek: { result: "W", opponent: "Mississippi State", score: "33-14" }, nextGame: { opponent: "@Georgia", location: "away" } },
      { currentRank: 12, name: "Boise State", conference: "Mountain West", record: "9-1", previousRank: 13, trend: "up", primaryColor: "#D64309", lastWeek: { result: "W", opponent: "New Mexico", score: "38-14" }, nextGame: { opponent: "@San Jose State", location: "away" } },
      { currentRank: 13, name: "SMU", conference: "American", record: "9-1", previousRank: 14, trend: "up", primaryColor: "#0033A0", lastWeek: { result: "W", opponent: "@Navy", score: "31-24" }, nextGame: { opponent: "Memphis", location: "home" } },
      { currentRank: 14, name: "BYU", conference: "Big 12", record: "9-1", previousRank: 6, trend: "down", primaryColor: "#002E5D", lastWeek: { result: "W", opponent: "@Utah", score: "22-21" }, nextGame: { opponent: "Kansas", location: "home" } },
      { currentRank: 15, name: "Texas A&M", conference: "SEC", record: "8-2", previousRank: 15, trend: "same", primaryColor: "#500000", lastWeek: { result: "W", opponent: "Mississippi State", score: "31-17" }, nextGame: { opponent: "@LSU", location: "away" } },
      { currentRank: 16, name: "Colorado", conference: "Pac-12", record: "8-2", previousRank: 17, trend: "up", primaryColor: "#CFB87C", lastWeek: { result: "W", opponent: "Arizona", score: "42-35" }, nextGame: { opponent: "@Utah", location: "away" } },
      { currentRank: 17, name: "Clemson", conference: "ACC", record: "8-2", previousRank: 20, trend: "up", primaryColor: "#F66733", lastWeek: { result: "W", opponent: "Georgia Tech", score: "38-10" }, nextGame: { opponent: "North Carolina", location: "home" } },
      { currentRank: 18, name: "South Carolina", conference: "SEC", record: "7-3", previousRank: 21, trend: "up", primaryColor: "#73000A", lastWeek: { result: "W", opponent: "Vanderbilt", score: "45-20" }, nextGame: { opponent: "@Kentucky", location: "away" } },
      { currentRank: 19, name: "Army", conference: "FBS Indep.", record: "9-0", previousRank: 24, trend: "up", primaryColor: "#D4BF91", lastWeek: { result: "W", opponent: "Holy Cross", score: "35-14" }, nextGame: { opponent: "@UMass", location: "away" } },
      { currentRank: 20, name: "Tulane", conference: "American", record: "9-2", previousRank: 25, trend: "up", primaryColor: "#006747", lastWeek: { result: "W", opponent: "@FAU", score: "38-14" }, nextGame: { opponent: "Rice", location: "home" } },
      { currentRank: 21, name: "Arizona State", conference: "Pac-12", record: "8-2", previousRank: 0, trend: "up", primaryColor: "#8C1D40", lastWeek: { result: "W", opponent: "California", score: "31-17" }, nextGame: { opponent: "Oregon State", location: "home" } },
      { currentRank: 22, name: "Iowa State", conference: "Big 12", record: "8-2", previousRank: 0, trend: "up", primaryColor: "#C8102E", lastWeek: { result: "W", opponent: "Texas Tech", score: "27-24" }, nextGame: { opponent: "@TCU", location: "away" } },
      { currentRank: 23, name: "Missouri", conference: "SEC", record: "7-3", previousRank: 23, trend: "same", primaryColor: "#F1B82D", lastWeek: { result: "L", opponent: "@Arkansas", score: "35-31" }, nextGame: { opponent: "Arkansas", location: "home" } },
      { currentRank: 24, name: "UNLV", conference: "Mountain West", record: "8-2", previousRank: 0, trend: "up", primaryColor: "#CF0A2C", lastWeek: { result: "W", opponent: "Wyoming", score: "34-27" }, nextGame: { opponent: "Air Force", location: "home" } },
      { currentRank: 25, name: "Illinois", conference: "Big Ten", record: "7-3", previousRank: 0, trend: "up", primaryColor: "#E84A27", lastWeek: { result: "W", opponent: "Indiana", score: "27-24" }, nextGame: { opponent: "Iowa", location: "home" } }
    ]
  }
];