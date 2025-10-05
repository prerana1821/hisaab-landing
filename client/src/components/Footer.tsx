export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            apna hisaab © 2025
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest">
            <button className="text-muted-foreground hover-elevate">Help</button>
            <button className="text-muted-foreground hover-elevate">Privacy</button>
            <button className="text-muted-foreground hover-elevate">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
