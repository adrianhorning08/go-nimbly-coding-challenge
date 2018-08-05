const express = require('express');
const path = require('path')

const app = express();
app.use(express.static('src'))

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
