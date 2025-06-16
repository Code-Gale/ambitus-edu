
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Ambitus different from other study abroad consultants?",
      answer: "Ambitus provides end-to-end guidance specifically tailored for Nigerian students, including international student loan facilitation, WAEC/NECO acceptance programs, and partnerships with 650+ universities across 12+ countries. We focus on removing financial barriers and simplifying the complex process of studying abroad."
    },
    {
      question: "Do I really need collateral or a co-signer for the student loan?",
      answer: "No, you don't need collateral or wealthy guarantors. Our loans are based on your admission offer and basic financial profile. We believe your academic potential and future earning capacity are sufficient backing for your education investment."
    },
    {
      question: "Can I use my WAEC/NECO results instead of IELTS?",
      answer: "Yes! Through our university partnerships, many institutions accept WAEC/NECO qualifications, eliminating the need for additional English proficiency tests. This makes the admission process more accessible for Nigerian students."
    },
    {
      question: "How long do I have to repay my student loan?",
      answer: "We offer flexible repayment terms of up to 10 years, designed to be manageable based on your post-graduation earning potential. The repayment structure is tailored to give you financial stability as you start your career."
    },
    {
      question: "How are the loan funds disbursed?",
      answer: "Funds are disbursed directly to your university in a secure and transparent manner. This ensures that your tuition and approved expenses are covered while maintaining accountability in the loan process."
    },
    {
      question: "What ongoing support do you provide after I arrive at university?",
      answer: "We provide continuous support including academic guidance, financial planning assistance, and access to our alumni network. Our goal is to ensure your success throughout your entire study abroad journey, not just getting you admitted."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 to-forest-800"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Frequently Asked <span className="bg-gold-gradient bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="section-subtitle">
            Get answers to common questions about our study abroad guidance and international student loan services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl bg-wood-grain overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className={`w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 text-forest-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gold-400/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Still have questions? Our expert consultants are here to help you navigate your study abroad journey.
          </p>
          <button className="gold-button">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
