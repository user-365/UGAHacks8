import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container px-4 sm:flex justify-between items-center'>
        <h1 className='px-2'>NAME AND LOGO</h1>
        <ul className='flex flex-wrap'>
          <li className='p-0 px-2'>
            <a href='/index.html'>Home</a>
          </li>
          <li className='p-0 px-2'>
            <a href='/src/HTML/destinations.html'>Destinations</a>
          </li>
          <li className='p-0 px-2'>
            <a href='/src/HTML/travel.html'>Travel</a>
          </li>
          <li className='p-0 px-2'>
            <a href='/src/HTML/mission.html'>Our Mission</a>
          </li>
          <li className='p-0 px-2'>
            <a href='/src/HTML/about.html'>About us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
