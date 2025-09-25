import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-18 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-card">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-heading font-bold text-2xl text-foreground">Hisaab</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-teal transition-colors">
            Features
          </a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-teal transition-colors">
            Demo
          </a>
          <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-teal transition-colors">
            Privacy
          </a>
        </nav>

        <Button 
          variant="hero" 
          size="lg"
          onClick={handleWhatsAppClick}
          className="font-semibold group"
        >
          <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          Start on WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;