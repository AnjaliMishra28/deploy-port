import React from 'react';
import { Palette, Code, Smartphone, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies like React and Next.js for speed and SEO."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Responsive Design",
    description: "Websites that look and work perfectly on all devices, from desktops to smartphones."
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-600" />,
    title: "UI/UX Design",
    description: "Clean, modern, and user-centric designs that provide an engaging user experience."
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "SEO Optimization",
    description: "Optimized code and structure to help your website rank better on search engines."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">My Services</h2>
          <p className="text-gray-600 text-lg">
            I offer a wide range of services to help you build your digital presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
