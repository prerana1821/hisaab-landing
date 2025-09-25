const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal text-white">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-heading font-bold text-xl">Hisaab</span>
            </div>
            <p className="text-sm text-gray-400">
              Expense tracking made simple.<br/>
              Just one WhatsApp message away.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Demo</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="https://wa.me/919876543210?text=Hi%20Hisaab!%20I%20have%20a%20question." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li>
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <span>Product Hunt</span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">🚀 Launch</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Hisaab. Made with ❤️ for India.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Early users saved ₹12,000 on average in their first month
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;