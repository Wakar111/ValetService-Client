import Hero from '../components/Hero';
import Services from '../components/Services';
import Booking from '../components/Booking';
import Process from '../components/Process';
import Ratings from '../components/Ratings';

const Home = () => {
  const showRatings = import.meta.env.VITE_SHOW_RATINGS === 'true';

  return (
    <>
      <Hero />
      <Booking />
      <Process />
      <Services />
      {/* <Contact /> */}
      {showRatings && <Ratings />}
    </>
  );
};

export default Home;
