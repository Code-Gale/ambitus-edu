import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Momoh",
      program: "Social work(MA) at the University of Bradford",
      country: "United Kingdom",
      image: "/images/momoh.jpg",
      quote: "What I decided to study in the UK has a very good career potential, and I wanted to change my career path, the quality of teaching here is something I have never experienced before, I am more knowledgeable now than I was before I came to the UK, and I am privileged to learn from people who know so much.",
      rating: 5
    },
    {
      name: "Joseph",
      program: "International Relations At the University of Bradford",
      country: "United Kingdom",
      image: "/images/joseph.jpg",
      quote: "Studying here in the UK has brought me closer to my love for the beautiful game, I have been surrounded by history and culture, and I've had careers advice and help already meeting future employers, each experience whilst studying here has helped expand my horizons, opening doors to new opportunities both here, and beyond.",
      rating: 5
    },
    {
      name: "Alero",
      program: "Conestoga College, Ontario,Canada",
      country: "Canada",
      image: "/images/alero.jpg",
      quote: "I started this journey when I contacted QC investment (AMBITUS) to get assistance with enrollment into a canadian college, one thing I'm really grateful for is the full support I received, I had a million and one questions and they were always willing to respond even when I reached out by 12 midnight or 1am, the admission came-in in less than a month, even now that I'm here in Canada, I'm still getting support.",
      rating: 5
    },
    {
      name: "Arnold",
      program: "Welding Engineering Technology, Canada",
      country: "Canada",
      image: "/images/arnold.jpg",
      quote: "As a Nigerian aspiring to further his education outside the borders of Africa at large but not knowing how to go about securing international admission or applying for student visa, with the help of QC Investment (AMBITUS), I was able to secure an admission in Canada, they guided me on how to apply for a student visa from the comfort of my home, I was able to secure my Canadian visa right here with me, and very soon I'll be leaving.",
      rating: 5
    },
    {
      name: "Samuel",
      program: "Electrical Electronic (fully funded) At The University Of Maine",
      country: "United States Of America",
      image: "/images/samuel.jpg",
      quote: "I am a graduate student at university of Maine, I successfully resumed for my master's degree program before 2022, I want to take the time to appreciate QC Investment (AMBITUS) for the full support offered from application to enrollment, they helped with how to navigate the financial requirements, and they were there for me as well at the visa application stage even down to how to answer questions, so if you're looking for an empowering partner, QC investment is your invesment.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

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
            Join Nigerian students who have transformed their futures through our comprehensive study abroad guidance and financial facilitation
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6">
          {/* Left Arrow (desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 hover:scale-110 transition-transform duration-300 shadow-xl"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12 rounded-3xl bg-wood-grain w-full">
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
                <div className="flex-1">
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

            {/* Mobile Arrows - Positioned on sides */}
            <div className="flex md:hidden justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 hover:scale-110 transition-transform duration-300 shadow-xl -ml-4"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 hover:scale-110 transition-transform duration-300 shadow-xl -mr-4"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Arrow (desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 hover:scale-110 transition-transform duration-300 shadow-xl"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

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
    </section>
  );
};

export default TestimonialSection;
