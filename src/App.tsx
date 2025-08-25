import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingOverview from './pages/BookingOverview';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-overview" element={<BookingOverview />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;