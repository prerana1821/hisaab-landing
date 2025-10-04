import WaitlistSection from '../WaitlistSection';

export default function WaitlistSectionExample() {
  return (
    <WaitlistSection 
      onJoinClick={() => console.log('Join waitlist clicked')} 
    />
  );
}
