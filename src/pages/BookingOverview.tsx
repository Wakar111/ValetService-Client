import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parkingPrices } from '../constants/services';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useNavigateAndScroll } from '../hooks/useNavigateAndScroll';
import { services } from '../constants/services';
import { PayPalCheckout } from '../components/PayPalCheckout';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface BookingData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  departureFlight: string;
  returnFlight: string;
  departureDateTime: Date;
  returnDateTime: Date;
  carModel: string;
  licensePlate: string;
  additionalServices: string[];
  parkingDays: number;
  totalPrice: number;
  hasNightSurcharge: boolean;
}

const calculateSubtotal = (basePrice: number): number => {
  return basePrice;
};

const calculateDiscountedPrice = (subtotal: number, discountRate: number): number => {
  return subtotal * (1 - discountRate);
};

function BookingOverview() {
  const navigate = useNavigateAndScroll();
  const location = useLocation();
  const bookingData = location.state as BookingData;
  const [selectedPayment, setSelectedPayment] = useState<'cash' | 'paypal' | null>(null);
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBookingConfirmation = async () => {
  setIsLoading(true);
  setError('');
  try {
    const response = await fetch(`${API_URL}/api/booking/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...bookingData,
        paymentMethod: selectedPayment
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send booking confirmation');
    }

    setSuccess(true);
    setIsProcessing(false);
    setTimeout(() => {
      navigate('/');
      window.scrollTo(0, 0);
    }, 5000);
  } catch (error) {
    //console.error('Error:', error);
    setError('Es gab ein Problem beim Senden der Buchungsbestätigung. Bitte versuchen Sie es später erneut.');
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    if (!bookingData) {
      navigate('/booking');
    }
  }, [bookingData, navigate]);

  const formatDateTime = (date: Date) => {
    return format(new Date(date), 'dd.MM.yyyy HH:mm', { locale: de });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Buchungsübersicht</h2>

          {/* Personal Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Persönliche Daten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{bookingData.name} {bookingData.lastname}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-Mail</p>
                <p className="font-medium">{bookingData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="font-medium">{bookingData.phone}</p>
              </div>
            </div>
          </div>

          {/* Car Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Fahrzeugdaten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Fahrzeugmodell</p>
                <p className="font-medium">{bookingData.carModel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Kennzeichen</p>
                <p className="font-medium">{bookingData.licensePlate}</p>
              </div>
            </div>
          </div>

          {/* Parking Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Parkdetails</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Anreise</p>
                <p className="font-medium">{formatDateTime(bookingData.departureDateTime)}</p>
                {bookingData.departureFlight && (
                  <p className="text-sm text-gray-500 mt-1">Flug: {bookingData.departureFlight}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Abreise</p>
                <p className="font-medium">{formatDateTime(bookingData.returnDateTime)}</p>
                {bookingData.returnFlight && (
                  <p className="text-sm text-gray-500 mt-1">Flug: {bookingData.returnFlight}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Parkdauer</p>
                <p className="font-medium">{bookingData.parkingDays} Tage</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Parkpreis</p>
                <p className="font-medium">{parkingPrices.find(p => p.days === bookingData.parkingDays)?.price || parkingPrices[parkingPrices.length - 1].price} €</p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          {bookingData.additionalServices.length > 0 && (
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900">Zusätzliche Leistungen</h3>
              <ul className="list-disc list-inside space-y-2">
                {bookingData.additionalServices.map((service, index) => {
                  const servicePrice = services.find(s => s.name === service)?.price || 0;
                  return (
                    <li key={index} className="text-gray-700 flex justify-between items-center">
                      <span>{service}</span>
                      <span className="font-medium">{servicePrice} €</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Payment Method */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Zahlungsmethode</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedPayment('cash')}
                className={`p-6 border rounded-xl flex items-center space-x-4 transition-all ${selectedPayment === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
              >
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Bar</h4>
                  <p className="text-sm text-gray-500">Barzahlung bei Fahrzeugübergabe</p>
                </div>
                {selectedPayment === 'cash' && (
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setSelectedPayment('paypal')}
                className={`p-6 border rounded-xl flex items-center space-x-4 transition-all ${selectedPayment === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
              >
                <svg className="w-8 h-8 text-[#00457C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42c-1.084 5.57-4.842 7.383-9.621 7.383h-2.37c-.526 0-.97.382-1.052.9l-1.118 7.105c-.083.519.267.949.79.949h4.615c.524 0 .968-.382 1.05-.9l.28-1.778c.083-.518.527-.9 1.051-.9h1.49c4.28 0 7.647-1.747 8.63-7.797.36-2.22.193-4.073-.745-5.337-.51-.69-1.214-1.214-2.003-1.625z"/>
                </svg>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">PayPal</h4>
                  <p className="text-sm text-gray-500">Bezahlung über PayPal</p>
                </div>
                {selectedPayment === 'paypal' && (
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Declaration of Truth */}
          <div className="mt-8">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="declaration"
                required
                checked={declarationChecked}
                onChange={(e) => setDeclarationChecked(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="declaration" className="text-sm text-gray-600">
              <span className="text-red-500">*</span> Ich stimme den Allgemeinen Geschäftsbedingungen zu und erkläre, dass alle in diesem Formular enthaltene Information vollständig und wahrheitsgemäß ausgefüllt wurde.
              </label>
            </div>
          </div>

          {/* Total Price */}
          <div className="border-t border-gray-200 pt-6 mt-8 space-y-3">
            {bookingData.hasNightSurcharge && (
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-900">Nachtzuschlag (22:00 - 06:00 Uhr)</span>
                <span className="text-lg text-gray-600">30.00 €</span>
              </div>
            )}
            <div className="flex justify-between items-center pt-3 border-t">
              <span className="text-lg font-medium text-gray-900">Zwischensumme</span>
              <span className="text-lg font-medium text-gray-900">{calculateSubtotal(bookingData.totalPrice).toFixed(2)} €</span>
            </div>
            {Number(import.meta.env.VITE_ONLINE_BOOKING_DISCOUNT) > 0 && (
              <>
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-lg">Online-Buchungsrabatt ({(Number(import.meta.env.VITE_ONLINE_BOOKING_DISCOUNT) * 100)}%)</span>
                  <span className="text-lg">-{(calculateSubtotal(bookingData.totalPrice) * Number(import.meta.env.VITE_ONLINE_BOOKING_DISCOUNT)).toFixed(2)} €</span>
                </div>
                <div className="space-y-1">

                
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-xl font-semibold text-gray-900">Gesamtbetrag</span>
                  <span className="text-2xl font-bold">{calculateDiscountedPrice(calculateSubtotal(bookingData.totalPrice), Number(import.meta.env.VITE_ONLINE_BOOKING_DISCOUNT)).toFixed(2)} €</span>
                </div>
                <p className="text-sm text-gray-500 text-right">* inkl. 19% MwSt.</p>
                </div>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate('/', '#booking')}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Zurück zur Buchung
            </button>
            <div className="flex justify-end">
              {selectedPayment === 'cash' ? (
                <button
                  onClick={handleBookingConfirmation}
                  disabled={isLoading || success || !declarationChecked}
                  className={`px-6 py-3 rounded-lg text-white transition-colors flex items-center space-x-2 ${!isLoading && !success && declarationChecked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <span>Buchung bestätigen</span>
                  )}
                </button>
              ) : selectedPayment === 'paypal' ? (
                <div>
                  {!success && !isProcessing && (
                    <PayPalCheckout
                      amount={calculateDiscountedPrice(calculateSubtotal(bookingData.totalPrice), Number(import.meta.env.VITE_ONLINE_BOOKING_DISCOUNT))}
                      onSuccess={async () => {
                        setIsProcessing(true);
                        try {
                          await handleBookingConfirmation();
                        } catch (error) {
                          //console.error('Error sending confirmation:', error);
                          setError('Die Zahlung war erfolgreich, aber es gab ein Problem beim Senden der Bestätigung.');
                        }
                      }}
                      onError={(error) => {
                        //console.error('PayPal error:', error);
                        setError('Es gab ein Problem mit PayPal. Bitte versuchen Sie es später erneut.');
                        setIsProcessing(false);
                      }}
                      onCancel={() => {
                        setError('Die PayPal-Zahlung wurde abgebrochen.');
                        setIsProcessing(false);
                      }}
                      className={declarationChecked ? '' : 'opacity-50 pointer-events-none'}
                    />
                  )}
                </div>
              ) : null}
            </div>
          </div>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}
          {success && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600">
              <p className="font-medium">Vielen Dank für Ihre Buchung, {bookingData.name} {bookingData.lastname}!</p>
              <p>Eine Bestätigungs-E-Mail wurde an {bookingData.email} gesendet.</p>
              <p className="text-sm mt-2">Bitte überprüfen Sie auch Ihren Spam-Ordner, falls Sie die E-Mail nicht finden können.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

export default BookingOverview;
