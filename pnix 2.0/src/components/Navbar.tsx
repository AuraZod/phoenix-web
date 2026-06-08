import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", hash: "#home" },
    { name: "Tournament", path: "/", hash: "#tournament" },
    { name: "Previous Tourney", path: "/", hash: "#previous-tourney" },
    { name: "Management", path: "/management" },
    { name: "Contact", path: "/", hash: "#contact" },
  ];

  const handleNavClick = (link: { path: string; hash?: string }) => {
    if (link.hash) {
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For non-hash links (like /management), scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link to="/" className="flex items-center">
            <img src={phoenixLogo} alt="Phoenix Reaper Esports" className="h-20 md:h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button
            variant="default"
            className="hidden md:inline-flex bg-gradient-fire hover:shadow-fire transition-all duration-300"
            asChild
          >
            <a
              href="https://discord.gg/phoenix-reaper-esports-1274787524895572111"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Team
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Backdrop */}
        {isOpen && (
          <>
            {/* Blur Backdrop */}
            <div 
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <nav className="relative z-50 md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wider py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="bg-gradient-fire w-full"
                  asChild
                >
                  <a
                    href="https://discord.gg/phoenix-reaper-esports-1274787524895572111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Team
                  </a>
                </Button>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
