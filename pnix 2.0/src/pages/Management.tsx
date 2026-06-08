import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// ✅ Import member images
import rajaImg from "@/assets/raja.jpg";
import kagetsuImg from "@/assets/kagetsu.jpg";
import ammyImg from "@/assets/ammy.jpg";
import shadeyyImg from "@/assets/shadeyy.jpg";
import drakenImg from "@/assets/draken.jpg";
import niceoneImg from "@/assets/niceone.jpg";

const Management = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  
  const team = [
    {
      name: "Raja",
      role: "Founder",
      description: "Visionary leader driving Phoenix Reaper Esports forward",
      image: rajaImg,
      realName: "Raja",
      akaName: "Raja",
      discordTag: "taku_2028",
      achievements: [
        "Founded Phoenix Reaper Esports in 2024",
        "Organized 3 major tournaments with 1000+ participants",
        "Built a thriving gaming community of 5000+ members",
        "Established partnerships with leading gaming brands"
      ]
    },
    {
      name: "Kagetsu",
      role: "CO-Founder",
      description: "Manages all tournament operations and competitive events",
      image: kagetsuImg,
      realName: "Kagetsu",
      akaName: "Sukuna",
      discordTag: "kagetsu.xd",
      achievements: [
        "Co-founded Phoenix Reaper Esports",
        "Successfully managed 3 competitive seasons",
        "Implemented professional tournament structures",
        "Coordinated with 600+ competitive teams"
      ]
    },
    {
      name: "Ammy",
      role: "Director",
      description: "Builds and maintains our passionate gaming community",
      image: ammyImg,
      realName: "Ammy",
      akaName: "Ammy",
      discordTag: "ammy#9012",
      achievements: [
        "Grew community to 5000+ active members",
        "Created engaging community events",
        "Managed Discord server with 10,000+ members",
        "Developed community engagement strategies"
      ]
    },
    {
      name: "Shadeyy",
      role: "Server Admin",
      description: "Manages our online presence and engagement",
      image: shadeyyImg,
      realName: "Shadeyy",
      akaName: "Shadeyy",
      discordTag: "shadeyy#3456",
      achievements: [
        "Maintained 99.9% server uptime",
        "Implemented advanced moderation systems",
        "Managed social media presence",
        "Handled community conflicts and support"
      ]
    },
    {
      name: "Draken",
      role: "GFX Artist",
      description: "Creates stunning visual content for our brand",
      image: drakenImg,
      realName: "Draken",
      akaName: "Draken",
      discordTag: "draken#7890",
      achievements: [
        "Designed tournament branding and graphics",
        "Created 100+ promotional materials",
        "Established brand visual identity",
        "Won community design competitions"
      ]
    },
    {
      name: "Niceone",
      role: "Senior Mod",
      description: "Produces engaging content for our audience",
      image: niceoneImg,
      realName: "Niceone",
      akaName: "Niceone",
      discordTag: "niceone#2345",
      achievements: [
        "Moderated 1000+ hours of community interactions",
        "Created engaging content strategies",
        "Trained junior moderators",
        "Maintained positive community culture"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Management Team
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Meet the dedicated team behind Phoenix Reaper Esports, working tirelessly to bring you the best gaming experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-center text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-fire bg-clip-text text-transparent">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-card border-border">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">Real Name</p>
                      <p className="font-bold">{selectedMember.realName}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">AKA</p>
                      <p className="font-bold">{selectedMember.akaName}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border col-span-2">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">Discord Tag</p>
                      <p className="font-bold">{selectedMember.discordTag}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Role</h3>
                    <p className="text-primary font-medium mb-4">{selectedMember.role}</p>
                    
                    <h3 className="text-xl font-bold mb-2">About</h3>
                    <p className="text-muted-foreground mb-6">{selectedMember.description}</p>

                    <h3 className="text-xl font-bold mb-4">Achievements</h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Button 
                  className="w-full bg-gradient-fire hover:shadow-fire" 
                  onClick={() => setSelectedMember(null)}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Management;
