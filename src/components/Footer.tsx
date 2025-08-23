import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="logo.jpeg" alt="Logo" className="h-16 w-16" />
              <div>
                <h3 className="text-xl font-bold">Parkbereit</h3>
                <p className="text-blue-400 font-medium">24h Valet Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Ihr vertrauensvoller Partner für Valet-Service am Frankfurter Flughafen. 
              Wir sorgen dafür, dass Ihr Auto in besten Händen ist, während Sie verreisen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+49 69 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@parkbereit.de</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Frankfurter Flughafen, Deutschland</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Valet Parking</li>
              <li>Fahrzeugreinigung</li>
              <li>Tankservice</li>
              <li>24h Service</li>
              <li>Express-Abholung</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Parkbereit. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Geöffnet 24/7 - 365 Tage im Jahr für Sie da
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;