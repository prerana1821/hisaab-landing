import { useEffect, useState } from "react";
import { FileText, Image } from "lucide-react";

const messageVariations = [
  { text: "₹250 for chai", type: "text" },
  { text: "₹1200 groceries", type: "text" },
  { text: "Upload Image / PDF", type: "file" },
  { text: "₹500 auto", type: "text" },
  { text: "₹3000 rent", type: "text" },
];

export default function ValueProposition() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let messageTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const cycleMessages = () => {
      setShowBubble(true);
      
      hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 2000);
      
      messageTimer = setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messageVariations.length);
        cycleMessages();
      }, 3000);
    };

    cycleMessages();

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const currentMessage = messageVariations[currentMessageIndex];

  return (
    <section className="border-t border-border bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-24">
          {/* Centered Content */}
          <div className="text-center relative">
            <h2 className="mb-6 font-serif text-5xl font-black leading-tight text-foreground md:text-6xl lg:text-7xl">
              WhatsApp.<br />That's it.
            </h2>
            <p className="mx-auto max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground">
              No new apps. No spreadsheets. Just messages.
            </p>
            
            {/* WhatsApp Bubble Animation */}
            <div className="mt-12 flex justify-center min-h-[80px] items-center">
              <div
                className={`relative inline-block transition-all duration-500 ${
                  showBubble ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
              >
                {/* WhatsApp-style bubble */}
                <div className="relative bg-[#DCF8C6] dark:bg-[#056162] rounded-lg rounded-br-none px-4 py-2.5 shadow-md max-w-xs">
                  {currentMessage.type === "file" ? (
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-white/30 dark:bg-black/20">
                        <FileText className="h-4 w-4 text-[#075E54] dark:text-[#25D366]" />
                      </div>
                      <span className="text-sm text-[#075E54] dark:text-[#E9EDEF]">
                        {currentMessage.text}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-[#075E54] dark:text-[#E9EDEF]">
                      {currentMessage.text}
                    </p>
                  )}
                  <div className="absolute -bottom-0 -right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-[#DCF8C6] dark:border-t-[#056162]" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid - Zara Style */}
          <div className="grid gap-16 md:grid-cols-3 md:gap-8">
            <div className="space-y-4 text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-foreground" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Simple
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Send a message.<br />We track it.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-foreground" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Fast
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Instant updates.<br />Real-time insights.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-foreground" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Yours
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your data.<br />Your control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
