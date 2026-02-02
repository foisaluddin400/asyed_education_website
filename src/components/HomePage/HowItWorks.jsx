import React from 'react';
import { MessageSquare, Users, Calendar, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  // JSON data for easy management
  const steps = [
    {
      id: 1,
      title: "Consultation & Assessment",
      description: "We meet with parents and conduct a comprehensive academic assessment to understand your child's strengths and areas for growth.",
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
    },
    {
      id: 2,
      title: "Placement by Grade Level & Needs",
      description: "Students are placed into small groups (max 3 per tutor) organized by grade level and academic needs for optimal peer learning.",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      id: 3,
      title: "Weekly Group Sessions",
      description: "Consistent weekly sessions at our center combining homework help, skills practice, and test prep with all materials provided.",
      icon: <Calendar className="w-6 h-6 text-green-600" />,
    },
    {
      id: 4,
      title: "Biweekly Progress Reports & Ongoing Adjustments",
      description: "Parents receive detailed biweekly reports covering academic performance, behavior, and participation. Tutors continuously adjust lesson plans based on results.",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How Group Tutoring Works
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
            A simple, proven process to help your child excel in a small-group setting
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="border-4 border-[#FFD646] rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Step Number Bubble */}
              <div className="w-8 h-8 bg-[#FFD646] text-black rounded-full flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                {step.id}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[56px] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#48A76B] hover:bg-[#3d8e5a] text-white px-10 py-3 rounded-lg font-bold text-lg transition-colors shadow-md">
          Schedule My Consultation
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;