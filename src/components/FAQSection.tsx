
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes StudyLux different from other study abroad consultants?",
      answer: "StudyLux offers a premium, personalized experience with exclusive partnerships with top universities, luxury accommodations, and comprehensive support throughout your entire journey. Our success rate of 95% and dedicated mentorship sets us apart."
    },
    {
      question: "How do I qualify for scholarships and financial aid?",
      answer: "Scholarships are awarded based on academic merit, leadership potential, and program-specific criteria. Our team works with you to identify and apply for the best funding opportunities, including exclusive StudyLux scholarships available only to our students."
    },
    {
      question: "What is included in the StudyLux program package?",
      answer: "Our comprehensive package includes university application assistance, visa processing, accommodation arrangements, pre-departure orientation, ongoing academic support, career counseling, and access to our global alumni network."
    },
    {
      question: "How long does the application process typically take?",
      answer: "The complete process from initial consultation to university enrollment typically takes 4-6 months. However, this can vary depending on the program, country, and your preparation timeline. We provide detailed timelines during your consultation."
    },
    {
      question: "Do you assist with visa applications and documentation?",
      answer: "Yes, our expert visa consultants guide you through the entire visa application process, document preparation, interview coaching, and liaison with embassy officials to ensure a smooth approval process."
    },
    {
      question: "What ongoing support do you provide after I arrive at university?",
      answer: "We provide continuous support including academic mentoring, career guidance, cultural integration assistance, and access to our local representatives in your study destination for any emergencies or assistance needed."
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
            Get answers to common questions about our premium study abroad programs
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
            Still have questions? Our expert consultants are here to help.
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
