import Link from "next/link";
import { Trophy } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Trophy className="h-6 w-6" />
          <span className="font-bold">CFBBracket</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
          <Link
            href="/bracket"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Bracket Builder
          </Link>
          <Link
            href="/rankings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Top 25
          </Link>
          <Link
            href="/rules"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Playoff Rules
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}