import { Phone, Menu, X } from 'lucide-react';
import { useNavigateAndScroll } from '../hooks/useNavigateAndScroll';
import { useState } from 'react';

const Header = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigateAndScroll('/', id);
    setIsMenuOpen(false);
  };

  const showRatings = import.meta.env.VITE_SHOW_RATINGS === 'true';

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-32">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpeg" alt="Logo" className="h-16 w-20 sm:h-20 sm:w-24 md:h-28 md:w-36" />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Parkbereit</h1>
                <p className="text-sm sm:text-base md:text-lg text-blue-400 font-medium">24h Valet Service</p>
              </div>
            </div>
          </a>          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/#services"
              onClick={(e) => handleScroll(e, '#services')}
              className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >Services</a>
            <a
              href="/#booking"
              onClick={(e) => handleScroll(e, '#booking')}
              className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >Buchung</a>
            <a href="/contact" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors">Kontakt</a>
            <a href="/prices" className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors">Unsere Preise</a>
            {showRatings && (
              <a
                href="#ratings"
                onClick={(e) => handleScroll(e, '#ratings')}
                className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >Bewertungen</a>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <a href="tel:+491726935941" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-lg font-semibold hidden sm:inline">+49 172 6935941</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
              <a
                href="/#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >Services</a>
              <a
                href="/#booking"
                onClick={(e) => handleScroll(e, '#booking')}
                className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >Buchung</a>
              <a 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors"
              >Kontakt</a>
              <a 
                href="/prices" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors"
              >Unsere Preise</a>
              {showRatings && (
                <a
                  href="#ratings"
                  onClick={(e) => handleScroll(e, '#ratings')}
                  className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >Bewertungen</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;