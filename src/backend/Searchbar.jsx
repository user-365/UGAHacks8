import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [prevLocation, setPrevLocation] = useState('');
  
  const geocode = async (location) => {
    const response = await fetch(

      `https://maps.googleapis.com/maps/api/geocode/json?address=${location.substring(0, location.indexOf(","))
    }&key=AIzaSyAhj_nmBAlxKXHZr7eDfz7IjW2-R9lMuKw`
    );
    const data = await response.json();
    setCoordinates(data.results[0].geometry.location);
  };

  useEffect(() => {
    if (location !== '' && location !== prevLocation) {
      geocode(location);
      setPrevLocation(location);
    }
  }, [location, prevLocation]);

  useEffect(() => {
    if (coordinates) {
      //get hotels from database and use setHotels()
    }
  }, [coordinates]);

  useEffect(() => {
    const autocompleteService = new window.google.maps.places.AutocompleteService();
    const displaySuggestions = (predictions, status) => {
      if (status !== 'OK') {
        return;
      }
      setAutocomplete(predictions);
    };
    if (location !== '') {
      autocompleteService.getPlacePredictions({ input: location }, displaySuggestions);
    }
  }, [location]);

  const handleInput = (event) => {
    setLocation(event.target.value);
    setAutocomplete(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && autocomplete) {
      setLocation(autocomplete[0].description);
      setAutocomplete(null);
    }
  };

  const handleSelect = (event) => {
    setLocation(event.target.innerText);
    setAutocomplete(null);
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      {autocomplete && location !== autocomplete[0].description ? (
        <ul>
          {autocomplete.map((suggestion, index) => (
            <li key={index} onClick={handleSelect}>
              {suggestion.description}
            </li>
          ))}
        </ul>
      ) : null}
      {hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>{hotel.name}</li>
          ))}
        </ul>
      ) : (
        <p>No eco-friendly hotels found in the area{coordinates? coordinates.lat : null}</p>
      )}
      
    </div>
  );
      }
      
export default SearchBar;
