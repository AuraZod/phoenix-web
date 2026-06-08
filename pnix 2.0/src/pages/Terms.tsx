import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Phoenix Reaper Esports services, you accept and agree to be bound
                  by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                <p className="text-muted-foreground">
                  You must be at least 13 years old to use our services. By using our services, you represent
                  and warrant that you meet this age requirement and have the right, authority, and capacity
                  to enter into this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Tournament Rules</h2>
                <p className="text-muted-foreground mb-4">
                  When participating in tournaments:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Follow all game-specific rules and regulations</li>
                  <li>Maintain fair play and sportsmanship</li>
                  <li>No cheating, hacking, or exploitation of game bugs</li>
                  <li>Respect other players and tournament officials</li>
                  <li>Adhere to scheduled times and deadlines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Code of Conduct</h2>
                <p className="text-muted-foreground">
                  Users must maintain respectful behavior in all interactions. Harassment, hate speech,
                  discrimination, or any form of abusive behavior will not be tolerated and may result
                  in immediate suspension or ban.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Prizes and Payments</h2>
                <p className="text-muted-foreground">
                  Prize distributions are subject to tournament completion and verification of results.
                  We reserve the right to withhold prizes in cases of suspected fraud or rule violations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, logos, and materials on this platform are the property of Phoenix Reaper
                  Esports unless otherwise stated. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Disclaimer</h2>
                <p className="text-muted-foreground">
                  Our services are provided "as is" without warranties of any kind. We are not responsible
                  for any technical issues, game server problems, or third-party service disruptions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Continued use of our services
                  after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Use, contact us at: contact@phoenixreaper.in
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
