import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import FileSaver from "file-saver";
import data from '../data/ApprovedHotel.json'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
const Card = ( id, title, street, city, state, zipcode, points, certlevel, projecttype ) => (
  
  <div key={id} style={{ border: '1px solid black', margin: '10px' }}>
    <h2>{title}</h2>
    <p>{certlevel} certification</p>

  </div>
);
function Hotels() {
  
  const [Data, setData] = useState(data);
  const [hotels, setHotels] = useState([]);
  

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //console.log(Data.Sheet1)
    const city = event.target.city.value;
    const tempHotels = [];
    for (let  i = 0; i<Data.Sheet1.length; i++) {
      //console.log(Data.Sheet1[i][4])
      
      if (Data.Sheet1[i][4] == city){
        tempHotels.push(Data.Sheet1[i]);
        console.log(Data.Sheet1[i]);
      }
    }
    if (tempHotels.length < 1) {
      console.log('no matches')
    } else {
      setHotels(tempHotels)
    }
    
    

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city" className='text-white mb-2'>Enter city:</label>
        <label htmlFor="city">Enter city:</label>
      
        <input type="text" id="city" name="city" />
        <button type="submit">Search</button>
      </form>
      {hotels.map((item) => (
        <div style={{ border: "1px solid black", margin: "10px" }}>
          <h2>id number:{item[0]}about</h2>
          <p>{item[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default Hotels;
