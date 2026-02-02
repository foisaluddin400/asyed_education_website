import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  FileText 
} from 'lucide-react';

const ProgressReporting = () => {
  // JSON data for the cards
  const reportingFeatures = [
    {
      title: "Biweekly Reports",
      description: "Receive detailed progress updates every two weeks, keeping you fully informed of your child's academic journey.",
      icon: <Calendar className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Assignments Completed",
      description: "Track all homework and practice assignments completed during each session with completion notes.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Performance Observations",
      description: "Detailed notes on your child's understanding, skill development, and areas of improvement.",
      icon: <TrendingUp className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Strengths & Weaknesses",
      description: "Clear identification of academic strengths to celebrate and weaknesses to address.",
      icon: <Target className="w-6 h-6 text-green-700" />,
    },
    {
      title: "Behavior & Attitude",
      description: "Insights into participation, focus, collaboration with peers, and overall learning attitude.",
      icon: <MessageSquare className="w-6 h-6 text-green-700" />,
    },
    {
      title: "General Summary",
      description: "Comprehensive overview of progress and recommended next steps for continued growth.",
      icon: <FileText className="w-6 h-6 text-green-700" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Consistent, Detailed Progress Reporting
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Parents always know exactly how their child is doing and what we're working on next. 
            Our comprehensive biweekly reports keep you in the loop every step of the way.
          </p>
        </div>

        {/* Reporting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reportingFeatures.map((item, index) => (
            <div 
              key={index}
              className="border-4 border-[#FFD646] rounded-xl p-8 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-[#FFD646] rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-black mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Summary Banner */}
        <div className="max-w-3xl mx-auto bg-[#E9F5EE] border border-green-100 rounded-lg p-8">
          <h4 className="flex items-center justify-center gap-2 text-lg font-bold text-gray-900 mb-3">
            📊 Clear Communication = Better Outcomes
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            When parents are informed and involved, students succeed. Our detailed reporting ensures 
            you're always part of your child's academic progress.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProgressReporting;