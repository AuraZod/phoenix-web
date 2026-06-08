import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { SiDiscord } from "react-icons/si"; // ✅ Official Discord icon
import phoenixLogo from "@/assets/phoenix-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* ===== Left Section ===== */}
          <div className="col-span-1 md:col-span-2">
            <img src={phoenixLogo} alt="Phoenix Reaper Esports" className="h-16 mb-4" />
            <p className="text-muted-foreground mb-4">
              We are the Wings of Fire, We are the Death Bringers.
              <br />
              Join Phoenix Reaper Esports today!
            </p>

            {/* 🌐 Social Icons Section */}
            <div className="flex gap-4 items-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/phoenixesports.in/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@PhoenixEsports-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>

              {/* Discord (real logo from react-icons) */}
              <a
                href="https://discord.com/invite/phoenixreaperesports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <SiDiscord size={24} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/phoenixesportsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact ===== */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:ceo@phoenixreaperesports.com"
                  className="hover:text-primary transition-colors"
                >
                  ceo@phoenixreaperesports.com
                </a>
              </li>
              <li>
                Discord:{" "}
                <a
                  href="https://discord.com/invite/phoenixreaperesports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Phoenix Reaper Esports
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Line ===== */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Phoenix Reaper Esports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
