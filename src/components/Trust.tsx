import { Lock, Ban, Smartphone, MapPin, Shield, Eye, Star } from "lucide-react";
// import whatsappMoneyTracking from "@/assets/whatsapp-money-tracking.jpg";
// import dataSecurityModern from "@/assets/data-security-modern.jpg";

const Trust = () => {
  const trustPoints = [
    {
      icon: Lock,
      title: "End-to-end encrypted",
      description: "WhatsApp's security protects all your messages",
      color: "text-green-600",
    },
    {
      icon: Ban,
      title: "No ads, ever",
      description: "We don't sell your data or show you ads",
      color: "text-red-600",
    },
    {
      icon: Smartphone,
      title: "No app to install",
      description: "Works entirely through WhatsApp",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Made for India",
      description: "Understands Indian expenses and spending patterns",
      color: "text-orange-600",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
      id="privacy"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      <div className="blob-1 top-20 right-20"></div>
      <div className="blob-2 bottom-40 left-20"></div>

      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal/10 to-lime/10 px-6 py-3 rounded-full border border-teal/20">
            <Shield className="w-5 h-5 text-teal" />
            <span className="text-sm font-semibold text-teal uppercase tracking-wide">
              Your Data Is Safe
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-gradient-rainbow leading-tight">
            Privacy that doesn't
            <br />
            compromise on style
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bank-level security meets WhatsApp simplicity. Your money stays
            yours, your data stays private.
            <span className="text-teal font-semibold"> Zero compromises.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="group hover-lift cursor-pointer">
                <div className="text-center p-8 bg-gradient-to-br from-card to-card/80 rounded-2xl shadow-card border border-white/10 backdrop-blur-sm hover:border-teal/30 transition-all duration-500 h-full">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal/10 to-lime/10 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-teal/20">
                    <IconComponent
                      className={`w-10 h-10 ${point.color} drop-shadow-sm`}
                    />
                  </div>
                  <h3 className="font-bold text-foreground mb-4 font-heading text-xl group-hover:text-teal transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust illustration - Modern hero image */}
        <div className="mb-20 text-center relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-lime/20 rounded-3xl blur-2xl transform rotate-1"></div>
            {/* <img
              src={dataSecurityModern}
              alt="Modern data security illustration showing encrypted WhatsApp messages"
              className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-glow hover:scale-105 transition-transform duration-700"
            /> */}
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-lime fill-lime" />
              <span>4.8/5 Trust Score</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal" />
              <span>Bank-level encryption</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple" />
              <span>Zero data sharing</span>
            </div>
          </div>
        </div>

        {/* Enhanced trust messaging */}
        <div className="bg-gradient-to-br from-card via-card/95 to-muted/50 p-10 rounded-3xl shadow-card border border-white/10 backdrop-blur-sm max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal/5 to-lime/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Transparency is our superpower
              </h3>
              <p className="text-muted-foreground text-lg">
                Here's exactly what happens to your data (spoiler: nothing
                sketchy)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-gradient-to-br from-teal/5 to-transparent rounded-2xl border border-teal/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-teal" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg font-heading">
                    What we store
                  </h4>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0"></div>
                    <span>Your expense entries (amount, category, date)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0"></div>
                    <span>Receipt images (if you share them)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0"></div>
                    <span>Your preferences and settings</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 p-6 bg-gradient-to-br from-pink/5 to-transparent rounded-2xl border border-pink/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-pink/20 flex items-center justify-center">
                    <Ban className="w-4 h-4 text-pink" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg font-heading">
                    What we NEVER do
                  </h4>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink mt-2 flex-shrink-0"></div>
                    <span>Share your data with third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink mt-2 flex-shrink-0"></div>
                    <span>Use your data for advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink mt-2 flex-shrink-0"></div>
                    <span>Access your other WhatsApp chats</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-teal hover:text-teal-light font-semibold transition-colors group"
              >
                <span>Read our full privacy policy</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
