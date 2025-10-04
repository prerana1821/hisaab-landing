export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-center text-base font-semibold text-foreground">
            India will track money on WhatsApp now.
          </p>
          <p className="text-sm text-muted-foreground">apnahisaab © 2025</p>
          <p className="text-center text-sm text-muted-foreground">
            Made in India. Built for everyone who hates spreadsheets.
          </p>
          {/* <div className="flex gap-8 text-sm">
            <button
              className="text-muted-foreground hover-elevate"
              data-testid="button-privacy"
            >
              Privacy
            </button>
            <button
              className="text-muted-foreground hover-elevate"
              data-testid="button-help"
            >
              Help
            </button>
            <button
              className="text-muted-foreground hover-elevate"
              data-testid="button-terms"
            >
              Terms
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
