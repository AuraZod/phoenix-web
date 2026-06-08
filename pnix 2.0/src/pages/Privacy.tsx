import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us when you register for tournaments,
                  join our community, or contact us. This may include your name, email address, gaming IDs,
                  and other relevant information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Organize and manage tournaments and events</li>
                  <li>Communicate with you about updates and announcements</li>
                  <li>Improve our services and user experience</li>
                  <li>Ensure fair play and community safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information.
                  However, no method of transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may use third-party services like Discord for community management. Please review
                  their privacy policies as well, as we are not responsible for their practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information. Contact us
                  if you wish to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  contact@phoenixreaper.in
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

export default Privacy;
