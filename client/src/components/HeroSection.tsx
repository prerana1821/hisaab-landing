import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import logoImage from "@assets/image_1759671069209.png";

interface HeroSectionProps {
  onWaitlistClick: () => void;
  onAudioToggle: () => void;
  isAudioPlaying: boolean;
}

const typewriterLines = [
  "Keep track of your money, simply!",
  "Whether you earn ₹10k or ₹10L,\napna hisaab keeps you aware, not anxious.",
  'The easiest way to stop asking, "Where did all my money go?"',
  "You handle life. We'll handle the math.",
];

export default function HeroSection({
  onWaitlistClick,
  onAudioToggle,
  isAudioPlaying,
}: HeroSectionProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= typewriterLines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = typewriterLines[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setDisplayedText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-background">
      {/* Minimal Navigation */}
      <nav className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12">
        <div className="flex items-center gap-8">
          <button
            className="hover-elevate p-2 rounded-lg bg-[#DCF8C6] dark:bg-[#056162]"
            aria-label="Logo"
            data-testid="button-logo"
          >
            <img
              src={logoImage}
              alt="Apna Hisaab Logo"
              className="h-8 w-8 object-contain dark:invert"
            />
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest md:gap-8">
          <Button
            size="icon"
            variant="ghost"
            onClick={onAudioToggle}
            data-testid="button-audio-toggle"
            className="h-8 w-8 hover-elevate px-2 py-1 text-foreground"
          >
            {isAudioPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                <p>Stop</p>
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                <p>Play</p>
              </>
            )}
          </Button>
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
        {/* Main Typography - Zara Style */}
        <div className="text-center">
          <h1 className="font-serif text-7xl font-black leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-9xl">
            apna
            <br />
            hisaab
          </h1>
          <div className="mt-8 min-h-[4rem] md:min-h-[3rem]">
            <p className="text-xs tracking-[0.3em] text-muted-foreground md:text-sm whitespace-pre-line">
              {displayedText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            WhatsApp Finance Tracking
          </p>
          <Button
            onClick={onWaitlistClick}
            variant="outline"
            data-testid="button-discover"
            className="text-xs uppercase tracking-widest"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
