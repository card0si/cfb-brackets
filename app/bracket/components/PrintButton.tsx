"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    // Add print-specific styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        #bracket-container, #bracket-container * {
          visibility: visible;
        }
        #bracket-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: white !important;
        }
        /* Winner styles for print */
        #bracket-container button[style*="background-color"] {
          position: relative;
          font-weight: bold !important;
          opacity: 1 !important;
          background-color: white !important;
          color: black !important;
        }
        #bracket-container button[style*="background-color"]::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid black;
          border-radius: 4px;
          pointer-events: none;
        }
        /* Loser styles for print */
        #bracket-container button:not([style*="background-color"]) {
          opacity: 0.5 !important;
          background-color: white !important;
          color: black !important;
        }
        /* Hide Home indicator and game info in print */
        #bracket-container .text-muted-foreground {
          display: none !important;
        }
        /* Ensure text is black for better printing */
        #bracket-container h1,
        #bracket-container h2,
        #bracket-container span {
          color: black !important;
        }
        @page {
          size: landscape;
          margin: 0.5in;
        }
      }
    `;
    document.head.appendChild(style);

    // Trigger print
    window.print();

    // Remove print styles after printing
    document.head.removeChild(style);
  };

  return (
    <Button
      variant="outline"
      onClick={handlePrint}
      className="flex items-center gap-2"
    >
      <Printer className="h-4 w-4" />
      Print Bracket
    </Button>
  );
}