import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600">
            Wir sind rund um die Uhr für Sie erreichbar
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-full">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl h-full">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktdaten</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <a href="tel:+4969123456789" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                      +49 172 6935941
                    </a>
                    <p className="text-gray-600 text-sm">24h Hotline verfügbar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-Mail</h4>
                    <a href="mailto:info@parkbereit.de" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                      info@parkbereit.de
                    </a>
                    <p className="text-gray-600 text-sm">Antwort binnen 1 Stunden</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Standort</h4>
                    <p className="text-gray-800">Düsseldorfer Str. 12 - 65760 Eschborn</p>
                    <p className="text-gray-600 text-sm">Parkplatz 10 Minuten vom Terminal entfernt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Öffnungszeiten</h4>
                    <p className="text-gray-800">24/7 Service</p>
                    <p className="text-gray-600 text-sm">365 Tage im Jahr verfügbar</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <div className="bg-white p-3 md:p-6 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.01] h-full group">
            <div className="aspect-[4/3] w-full h-full relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-300/50 via-blue-100/20 to-blue-400/5 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2"></div>
              <img
                src="/contact.jpg"
                alt="Kontakt"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <p className="text-sm text-center font-medium drop-shadow-lg text-blue-500">Ihr vertrauensvoller Partner für Valet Service am Frankfurter Flughafen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;