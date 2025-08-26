 

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white pt-28 md:pt-36">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 mt-10">Datenschutzerklärung</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Einleitung</h2>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Verantwortliche Stelle</h2>
            <p className="mb-4">Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
            <p className="mb-4">
              Parkbereit<br />
              Düsseldorfer Str. 12<br />
              65760 Eschborn<br />
              Telefon: +49 172 6935941<br />
              E-Mail: <a href="mailto:info@parkbereit.de" className="text-blue-400 hover:underline">info@parkbereit.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="text-xl font-semibold mb-3">a) Besuch der Webseite</h3>
            <p className="mb-4">Beim Besuch unserer Webseite erhebt unser Server automatisch folgende Informationen:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP-Adresse des anfragenden Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Verwendeter Browser und Betriebssystem</li>
              <li>Besuchte URL</li>
            </ul>
            <p className="mb-4">
              Diese Daten werden ausschließlich zur Sicherstellung eines reibungslosen Betriebs und zur Verbesserung der Webseite verwendet. Eine Zuordnung dieser Daten zu einer bestimmten Person erfolgt nicht.
            </p>

            <h3 className="text-xl font-semibold mb-3">b) Eingebundene Dienste von Drittanbietern</h3>
            <p className="mb-4">
              Derzeit binden wir auf dieser Website keine externen Dienste (z. B. Karten, Analytics) ein, die Cookies setzen oder personenbezogene Daten an Dritte übermitteln. Sollte sich dies in Zukunft ändern, informieren wir Sie vor der Aktivierung und holen ggf. Ihre Einwilligung ein.
            </p>

            <h3 className="text-xl font-semibold mb-3">c) Buchung/Reservierung Valet‑Parkservice</h3>
            <p className="mb-4">
              Wenn Sie eine Buchung bzw. Reservierung für unseren Valet‑Parkservice vornehmen, verarbeiten wir folgende personenbezogene Daten:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name und Nachname</li>
              <li>Telefonnummer</li>
              <li>E‑Mail‑Adresse</li>
              <li>Abflug- und Rückflugdatum sowie jeweilige Uhrzeit am Flughafen</li>
              <li>Flugnummern (optional)</li>
              <li>Kfz‑Kennzeichen</li>
              <li>Fahrzeugmodell (optional)</li>
            </ul>
            <p className="mb-4">
              Diese Daten sind erforderlich, um Ihre Anfrage zu bearbeiten und die Dienstleistung zu erbringen. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>

            <h3 className="text-xl font-semibold mb-3">d) Kontaktaufnahme</h3>
            <p className="mb-4">
              Sie können uns über E-Mail, Telefon oder WhatsApp kontaktieren. Bei der Kontaktaufnahme werden die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage gespeichert. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b oder f DSGVO.
            </p>

            <h3 className="text-xl font-semibold mb-3">e) Kontaktanfragen</h3>
            <p className="mb-4">
              Bei Kontaktaufnahme per Telefon oder E‑Mail verarbeiten wir die von Ihnen bereitgestellten Daten zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Eine Übermittlung an externe Dienste erfolgt nicht ohne Ihre Kenntnis.
            </p>

            <h3 className="text-xl font-semibold mb-3">4. Weitergabe</h3>
            <p className="mb-4">
              Ihre personenbezogenen Daten werden nur dann an Dritte weitergegeben, wenn dies zur Erfüllung des Vertrages erforderlich ist (z. B. an unser operatives Personal) oder wir gesetzlich dazu verpflichtet sind. Eine Weitergabe zu Werbezwecken erfolgt nicht.
            </p>

            <h3 className="text-xl font-semibold mb-3">5. Ihre Rechte</h3>
            <p className="mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Auskunftsrecht (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO) Zur Ausübung dieser Rechte können Sie sich jederzeit an uns wenden (siehe Kontakt oben).</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6. Datensicherheit</h3>
            <p className="mb-4">
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Dazu gehören unter anderem Firewalls, Verschlüsselungstechnologien und regelmäßige Sicherheitsupdates.
            </p>

            <h3 className="text-xl font-semibold mb-3">7. Dauer der Speicherung</h3>
            <p className="mb-4">
              Wir speichern Ihre personenbezogenen Daten nur solange, wie es für die oben genannten Zwecke erforderlich ist oder wir gesetzlich dazu verpflichtet sind. Buchungsdaten werden beispielsweise für die Dauer gesetzlicher Aufbewahrungspflichten gespeichert.
            </p>

            <h3 className="text-xl font-semibold mb-3">8. Drittanbieter</h3>
            <p className="mb-4">
              Aktuell sind keine externen Drittanbieter-Dienste eingebunden, die personenbezogene Daten ohne Ihre Interaktion verarbeiten. Externe Links (z. B. zu Google-Bewertungen) werden nur beim Anklicken aufgerufen.
            </p>

            <h3 className="text-xl font-semibold mb-3">9. Hosting</h3>
            <p className="mb-4">
              Beim Aufruf der Website werden Server-Logdaten (z. B. IP-Adresse, Zeitpunkt, User-Agent) verarbeitet, um die Website bereitzustellen und die Sicherheit zu gewährleisten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung). Konkrete Hosting-Anbieter werden in dieser Erklärung ergänzt, sobald feststehend.
            </p>

            <h3 className="text-xl font-semibold mb-3">Rechtsgrundlage:</h3>
            <p className="mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da ein berechtigtes Interesse an der sicheren Bereitstellung der Website besteht. Sofern eine Einwilligung erteilt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann jederzeit widerrufen werden.
            </p>

            <h3 className="text-xl font-semibold mb-3">10. SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3 className="text-xl font-semibold mb-3">11. Cookies und ähnliche Technologien</h3>
            <p className="mb-4">
              Derzeit setzen wir auf dieser Website keine Cookies ein. Stattdessen verwenden wir zur Speicherung Ihrer Einwilligungsentscheidung eine vergleichbare Technologie (LocalStorage) in Ihrem Browser.
            </p>
            <p className="mb-4">
              Gespeicherter Eintrag: <code>cookieConsent</code> (Zweck: Dokumentation Ihrer Auswahl zur Nutzung optionaler Technologien). Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG), sofern Sie zustimmen.
            </p>
            <p className="mb-4">
              Sie können Ihre Entscheidung jederzeit über den Link „Cookie‑Einstellungen“ im Footer ändern. Sollten künftig Dienste (z. B. Karten/Analytics) eingebunden werden, informieren wir vor Aktivierung und holen ggf. Ihre Einwilligung ein.
            </p>
            <p className="mb-4">
              Zur Klarstellung: LocalStorage ist ein Browser‑Speicher (kein Cookie) und gilt nach dem TTDSG als „ähnliche Technologie“; wir speichern dort ausschließlich Ihre Einwilligungsentscheidung (z. B. „accepted“/„rejected“) und setzen keine Tracking‑Cookies oder Drittanbieter‑Cookies ein.
            </p>

            <h3 className="text-xl font-semibold mb-3">12. Aktualität und Änderung dieser Datenschutzerklärung</h3>
            <p className="mb-4">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslage oder technische Neuerungen anzupassen.
            </p>
            <p className="mb-4">
              Version: 26.08.2025
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;