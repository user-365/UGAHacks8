import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import FileSaver from "file-saver";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const file = new File(["scores.xlsx"], "scores.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const sheetData = XLSX.utils.sheet_to_json(worksheet);

      setHotels(sheetData);
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    const filteredHotels = hotels.filter((hotel) => hotel.City === city);

    const data = XLSX.utils.json_to_sheet(filteredHotels);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, data, "Filtered Hotels");

    const file = new Blob([XLSX.write(workbook, { type: "array", bookType: "xlsx" })], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    FileSaver.saveAs(file, "filtered_hotels.xlsx");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city" className='text-white mb-2'>Enter city:</label>
        <input type="text" id="city" name="city" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Hotels;
