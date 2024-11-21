import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted">
      <div className="container px-4 py-16 mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Trophy className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          The Ultimate College Football
          <span className="text-primary block">Playoff Bracket Builder</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto mb-8">
          Create, share, and predict your College Football Playoff journey with our
          interactive 12-team bracket builder. Who will be crowned champion?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/bracket">
            <Button size="lg" className="text-lg px-8">
              Create Your Bracket
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">12-Team Format</h3>
            <p className="text-muted-foreground">
              Experience the new expanded playoff format with top conference champions
              and at-large teams.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Interactive Builder</h3>
            <p className="text-muted-foreground">
              Click to advance teams through each round and watch your bracket come
              to life.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Share Your Picks</h3>
            <p className="text-muted-foreground">
              Generate shareable links and images to compare brackets with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}