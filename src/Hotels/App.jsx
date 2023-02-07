import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hotels from '../Hotels/Hotels';
import Search from '../search/Search';
import Selections from '../Components/Selections';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import bgVideo from "../assets/hotelVid.mp4"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero bgVideo={bgVideo} primaryDesc="Search Up Hotels" secondaryDesc="Minimizing Carbon Footprint" isHotel={true}/>
      <Hotels />
      <Selections />
      <Carousel />
      <Footer />
    </>
  );
};

export default App;
