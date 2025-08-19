import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="logo.jpeg" alt="Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-xl font-bold text-white">Parkbereit</h1>
              <p className="text-xs text-blue-400 font-medium">24h Valet Service</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#booking" className="text-gray-300 hover:text-blue-400 transition-colors">Buchung</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Kontakt</a>
            <a href="#ratings" className="text-gray-300 hover:text-blue-400 transition-colors">Bewertungen</a>
          </div>
          
          <div className="flex items-center space-x-3">
            <a href="tel:+4969123456789" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline text-sm font-medium">+49 69 123 456 789</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;