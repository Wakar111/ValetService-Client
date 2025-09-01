import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-7">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.jpeg" alt="Logo" className="h-16 w-16" />
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
                <a href="tel:+491726935941" className="text-gray-300">+49 172 6935941</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@parkbereit.de" className="text-gray-300">info@parkbereit.de</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <a href='https://www.google.com/maps/place/Düsseldorfer+Str.+12,+65760+Eschborn' target="_blank" rel="noopener noreferrer" className="text-gray-300">Düsseldorfer Str. 12 - 65760 Eschborn</a>
              </div>
            </div>
          </div>
        {/** 
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
          */}  
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Über uns</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
              <li><a href="/imprint" className="hover:text-blue-400 transition-colors">Impressum</a></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.openCookieSettings && window.openCookieSettings(); }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Parkbereit. Alle Rechte vorbehalten.
            </p>
            <span className="text-gray-400 text-sm">
                Design by <a href="https://innovativ-tech.de/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200 text-blue-400">innovativ-tech</a>
              </span>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
              <p className="text-gray-400 text-sm">
                Geöffnet 24/7 - 365 Tage im Jahr für Sie da
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;