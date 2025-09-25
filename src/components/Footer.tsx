import footerBackgroundModern from "@/assets/footer-background-modern.jpg";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-charcoal text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={footerBackgroundModern}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90"></div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-teal/10 to-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-purple/10 to-pink/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hisaab
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  Smart expense tracking
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The smartest way to track expenses.
                <br />
                <span className="text-teal font-semibold">
                  Just one WhatsApp message away.
                </span>
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-lime rounded-full animate-pulse"></div>
                  <span>2,847+ users</span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>₹12K avg saved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold font-heading text-white text-lg">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  ✨ Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  🎬 Live Demo
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  💰 Pricing
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-gray-400 hover:text-lime transition-all duration-300 hover:translate-x-1 inline-block font-semibold"
                >
                  🚀 Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold font-heading text-white text-lg">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  👋 About
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  🔒 Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  📋 Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  💬 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-bold font-heading text-white text-lg">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/14155238886?text=Hi%20Hisaab!%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-lime transition-all duration-300 hover:translate-x-1 inline-block font-semibold"
                >
                  💬 WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  🐦 Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <span>🚀 Product Hunt</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse group-hover:scale-110 transition-transform">
                    LIVE
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-gray-400">
                © 2024 Hisaab. Made with{" "}
                <span className="text-red-400 animate-pulse">❤️</span> for
                India.
              </p>
              <div className="hidden md:block w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="bg-gradient-to-r from-teal/20 to-lime/20 px-3 py-1 rounded-full border border-teal/30">
                  🏆 Early users saved ₹12K+ in first month
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="w-px h-3 bg-gray-600"></div>
              <span>🇮🇳 Proudly Indian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
