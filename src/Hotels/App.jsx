import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hotels from '../Hotels/Hotels';
import Selections from '../Components/Selections';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hotels />
      <Selections />
      <Carousel />
      <Footer />

    </>
  );
};

export default App;
