
import { useState, useEffect } from 'react';
import VideoModal from './VideoModal';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const slides = [
    {
      title: "End-to-end study abroad",
      titleHighlight: "guidance",
      subtitle: "Empowering students to plan boldly amidst the complexities of international education processing and financial uncertainties",
      benefits: [
        "Comprehensive admission support",
        "International student loan facilitation",
        "650+ university partnerships worldwide",
        "Tailored financial planning"
      ],
      cta: "Start Your Journey"
    },
    {
      title: "Admission",
      titleHighlight: "Support",
      subtitle: "Navigate international education with expert guidance and comprehensive support",
      benefits: [
        "12+ countries coverage",
        "650+ university partners",
        "WAEC/NECO instead of IELTS",
        "Expert admission guidance"
      ],
      cta: "Explore Programs"
    },
    {
      title: "Financial",
      titleHighlight: "Structure",
      subtitle: "Structured financing solutions to make your international education dreams achievable",
      benefits: [
        "Financial integration with parent company",
        "Local microfinance partnerships",
        "Instant scholarship initiatives",
        "No collateral required loans"
      ],
      cta: "Check Eligibility"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950">
        <div className="absolute inset-0 bg-wood-grain opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-forest-400/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="block text-white">
                {slides[currentSlide].title}
              </span>
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                {slides[currentSlide].titleHighlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              {slides[currentSlide].subtitle}
            </p>

            {/* Benefits List */}
            <div className="mb-8 space-y-3">
              {slides[currentSlide].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="gold-button text-lg mb-8" onClick={scrollToRegistration}>
              {slides[currentSlide].cta}
            </button>

            {/* Carousel Navigation */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gold-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Video Thumbnail */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl">
              <div 
                className="relative aspect-video bg-oak-800 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                {/* Background Image */}
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=675&q=80"
                  alt="Study abroad experience"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center 
                                shadow-2xl group-hover:scale-110 transition-transform duration-300 floating-element">
                    <svg className="w-8 h-8 text-forest-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Welcome to Ambitus</h3>
                  <p className="text-gray-300 text-sm">Your pathway to international education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
