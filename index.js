const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5012;

app.use(cors());

const travelPlaces = require("./travelPlaces.json");



app.get('/', (req, res) => {
    res.send('Travel Server is running');
});

app.get('/travelPlaces', (req, res) => {
    res.send(travelPlaces);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
