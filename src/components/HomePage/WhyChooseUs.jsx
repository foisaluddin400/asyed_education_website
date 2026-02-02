import React from 'react';
import { Users, Target, FileText, BookOpen, TrendingUp, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  // JSON data for the feature cards
  const features = [
    {
      title: "Small Group Excellence",
      description: "Maximum 3 students per tutor ensures personalized attention while building collaborative learning skills.",
      icon: <Users className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Grade-Level Focus",
      description: "Students learn with peers at the same academic stage, making lessons more relevant and effective.",
      icon: <Target className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Consistent Progress Reporting",
      description: "Biweekly reports keep parents informed with detailed academic and behavioral updates.",
      icon: <FileText className="w-6 h-6 text-green-700" />,
    },
    {
      title: "All Materials Included",
      description: "We provide all supplemental practice worksheets, skill-building exercises, and targeted review materials.",
      icon: <BookOpen className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Improved Academic Performance",
      description: "Structured homework support, skills development, and test prep drive measurable grade improvements.",
      icon: <TrendingUp className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Comprehensive Support",
      description: "From homework help to test preparation, we cover everything your child needs to succeed.",
      icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
    },
  ];

  return (
    <section className="bg-[#48A76B] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Why Choose Group Tutoring at Seeds of Learning?
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Experience the perfect balance of personalized attention and collaborative learning
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Icon Bubble */}
              <div className="w-12 h-12 bg-[#FFD646] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-white font-bold text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Our structured approach combines the benefits of peer learning with 
          focused instruction to help every student thrive.
        </p>

        {/* Yellow CTA Button */}
        <button className="bg-[#FFD646] hover:bg-[#ffdf70] text-black px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95">
          Schedule My Consultation
        </button>

      </div>
    </section>
  );
};

export default WhyChooseUs;