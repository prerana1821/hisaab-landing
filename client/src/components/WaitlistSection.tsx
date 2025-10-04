import { Sparkles, ArrowRight } from "lucide-react";

interface WaitlistSectionProps {
  onJoinClick: () => void;
}

export default function WaitlistSection({ onJoinClick }: WaitlistSectionProps) {
  return (
    <section className="border-t border-border bg-background py-48 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-16">
          {/* Join Waitlist CTA */}
          <div className="text-center">
            <h2 className="mb-8 font-serif text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-6xl">
              Join the Waitlist
            </h2>
            <p className="mb-12 text-base text-muted-foreground md:text-lg">
              Be among the first to try it.
            </p>

            <div className="mb-12 flex flex-col items-center space-y-6">
              <p className="text-base font-semibold text-foreground">
                You'll get:
              </p>
              <div className="flex flex-col items-start space-y-4 text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-foreground" />
                  <span>Priority access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-foreground" />
                  <span>One less thing to overthink this month</span>
                </div>
              </div>
            </div>

            <button
              onClick={onJoinClick}
              data-testid="button-join-waitlist"
              className="group inline-flex items-center gap-3 border border-foreground px-12 py-4 text-base font-semibold text-foreground transition-all hover-elevate active-elevate-2"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-8 text-base italic text-muted-foreground">
              See where your money goes — before it disappears.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
