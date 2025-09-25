import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PartyPopper, Zap, QrCode } from "lucide-react";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    country: "India",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.goal) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "Check your email for next steps"
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi Hisaab! I just joined the waitlist. Name: ${formData.name}. Goal: ${formData.goal}. Ready to start tracking!`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background" id="waitlist">
        <div className="container">
        <Card className="max-w-md mx-auto p-8 text-center space-y-6 bg-gradient-to-br from-teal/5 to-lime/5 border-2 border-teal/20">
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-lime to-lime/80 rounded-full">
            <PartyPopper className="w-10 h-10 text-charcoal" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">
            You're in!
          </h3>
          <p className="text-muted-foreground">
            We've sent you an email with next steps. Want to start immediately?
          </p>
          
          {/* QR Code placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-card border-2 border-teal/20">
            <div className="w-32 h-32 bg-gradient-to-br from-teal/10 to-lime/10 mx-auto rounded-xl flex items-center justify-center border-2 border-teal/30">
              <div className="text-center space-y-2">
                <QrCode className="w-8 h-8 text-teal mx-auto" />
                <span className="text-xs text-muted-foreground font-medium">
                  Scan to open<br/>
                  WhatsApp
                </span>
              </div>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="w-full group"
          >
            <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Or Open on WhatsApp
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Opens WhatsApp with your details pre-filled
          </p>
        </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30" id="waitlist">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Join the waitlist
            </h2>
            <p className="text-muted-foreground">
              Get instant access when we launch
            </p>
            <div className="bg-gradient-to-r from-lime/20 to-teal/20 text-charcoal px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 border-2 border-lime/30">
              <PartyPopper className="w-4 h-4" />
              Only 100 early spots — get instant access
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-card to-muted/20 border-2 border-teal/20 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <Select onValueChange={(value) => setFormData({...formData, goal: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your main goal? *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Track personal expenses</SelectItem>
                    <SelectItem value="save-more">Save more money</SelectItem>
                    <SelectItem value="split-bills">Split bills with friends</SelectItem>
                    <SelectItem value="business">Track business expenses</SelectItem>
                    <SelectItem value="family">Family expense tracking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select 
                  defaultValue="India"
                  onValueChange={(value) => setFormData({...formData, country: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="UAE">UAE</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input
                  placeholder="WhatsApp number (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <Button 
                type="submit" 
                variant="teal" 
                size="lg" 
                className="w-full"
              >
                Join the waitlist — get instant access
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              * Required fields. We'll only use this to give you early access.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;