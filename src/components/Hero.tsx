import React from 'react';
import { Plane, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: 'url("/valethero.jpg")'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-indigo-100/60 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Parkbereit</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-6">
            24h Valet Service am Frankfurter Flughafen
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ihr Auto ist in sicheren Händen. Wir holen Ihr Fahrzeug ab, parken es sicher 
            und bringen es pünktlich zu Ihrer Rückkehr wieder zurück.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Abholung & Rückgabe</h3>
              <p className="text-gray-600">Direkter Service am Terminal - wir holen ab und bringen zurück</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">70 Stellplätze</h3>
              <p className="text-gray-600">Sicherer Parkplatz nur 13km vom Flughafen entfernt</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Rund um die Uhr verfügbar - auch an Feiertagen</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="#booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Jetzt Buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;