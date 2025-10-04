import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ValueProposition() {
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    {
      text: "Because you'll never open that finance app again.",
      type: "normal",
    },
    {
      text: "Let's be real — you'll download it, log one expense, and forget it exists.",
      type: "normal",
    },
    {
      text: "So we built Apna Hisaab where you already are — on WhatsApp.",
      type: "bold",
    },
    {
      text: "No new app. No learning curve. Just a smarter way to track your money.",
      type: "normal",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <section className="border-t border-border bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-32">
          {/* Why We Exist */}
          <div className="text-center">
            <h2 className="mb-12 font-serif text-4xl font-black leading-tight text-foreground md:text-5xl">
              Why We Exist
            </h2>
            <div className="mx-auto flex min-h-[120px] max-w-2xl items-center justify-center md:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentLine}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`text-base md:text-lg ${
                    lines[currentLine].type === "bold"
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {lines[currentLine].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="mb-16 text-center font-serif text-4xl font-black leading-tight text-foreground md:text-5xl">
              How It Works
            </h2>
            <div className="grid gap-16 md:grid-cols-3 md:gap-12">
              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">1.</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    You chat.
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  "Lunch ₹220." "Cab ₹180." — that's it or upload an image or
                  PDF.
                </p>
              </div>

              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">2.</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    We track.
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We auto-categorize, update, and keep a running total.
                </p>
              </div>

              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">3.</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    You chill.
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Get insights on where your money went — before it disappears.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-base italic text-muted-foreground">
                Because tracking your money shouldn't feel like work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
