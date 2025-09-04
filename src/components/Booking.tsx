import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services, parkingPrices } from '../constants/services';
import { Calendar, Clock, User, Mail, Phone, Car, ChevronUp, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import { de } from 'date-fns/locale';

const Booking = () => {


  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  interface FormData {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    departureFlight: string;
    returnFlight: string;
    departureDateTime: Date | null;
    returnDateTime: Date | null;
    carModel: string;
    licensePlate: string;
    additionalServices: string[];
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    departureFlight: '',
    returnFlight: '',
    departureDateTime: null,
    returnDateTime: null,
    carModel: '',
    licensePlate: '',
    additionalServices: []
  });

  const roundToTenMinutes = (date: Date) => {
    const minutes = date.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 10) * 10;
    date.setMinutes(roundedMinutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };

  const filterTime = (time: Date) => {
    const minutes = time.getMinutes();
    return minutes % 10 === 0;
  };

  const minTime = new Date();
  minTime.setHours(0, 0, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(23, 50, 0, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const calculateParkingDays = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.licensePlate || !formData.departureDateTime || !formData.returnDateTime) {
      return 0;
    }
    const diffTime = Math.abs(formData.returnDateTime.getTime() - formData.departureDateTime.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculatePrice = (days: number) => {
    const price = parkingPrices.find(p => p.days === days)?.price;
    if (!price && days > 30) return null; // Custom quote needed
    return price || parkingPrices[parkingPrices.length - 1].price;
  };

  const calculateTotal = () => {
    const parkingDays = calculateParkingDays();
    const parkingPrice = calculatePrice(parkingDays) || 0;
    const servicesTotal = formData.additionalServices.reduce((total, service) => 
      total + (services.find(s => s.name === service)?.price || 0), 0
    );
    const departureHour = formData.departureDateTime?.getHours() || 0;
    const returnHour = formData.returnDateTime?.getHours() || 0;
    const hasNightSurcharge = departureHour >= 22 || departureHour < 6 || returnHour >= 22 || returnHour < 6;
    const nightSurcharge = hasNightSurcharge ? 30 : 0;
    return parkingPrice + servicesTotal + nightSurcharge;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.departureDateTime || !formData.returnDateTime) {
      alert('Bitte wählen Sie Abflug- und Rückflugdatum aus.');
      return;
    }

    const parkingDays = calculateParkingDays();
    
    if (parkingDays === 0) {
      alert('Bitte wählen Sie ein gültiges Start- und Enddatum');
      return;
    }

    const departureHour = formData.departureDateTime.getHours();
    const returnHour = formData.returnDateTime.getHours();
    const hasNightSurcharge = departureHour >= 22 || departureHour < 6 || returnHour >= 22 || returnHour < 6;

    const bookingData = {
      ...formData,
      parkingDays,
      totalPrice: calculateTotal(),
      hasNightSurcharge
    };

    window.scrollTo(0, 0);
    navigate('/booking-overview', { state: bookingData });
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev: FormData) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  return (
    <section id="booking" className="py-16 pt-40 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Buchungsanfrage
          </h2>
          <p className="text-xl text-gray-600">
            Reservieren Sie Ihren Valet-Service für Ihre nächste Reise
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Persönliche Daten */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Persönliche Daten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Nachname *
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ihr Nachname"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+49 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    <Clock className="inline h-4 w-4 mr-1" />
                    Abflugdatum und -zeit am Flughafen *
                  </label>
                  <DatePicker
                    selected={formData.departureDateTime}
                    onChange={(date: Date | null) => {
                      if (date) {
                        const roundedDate = roundToTenMinutes(date);
                        setFormData(prev => ({ ...prev, departureDateTime: roundedDate }));
                      } else {
                        setFormData(prev => ({ ...prev, departureDateTime: null }));
                      }
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={10}
                    filterTime={filterTime}
                    dateFormat="dd.MM.yyyy HH:mm"
                    minDate={new Date()}
                    minTime={minTime}
                    maxTime={maxTime}
                    locale={de}
                    placeholderText="Datum und Zeit"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    <Clock className="inline h-4 w-4 mr-1" />
                    Rückflugdatum und -zeit am Flughafen *
                  </label>
                  <DatePicker
                    selected={formData.returnDateTime}
                    onChange={(date: Date | null) => {
                      if (date) {
                        const roundedDate = roundToTenMinutes(date);
                        setFormData(prev => ({ ...prev, returnDateTime: roundedDate }));
                      } else {
                        setFormData(prev => ({ ...prev, returnDateTime: null }));
                      }
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={10}
                    filterTime={filterTime}
                    dateFormat="dd.MM.yyyy HH:mm"
                    minDate={formData.departureDateTime || new Date()}
                    minTime={formData.departureDateTime && formData.returnDateTime?.toDateString() === formData.departureDateTime.toDateString() ? formData.departureDateTime : minTime}
                    maxTime={maxTime}
                    locale={de}
                    placeholderText="Datum und Zeit"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Flug Daten */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Flug Daten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Flugnummer Abreise (optional)
                  </label>
                  <input
                    type="text"
                    name="departureFlight"
                    value={formData.departureFlight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. LH441"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Flugnummer Ankunft (optional)
                  </label>
                  <input
                    type="text"
                    name="returnFlight"
                    value={formData.returnFlight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. LH442"
                  />
                </div>
              </div>
            </div>

            {/* Fahrzeug Daten */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Fahrzeug Daten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Car className="inline h-4 w-4 mr-1" />
                    Nummernschild *
                  </label>
                  <input
                    type="text"
                    name="licensePlate"
                    required
                    value={formData.licensePlate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. F-XX-111"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Car className="inline h-4 w-4 mr-1" />
                    Fahrzeugmodell (optional)
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. BMW 3er, Audi A4, Mercedes C-Klasse"
                  />
                </div>

              </div>
            </div>                    
            {/* Zusätzliche Services */}
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">Zusätzliche Services</h3>
                {isServicesExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {isServicesExpanded && (
                <div className="grid grid-cols-1 gap-3 pt-4">
                  {services.map((service) => (
                    <label key={service.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service.name)}
                          onChange={() => handleServiceChange(service.name)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{service.name}</span>
                      </div>
                      <span className="text-blue-600 font-semibold">{service.price} €</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Preisberechnung */}
            {formData.departureDateTime && formData.returnDateTime && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Preisübersicht</h3>
                {(() => {
                  const days = Math.ceil(
                    (formData.returnDateTime.getTime() - formData.departureDateTime.getTime()) / (1000 * 60 * 60 * 24)
                  );
                  
                  // Find parking price for the number of days
                  const parkingPrice = days <= 30
                    ? parkingPrices.find(p => p.days === days)?.price
                    : null;

                  // Check if either departure or return time is between 22:00 and 06:00
                  const departureHour = formData.departureDateTime.getHours();
                  const returnHour = formData.returnDateTime.getHours();
                  const hasNightSurcharge = departureHour >= 22 || departureHour < 6 || returnHour >= 22 || returnHour < 6;
                  const nightSurcharge = hasNightSurcharge ? 30 : 0;

                  // Calculate additional services total
                  const additionalServicesTotal = formData.additionalServices.reduce((total, serviceName) => {
                    const service = services.find(s => s.name === serviceName);
                    return total + (service?.price || 0);
                  }, 0);

                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Parkdauer:</span>
                        <span className="font-medium">{days} {days === 1 ? 'Tag' : 'Tage'}</span>
                      </div>
                      
                      {parkingPrice ? (
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Parkgebühr:</span>
                          <span className="font-medium">{parkingPrice} €</span>
                        </div>
                      ) : (
                        <div className="text-gray-600 italic">
                          * Für Buchungen über 30 Tage kontaktieren Sie uns bitte für ein individuelles Angebot
                        </div>
                      )}

                      {hasNightSurcharge && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Nachtzuschlag (An-/Abreise 22:00 - 06:00 Uhr):</span>
                          <span className="font-medium">{nightSurcharge} €</span>
                        </div>
                      )}

                      {formData.additionalServices.length > 0 && (
                        <>
                          <div className="pt-2">
                            <h4 className="font-medium text-gray-900 mb-2">Zusätzliche Leistungen:</h4>
                            {formData.additionalServices.map(serviceName => {
                              const service = services.find(s => s.name === serviceName);
                              return (
                                <div key={serviceName} className="flex justify-between items-center py-1">
                                  <span className="text-gray-600">{serviceName}</span>
                                  <span className="font-medium">{service?.price} €</span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex justify-between items-center py-2 border-t border-gray-200">
                            <span className="text-gray-600">Zusatzleistungen Gesamt:</span>
                            <span className="font-medium">{additionalServicesTotal} €</span>
                          </div>
                        </>
                      )}

                      {parkingPrice && (
                        <div className="space-y-1">
                          <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 text-lg font-semibold">
                            <span>Gesamtpreis:</span>
                            <span>{parkingPrice + additionalServicesTotal + nightSurcharge} €</span>
                          </div>
                          <p className="text-sm text-gray-500 text-right">* inkl. 19% MwSt.</p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Buchungsanfrage senden
              </button>
              <p className="text-sm text-gray-500 mt-3">
                * Pflichtfelder - Wir melden uns binnen 24 Stunden bei Ihnen
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;