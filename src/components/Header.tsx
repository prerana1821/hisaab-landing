import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.",
    );
    window.open(`https://wa.me/14155238886?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md border-b border-white/10">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal via-teal-light to-lime flex items-center justify-center shadow-glow hover:shadow-purple transition-all duration-300 hover:scale-110 animate-pulse-glow">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple to-pink rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
            <div className="space-y-1">
              <span className="font-heading font-black text-3xl text-gradient bg-clip-text">
                Hisaab
              </span>
              <div className="text-xs font-mono text-muted-foreground tracking-wide">
                Smart expense tracking
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#features"
            className="text-sm font-semibold text-muted-foreground hover:text-teal transition-all duration-300 hover:scale-105 relative group"
          >
            Features
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-lime transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold text-muted-foreground hover:text-teal transition-all duration-300 hover:scale-105 relative group"
          >
            Demo
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-lime transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#privacy"
            className="text-sm font-semibold text-muted-foreground hover:text-teal transition-all duration-300 hover:scale-105 relative group"
          >
            Privacy
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-lime transition-all duration-300 group-hover:w-full"></div>
          </a>
        </nav>

        <Button
          variant="hero"
          size="lg"
          onClick={handleWhatsAppClick}
          className="group relative overflow-hidden"
        >
          <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
          Start on WhatsApp
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
