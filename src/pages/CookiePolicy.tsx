 

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white pt-28 md:pt-36">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Cookie-Richtlinien</h1>
          <p className="mb-4">Stand: 01.01.2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Verwendung von Cookies</h2>
            <p className="mb-4">
              Unsere Website verwendet Cookies, um bestimmte Funktionen bereitzustellen und das Nutzererlebnis zu verbessern. 
              Im Folgenden erläutern wir, welche Arten von Cookies verwendet werden, zu welchem Zweck sie dienen und wie Sie 
              Ihre Cookie-Einstellungen anpassen können.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Was sind Cookies?</h2>
            <p className="mb-4">
              Cookies sind kleine Textdateien, die von Websites auf Ihrem Endgerät gespeichert werden. Sie enthalten 
              Informationen, die eine Website dazu verwenden kann, um Funktionen bereitzustellen oder Ihr Nutzerverhalten 
              zu analysieren.
            </p>
            <p className="mb-4">Cookies werden in folgende Kategorien unterteilt:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Notwendige Cookies: Diese Cookies sind erforderlich, um die grundlegenden Funktionen unserer Website sicherzustellen.</li>
              <li>Funktionale Cookies: Diese Cookies ermöglichen zusätzliche Funktionen wie die Speicherung Ihrer Präferenzen.</li>
              <li>Analytische Cookies: Diese Cookies werden verwendet, um anonymisierte Daten über das Nutzungsverhalten der Besucher zu sammeln.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Welche Speichertechnologien verwenden wir?</h2>
            <p className="mb-4">Aktuell setzen wir keine nicht-notwendigen Drittanbieter-Cookies ein. Wir verwenden lediglich lokale Speichertechnologien, um Ihre Einwilligungsentscheidung zu dokumentieren:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Consent-Speicherung: Ihre Auswahl wird im Browser über Local Storage unter dem Schlüssel <code>cookieConsent</code> gespeichert (Wert z. B. "accepted" oder "rejected").</li>
            </ul>
            <p className="mb-4 text-gray-300">Hinweis: Local Storage ist technisch kein „Cookie“, wird aber zusammen mit Cookies als "ähnliche Technologie" behandelt (§25 TTDSG).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Einwilligung und Einstellungen</h2>
            <p className="mb-4">
              Beim ersten Besuch unserer Website fragen wir Sie über ein Cookie-Banner nach Ihrer Einwilligung. 
              Sie können auswählen, welche Cookies Sie akzeptieren möchten.
            </p>
            <p className="mb-4">
              Ihre Einstellungen können Sie jederzeit ändern, indem Sie den Link „Cookie-Einstellungen" im Footer 
              unserer Website verwenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Verwaltung von Cookies im Browser</h2>
            <p className="mb-4">
              Sie können Ihren Browser so einstellen, dass Cookies nur im Einzelfall erlaubt werden, generell ausgeschlossen 
              oder automatisch gelöscht werden. Beachten Sie, dass die Funktionalität unserer Website eingeschränkt sein kann, 
              wenn Sie Cookies deaktivieren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Drittanbieter-Dienste</h2>
            <p className="mb-4">
              Derzeit binden wir keine externen Dienste (z. B. Google Maps, Web-Analytics) ein, die Cookies setzen oder auf Ihr Endgerät zugreifen. Sollte sich dies in Zukunft ändern, werden wir Sie vor der Aktivierung um Ihre Einwilligung bitten und diese Richtlinie entsprechend aktualisieren.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;