"use client";

import { Trophy, Home, ChevronRight, Users, Star, Calendar, Medal, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RulesPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Trophy className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CFP Playoff Rules</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything You Need to Know About the College Football Playoff Structure
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex justify-center mb-12">
          <Link href="/bracket">
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Bracket Builder
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Introduction */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto space-y-12"
        >
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The College Football Playoff is a 12-team tournament that determines the national champion. 
              This expanded format ensures more teams have a chance to compete for the title while 
              maintaining the importance of the regular season.
            </p>
          </motion.div>

          {/* Team Selection */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Team Selection Criteria</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>The five highest-ranked conference champions automatically qualify</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Seven additional at-large teams are selected based on CFP rankings</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Rankings are determined by the CFP selection committee</span>
              </li>
            </ul>
          </motion.div>

          {/* Seeding and Byes */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Seeding and Byes</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>The four highest-ranked conference champions receive first-round byes (Seeds 1-4)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Non-conference champions are seeded 5-12, regardless of ranking</span>
              </li>
            </ul>
          </motion.div>

          {/* First Round Games */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">First-Round Games</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Seeds 5-12 play in the first round</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Games are played at the higher seed's home stadium</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Matchups: 12v5, 11v6, 10v7, 9v8</span>
              </li>
            </ul>
          </motion.div>

          {/* Bowl Games */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Quarterfinals and Bowl Assignments</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Quarterfinals are hosted by the New Year's Six bowl games</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Bowl assignments consider historical conference relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Higher seeds receive preferential bowl placement when possible</span>
              </li>
            </ul>
          </motion.div>

          {/* Championship */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Semifinals and National Championship</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Semifinals rotate among the New Year's Six bowls</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Championship game is played at a pre-selected neutral site</span>
              </li>
            </ul>
          </motion.div>

          {/* Bracket Integrity */}
          <motion.div variants={item} className="bg-card rounded-xl p-8 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Bracket Integrity</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>No re-seeding occurs during the tournament</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Rematches and same-conference matchups are allowed</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Bracket structure remains fixed throughout the playoff</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}