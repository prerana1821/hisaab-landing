interface WaitlistSectionProps {
  onJoinClick: () => void;
}

export default function WaitlistSection({ onJoinClick }: WaitlistSectionProps) {
  return (
    <section className="border-t border-border bg-background py-48 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl font-black leading-tight text-foreground md:text-6xl lg:text-7xl">
              Join the<br />Waitlist
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Early Access, get access to the hisaab
            </p>
          </div>

          <div className="mx-auto h-px w-24 bg-border" />

          <button
            onClick={onJoinClick}
            data-testid="button-join-waitlist"
            className="group inline-flex items-center gap-3 border border-foreground px-16 py-5 text-sm uppercase tracking-widest text-foreground transition-all hover-elevate active-elevate-2"
          >
            <span>Join Now</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
