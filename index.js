const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5012;

app.use(cors());



app.get('/', (req, res) => {
    res.send('Travel Server is running');
});




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
