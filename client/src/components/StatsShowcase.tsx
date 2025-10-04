import { Brain, MessageCircle, Wallet, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsShowcase() {
  const [currentApnaLine, setCurrentApnaLine] = useState(0);

  const apnaLines = [
    { text: 'The easiest way to stop asking, "Where did all my money go?"', type: "bold" },
    { text: "Whether you earn ₹10k or ₹10L, Apna Hisaab keeps you aware, not anxious.", type: "normal" },
    { text: "You handle life. We'll handle the math.", type: "bold" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentApnaLine((prev) => (prev + 1) % apnaLines.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [apnaLines.length]);

  return (
    <section className="border-t border-border bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-32">
          {/* Why You'll Love It */}
          <div>
            <h2 className="mb-16 text-center font-serif text-4xl font-black leading-tight text-foreground md:text-5xl">
              Why You'll Love It
            </h2>
            <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-x-24 md:gap-y-16">
              <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                <div className="mb-2">
                  <Brain className="h-10 w-10 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Instant clarity.
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  See exactly where your money goes — daily, weekly, monthly.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                <div className="mb-2">
                  <MessageCircle className="h-10 w-10 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  It's on WhatsApp.
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  No new logins, no sign-ups, no effort.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                <div className="mb-2">
                  <Wallet className="h-10 w-10 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Save without trying.
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Money saved is money tracked. Start now.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                <div className="mb-2">
                  <Lock className="h-10 w-10 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Yours, truly.
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Your data stays private — we don't snoop. Ever.
                </p>
              </div>
            </div>
          </div>

          {/* The Apna Hisaab Way */}
          <div className="text-center">
            <h2 className="mb-12 font-serif text-4xl font-black leading-tight text-foreground md:text-5xl">
              The Apna Hisaab Way
            </h2>
            <div className="mx-auto flex min-h-[120px] max-w-2xl items-center justify-center md:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentApnaLine}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`text-base md:text-lg ${
                    apnaLines[currentApnaLine].type === "bold" 
                      ? "font-semibold text-foreground" 
                      : "text-muted-foreground"
                  }`}
                >
                  {apnaLines[currentApnaLine].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

 </div>
      </div>
    </section>
  );
}
