const express = require('express');
const path = require('path');
const axios = require("axios");

const app = express();
app.use(express.static('src'))

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api', async (req, res) => {
    try {
      const response = await axios.get("https://www.metaweather.com/api/location/2487956/");
      const data = response.data;
      return res.send(data);
    } catch (error) {
      return error;
    }
})

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
