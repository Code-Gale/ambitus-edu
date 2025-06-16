
import { useState, useEffect } from 'react';

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      title: "Discovery",
      description: "Explore programs and universities that match your goals",
      icon: "🔍",
      duration: "Week 1-2"
    },
    {
      title: "Application",
      description: "Submit applications with our expert guidance",
      icon: "📝",
      duration: "Week 3-6"
    },
    {
      title: "Acceptance",
      description: "Receive offers from top universities worldwide",
      icon: "🎓",
      duration: "Week 8-12"
    },
    {
      title: "Preparation",
      description: "Visa processing, accommodation, and pre-departure briefing",
      icon: "✈️",
      duration: "Week 14-18"
    },
    {
      title: "Departure",
      description: "Begin your transformative educational journey",
      icon: "🌟",
      duration: "Week 20"
    }
  ];

  const admissionSteps = [
    "Initial Consultation",
    "University Selection",
    "Document Preparation",
    "Application Submission",
    "Interview Preparation",
    "Visa Processing"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [journeySteps.length]);

  return (
    <section id="journey" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Your <span className="bg-gold-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="section-subtitle">
            From dream to degree - we guide you through every step of your study abroad adventure
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bricolage font-semibold text-center mb-12 text-white">
            Student Journey Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-forest-700 rounded-full">
              <div 
                className="h-full bg-gold-gradient rounded-full transition-all duration-1000"
                style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
              ></div>
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative text-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Circle */}
                  <div className={`timeline-step mx-auto mb-4 ${index <= activeStep ? 'active' : ''}`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>

                  {/* Step Content */}
                  <div className="glass-card p-6 rounded-2xl bg-wood-grain">
                    <h4 className="font-semibold text-lg text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                    <span className="inline-block bg-gold-400/20 text-gold-400 px-3 py-1 rounded-full text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-bricolage font-semibold text-center mb-12 text-white">
            Admission Process Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl bg-wood-grain hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-white">{step}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="gold-button text-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
