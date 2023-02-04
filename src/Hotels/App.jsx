import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hotelsearch from '../data/f';
import Selections from '../Components/Selections';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hotelsearch />
      <Selections />
      <Carousel />
      <Footer />

    </>
  );
};

export default App;
