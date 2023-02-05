import React, { useState } from 'react';

const Hotelsearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/hotels/search/${searchTerm}`);
    const data = await response.json();
    setHotels(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel._id}>{hotel.name} ({hotel.city})</li>
        ))}
      </ul>
    </div>
  );
};

export default Hotelsearch;
