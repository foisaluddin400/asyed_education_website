import React from 'react';
import { MapPin, Check, ExternalLink } from 'lucide-react';

const PricingSection = () => {
  // JSON data for pricing cards
  const pricingPlans = [
    {
      hours: "4 hours/month",
      price: "45",
      features: [
        "Small group (max 3 students)",
        "Grade-level placement",
        "All materials included",
        "Biweekly progress reports",
      ],
      isPopular: false,
    },
    {
      hours: "5–8 hours/month",
      price: "42.50",
      features: [
        "Everything in 4 hours",
        "Priority scheduling",
        "Extended homework support",
        "More detailed progress tracking",
      ],
      isPopular: true, // This triggers the green border and badge
    },
    {
      hours: "9–16 hours/month",
      price: "40",
      features: [
        "Everything in 5–8 hours",
        "Enhanced test prep focus",
        "Supplemental practice materials",
        "Monthly parent check-ins",
      ],
      isPopular: false,
    },
    {
      hours: "17+ hours/month",
      price: "37.50",
      features: [
        "Everything in 9–16 hours",
        "Highest priority placement",
        "Comprehensive academic support",
        "Weekly parent communication",
      ],
      isPopular: false,
    },
  ];

  const additionalInfo = [
    "One-time onboarding and materials fee: $50",
    "All hours are paid upfront at the beginning of each month",
    "No rollover on unused hours",
    "Groups are limited to 3 students per tutor to maintain quality",
    "All supplemental materials and practice worksheets included",
  ];

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Banner */}
        <div className="bg-[#FFD646] rounded-2xl p-6 md:p-8 text-center mb-16 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
            Opening January 15th at Our Villa Park Center
          </h3>
          <div className="flex items-center justify-center gap-2 text-gray-800 mb-4 text-sm md:text-base">
            <MapPin size={18} />
            <span>113 Roosevelt Rd, Villa Park, IL 60181</span>
          </div>
          <button className="bg-white hover:bg-gray-50 text-black px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 mx-auto transition-colors border border-gray-200">
            <ExternalLink size={14} /> Get Directions
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Simple, Transparent Pricing for Group Tutoring
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose a monthly plan that matches your child's goals and your family's schedule. 
            Groups are limited to 3 students per tutor to maintain quality.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl transition-all ${
                plan.isPopular 
                ? 'border-2 border-[#48A76B] shadow-xl scale-105 z-10 bg-white' 
                : 'border border-gray-100 hover:border-gray-300'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD646] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">{plan.hours}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#48A76B]">${plan.price}</span>
                  <span className="text-gray-400 text-sm">/hour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600 leading-tight">
                    <Check size={16} className="text-[#48A76B] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
                plan.isPopular 
                ? 'bg-[#48A76B] text-white hover:bg-[#3d8e5a]' 
                : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 mb-12">
          <h5 className="font-bold text-gray-900 mb-4">Additional Information:</h5>
          <ul className="space-y-2">
            {additionalInfo.map((info, i) => (
              <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span> {info}
              </li>
            ))}
          </ul>
        </div>

        {/* Final CTA */}
        <div className="flex justify-center">
          <button className="bg-[#48A76B] hover:bg-[#3d8e5a] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95">
            Schedule My Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;