import React from 'react';
import '/src/index.scss';

import bgVideo from '../assets/beachVid.mp4';

const Hero = () => {
  return (
    <header className='w-screen h-screen relative'>
      <video
        src={bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white mb-2'>Eco-friendly Traveling Website:</h1>
        <h2 className='text-white mb-4'>Preserving The Beauty of the World for Future Generations </h2>
      </div>
    </header>
  );
};

export default Hero;
