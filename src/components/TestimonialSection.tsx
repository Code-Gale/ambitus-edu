
import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adaeze Okafor",
      program: "Computer Science at University of Toronto",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400&q=80",
      quote: "Ambitus made my Canadian dream a reality. With their loan support and WAEC acceptance program, I didn't need to stress about IELTS or collateral. Now I'm studying at one of Canada's top universities.",
      rating: 5
    },
    {
      name: "Chinedu Okwu",
      program: "Business Administration at University of Manchester",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&h=400&q=80",
      quote: "The financial structure Ambitus provided was exactly what I needed. No guarantors, clear repayment terms, and direct university disbursement. I'm now pursuing my MBA with peace of mind.",
      rating: 5
    },
    {
      name: "Funmilayo Adebayo",
      program: "Medicine at University of Melbourne",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400&q=80",
      quote: "From admission support to loan facilitation, Ambitus guided me through every step. Their partnership with universities made the process smooth. I'm grateful to be studying medicine in Australia.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 to-forest-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Student <span className="bg-gold-gradient bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="section-subtitle">
            Join Nigerian students who have transformed their futures through our comprehensive study abroad guidance and loan facilitation
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="glass-card p-8 md:p-12 rounded-3xl bg-wood-grain">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Student Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gold-400"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gold-gradient p-2 rounded-full">
                    <svg className="w-6 h-6 text-forest-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.828,2.828L16.243,1.414L14.828,0L12,2.828L9.172,0L7.757,1.414L9.172,2.828L6.343,5.657L7.757,7.071L10.586,4.243L13.414,7.071L14.828,5.657L12,2.828L14.828,0Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-xl">★</span>
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-200 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="border-t border-gold-400/30 pt-4">
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gold-400 font-medium mb-1">
                    {testimonials[currentTestimonial].program}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold-gradient 
                     rounded-full flex items-center justify-center text-forest-950 
                     hover:scale-110 transition-transform duration-300 shadow-xl"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold-gradient 
                     rounded-full flex items-center justify-center text-forest-950 
                     hover:scale-110 transition-transform duration-300 shadow-xl"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gold-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
