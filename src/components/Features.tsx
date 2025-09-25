import { Camera, Brain, Users, CheckCircle, X, Sparkles, Zap, Shield, Star, TrendingUp } from "lucide-react";
import expensesIllustration from "@/assets/expenses-illustration.jpg";

const Features = () => {
  const features = [
    {
      title: "OCR that actually reads receipts",
      description: "Upload any bill photo — we'll extract every detail accurately with AI-powered recognition",
      icon: Camera,
      gradient: "from-purple to-purple-light",
      shadowColor: "shadow-purple"
    },
    {
      title: "Smart parsing: dates, refunds, shorthand", 
      description: "Type 'coffee 120' or 'refund zomato 450' — our AI understands natural language perfectly",
      icon: Brain,
      gradient: "from-teal to-teal-light",
      shadowColor: "shadow-card"
    },
    {
      title: "Split bills with friends in one message",
      description: "Say 'split dinner 2400 with raj priya' — everyone gets instant WhatsApp notifications",
      icon: Users,
      gradient: "from-lime to-lime-light",
      shadowColor: "shadow-glow"
    },
    {
      title: "Bank-grade security & privacy",
      description: "End-to-end encryption, zero data selling, complete privacy protection for your finances",
      icon: Shield,
      gradient: "from-pink to-pink-light", 
      shadowColor: "shadow-pink"
    },
    {
      title: "Smart expense insights",
      description: "Get personalized spending patterns, budget alerts, and financial insights automatically",
      icon: TrendingUp,
      gradient: "from-purple to-teal",
      shadowColor: "shadow-purple"
    },
    {
      title: "Works anywhere in India",
      description: "Understands Hindi, English, regional languages and local expense patterns seamlessly",
      icon: Star,
      gradient: "from-teal to-lime",
      shadowColor: "shadow-glow"
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-background to-muted/30 overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal/10 to-lime/10 border border-teal/20 rounded-full px-6 py-3 text-sm font-mono font-semibold text-teal animate-bounce-in">
            <Zap className="w-4 h-4" />
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-foreground">
            Capabilities that actually{" "}
            <span className="text-gradient bg-clip-text">work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Built for real Indian expense patterns — from street food to EMIs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group p-8 bg-card/80 backdrop-blur-sm rounded-3xl ${feature.shadowColor} hover:shadow-soft transition-all duration-500 hover:-translate-y-4 border border-border/50 relative overflow-hidden hover-lift`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-6 font-heading group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual illustration */}
        <div className="text-center mb-24">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple/20 via-teal/20 to-lime/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src={expensesIllustration} 
              alt="Indian expense categories illustration"
              className="relative w-full rounded-3xl shadow-glow hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Enhanced comparison section */}
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h3 className="text-4xl font-heading font-black text-foreground">
              Stop the expense tracking{" "}
              <span className="text-gradient bg-clip-text">struggle</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why thousands are switching from spreadsheets and apps to Hisaab
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Excel */}
            <div className="p-10 bg-gradient-to-br from-red-50 to-red-100 rounded-3xl border-2 border-red-200 relative overflow-hidden hover-lift">
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-center space-y-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-200 to-red-300 rounded-3xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl">📊</span>
                </div>
                <h4 className="font-black text-red-700 text-2xl font-heading">Excel Sheets</h4>
                <ul className="text-base text-red-600 space-y-4 text-left">
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    Manual entry every time
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    Forget to update
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    No receipt storage
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    Hard to share
                  </li>
                </ul>
              </div>
            </div>

            {/* Apps */}
            <div className="p-10 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl border-2 border-orange-200 relative overflow-hidden hover-lift">
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-center space-y-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl flex items-center justify-center shadow-lg">
                  <span className="text-4xl">📱</span>
                </div>
                <h4 className="font-black text-orange-700 text-2xl font-heading">Expense Apps</h4>
                <ul className="text-base text-orange-600 space-y-4 text-left">
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    Yet another app to install
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    Complex setup process
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    Notifications you ignore
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    Premium features behind paywall
                  </li>
                </ul>
              </div>
            </div>

            {/* Hisaab */}
            <div className="relative p-10 rounded-3xl border-2 border-teal/30 overflow-hidden hover-lift bg-gradient-to-br from-teal/5 via-lime/5 to-purple/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-lime to-lime-light text-charcoal px-6 py-3 text-lg font-black rounded-full flex items-center gap-2 shadow-glow animate-pulse-glow">
                  <Sparkles className="w-5 h-5" />
                  HISAAB WAY
                </span>
              </div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-lime/10 to-purple/10 animate-blob rounded-3xl"></div>
              
              <div className="relative text-center space-y-8 pt-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal via-lime to-purple rounded-3xl flex items-center justify-center shadow-glow">
                  <span className="text-4xl">💚</span>
                </div>
                <h4 className="font-black text-3xl font-heading text-gradient bg-clip-text">WhatsApp Only</h4>
                <ul className="text-base text-foreground space-y-4 text-left font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    Just send a message
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    Photos = instant logging
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    Smart, understands context
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
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