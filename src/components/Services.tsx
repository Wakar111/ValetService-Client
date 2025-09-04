import React, { useState } from 'react';
import { Car, Droplets, Fuel, Users, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

type ServiceDetail = {
  title: string;
  price?: string;
  items?: string[];
};

type Service = {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  details?: ServiceDetail[];
};

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Car,
      title: "Valet Parking Service",
      description: "Professionelle Abholung und Rückgabe Ihres Fahrzeugs direkt am Terminal",
      features: ["Abhol- und Lieferservice von ihrem Fahrzeug", "Sichere Aufbewahrung auf unserem Parkplatz"],
      details: [{
        title: "Standort und Transport",
        items: [
          "10 Minuten Fahrstrecke für Hin- und Rückfahrt zum Parkplatz",
          "Professioneller Transport durch geschulte Fahrer",
          "Vollständig versicherter Transport"
        ]
      }]
    },
    {
      icon: Droplets,
      title: "Fahrzeugreinigung",
      description: "Komplette Innen- und Außenreinigung während Ihrer Abwesenheit",
      features: ["Außenwäsche und -pflege", "Innenraumreinigung und -pflege"],
      details: [
        {
          title: "Außenreinigung PKW/SUV/BUSSE",
          price: "€25",
          items: [
            "Intensivschaum Hochdruckvorwäsche",
            "Felgenwäsche mit Intensivschaum",
            "Brillant-Konservierung",
            "Trocknen"
          ]
        },
        {
          title: "Innenreinigung PKW",
          price: "€45",
          items: [
            "Aussaugen inkl. Kofferraum",
            "Reinigung der Türinnen, Seiten und Zwischenräume",
            "Armaturenreinigung und Pflege (inkl. Cockpit)",
            "Scheibenreinigung"
          ]
        },
        {
          title: "Innen- und Außenreinigung PKW",
          price: "€60",
          items: [
            "Komplette Reinigungspaket für innen und außen für ihren PKW",
            "Reinigung der Türinnen, Seiten und Zwischenräume",
            "Armaturenreinigung und Pflege (inkl. Cockpit)",
            "Scheibenreinigung (innen und außen)",
            "Trocknen"
          ]
        },
        {
          title: "Innenreinigung SUV/BUSSE",
          price: "€70",
          items: [
            "Aussaugen inkl. Kofferraum",
            "Reinigung der Türinnenseiten und Zwischenräume",
            "Armaturenreinigung und Pflege (inkl. Cockpit)",
            "Scheibenreinigung (innen und außen)"
          ]
        }
      ]
    },
    {
      icon: Fuel,
      title: "Tankservice",
      description: "Wir tanken Ihr Fahrzeug auf, damit Sie entspannt weiterfahren können",
      features: ["Vollbetankung auf Wunsch", "Alle gängigen Kraftstoffarten"],
      details: [
        {
          title: "E-WALLBOX",
          price: "€40 zzgl. Strompreis",
          items: [
            "Professionelles Aufladen Ihres E-Autos",
            "Aufgeladenes Fahrzeug bei Ihrer Rückkehr",
            "Überwachter Ladevorgang"
          ]
        },
        {
          title: "TANKWART",
          price: "€20 zzgl. Spritpreis",
          items: [
            "Vollbetankung Ihres Fahrzeugs",
            "Alle Kraftstoffarten verfügbar",
            "Tankbeleg inklusive"
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "Professionelle Fahrer",
      description: "Erfahrene und vertrauensvolle Fahrer für sicheren Transport",
      features: ["Geschultes Personal", "Versicherter Fahrzeugtransport"],
      details: [{
        title: "Qualifizierte Mitarbeiter",
        items: [
          "Langjährige Berufserfahrung im Umgang mit Premiumfahrzeugen",
          "Regelmäßige Schulungen und Zertifizierungen",
          "Umfassende Versicherung für maximale Sicherheit",
          "Professionelles Auftreten und Kundenservice"
        ]
      }]
    },
    {
      icon: Clock,
      title: "24h Service",
      description: "Rund um die Uhr verfügbar für Ihre Ankunft und Abfahrt",
      features: ["365 Tage im Jahr geöffnet", "Auch an Feiertagen verfügbar"],
      details: [{
        title: "Verfügbarkeit",
        items: [
          "24 Stunden täglich erreichbar",
          "365 Tage im Jahr für Sie da",
          "Flexible Abholung und Rückgabe",
          "Nachtzuschlag von 30€ bei An-/Abreise zwischen 22:00 - 06:00 Uhr",
          "Kein Aufpreis an Feiertagen"
        ]
      }]
    },
    {
      icon: MapPin,
      title: "Optimale Lage",
      description: "Nur 10 Minuten vom Frankfurter Flughafen entfernt",
      features: ["Schnelle Erreichbarkeit", "Sicherer und überwachter Parkplatz"],
      details: [{
        title: "Standort Details",
        items: [
          "Adresse: Düsseldorfer Str. 12 - Eschborn",
          "Nur 10-15 Minuten Fahrzeit zum Frankfurter Flughafen",
          "24/7 videoüberwachter Parkplatz",
          "Optimale Verkehrsanbindung"
        ]
      }]
    }
  ];

  return (
    <section id="services" className="py-16 pt-40 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten Ihnen einen Rundum-Service für Ihr Fahrzeug während Ihrer Reise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-6 rounded-xl transition-all duration-300 ${expandedCard === index ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="flex justify-between items-start">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                {expandedCard === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {expandedCard === index && service.details && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{detail.title}</h4>
                        {detail.price && (
                          <span className="text-blue-600 font-semibold">{detail.price}</span>
                        )}
                      </div>
                      {detail.items && (
                        <ul className="space-y-2">
                          {detail.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;