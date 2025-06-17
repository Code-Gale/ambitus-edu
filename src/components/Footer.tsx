
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    programs: [
      { name: "Undergraduate", href: "#undergraduate" },
      { name: "Graduate", href: "#graduate" },
      { name: "PhD Programs", href: "#phd" },
      { name: "Short Courses", href: "#courses" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Student Portal", href: "#portal" },
      { name: "Alumni Network", href: "#alumni" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#facebook" },
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "Instagram", icon: "📷", href: "#instagram" },
    { name: "YouTube", icon: "📹", href: "#youtube" }
  ];

  return (
    <footer className="relative py-16 border-t border-gold-400/20">
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-forest-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-bricolage text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-4">
              Ambitus
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering students to plan confidently amidst international education complexities and financial uncertainties.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center 
                           hover:bg-gold-400/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center">
            <div className="text-2xl text-gold-400 mb-3">📧</div>
            <h4 className="text-white font-semibold mb-2">Email Us</h4>
            <p className="text-gray-300">info@ambitus.com</p>
            <p className="text-gray-300">support@ambitus.com</p>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center">
            <div className="text-2xl text-gold-400 mb-3">📞</div>
            <h4 className="text-white font-semibold mb-2">Call Us</h4>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-gray-300">+1 (555) 987-6543</p>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center">
            <div className="text-2xl text-gold-400 mb-3">📍</div>
            <h4 className="text-white font-semibold mb-2">Visit Us</h4>
            <p className="text-gray-300">123 Education Plaza</p>
            <p className="text-gray-300">New York, NY 10001</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ambitus Powered by QC Investments. All rights reserved. Empowering students to plan confidently amidst international education complexities and financial uncertainties since 2010.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🌍 Available in 12+ countries</span>
              <span>⭐ 95% success rate</span>
              <span>🎓 10 days admission securance period</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
