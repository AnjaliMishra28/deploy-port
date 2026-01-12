import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Quality Work",
    description: "I deliver high-quality, clean code that is easy to maintain and scale."
  },
  {
    title: "On-Time Delivery",
    description: "I value your time and ensure that projects are delivered within the agreed timeline."
  },
  {
    title: "Communication",
    description: "I keep you updated throughout the development process to ensure your vision is met."
  },
  {
    title: "Support",
    description: "I provide ongoing support and maintenance to keep your website running smoothly."
  }
];

const WhyChooseMe = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Me?</h2>
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               I don't just write code; I build solutions that solve real business problems. 
               Here is why clients love working with me.
             </p>
             
             <div className="grid sm:grid-cols-2 gap-6">
               {reasons.map((reason, index) => (
                 <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                   <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                   <h3 className="text-xl font-bold mb-2 text-gray-900">{reason.title}</h3>
                   <p className="text-gray-600 text-sm">{reason.description}</p>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <div className="relative h-[500px] bg-blue-600 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                {/* Placeholder image */}
                <div className="text-white text-center p-8">
                  <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
                  <p className="text-blue-100">Together we can bring your ideas to life.</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
