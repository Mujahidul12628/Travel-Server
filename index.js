const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5012;

app.use(cors());

const travelPlaces = require("./travelPlaces.json");
const travelPlacesDetails = require("./travelPlacesDetails.json");
const place = require("./place.json");
const reviews = require("./reviews.json");

app.get('/', (req, res) => {
    res.send('Travel Server is running');
});

app.get('/travelPlaces', (req, res) => {
    res.send(travelPlaces);
});

app.get('/travelPlacesDetails', (req, res) => {
    res.send(travelPlacesDetails);
});

app.get('/place', (req, res) => {
    res.send(place);
});
app.get('/reviews', (req, res) => {
    res.send(reviews);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
