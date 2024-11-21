"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-bold">CFBBracket</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/bracket" className="text-muted-foreground">Bracket</Link>
                </li>
                <li>
                  <Link href="/rankings" className="text-muted-foreground">Top 25</Link>
                </li>
                <li>
                  <Link href="/rules" className="text-muted-foreground">Rules</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy" className="text-muted-foreground">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground">Terms</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            <p>© {currentYear} CFBBracket</p>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">CFBBracket</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Create and share your College Football Playoff predictions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/bracket" className="text-muted-foreground hover:text-primary transition-colors">
                    Bracket Builder
                  </Link>
                </li>
                <li>
                  <Link href="/rankings" className="text-muted-foreground hover:text-primary transition-colors">
                    Top 25 Rankings
                  </Link>
                </li>
                <li>
                  <Link href="/rules" className="text-muted-foreground hover:text-primary transition-colors">
                    Playoff Rules
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} CFBBracket. All rights reserved.</p>
              <p className="mt-2">
                Not affiliated with the NCAA or CFP
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}