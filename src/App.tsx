import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Ratings from './components/Ratings';
import Footer from './components/Footer';

function App() {
  // Check if ratings should be displayed
  const showRatings = import.meta.env.VITE_SHOW_RATINGS === 'true';

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Contact />
      {showRatings && <Ratings />}
      <Footer />
    </div>
  );
}

export default App;