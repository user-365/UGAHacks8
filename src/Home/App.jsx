import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import bgVideo from '../assets/beachVid.mp4'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero bgVideo={bgVideo} primaryDesc="Eco-friendly Traveling Website:" secondaryDesc="Preserving The Beauty of the World for Future Generations"/>
    </>
  );
};

export default App;
