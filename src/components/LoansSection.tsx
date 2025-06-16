
const LoansSection = () => {
  const loanFeatures = [
    {
      title: "No Collateral Required",
      description: "Eligible based on your offer and background—no need for wealthy guarantors",
      icon: "🛡️"
    },
    {
      title: "Covers Full Education Cost",
      description: "Up to full cost of tuition and living expenses so you focus on academics",
      icon: "💰"
    },
    {
      title: "Long-Term Repayment",
      description: "Repay over up to 10 years with terms tailored for manageable planning",
      icon: "📅"
    },
    {
      title: "Direct University Disbursement",
      description: "Funds are released securely and transparently to your institution",
      icon: "🏛️"
    }
  ];

  const eligibilitySteps = [
    "Have an admission offer from one of our 650+ affiliated universities",
    "Meet minimum credit health requirement (basic savings or steady financial profile)",
    "Have been successfully enrolled in an approved program"
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            International Student <span className="bg-gold-gradient bg-clip-text text-transparent">Loans</span>
          </h2>
          <p className="section-subtitle">
            For many talented students, funding remains the final hurdle. At AMBITUS, we don't believe your future should be limited by temporary financial gaps.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {loanFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl bg-wood-grain text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why This Matters Section */}
        <div className="glass-card p-8 rounded-3xl bg-wood-grain mb-16">
          <h3 className="text-2xl font-bricolage font-semibold text-center mb-6 text-white">
            Why This Matters
          </h3>
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Many students delay or abandon their study abroad plans because of uncertain financing. Our loan service exists not just to "help pay," but to bring clarity, pace, and sustainability to your journey—backed by a structure you can plan around.
          </p>
          <p className="text-gold-400 text-center mt-6 font-semibold text-lg">
            You don't only fund your ambition. You structure it.
          </p>
        </div>

        {/* Eligibility & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bricolage font-semibold mb-6 text-white">
              Who's Eligible?
            </h3>
            <p className="text-gray-300 mb-6">
              You may qualify once you meet these requirements:
            </p>
            <div className="space-y-4">
              {eligibilitySteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
            <button className="gold-button mt-8">
              Check Your Eligibility
            </button>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl bg-wood-grain">
              <h4 className="text-xl font-semibold text-white mb-6">Loan Coverage</h4>
              <div className="space-y-6">
                <div className="border-b border-gold-400/30 pb-4">
                  <h5 className="text-white font-medium mb-2">Tuition Fees</h5>
                  <p className="text-gray-300 text-sm">Full coverage of university tuition costs</p>
                </div>
                
                <div className="border-b border-gold-400/30 pb-4">
                  <h5 className="text-white font-medium mb-2">Living Expenses</h5>
                  <p className="text-gray-300 text-sm">Accommodation, meals, and daily expenses</p>
                </div>

                <div className="border-b border-gold-400/30 pb-4">
                  <h5 className="text-white font-medium mb-2">Additional Costs</h5>
                  <p className="text-gray-300 text-sm">Books, materials, and other educational expenses</p>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Repayment Period:</span>
                    <span className="text-xl font-bold text-gold-400">Up to 10 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoansSection;
