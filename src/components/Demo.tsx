import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

const Demo = () => {
  const demoMessages = [
    {
      message: "coffee 120",
      response: "✅ Logged: Coffee ₹120 (Food & Drinks) - Today 2:30 PM",
      goal: "personal"
    },
    {
      message: "uber 340 from home to office",
      response: "✅ Logged: Uber ₹340 (Transport) - Home to Office - Today 9:15 AM",
      goal: "personal"
    },
    {
      message: "split dinner 2400 with raj priya",
      response: "✅ Split logged: Dinner ₹2400 ÷ 3 = ₹800 each\n📱 Notified Raj & Priya on WhatsApp",
      goal: "split"
    },
    {
      message: "refund zomato 450",
      response: "✅ Refund processed: Zomato -₹450 (Food & Drinks) - Today 7:45 PM",
      goal: "personal"
    }
  ];

  const handleDemoClick = (goalType: string, demoMessage: string) => {
    const messages = {
      personal: `Hi Hisaab! I want to try the demo. Here's my first expense: ${demoMessage}`,
      split: `Hi Hisaab! I want to try bill splitting. Here's a test: ${demoMessage}`,
    };
    
    const message = encodeURIComponent(messages[goalType as keyof typeof messages] || messages.personal);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden" id="demo">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple/10 to-pink/10 border border-purple/20 rounded-full px-6 py-3 text-sm font-mono font-semibold text-purple animate-bounce-in">
            <Zap className="w-4 h-4" />
            LIVE DEMO
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-foreground">
            See it in <span className="text-gradient-rainbow bg-clip-text">action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Tap any message below to try it instantly on WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {demoMessages.map((demo, index) => (
            <Card 
              key={index}
              className="group p-8 hover:shadow-glow transition-all duration-500 cursor-pointer glass-effect border-2 border-teal/20 hover:border-lime/30 hover:-translate-y-2 hover:scale-105 overflow-hidden"
              onClick={() => handleDemoClick(demo.goal, demo.message)}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-6">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-teal to-teal-light text-white px-6 py-4 rounded-2xl rounded-br-sm max-w-xs shadow-card">
                    <p className="font-mono font-medium">{demo.message}</p>
                  </div>
                </div>
                
                {/* Bot response */}
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-muted to-muted/80 px-6 py-4 rounded-2xl rounded-bl-sm max-w-xs border border-border/50">
                    <p className="text-sm text-foreground whitespace-pre-line font-medium">{demo.response}</p>
                  </div>
                </div>
                
                {/* Try it button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    variant="hero" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Try this on WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple via-teal to-lime rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => {
                const message = encodeURIComponent("Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.");
                window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
              }}
              className="relative group"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Start Your First Expense
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl"></div>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Opens WhatsApp. No uploads. Your messages stay private.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;