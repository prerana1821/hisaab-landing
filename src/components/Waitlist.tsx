import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  PartyPopper,
  Zap,
  QrCode,
  Sparkles,
  Users,
  Clock,
  Gift,
} from "lucide-react";
import QRCode from "qrcode";
// import waitlistHeroGenz from "@/assets/waitlist-hero-genz.jpg";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    country: "India",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { toast } = useToast();

  // Generate QR code when form is submitted
  useEffect(() => {
    const generateQRCode = async () => {
      if (isSubmitted && formData.name && formData.goal) {
        const whatsappMessage = `Hi Hisaab! I just joined the waitlist. Name: ${formData.name}. Goal: ${formData.goal}. Ready to start tracking!`;
        const whatsappUrl = `https://wa.me/14155238886?text=${encodeURIComponent(whatsappMessage)}`;
        
        try {
          const qrUrl = await QRCode.toDataURL(whatsappUrl, {
            width: 200,
            margin: 2,
            color: {
              dark: '#006D73', // teal color
              light: '#FFFFFF'
            }
          });
          setQrCodeUrl(qrUrl);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQRCode();
  }, [isSubmitted, formData.name, formData.goal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.goal) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    try {
      // Submit to Google Form
      const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdhiT6cSqhZ7nBSALNQNUrJ3eQ7HWFuupEC8mRAXywhAH0d3w/formResponse";
      
      // Create form data for submission
      const formDataToSubmit = new FormData();
      
      // Try multiple common patterns for entry IDs based on the Goal field we know (1468518030)
      // Name field possibilities
      formDataToSubmit.append("entry.590341211", formData.name);
      formDataToSubmit.append("entry.1468518029", formData.name);
      formDataToSubmit.append("entry.1468518028", formData.name);
      
      // Email field possibilities  
      formDataToSubmit.append("entry.590341212", formData.email);
      formDataToSubmit.append("entry.1468518031", formData.email);
      formDataToSubmit.append("entry.1468518032", formData.email);
      
      // Goal field - CONFIRMED
      formDataToSubmit.append("entry.1468518030", formData.goal);
      
      // Country field possibilities
      formDataToSubmit.append("entry.590341213", formData.country);
      formDataToSubmit.append("entry.1468518033", formData.country);
      formDataToSubmit.append("entry.1468518034", formData.country);
      
      // Phone field possibilities
      formDataToSubmit.append("entry.590341214", formData.phone);
      formDataToSubmit.append("entry.1468518035", formData.phone);
      formDataToSubmit.append("entry.1468518036", formData.phone);

      // Submit to Google Form (using no-cors mode to avoid CORS issues)
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "Check your email for next steps",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Hisaab! I just joined the waitlist. Name: ${formData.name}. Goal: ${formData.goal}. Ready to start tracking!`,
    );
    window.open(`https://wa.me/14155238886?text=${message}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <section
        className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
        id="waitlist"
      >
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="blob-1 top-20 right-20"></div>
        <div className="blob-2 bottom-20 left-20"></div>

        <div className="container relative z-10">
          <Card className="max-w-lg mx-auto p-10 text-center space-y-8 bg-gradient-to-br from-card via-card/95 to-muted/30 border-2 border-teal/30 shadow-glow backdrop-blur-sm animate-bounce-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime/20 to-teal/20 rounded-full blur-2xl animate-pulse-glow"></div>
              <div className="relative flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-lime to-lime-light rounded-2xl shadow-glow animate-float">
                <PartyPopper className="w-12 h-12 text-charcoal" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-rainbow">
                🎉 You're officially in!
              </h3>
              <p className="text-muted-foreground text-lg">
                Check your email for VIP access details. Ready to start tracking
                expenses like a pro?
              </p>
            </div>

            {/* Enhanced QR Code section */}
            <div className="bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-card border-2 border-teal/20 hover:border-teal/40 transition-all group">
              <div className="w-48 h-48 bg-gradient-to-br from-teal/10 to-lime/10 mx-auto rounded-2xl flex items-center justify-center border-2 border-teal/30 group-hover:scale-105 transition-transform">
                {qrCodeUrl ? (
                  <div className="text-center space-y-3">
                    <img 
                      src={qrCodeUrl} 
                      alt="WhatsApp QR Code" 
                      className="w-32 h-32 mx-auto rounded-lg border border-teal/20"
                    />
                    <div>
                      <p className="text-sm font-bold text-charcoal">
                        Scan to start
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Opens WhatsApp
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <QrCode className="w-12 h-12 text-teal mx-auto animate-pulse" />
                    <div>
                      <p className="text-sm font-bold text-charcoal">
                        Generating QR code...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Opens WhatsApp
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={handleWhatsAppClick}
              className="w-full group relative overflow-hidden"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Open WhatsApp & Start Tracking
              <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
            </Button>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-lime" />
                <span>Free trial included</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal" />
                <span>Setup in 30 seconds</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden"
      id="waitlist"
    >
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="blob-1 top-20 right-20"></div>
      <div className="blob-2 bottom-40 left-20"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime/20 to-teal/20 text-charcoal px-6 py-3 rounded-full text-sm font-bold border-2 border-lime/30 animate-pulse-glow">
                <PartyPopper className="w-4 h-4" />
                <span>Only 100 VIP spots left — join now!</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-gradient-rainbow leading-tight">
                Skip the line,
                <br />
                start saving now
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands who are already tracking expenses the smart way.
                <span className="text-teal font-semibold">
                  {" "}
                  Get instant VIP access
                </span>{" "}
                when we launch.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-teal" />
                  <span>
                    <strong className="text-foreground">2,847</strong> already
                    joined
                  </span>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-lime" />
                  <span>
                    Takes{" "}
                    <strong className="text-foreground">30 seconds</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-lime/20 rounded-3xl blur-2xl transform -rotate-1"></div>
              <div className="relative w-full h-64 rounded-3xl shadow-glow bg-gradient-to-br from-teal/10 to-lime/10 flex items-center justify-center border-2 border-teal/20">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📱💰</div>
                  <p className="text-lg font-semibold text-muted-foreground">
                    Smart Expense Tracking
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-card via-card/95 to-muted/30 border-2 border-teal/20 shadow-glow backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 text-base bg-background/50"
                  />

                  <Input
                    type="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 text-base bg-background/50"
                  />

                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, goal: value })
                    }
                  >
                    <SelectTrigger className="h-12 text-base bg-background/50">
                      <SelectValue placeholder="What's your main goal? *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">
                        💸 Track personal expenses
                      </SelectItem>
                      <SelectItem value="save-more">
                        💰 Save more money
                      </SelectItem>
                      <SelectItem value="split-bills">
                        👥 Split bills with friends
                      </SelectItem>
                      <SelectItem value="business">
                        🏢 Track business expenses
                      </SelectItem>
                      <SelectItem value="family">
                        👨‍👩‍👧‍👦 Family expense tracking
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    defaultValue="India"
                    onValueChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <SelectTrigger className="h-12 text-base bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">🇮🇳 India</SelectItem>
                      <SelectItem value="UAE">🇦🇪 UAE</SelectItem>
                      <SelectItem value="USA">🇺🇸 USA</SelectItem>
                      <SelectItem value="UK">🇬🇧 UK</SelectItem>
                      <SelectItem value="Other">🌍 Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="WhatsApp number (optional)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 text-base bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group relative overflow-hidden"
                >
                  <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                  Get VIP Access — Join Waitlist
                  <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Gift className="w-3 h-3 text-lime" />
                    <span>Free trial included</span>
                  </div>
                  <div className="w-px h-3 bg-border"></div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-teal" />
                    <span>VIP support</span>
                  </div>
                  <div className="w-px h-3 bg-border"></div>
                  <span>No spam, ever</span>
                </div>
              </form>
            </Card>

            {/* Social proof */}
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Join other smart savers from top companies:
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="px-3 py-1 bg-muted/50 rounded-full">
                  Google
                </span>
                <span className="px-3 py-1 bg-muted/50 rounded-full">
                  Microsoft
                </span>
                <span className="px-3 py-1 bg-muted/50 rounded-full">
                  Zomato
                </span>
                <span className="px-3 py-1 bg-muted/50 rounded-full">
                  Swiggy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
