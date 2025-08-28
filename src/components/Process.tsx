import { Phone, Calendar, Car, Plane } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: "1. Anrufen & Treffpunkt",
      description: "Rufen Sie uns 30 Minuten vor Ihrer Ankunft am Flughafen an. Wir vereinbaren einen Treffpunkt direkt am Terminal 1 oder 2."
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "2. Übergabe & Parken",
      description: "Nach kurzer Übergabe Protokoll (ca. 5 Min.) übernimmt unser Fahrer Ihr Auto und parkt es sicher. Sie können direkt zum Check-In gehen."
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "3. Rückgabe",
      description: "Bei der Rückkehr rufen Sie uns nach der Landung an. Wir bringen Ihr Fahrzeug zum Terminal, wo Sie es nach Gepäckerhalt in Empfang nehmen können."
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "4. Änderungen & Stornierung",
      description: "Informieren Sie uns telefonisch bei allen Änderungen - Wir sind flexibel bei Umbuchungen. Eine Stornierung innerhalb von 24 Stunden ist kostenfrei"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Der Ablauf
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr Parkservice am Frankfurter Flughafen - schnell, sicher und zuverlässig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10 transform -translate-y-1/2"></div>
          {/* Connecting dots */}
          <div className="hidden lg:flex absolute top-1/2 left-[15%] right-[15%] -z-10 transform -translate-y-1/2 justify-between">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
            ))}
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl border border-blue-50 group relative z-10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 rounded-full transform group-hover:scale-110 transition-all duration-500 ring-4 ring-blue-50/50 shadow-md group-hover:shadow-lg group-hover:bg-blue-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
