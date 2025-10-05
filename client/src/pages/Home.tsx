import { useCallback, useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import StatsShowcase from "@/components/StatsShowcase";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdhiT6cSqhZ7nBSALNQNUrJ3eQ7HWFuupEC8mRAXywhAH0d3w/viewform";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWaitlistClick = useCallback(() => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  }, []);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay was prevented. Click the play button to start audio.');
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    playAudio();

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <audio ref={audioRef} src="/budgeting_audio.mp3" />
      {showControls && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            size="icon"
            variant="default"
            onClick={toggleAudio}
            data-testid="button-audio-toggle"
            className="h-12 w-12 rounded-full shadow-lg"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </div>
      )}
      <HeroSection onWaitlistClick={handleWaitlistClick} />
      <ValueProposition />
      <StatsShowcase />
      <WaitlistSection onJoinClick={handleWaitlistClick} />
      <Footer />
    </div>
  );
}
