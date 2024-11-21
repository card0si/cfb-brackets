import type { Team, GameInfo } from "./types";

export const gameLocations: Record<number, GameInfo[]> = {
  0: [
    { location: "#5 Ohio State (Home)", dateTime: "Dec 20, 8:00 PM EST" },
    { location: "#8 Notre Dame (Home)", dateTime: "Dec 21, 12:00 PM EST" },
    { location: "#6 Penn State (Home)", dateTime: "Dec 21, 4:00 PM EST" },
    { location: "#7 Indiana (Home)", dateTime: "Dec 21, 8:00 PM EST" }
  ],
  1: [
    { location: "Fiesta Bowl - Glendale, AZ", dateTime: "Dec 31, 7:30 PM EST" },
    { location: "Peach Bowl - Atlanta, GA", dateTime: "Jan 1, 1:00 PM EST" },
    { location: "Rose Bowl - Pasadena, CA", dateTime: "Jan 1, 5:00 PM EST" },
    { location: "Sugar Bowl - New Orleans, LA", dateTime: "Jan 1, 8:45 PM EST" }
  ],
  2: [
    { location: "Orange Bowl - Miami, FL", dateTime: "Jan 9, 7:30 PM EST" },
    { location: "Cotton Bowl - Arlington, TX", dateTime: "Jan 10, 7:30 PM EST" }
  ],
  3: [
    { location: "Mercedes-Benz Stadium - Atlanta, GA", dateTime: "Jan 20, 7:30 PM EST" }
  ]
};