import { useEffect, useState } from 'react';

// Simple cookie consent banner
// Stores consent in localStorage under key `cookieConsent`: 'accepted' | 'rejected'
// Also exposes a global function `window.openCookieSettings()` to reopen the banner

type Consent = 'accepted' | 'rejected' | null;

declare global {
  interface Window {
    openCookieSettings?: () => void;
  }
}

const STORAGE_KEY = 'cookieConsent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Consent) || null;
    setVisible(!saved);

    // expose open settings
    window.openCookieSettings = () => {
      setVisible(true);
    };

    return () => {
      // cleanup not strictly necessary
      if (window.openCookieSettings) {
        delete window.openCookieSettings;
      }
    };
  }, []);

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl p-4 sm:p-6">
        <div className="rounded-xl bg-gray-800 text-white shadow-lg border border-gray-700">
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm sm:text-base">
              <p className="font-semibold mb-1">Wir verwenden Cookies</p>
              <p className="text-gray-300">
                Wir nutzen notwendige Cookies, um die Website zu betreiben. Mit Ihrer Zustimmung können optionale
                Technologien (z. B. für eingebettete Dienste) verwendet werden. Details finden Sie in unserer{' '}
                <a href="/privacy" className="text-blue-400 hover:underline">Datenschutzerklärung</a>.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
