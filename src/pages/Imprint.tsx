import { useLayoutEffect } from 'react';

export default function Imprint() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white pt-28 md:pt-36">
      <div className="flex-grow container mx-auto max-w-7xl px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg">
              <p className="mb-2">Parkbereit</p>
              <p className="mb-2">Düsseldorfer Str. 12</p>
              <p className="mb-2">65760 Eschborn</p>
              <p className="mb-2">Deutschland</p>
              <hr className="my-4 border-gray-700" />
              <p className="mb-2"><span className="font-semibold">Geschäftsführung:</span> Ramazan Aslan</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Kontakt</h2>
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg">
              <p className="mb-2">Telefon: +49 172 6935941</p>
              <p className="mb-2">E-Mail: info@parkbereit.de</p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="text-lg font-semibold mb-2 text-blue-400">Umsatzsteuer-ID</h2>
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg">
              <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p>Die USt-IdNr. wurde beantragt und wird nach Erteilung hier veröffentlicht.</p>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}