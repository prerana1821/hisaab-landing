import { Button } from "@/components/ui/button";
import { Play, Square } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useTypewriter } from "@/hooks/use-typewriter";
import audioFile from "@assets/ElevenLabs_2025-10-04T17_44_32_Simran – Bright, Fun, and Friendly BFF Voice for Gen Z Gossip_pvc_sp88_s50_sb75_se8_m2_1759604699520.mp3";
import logoImage from "@assets/hisaab_logo.png";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export default function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  const { isPlaying, toggle } = useAudioPlayer(audioFile);
  const { displayText } = useTypewriter("If you can chat, you can save.", 80);

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-background">
      {/* Minimal Navigation */}
      <nav className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12">
        <div className="flex items-center gap-8">
          <img
            src={logoImage}
            alt="Apna Hisaab Logo"
            className="h-12 w-12"
            data-testid="img-logo"
          />
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest md:gap-8">
          <button
            onClick={toggle}
            className="hover-elevate flex items-center gap-2 px-2 py-1 text-foreground"
            aria-label={isPlaying ? "Stop audio" : "Play audio"}
            data-testid="button-audio-toggle"
          >
            {isPlaying ? (
              <Square className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="hidden md:inline">
              {isPlaying ? "Stop" : "Play"}
            </span>
          </button>
          <button
            onClick={onWaitlistClick}
            className="hover-elevate px-2 py-1 text-foreground"
            data-testid="button-nav-waitlist"
          >
            Join the waitlist
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-32">
        {/* Main Headline */}
        <div className="max-w-4xl text-center">
          <h1 className="mb-8 font-serif text-5xl font-black leading-tight text-foreground md:text-6xl lg:text-7xl">
            apna hisaab{" "}
          </h1>
          <div className="mb-8 space-y-3 text-base text-muted-foreground md:text-lg">
            <p>No apps. No Excel. No overthinking.</p>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="min-h-[28px] text-lg font-semibold text-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-3">
            <Button
              onClick={onWaitlistClick}
              size="lg"
              className="px-12 text-base"
              data-testid="button-hero-waitlist"
            >
              Join the Waitlist →
            </Button>
            <p className="text-xs text-muted-foreground">
              Limited early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
