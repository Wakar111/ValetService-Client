import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookingOverview from './pages/BookingOverview';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import About from './pages/About';
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "EUR",
  intent: "capture",
  components: "buttons"
};


function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>

      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* Legacy redirect: /cookies -> /privacy */}
            <Route path="/cookies" element={<Navigate to="/privacy" replace />} />
            <Route path="/booking-overview" element={<BookingOverview />} />
          </Routes>
          <CookieBanner />
          <Footer />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;