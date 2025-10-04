import { useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import StatsShowcase from "@/components/StatsShowcase";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdhiT6cSqhZ7nBSALNQNUrJ3eQ7HWFuupEC8mRAXywhAH0d3w/viewform";

export default function Home() {
  const handleWaitlistClick = useCallback(() => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection onWaitlistClick={handleWaitlistClick} />
      <ValueProposition />
      <StatsShowcase />
      <WaitlistSection onJoinClick={handleWaitlistClick} />
      <Footer />
    </div>
  );
}
