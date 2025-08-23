import { Phone } from 'lucide-react';
import { useNavigateAndScroll } from '../hooks/useNavigateAndScroll';

const Header = () => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigateAndScroll('/', id);
  };

  const showRatings = import.meta.env.VITE_SHOW_RATINGS === 'true';

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <a href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="Logo" className="h-28 w-36" />
            <div>
              <h1 className="text-2xl font-bold text-white">Parkbereit</h1>
              <p className="text-lg text-blue-400 font-medium">24h Valet Service</p>
            </div>
          </div>
          </a>          
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
            <a href="tel:+4969123456789" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-lg font-semibold hidden sm:inline">+49 69 123 456 789</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;