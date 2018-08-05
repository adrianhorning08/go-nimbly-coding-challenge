const express = require('express');
const path = require('path');
const axios = require("axios");

const app = express();
app.use(express.static('src'))

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/locationName/:locationName', async (req, res) => {
    try {
      const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${req.params.locationName}`);
      const data = response.data;
      return res.send(data);
    } catch (error) {
      return error;
    }
})

app.get('/api/locationId/:locationId', async (req, res) => {
    try {
      const response = await axios.get(`https://www.metaweather.com/api/location/${req.params.locationId}/`);
      const data = response.data;
      return res.send(data);
    } catch (error) {
      return error;
    }
})

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
