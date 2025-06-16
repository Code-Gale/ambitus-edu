import { ArrowRight } from 'lucide-react';

const journeyMap = [
  {
    title: 'Student Onboarding',
    description:
      'You submit an application, our student advisor reaches out to you for initial briefing, we sign an agreement, you process consultancy fees',
  },
  {
    title: 'Discovery and Consultation',
    description:
      'You discuss your goals with our advisors, we listen closely, provide details on programs, institutions, countries, offer guidance, and clarify timelines.',
  },
  {
    title: 'Application Processing',
    description:
      'We help you prepare and submit your applications, review your documents, provide recommendations, and simplify entry criteria, like WAEC/NECO results instead of IELTS (international exams)',
  },
  {
    title: 'Visa Processing',
    description:
      'After an admission offer is secured, we begin visa application, preparing documentation and providing advisory guidance—not just paperwork.',
  },
  {
    title: 'Pre-Departure Preparation',
    description:
      'When it\'s time to transition mentally and practically, we guide travel arrangements, orientation steps, and cultural prep.',
  },
  {
    title: 'Arrival and Integration',
    description:
      'Once you begin your academic journey abroad, we stay connected post-arrival and ensure your financial commitments remain manageable.',
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title uppercase tracking-widest mb-2">
            YOUR JOURNEY MAP.
          </h2>
          <p className="section-subtitle font-semibold text-gold-400 mb-8">
            FROM INQUIRY TO PLACEMENT.
          </p>
        </div>
        <div className="flex flex-col gap-0 relative">
          {journeyMap.map((step, idx) => (
            <div key={idx} className="flex items-center group">
              {/* Map line/connector */}
              <div className="flex flex-col items-center mr-6">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-forest-950 bg-gold-400 border-4 border-forest-800 shadow-lg z-10`}>{idx + 1}</div>
                {idx < journeyMap.length - 1 && (
                  <div className="w-1 h-16 bg-gold-400/40"></div>
                )}
              </div>
              <div className="glass-card bg-wood-grain p-6 rounded-2xl flex-1 mb-8">
                <h3 className="font-bricolage text-xl font-semibold text-gold-400 mb-2">{step.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{step.description}</p>
              </div>
              {idx < journeyMap.length - 1 && (
                <ArrowRight className="hidden md:block text-gold-400 mx-4 w-8 h-8 animate-float" />
              )}
            </div>
          ))}
        </div>
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
