import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Trophy, MapPin } from "lucide-react";

const tournamentData = {
  "1": {
    title: "Reapers Winter Series Season 2",
    game: "BGMI",
    date: "December 08, 2024",
    participants: "600 Teams",
    prizePool: "₹50,000",
    winner: "Team Phoenix Elite",
    location: "Online",
    description: "A Golden Chance For Underdogs.",
    highlights: [
      "600 teams participated from all over India",
      "6 days of intense competitive gameplay",
      "Live streaming with professional commentary",
      "Record-breaking viewership of 50K+ concurrent viewers"
    ]
  },
  "2": {
    title: "Duo Reapers Battle",
    game: "BGMI",
    date: "January 08, 2025",
    participants: "100 Teams",
    prizePool: "₹2,000",
    winner: "TSP Esports",
    location: "Online",
    description: "Get Ready To Dominate.",
    highlights: [
      "100 competitive teams registered",
      "5 days of thrilling matches",
      "High-quality production and streaming",
      "Amazing community engagement"
    ]
  },
  "3": {
    title: "Reaper Cup Season 1",
    game: "BGMI",
    date: "September 10, 2024",
    participants: "500 Teams",
    prizePool: "₹20,000",
    winner: "Death Bringers",
    location: "Online",
    description: "Let The Battle Begin.",
    highlights: [
      "500 teams competed",
      "Strategic gameplay and amazing clutches",
      "Professional casting and analysis",
      "Great start to the tournament season"
    ]
  }
};

const TournamentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tournament = tournamentData[id as keyof typeof tournamentData];

  if (!tournament) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Tournament Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            {tournament.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Date</p>
                <p className="font-bold text-sm">{tournament.date}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Participants</p>
                <p className="font-bold text-sm">{tournament.participants}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Prize Pool</p>
                <p className="font-bold text-sm">{tournament.prizePool}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-bold text-sm">{tournament.location}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About the Tournament</h2>
              <p className="text-muted-foreground mb-6">{tournament.description}</p>

              <h3 className="text-xl font-bold mb-4">Tournament Highlights</h3>
              <ul className="space-y-2 mb-6">
                {tournament.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-dark p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">🏆 Winner</h3>
                <p className="text-2xl font-bold text-primary">{tournament.winner}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="bg-gradient-fire hover:shadow-fire" asChild>
              <a href="https://discord.com/channels/1274787524895572111/1422709480814284831" target="_blank" rel="noopener noreferrer">
                Join Next Tournament
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TournamentDetails;
