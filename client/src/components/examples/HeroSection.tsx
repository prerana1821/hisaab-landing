import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onWaitlistClick={() => console.log('Waitlist clicked')} 
    />
  );
}
