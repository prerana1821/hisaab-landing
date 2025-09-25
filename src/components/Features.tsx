import { Camera, Brain, Users, CheckCircle, X, Sparkles } from "lucide-react";
import expensesIllustration from "@/assets/expenses-illustration.jpg";

const Features = () => {
  const features = [
    {
      title: "OCR that actually reads receipts",
      description: "Upload any bill photo — we'll extract every detail accurately",
      icon: Camera,
      color: "text-blue-600"
    },
    {
      title: "Smart parsing: dates, refunds, shorthand",
      description: "Type 'coffee 120' or 'refund zomato 450' — we understand it all",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      title: "Split bills with friends in one message",
      description: "Say 'split dinner 2400 with raj priya' — everyone gets notified",
      icon: Users,
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Capabilities that actually work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for real Indian expense patterns — from street food to EMIs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/10 to-lime/10 mb-6 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual illustration */}
        <div className="mt-16 text-center">
          <img 
            src={expensesIllustration} 
            alt="Indian expense categories illustration"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-soft"
          />
        </div>

        {/* Comparison section */}
        <div className="mt-20">
          <h3 className="text-2xl font-heading font-bold text-center mb-12 text-foreground">
            Stop the expense tracking struggle
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Excel */}
            <div className="p-8 bg-card rounded-xl border-2 border-red-200 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-red-700 text-lg">Excel Sheets</h4>
                <ul className="text-sm text-muted-foreground space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    Manual entry every time
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    Forget to update
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    No receipt storage
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    Hard to share
                  </li>
                </ul>
              </div>
            </div>

            {/* Apps */}
            <div className="p-8 bg-card rounded-xl border-2 border-orange-200 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <X className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
                <h4 className="font-bold text-orange-700 text-lg">Expense Apps</h4>
                <ul className="text-sm text-muted-foreground space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    Yet another app to install
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    Complex setup process
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    Notifications you ignore
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    Premium features behind paywall
                  </li>
                </ul>
              </div>
            </div>

            {/* Hisaab */}
            <div className="p-8 bg-gradient-to-br from-teal/5 to-lime/5 rounded-xl border-2 border-teal/30 relative overflow-hidden">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-lime text-charcoal px-4 py-2 text-sm font-bold rounded-full flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  HISAAB WAY
                </span>
              </div>
              <div className="text-center space-y-6 pt-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center">
                  <span className="text-3xl">💚</span>
                </div>
                <h4 className="font-bold text-teal text-lg">WhatsApp Only</h4>
                <ul className="text-sm text-foreground space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Just send a message
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Photos = instant logging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Smart, understands context
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Works with friends/family
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;