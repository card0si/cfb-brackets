import { Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-8">About CFBBracket.com</h1>
        
        <div className="space-y-6 text-lg">
          <p>
            Welcome to CFBBracket.com, your ultimate destination for creating and sharing
            College Football Playoff predictions. Our interactive bracket builder brings
            the excitement of the new 12-team playoff format right to your screen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
          
          <div className="grid gap-6">
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">12-Team Format</h3>
              <p className="text-base text-muted-foreground">
                The bracket features the top 6 conference champions and 6 highest-ranked
                at-large teams. The top 4 seeds receive first-round byes, while seeds
                5-12 compete in the first round.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Interactive Predictions</h3>
              <p className="text-base text-muted-foreground">
                Click on teams to advance them through each round. Watch as your bracket
                updates in real-time, making it easy to visualize your predicted path
                to the championship.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Share Your Bracket</h3>
              <p className="text-base text-muted-foreground">
                Once you've completed your predictions, easily share your bracket with
                friends and fellow fans. Compare picks and debate who will emerge as
                the national champion.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            We're passionate about college football and believe that the playoff
            expansion will create even more excitement for fans. Our goal is to provide
            the best platform for fans to engage with the new format and share their
            predictions with the college football community.
          </p>
        </div>
      </div>
    </div>
  );
}