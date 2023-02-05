import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
<<<<<<< HEAD
import Hotels from '../Hotels/Hotels';
=======
import Search from '../search/Search';
>>>>>>> ac5f6a9736c77a15384e7684de14b1b53d2356a5
import Selections from '../Components/Selections';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import bgVideo from "../assets/hotelVid.mp4"

const App = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Hero />
      <Hotels />
=======
      <Hero bgVideo={bgVideo} primaryDesc="Search Up Hotels" secondaryDesc="Minimizing Carbon Footprint"/>
      <Search />
>>>>>>> ac5f6a9736c77a15384e7684de14b1b53d2356a5
      <Selections />
      <Carousel />
      <Footer />

    </>
  );
};

export default App;
