import { Star, Quote } from 'lucide-react';

const Ratings = () => {
  // Check if ratings should be displayed based on environment variable
  const showRatings = import.meta.env.VITE_SHOW_RATINGS === 'true';
  
  if (!showRatings) {
    return null;
  }

  const reviews = [
    {
      name: "Michael Schmidt",
      rating: 5,
      comment: "Perfekter Service! Mein Auto war sauber und vollgetankt als ich zurückkam. Absolut empfehlenswert!",
      date: "vor 2 Wochen"
    },
    {
      name: "Sarah Müller",
      rating: 5,
      comment: "Sehr professioneller und zuverlässiger Service. Die Abholung und Rückgabe verlief reibungslos.",
      date: "vor 1 Monat"
    },
    {
      name: "Thomas Weber",
      rating: 5,
      comment: "Ich nutze Parkbereit seit 2 Jahren regelmäßig. Immer pünktlich und das Auto in bestem Zustand.",
      date: "vor 3 Wochen"
    },
    {
      name: "Anna Hoffmann",
      rating: 4,
      comment: "Guter Service, freundliche Mitarbeiter. Nur die Reinigung könnte noch gründlicher sein.",
      date: "vor 1 Woche"
    },
    {
      name: "Robert Klein",
      rating: 5,
      comment: "24h Service funktioniert wirklich! Auch um 3 Uhr morgens war jemand da. Danke!",
      date: "vor 5 Tagen"
    },
    {
      name: "Lisa Wagner",
      rating: 5,
      comment: "Bester Valet-Service am Frankfurter Flughafen. Faire Preise und erstklassiger Service.",
      date: "vor 2 Monaten"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="ratings" className="py-16 pt-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kundenbewertungen
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 ${
                    star <= Math.round(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} Bewertungen)</span>
          </div>
          <p className="text-xl text-gray-600">
            Das sagen unsere zufriedenen Kunden über uns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <Quote className="h-6 w-6 text-blue-600 mb-3" />
              <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
              <div className="border-t pt-3">
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img src="/logo2.jpeg" alt="Parkbereit" className="h-8 w-8 rounded" />
            <h3 className="text-2xl font-bold text-gray-900">Google Bewertungen</h3>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-8 w-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">4.8</span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Basierend auf 127 Google-Bewertungen
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Bewertung bei Google abgeben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;