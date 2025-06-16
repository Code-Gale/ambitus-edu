
import { useState } from 'react';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    studyLevel: '',
    startDate: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.program) newErrors.program = 'Program is required';
    if (!formData.studyLevel) newErrors.studyLevel = 'Study level is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Registration successful! We will contact you shortly.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      program: '',
      studyLevel: '',
      startDate: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800 to-forest-950"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Start Your <span className="bg-gold-gradient bg-clip-text text-transparent">Application</span>
          </h2>
          <p className="section-subtitle">
            Take the first step towards your premium study abroad experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <div className="glass-card p-8 rounded-3xl bg-wood-grain animate-slide-in-left">
            <h3 className="text-2xl font-bricolage font-semibold text-white mb-6">
              Registration Form
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-forest-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                      errors.firstName ? 'border-red-400' : 'border-gold-400/30'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-forest-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                      errors.lastName ? 'border-red-400' : 'border-gold-400/30'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-forest-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                    errors.email ? 'border-red-400' : 'border-gold-400/30'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-forest-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                    errors.phone ? 'border-red-400' : 'border-gold-400/30'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-forest-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                      errors.country ? 'border-red-400' : 'border-gold-400/30'
                    }`}
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Study Level *</label>
                  <select
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-forest-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                      errors.studyLevel ? 'border-red-400' : 'border-gold-400/30'
                    }`}
                  >
                    <option value="">Select study level</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="phd">PhD</option>
                  </select>
                  {errors.studyLevel && <p className="text-red-400 text-sm mt-1">{errors.studyLevel}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Program of Interest *</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-forest-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 ${
                    errors.program ? 'border-red-400' : 'border-gold-400/30'
                  }`}
                >
                  <option value="">Select program</option>
                  <option value="business">Business & Management</option>
                  <option value="engineering">Engineering & Technology</option>
                  <option value="medicine">Medicine & Health Sciences</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="sciences">Natural Sciences</option>
                  <option value="law">Law</option>
                  <option value="other">Other</option>
                </select>
                {errors.program && <p className="text-red-400 text-sm mt-1">{errors.program}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Preferred Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-forest-800 border border-gold-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full gold-button py-4 text-lg font-semibold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>

          {/* Registration Benefits */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl bg-wood-grain mb-8">
              <h3 className="text-2xl font-bricolage font-semibold text-white mb-6">
                What Happens Next?
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Consultation Scheduling",
                    description: "Our expert counselor will contact you within 24 hours to schedule your free consultation."
                  },
                  {
                    step: "2",
                    title: "Profile Assessment",
                    description: "We'll evaluate your academic background and career goals to create a personalized plan."
                  },
                  {
                    step: "3",
                    title: "University Matching",
                    description: "Receive a curated list of universities and programs that match your profile perfectly."
                  },
                  {
                    step: "4",
                    title: "Application Support",
                    description: "Get comprehensive assistance throughout the entire application and admission process."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex space-x-4">
                    <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-forest-950 font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-wood-grain text-center">
              <div className="text-gold-400 text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Free Consultation</h4>
              <p className="text-gray-300 text-sm">
                Get expert guidance on your study abroad journey with our complimentary consultation session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
