import React, { useState, useEffect } from "react";

const HotelSearch = () => {
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/search?city=${city}`);
    const data = await response.json();
    setHotels(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel._id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelSearch;
