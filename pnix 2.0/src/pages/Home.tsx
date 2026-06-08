import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Target } from "lucide-react";
import heroBannerBg from "@/assets/hero-banner-bg.png";
import bodyBg from "@/assets/body-bg.jpg";
import tournamentBanner from "@/assets/tournament-banner.png";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import duoReapers from "@/assets/Duo Reapers Battle.jpg";
import reaperCup from "@/assets/Reaper Cup Season 1.jpg";
import winterSeries from "@/assets/Reapers Winter Series Season 2.jpg";


const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${bodyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div
          className="absolute top-0 left-0 right-0 h-64 opacity-30"
          style={{
            backgroundImage: `url(${heroBannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            PHOENIX REAPER ESPORTS
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            WE ARE THE WINGS OF FIRE
          </p>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            WE ARE THE DEATH BRINGERS
          </p>
          <Button
            size="lg"
            className="bg-gradient-fire hover:shadow-fire text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            asChild
          >
            <a href="https://discord.gg/phoenix-reaper-esports-1274787524895572111" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Tournaments</h3>
                <p className="text-muted-foreground">Competitive gaming events with exciting prizes</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">Join our passionate gaming community</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Events</h3>
                <p className="text-muted-foreground">Regular esports events and competitions</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">Striving for competitive excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section id="tournament" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-fire bg-clip-text text-transparent">
            Current Tournaments
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border overflow-hidden hover:shadow-fire transition-all duration-300">
              <img src={tournamentBanner} alt="Tournament" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Phoenix Rises Again</h3>
                <p className="text-muted-foreground mb-4">
                  Join our biggest tournament of the year! Prize pool of ₹20,000 with 500+ slots available.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-gradient-fire hover:shadow-fire" asChild>
                    <a href="https://discord.com/channels/1274787524895572111/1422709480814284831" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => document.getElementById('tournament-info-dialog')?.classList.remove('hidden')}>
                    Learn More
                  </Button>
                </div>
                
                {/* Tournament Info Dialog */}
                <div id="tournament-info-dialog" className="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={(e) => {
                  if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
                }}>
                  <Card className="bg-card border-border max-w-md w-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">Phoenix Rises Again</h3>
                        <button onClick={() => document.getElementById('tournament-info-dialog')?.classList.add('hidden')} className="text-muted-foreground hover:text-foreground">✕</button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Managed By</p>
                          <p className="font-bold">Phoenix Reaper Esports</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Prize Pool</p>
                          <p className="font-bold text-primary">₹20,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Slots</p>
                          <p className="font-bold">500+ Available</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Entry</p>
                          <p className="font-bold text-green-500">FREE</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Mode</p>
                          <p className="font-bold">TPP | SQUAD | INDIA</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Platform</p>
                          <p className="font-bold">Mobile Only</p>
                        </div>
                      </div>
                      <Button className="w-full mt-6 bg-gradient-fire hover:shadow-fire" asChild>
                        <a href="https://discord.com/channels/1274787524895572111/1422709480814284831" target="_blank" rel="noopener noreferrer">
                          Register Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

{/* Previous Tournaments Section */}
<section id="previous-tourney" className="py-20 bg-gradient-dark">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-fire bg-clip-text text-transparent">
      Previous Tournaments
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: "1",
          name: "Reapers Winter Series Season 2",
          image: winterSeries,
          description:
            "An intense duo tournament showcasing the sharpest teamwork and gunplay in Phoenix Reaper Esports history.",
        },
        {
          id: "2",
          name: "Duo Reapers Battle",
          image: duoReapers,
          description:
            "Our debut competitive season that brought together top-tier squads and marked the rise of a new esports legacy.",
        },
        {
          id: "3",
          name: "Reaper Cup Season 1",
          image: reaperCup,
          description:
            "A thrilling winter event filled with strategic plays, clutch moments, and fierce battles for glory.",
        },
      ].map((tourney) => (
        <Card
          key={tourney.id}
          className="bg-card/50 backdrop-blur border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-fire transition-all duration-300"
        >
          <img
            src={tourney.image}
            alt={tourney.name}
            className="w-full h-56 object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">{tourney.name}</h3>
            <p className="text-muted-foreground mb-4">
              {tourney.description}
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link to={`/tournament/${tourney.id}`}>View Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-fire bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button className="w-full bg-gradient-fire hover:shadow-fire" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
