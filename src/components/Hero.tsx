import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap, PartyPopper } from "lucide-react";
import heroPhoneFriendly from "@/assets/hero-phone-improved.jpg";

const Hero = () => {
  const handleWhatsAppClick = (goalType: string) => {
    const messages = {
      personal:
        "Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.",
      save: "Hi Hisaab! I want help saving more. Name: [Your Name]. Goal: Save more money.",
      split:
        "Hi Hisaab! I want to split expenses with flatmates/friends. Name: [Your Name]. Goal: Split expenses.",
      business:
        "Hi Hisaab! I want to track business/shop expenses. Name: [Your Name]. Goal: Track business expenses.",
    };

    const message = encodeURIComponent(
      messages[goalType as keyof typeof messages] || messages.personal,
    );
    window.open(`https://wa.me/14155238886?text=${message}`, "_blank");
  };

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-40 bg-mesh overflow-hidden">
      {/* Animated background elements */}
      <div className="blob-1 top-10 right-10 animate-blob"></div>
      <div className="blob-2 bottom-20 left-10 animate-blob"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column - Copy & CTAs */}
          <div className="space-y-10 animate-bounce-in">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple/10 to-pink/10 border border-purple/20 rounded-full px-6 py-3 text-sm font-mono font-medium text-purple animate-float">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered • WhatsApp Native • Made in India</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-heading font-black text-foreground leading-[0.9] tracking-tight">
                Your expenses.{" "}
                <span className="text-gradient-rainbow bg-clip-text">
                  One WhatsApp message
                </span>{" "}
                away.
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                Send a bill photo or type{" "}
                <span className="font-mono bg-muted px-2 py-1 rounded text-foreground">
                  'coffee 120'
                </span>{" "}
                — Hisaab reads it, cleans it, and logs it.
              </p>

              {/* <div className="bg-gradient-to-r from-teal/5 to-lime/5 border border-teal/20 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal" />
                  <strong className="text-foreground">Private by default.</strong> Smart enough to understand refunds, splits and shorthand.
                </p>
              </div> */}
            </div>

            {/* Primary CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="hero"
                size="xl"
                onClick={() => handleWhatsAppClick("personal")}
                className="group relative overflow-hidden"
              >
                <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start on WhatsApp
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>

              <Button
                variant="teal-outline"
                size="xl"
                onClick={scrollToWaitlist}
                className="group"
              >
                <PartyPopper className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Join the waitlist
              </Button>
            </div>

            {/* Trust messaging */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime/20 to-teal/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    No app. No signup.
                  </p>
                  <p className="text-muted-foreground">
                    Open WhatsApp and say 'Hi' — we'll coach you from there.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-teal" />
                We don't sell your data — stored only for you.
                <a
                  href="#privacy"
                  className="text-teal hover:underline font-medium ml-1"
                >
                  Full privacy policy
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-purple/20 via-teal/20 to-lime/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={heroPhoneFriendly}
                alt="WhatsApp conversation showing expense tracking with Hisaab bot"
                className="relative w-full max-w-sm lg:max-w-lg h-auto shadow-glow rounded-3xl hover:scale-105 transition-transform duration-500"
              />

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-lime to-lime-light rounded-full flex items-center justify-center animate-float shadow-glow">
                <Sparkles className="w-8 h-8 text-charcoal" />
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-20 h-20 glass-effect rounded-full flex items-center justify-center animate-float border border-white/30"
                style={{ animationDelay: "1.5s" }}
              >
                <Shield className="w-10 h-10 text-teal" />
              </div>

              <div
                className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-purple to-pink rounded-full flex items-center justify-center animate-float opacity-80"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="text-white text-xl">💸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
