import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
