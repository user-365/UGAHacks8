import React from 'react';

import Navbar from './Home/Navbar';
import Hero from './Home/Hero';
import Search from './search/Search';
import Selections from './Home/Selections';
import Carousel from './Home/Carousel';
import Footer from './Home/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Selections />
      <Carousel />
      <Footer />

    </>
  );
};

export default App;
