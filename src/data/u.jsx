const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const city = req.query.city;
  // Query the MongoDB database using the city name
  db.collection("hotels").find({ city: city }).toArray((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});

