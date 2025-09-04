import { useNavigateAndScroll } from '../hooks/useNavigateAndScroll';

const Prices = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const parkingPrices = [
    { days: 1, price: 45 },
    { days: 2, price: 48 },
    { days: 3, price: 50 },
    { days: 4, price: 55 },
    { days: 5, price: 60 },
    { days: 6, price: 66 },
    { days: 7, price: 75 },
    { days: 8, price: 78 },
    { days: 9, price: 82 },
    { days: 10, price: 84 },
    { days: 11, price: 87 },
    { days: 12, price: 90 },
    { days: 13, price: 95 },
    { days: 14, price: 105},
    { days: 15, price: 110 },
    { days: 16, price: 113 },
    { days: 17, price: 118 },
    { days: 18, price: 120 },
    { days: 19, price: 125 },
    { days: 20, price: 128 },
    { days: 21, price: 130 },
    { days: 22, price: 135 },
    { days: 23, price: 140 },
    { days: 24, price: 143 },
    { days: 25, price: 146 },
    { days: 26, price: 150 },
    { days: 27, price: 155 },
    { days: 28, price: 160 },
    { days: 29, price: 165 },
    { days: 30, price: 170 },
  ];

  const additionalServices = [
    { name: 'Tankservice', price: 20 },
    { name: 'E-WALLBOX', price: 40 },
  ];

  const carCareServices = [
    { name: 'Auto Außenwäsche', price: 25 },
    { name: 'Auto Innenwäsche', price: 45 },
    { name: 'Auto Innen- und Außenwäsche', price: 60 },
    { name: 'Auto Innenwäsche Bus/ SUV', price: 70 },
  ];

  return (
    <section id="prices" className="py-16 bg-gray-50 mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Preise</h2>
          <p className="text-lg text-gray-600">Transparente Preisgestaltung für Ihren Parkservice</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Parking Prices Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden col-span-full lg:col-span-2">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Parkgebühren</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Anzahl Tage
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parkbereit Valet
                      </th>
                    </tr>
                  </thead>
                  </table>

                  <div className="max-h-[430px] overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="bg-white divide-y divide-gray-200">
                        {parkingPrices.map((item) => (
                          <tr key={item.days} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.days} {item.days === 1 ? 'Tag' : 'Tage'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                              {item.price} €
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>

          {/* Additional Services Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service</h3>
              <div className="space-y-4">
                {additionalServices.map((service) => (
                  <div key={service.name} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="text-gray-900 font-medium">{service.price} €</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">Autopflege</h3>
              <div className="space-y-4">
                {carCareServices.map((service) => (
                  <div key={service.name} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="text-gray-900 font-medium">{service.price} €</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">Nachtzuschlag</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">22:00 - 06:00 Uhr</span>
                  <span className="text-gray-900 font-medium">30 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              *  Für Buchungen über 30 Tage kontaktieren Sie uns bitte für ein individuelles Angebot
            </p>
            <p className="text-gray-600 text-sm">
              * Alle Preise inkl. MwSt. Preisänderungen vorbehalten.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigateAndScroll('/', '#services')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zu unseren Services
            </button>
            <button
              onClick={() => navigateAndScroll('/', '#booking')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jetzt buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
