const ServicesSection = () => {
  const scrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 to-forest-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Three Ways <span className="bg-gold-gradient bg-clip-text text-transparent">You're Empowered</span>
          </h2>
        </div>

        <div className="space-y-24">
          {/* 1. Admission and Visa Assistance */}
          <div className="glass-card p-8 rounded-3xl bg-wood-grain animate-slide-in-left">
            <h3 className="text-3xl font-bricolage font-semibold text-gold-400 mb-6 text-center">
              ADMISSION AND VISA ASSISTANCE
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Countries and Overview */}
              <div>
                <p className="text-gray-300 mb-6 text-lg">
                  We assist you in gaining admission to universities in the following countries:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    "Australia", "Canada", "Ireland", "UK", "USA", 
                    "Spain", "France", "Malta", "Germany", "Poland"
                  ].map((country, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span className="text-gray-200">{country}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gold-400 font-semibold">
                  Your top choice isn't here? We cover plenty more
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Bachelor's Degree Requirements</h4>
                <div className="space-y-3 mb-6">
                  {[
                    "International passport data page",
                    "O'level certificate (WAEC/NECO with at least credit 'C5' in English)",
                    "WAEC/NECO scratch card",
                    "Passport photo (white background)",
                    "Statement of academic purpose",
                    "Curriculum Vitae (CV)",
                    "Letter of reference (3 persons)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gold-400 text-sm italic">
                  We help you get these ready where necessary
                </p>
              </div>
            </div>

            {/* Special Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl bg-forest-800/50">
                <h5 className="text-lg font-semibold text-gold-400 mb-3">🏆 Automatic Scholarships</h5>
                <p className="text-gray-300 text-sm">
                  Students with distinction and "A" parallel grades can get automatic scholarships up to 80% coverage in Canada and USA
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl bg-forest-800/50">
                <h5 className="text-lg font-semibold text-gold-400 mb-3">📚 Masters Programs</h5>
                <p className="text-gray-300 text-sm">
                  All bachelor requirements plus degree certificate and transcripts. Various pathways available for different qualification levels
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-6 text-center">Processing Fees by Country</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { country: "UK", fee: "₦100,000", schools: "2 schools" },
                  { country: "Ireland", fee: "₦150,000", schools: "1 school" },
                  { country: "Canada/USA", fee: "₦500,000", schools: "1 school" },
                  { country: "Australia", fee: "₦650,000", schools: "1 school + visa" },
                  { country: "Europe", fee: "₦350,000", schools: "1 school" }
                ].map((item, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl bg-forest-800/30 text-center">
                    <h6 className="text-gold-400 font-semibold">{item.country}</h6>
                    <p className="text-gray-300 text-lg font-bold">{item.schools}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. International Student Loans */}
          {/* <div className="glass-card p-8 rounded-3xl bg-wood-grain animate-fade-in">
            <h3 className="text-3xl font-bricolage font-semibold text-gold-400 mb-6 text-center">
              INTERNATIONAL STUDENT LOANS
            </h3>
            
            <p className="text-gray-300 text-center max-w-4xl mx-auto mb-8 text-lg">
              For many talented students, funding remains the final hurdle. At AMBITUS, we don't believe your future should be limited by temporary financial gaps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: "No Collateral Required", desc: "Eligible based on your offer and background", icon: "🛡️" },
                { title: "Covers Full Education Cost", desc: "Up to full cost of tuition and living expenses", icon: "💰" },
                { title: "Long-Term Repayment", desc: "Repay over up to 10 years", icon: "📅" },
                { title: "Direct University Disbursement", desc: "Funds released securely to your institution", icon: "🏛️" }
              ].map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl bg-forest-800/50 text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h5 className="text-white font-semibold mb-2">{feature.title}</h5>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="gold-button">
                Check Your Eligibility
              </button>
            </div>
          </div> */}

          {/* 3. Financing Your Tuition Deposit */}
          <div className="glass-card p-8 rounded-3xl bg-wood-grain animate-slide-in-right">
            <h3 className="text-3xl font-bricolage font-semibold text-gold-400 mb-6 text-center">
              FINANCING YOUR TUITION DEPOSIT
            </h3>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg mb-6">
                Bridge the gap between admission and enrollment with our tuition deposit financing solutions. 
                Secure your spot at your dream university without the immediate financial pressure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 rounded-2xl bg-forest-800/50">
                  <div className="text-2xl mb-3">⚡</div>
                  <h5 className="text-white font-semibold mb-2">Quick Processing</h5>
                  <p className="text-gray-300 text-sm">Fast approval to meet deposit deadlines</p>
                </div>
                <div className="glass-card p-6 rounded-2xl bg-forest-800/50">
                  <div className="text-2xl mb-3">🔒</div>
                  <h5 className="text-white font-semibold mb-2">Secure Your Spot</h5>
                  <p className="text-gray-300 text-sm">Guarantee your university placement</p>
                </div>
                <div className="glass-card p-6 rounded-2xl bg-forest-800/50">
                  <div className="text-2xl mb-3">💡</div>
                  <h5 className="text-white font-semibold mb-2">Flexible Terms</h5>
                  <p className="text-gray-300 text-sm">Manageable repayment options</p>
                </div>
              </div>

              <button className="gold-button" onClick={scrollToRegistration}>
                Learn More About Deposit Financing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
