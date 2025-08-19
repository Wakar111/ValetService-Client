import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Car, ChevronUp, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import { de } from 'date-fns/locale';

const Booking = () => {
  const services = [
    { name: 'Fahrzeugreinigung innen PKW', price: '€59' },
    { name: 'Fahrzeugreinigung innen SUV/BUSSE', price: '€89' },
    { name: 'Fahrzeugreinigung außen', price: '€29' },
    { name: 'Tankservice', price: '€20 zzgl. Spritpreis' },
    { name: 'E-WALLBOX', price: '€20 zzgl. Strompreis' }
  ];

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

  const handleServiceChange = (service: string) => {
    setFormData((prev: FormData) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
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
          <form className="space-y-8">
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
                    Abflugdatum und -zeit *
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    <Clock className="inline h-4 w-4 mr-1" />
                    Rückflugdatum und -zeit *
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
                    Flugnummer Abreise *
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
                    Flugnummer Ankunft *
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
                    value={formData.licensePlate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. F-XX-111"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Car className="inline h-4 w-4 mr-1" />
                    Fahrzeugmodell *
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
                      <span className="text-blue-600 font-semibold">{service.price}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            <div className="text-center">
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