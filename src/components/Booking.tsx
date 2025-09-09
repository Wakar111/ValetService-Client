import { useEffect, useRef, useState, type FC } from 'react';
import './Booking.css';

const iframeContainerStyles = {
  width: '100%',
  maxWidth: '1400px',
  minHeight: '800px',
  margin: '20px auto',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 16px 16px 0 rgb(0 0 0 / 0.1)',
  overflow: 'auto'
};

const iframeStyles = {
  width: '100%',
  minHeight: '400px',
  border: 'none',
  display: 'block'
};

const Booking: FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pagePaddingTop = 90;
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://parkbereit.parkstar.de/js/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      if (window.iFrameResize) {
        window.iFrameResize({
          log: false,
          checkOrigin: false,
          heightCalculationMethod: 'lowestElement',
          scrolling: false,
          autoResize: true,
          sizeWidth: true
        }, '#ps-form-frame');
      }
    };
    document.body.appendChild(script);

    const iframe = iframeRef.current;
    let loadCount = 0;

    const sendScrollPosition = () => {
      if (!iframe) return;
      const data = {
        parentHeight: window.innerHeight,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        iframeTop: iframe.getBoundingClientRect().top + window.scrollY - pagePaddingTop,
      };
      iframe.contentWindow?.postMessage(
        "parentScrollPosition:" + JSON.stringify(data),
        "*"
      );
    };

    const handleIframeLoad = () => {
      sendScrollPosition();
      if (loadCount > 0 && iframe) {
        iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      loadCount++;
      setIsLoading(false);
    };

    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      window.addEventListener('scroll', sendScrollPosition);
      window.addEventListener('resize', sendScrollPosition);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
        window.removeEventListener('scroll', sendScrollPosition);
        window.removeEventListener('resize', sendScrollPosition);
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full">
        <div className="text-center mt-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Buchungsanfrage
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Reservieren Sie Ihren Valet-Service für Ihre nächste Reise
          </p>
        </div>
        
        <div style={iframeContainerStyles} className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-600 font-medium">Lade Buchungsformular...</p>
              </div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            id="ps-form-frame"
            src="https://parkbereit.parkstar.de/form/"
            style={iframeStyles}
            title="Valet Parking Buchung"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;