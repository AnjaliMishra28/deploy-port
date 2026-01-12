import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background gradient/overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-300 text-sm font-semibold mb-6 border border-blue-700">
          Full Stack Web Developer
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Experiences
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I help businesses and startups create stunning, high-performance websites that convert visitors into customers.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Start a Project
          </Link>
          <Link 
            href="#portfolio" 
            className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:border-gray-500"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
