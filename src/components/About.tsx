import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                 {/* Placeholder for image */}
                 <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
  <img
    src="/freepik__35mm-film-photography-woman-software-developer-in-__94023.png"
    alt="Anjali Mishra"
    className="w-full h-full object-cover"
  />
</div>

              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
           <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>

<p className="text-lg text-gray-600 mb-6 leading-relaxed">
  Hi, I’m Anjali Mishra — a passionate Full-Stack Web Developer with over 
  <strong> 1+ year of hands-on experience</strong> in building real-world web applications.
  I enjoy turning ideas into scalable, user-friendly digital solutions.
</p>

<p className="text-lg text-gray-600 mb-8 leading-relaxed">
  I have worked extensively with <strong>Laravel, React, Node.js, MongoDB, and MySQL</strong>, 
  and have experience developing admin panels, role-based systems, dashboards, 
  REST APIs, and dynamic websites. I have successfully completed 
  <strong> 5+ live projects</strong>
</p>

<div className="grid grid-cols-2 gap-6">
  <div>
    <h4 className="font-bold text-3xl text-blue-600 mb-2">1+</h4>
    <p className="text-gray-600">Years Experience</p>
  </div>
  <div>
    <h4 className="font-bold text-3xl text-blue-600 mb-2">5+</h4>
    <p className="text-gray-600">Projects Completed</p>
  </div>
</div>

<div className="mt-8">
  <a 
    href="/AnjaliSoftwareDeveloper.pdf" 
    download="Anjali_Mishra_Resume.pdf"
    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
  >
    <Download className="w-5 h-5" />
    Download Resume
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
