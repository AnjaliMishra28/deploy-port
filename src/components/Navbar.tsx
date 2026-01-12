import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 tracking-tight">
          Anjali<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <Link 
          href="#contact" 
          className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
