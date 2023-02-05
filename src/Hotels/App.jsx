import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hotels from '../Hotels/Hotels';
import Footer from '../Components/Footer';
import bgVideo from "../assets/hotelVid.mp4"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero bgVideo={bgVideo} primaryDesc="Search Up Hotels" secondaryDesc="Minimizing Carbon Footprint"/>]
      <Hotels />
      <Footer />
    </>
  );
};

export default App;
