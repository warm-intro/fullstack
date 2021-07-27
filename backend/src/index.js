const express = require('express');
const app = express();
const port = 3000;

const OPENWEATHER_API_KEY='';

app.get('/', (req, res) => {
  res.send('Hi Warmly!');
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
