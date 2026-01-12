import React from 'react';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Discovery",
    description: "We discuss your project requirements, goals, and target audience."
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "Design",
    description: "I create wireframes and mockups to visualize the look and feel."
  },
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "Development",
    description: "I write clean, efficient code to bring the design to life."
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Launch",
    description: "We test everything and launch your new website to the world."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">My Process</h2>
          <p className="text-gray-600 text-lg">
            A simple, transparent process to ensure your project's success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-lg border-4 border-white z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
