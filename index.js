// const express = require('express');
// const app = express();
// const cors = require("cors");

// const port = process.env.PORT || 5012;

// app.use(cors());

// const travelPlaces = require("./travelPlaces.json");
// const travelPlacesDetails = require("./travelPlacesDetails.json");
// const place = require("./place.json");
// const reviews = require("./reviews.json");
// const blog = require("./blog.json");

// app.get('/', (req, res) => {
//     res.send('Travel Server is running');
// });

// app.get('/travelPlaces', (req, res) => {
//     res.send(travelPlaces);
// });

// app.get('/travelPlacesDetails', (req, res) => {
//     res.send(travelPlacesDetails);
// });

// app.get('/place', (req, res) => {
//     res.send(place);
// });
// app.get('/reviews', (req, res) => {
//     res.send(reviews);
// });
// app.get('/blog', (req, res) => {
//     res.send(blog);
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5012;

app.use(cors());

const travelPlaces = require("./travelPlaces.json");
const travelPlacesDetails = require("./travelPlacesDetails.json");
const place = require("./place.json");
const reviews = require("./reviews.json");
const blog = require("./blog.json");

app.get("/", (req, res) => {
  res.send("Travel Server is running");
});

// Route for all travel places
app.get("/travelPlaces", (req, res) => {
  res.send(travelPlaces);
});

// Route for travel place details without id
app.get("/travelPlacesDetails", (req, res) => {
  res.send(travelPlacesDetails);
});

// New route for travel place details based on id
app.get("/travelPlacesDetails/:id", (req, res) => {
  const { id } = req.params;
  const placeId = parseInt(id);

  if (isNaN(placeId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // Find the specific place by `id`
  const placeDetail = travelPlacesDetails.find((place) => place.id === placeId);

  if (!placeDetail) {
    return res.status(404).json({ message: "Place not found" });
  }

  res.send(placeDetail); // Send the specific place details
});

// Other routes for place, reviews, and blog
app.get("/place", (req, res) => {
  res.send(place);
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
