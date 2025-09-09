import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface ThankYouState {
  name: string;
  lastname: string;
  email: string;
  bookingNumber: string;
  totalPrice: number;
}

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = location.state as ThankYouState;

  // Get data either from state (internal navigation) or URL params (external portal)
  const bookingNumber = state?.bookingNumber || searchParams.get('booking') || '';
  const totalPrice = state?.totalPrice || Number(searchParams.get('price')) || 0;

  useEffect(() => {
    // Only redirect if both internal state and URL params are missing
    if (!state && !searchParams.get('booking')) {
      navigate('/');
    }
  }, [state, searchParams, navigate]);

  // Show minimal version for external portal redirects
  if (!state && bookingNumber) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vielen Dank für Ihre Buchung!</h2>
            </div>
            <div className="mt-8">
              <button
                onClick={() => {navigate('/'); window.scrollTo(0, 0);}}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Zur Startseite
              </button>
            </div>
          </div>
        </div>
        {/* Tracking Pixel - only for portal redirects */}
        {!state && bookingNumber && (
          <img 
            src={`https://www.parkplatzvergleich.de/danke.php?pp=3073&booking=${bookingNumber}&price=${totalPrice.toFixed(2)}`}
            height="1"
            width="1"
            alt=""
            style={{ position: 'absolute', visibility: 'hidden' }}
          />
        )}
      </div>
    );
  }

  if (!state) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vielen Dank für Ihre Buchung!</h2>
            <p className="text-lg text-gray-600">
              {state.name} {state.lastname}, Ihre Buchung wurde erfolgreich abgeschlossen.
            </p>
          </div>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600">
            <p className="font-medium">Eine Bestätigungs-E-Mail wurde an {state.email} gesendet.</p>
            <p className="text-sm mt-2">Bitte überprüfen Sie auch Ihren Spam-Ordner, falls Sie die E-Mail nicht finden können.</p>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {navigate('/'); window.scrollTo(0, 0);}}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
