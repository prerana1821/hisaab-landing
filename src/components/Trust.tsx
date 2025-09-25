import { Lock, Ban, Smartphone, MapPin } from "lucide-react";
import whatsappMoneyTracking from "@/assets/whatsapp-money-tracking.jpg";

const Trust = () => {
  const trustPoints = [
    {
      icon: Lock,
      title: "End-to-end encrypted",
      description: "WhatsApp's security protects all your messages",
      color: "text-green-600"
    },
    {
      icon: Ban,
      title: "No ads, ever",
      description: "We don't sell your data or show you ads",
      color: "text-red-600"
    },
    {
      icon: Smartphone,
      title: "No app to install",
      description: "Works entirely through WhatsApp",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Made for India",
      description: "Understands Indian expenses and spending patterns",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/20" id="privacy">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Your privacy is our priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data stored only for you. No ads. End-to-end WhatsApp security does the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-muted mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-8 h-8 ${point.color}`} />
                </div>
                <h3 className="font-bold text-foreground mb-3 font-heading text-lg">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust illustration */}
        <div className="mb-12 text-center">
          <img 
            src={whatsappMoneyTracking} 
            alt="WhatsApp money tracking illustration"
            className="w-full max-w-md mx-auto rounded-2xl shadow-soft"
          />
        </div>

        {/* Additional trust messaging */}
        <div className="bg-card p-8 rounded-lg shadow-card max-w-3xl mx-auto">
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              How we keep your data safe
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm">What we store:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your expense entries (amount, category, date)</li>
                  <li>• Receipt images (if you share them)</li>
                  <li>• Your preferences and settings</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm">What we never do:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Share your data with third parties</li>
                  <li>• Use your data for advertising</li>
                  <li>• Access your other WhatsApp chats</li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href="#" 
                className="text-teal hover:underline text-sm font-medium"
              >
                Read our full privacy policy →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;