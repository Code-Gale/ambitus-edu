
const PartnersSection = () => {
  const partners = [
    { name: "Harvard University", logo: "🏛️" },
    { name: "Oxford University", logo: "📚" },
    { name: "MIT", logo: "🔬" },
    { name: "Stanford University", logo: "💡" },
    { name: "Cambridge University", logo: "🎓" },
    { name: "Yale University", logo: "📖" },
    { name: "Princeton University", logo: "🏆" },
    { name: "University of Melbourne", logo: "🌏" },
    { name: "ETH Zurich", logo: "⚗️" },
    { name: "Sorbonne University", logo: "🎨" }
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800 to-forest-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            University <span className="bg-gold-gradient bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="section-subtitle">
            Access to the world's most prestigious educational institutions
          </p>
        </div>

        {/* Partner Logos Ticker */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-ticker">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass-card p-6 rounded-2xl bg-wood-grain hover:scale-105 
                           transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer
                           min-w-[200px] text-center"
                >
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h3 className="text-white font-medium text-sm">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Partner Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center animate-slide-in-left">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Premium Access</h3>
            <p className="text-gray-300">Exclusive partnerships with top-tier universities worldwide</p>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center animate-fade-in">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Scholarship Opportunities</h3>
            <p className="text-gray-300">Access to exclusive scholarships and financial aid programs</p>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center animate-slide-in-right">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Direct Connections</h3>
            <p className="text-gray-300">Fast-track admissions through our established relationships</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Partner Universities" },
            { number: "50+", label: "Countries" },
            { number: "95%", label: "Success Rate" },
            { number: "10,000+", label: "Students Placed" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
