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
    <section className="py-20 bg-background" id="demo">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tap any message below to try it instantly on WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {demoMessages.map((demo, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-soft transition-all duration-300 cursor-pointer group"
              onClick={() => handleDemoClick(demo.goal, demo.message)}
            >
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-teal text-white px-4 py-2 rounded-lg rounded-br-sm max-w-xs">
                    <p className="text-sm font-medium">{demo.message}</p>
                  </div>
                </div>
                
                {/* Bot response */}
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-lg rounded-bl-sm max-w-xs">
                    <p className="text-sm text-foreground whitespace-pre-line">{demo.response}</p>
                  </div>
                </div>
                
                {/* Try it button */}
                <div className="flex justify-center pt-2">
                  <Button 
                    variant="teal-outline" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Try this on WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => {
              const message = encodeURIComponent("Hi Hisaab! I want to start tracking my daily expenses. Name: [Your Name]. Goal: Track personal spending.");
              window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
            }}
            className="group"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Start Your First Expense
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Opens WhatsApp. No uploads. Your messages stay private.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;