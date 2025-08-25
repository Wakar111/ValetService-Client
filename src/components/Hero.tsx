import { Plane, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 lg:pt-40 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat opacity-90 bg-[url('/valethero.jpg')] bg-center sm:bg-[position:center_40%] lg:bg-[position:center_50%]"
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-blue-600">Parkbereit</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ihr Auto ist in sicheren Händen. Wir holen Ihr Fahrzeug ab, parken es sicher 
            und bringen es pünktlich zu Ihrer Rückkehr wieder zurück.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105">
              <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Abholung & Rückgabe</h3>
              <p className="text-gray-600 leading-relaxed">Direkter Service am Terminal - wir holen ihr Fahrzeug ab und bringen zurück</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">70 Stellplätze</h3>
              <p className="text-gray-600 leading-relaxed">Sicherer Parkplatz nur 10 Minuten vom Flughafen entfernt - mit Video überwacht und eingezäunt</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Service</h3>
              <p className="text-gray-600 leading-relaxed">Rund um die Uhr verfügbar - auch an Feiertagen</p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="#booking" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Jetzt Buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;