import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap } from "lucide-react";
import heroPhoneFriendly from "@/assets/hero-phone-friendly.jpg";

const Hero = () => {
  const handleWhatsAppClick = (goalType: string) => {
    const messages = {
      personal: "Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.",
      save: "Hi Hisaab! I want help saving more. Name: [Your Name]. Goal: Save more money.",
      split: "Hi Hisaab! I want to split expenses with flatmates/friends. Name: [Your Name]. Goal: Split expenses.",
      business: "Hi Hisaab! I want to track business/shop expenses. Name: [Your Name]. Goal: Track business expenses."
    };
    
    const message = encodeURIComponent(messages[goalType as keyof typeof messages] || messages.personal);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy & CTAs */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Your expenses.{" "}
                <span className="text-teal">One WhatsApp message</span>{" "}
                away.
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Send a bill photo or type 'coffee 120' — Hisaab reads it, cleans it, and logs it.
              </p>

              <p className="text-sm text-muted-foreground">
                Private by default. Smart enough to understand refunds, splits and shorthand.
              </p>
            </div>

            {/* Primary CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleWhatsAppClick('personal')}
                className="font-semibold group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start on WhatsApp
              </Button>
              
              <Button 
                variant="teal-outline" 
                size="xl"
                onClick={scrollToWaitlist}
              >
                Join the waitlist
              </Button>
            </div>

            {/* Trust messaging */}
            <div className="space-y-2 pt-4">
              <p className="text-sm text-muted-foreground">
                <strong>No app. No signup.</strong> Open WhatsApp and say 'Hi' — we'll coach you from there.
              </p>
              <p className="text-xs text-muted-foreground">
                We don't sell your data — stored only for you. 
                <a href="#privacy" className="text-teal hover:underline ml-1">Full privacy policy</a>
              </p>
            </div>
          </div>

          {/* Right column - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroPhoneFriendly} 
                alt="WhatsApp conversation showing expense tracking with Hisaab bot"
                className="w-full max-w-sm lg:max-w-md h-auto shadow-soft rounded-3xl"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-lime rounded-full flex items-center justify-center animate-float">
                <Sparkles className="w-6 h-6 text-charcoal" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}>
                <Shield className="w-8 h-8 text-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;