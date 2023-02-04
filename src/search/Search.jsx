import React, { useState } from 'react';
import './search.scss';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tripType, setTripType] = useState('round-trip');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'searchTerm':
        setSearchTerm(event.target.value);
        break;
      case 'tripType':
        setTripType(event.target.value);
        break;
      case 'startDate':
        setStartDate(event.target.value);
        break;
      case 'endDate':
        setEndDate(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform flight search here using the searchTerm, tripType, startDate, and endDate values
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for flights" 
        name="searchTerm"
        value={searchTerm} 
        onChange={handleChange} 
      />
      <div>
        <label>
          <input 
            type="radio" 
            name="tripType" 
            value="one-way" 
            checked={tripType === 'one-way'} 
            onChange={handleChange} 
          />
          One-way
        </label>
        <label>
          <input 
            type="radio" 
            name="tripType" 
            value="round-trip" 
            checked={tripType === 'round-trip'} 
            onChange={handleChange} 
          />
          Round-trip
        </label>
      </div>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input 
          type="date" 
          name="startDate" 
          id="start-date" 
          value={startDate} 
          onChange={handleChange} 
        />
      </div>
      {tripType === 'round-trip' && (
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input 
            type="date" 
            name="endDate" 
            id="end-date" 
            value={endDate} 
            onChange={handleChange} 
          />
        </div>
      )}
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;