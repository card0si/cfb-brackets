import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cfb-bracket.vercel.app'),
  title: {
    default: "CFB Bracket | College Football Playoff Bracket Builder",
    template: "%s | CFB Bracket"
  },
  description: "Create, share, and predict your College Football Playoff journey with our interactive 12-team bracket builder. Stay updated with the latest CFP rankings and rules.",
  keywords: ["college football playoff", "cfp bracket", "bracket builder", "cfb rankings", "playoff predictions"],
  authors: [{ name: "CFB Bracket" }],
  creator: "CFB Bracket",
  publisher: "CFB Bracket",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "CFB Bracket | College Football Playoff Bracket Builder",
    description: "Create your College Football Playoff predictions with our interactive 12-team bracket builder. Share brackets and stay updated with live rankings.",
    siteName: "CFB Bracket",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "CFB Bracket - College Football Playoff Bracket Builder"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFB Bracket | College Football Playoff Bracket Builder",
    description: "Create your College Football Playoff predictions with our interactive 12-team bracket builder. Share brackets and stay updated with live rankings.",
    images: ["/og-image.jpg"],
    creator: "@cfbbracket"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CFB Bracket",
              "description": "Interactive College Football Playoff Bracket Builder with live rankings and rules.",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "applicationCategory": "Sports",
              "genre": "College Football",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0.0",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "CFB Bracket",
                "url": process.env.NEXT_PUBLIC_SITE_URL
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}