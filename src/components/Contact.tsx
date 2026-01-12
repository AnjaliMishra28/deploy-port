import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
           {/* Contact Info */}
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Email Me</h3>
                <p className="text-gray-600">freelancingwork059@gmail.com</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Call Me</h3>
                <p className="text-gray-600">8839097795</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
                <p className="text-gray-600">Indore, India</p>
              </div>
           </div>
           
           {/* Contact Form */}
           <div className="lg:col-span-2">
              <form className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Project Discussion" />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
                  Send Message
                </button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
