import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Search from '../search/Search';
import Selections from '../Components/Selections';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import bgVideo from "../assets/busVid.mp4"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero bgVideo={bgVideo} primaryDesc="Search Up Buses" secondaryDesc="Minimizing Carbon Footprint"/>
      <Search />
      <Selections />
      <Carousel />
      <Footer />

    </>
  );
};

export default App;
