import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Anjali<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Anjali. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
