
const LoansSection = () => {
  const loanFeatures = [
    {
      title: "Flexible Payment Plans",
      description: "Customized repayment schedules to fit your post-graduation income",
      icon: "💳"
    },
    {
      title: "Competitive Interest Rates",
      description: "Industry-leading rates with no hidden fees or charges",
      icon: "📈"
    },
    {
      title: "No Collateral Required",
      description: "Unsecured loans based on your academic merit and potential",
      icon: "🛡️"
    },
    {
      title: "Quick Approval",
      description: "Fast-track processing with approval in 48-72 hours",
      icon: "⚡"
    }
  ];

  const loanProcess = [
    "Submit online application",
    "Upload required documents",
    "Credit assessment review",
    "Loan approval notification",
    "Funds disbursement"
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Education <span className="bg-gold-gradient bg-clip-text text-transparent">Financing</span>
          </h2>
          <p className="section-subtitle">
            Flexible loan options to make your dream education accessible and affordable
          </p>
        </div>

        {/* Loan Features Grid */}
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

        {/* Loan Details Table */}
        <div className="glass-card p-8 rounded-3xl bg-wood-grain mb-16">
          <h3 className="text-2xl font-bricolage font-semibold text-center mb-8 text-white">
            Loan Options & Features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gold-400/30">
                  <th className="py-4 px-6 text-gold-400 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-gold-400 font-semibold">Undergraduate</th>
                  <th className="py-4 px-6 text-gold-400 font-semibold">Graduate</th>
                  <th className="py-4 px-6 text-gold-400 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white">Loan Amount</td>
                  <td className="py-4 px-6">Up to $50,000</td>
                  <td className="py-4 px-6">Up to $100,000</td>
                  <td className="py-4 px-6">Up to $200,000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white">Interest Rate</td>
                  <td className="py-4 px-6">4.5% - 6.5%</td>
                  <td className="py-4 px-6">4.0% - 6.0%</td>
                  <td className="py-4 px-6">3.5% - 5.5%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white">Repayment Period</td>
                  <td className="py-4 px-6">5-15 years</td>
                  <td className="py-4 px-6">5-20 years</td>
                  <td className="py-4 px-6">5-25 years</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Grace Period</td>
                  <td className="py-4 px-6">6 months</td>
                  <td className="py-4 px-6">12 months</td>
                  <td className="py-4 px-6">18 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Loan Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bricolage font-semibold mb-6 text-white">
              Simple Application Process
            </h3>
            <div className="space-y-4">
              {loanProcess.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
            <button className="gold-button mt-8">
              Apply for Loan
            </button>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl bg-wood-grain">
              <h4 className="text-xl font-semibold text-white mb-6">Loan Calculator</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Loan Amount</label>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    className="w-full h-2 bg-forest-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>$10K</span>
                    <span>$200K</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Repayment Period</label>
                  <select className="w-full p-3 bg-forest-800 border border-gold-400/30 rounded-lg text-white">
                    <option>5 years</option>
                    <option>10 years</option>
                    <option>15 years</option>
                    <option>20 years</option>
                  </select>
                </div>

                <div className="border-t border-gold-400/30 pt-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Estimated Monthly Payment:</span>
                    <span className="text-xl font-bold text-gold-400">$1,245</span>
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
