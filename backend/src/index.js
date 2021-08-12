const express = require('express');
const app = express();
const port = 3030;

/**
 * OpenWeather API:
 * https://openweathermap.org/current#geo
 */
const OPENWEATHER_API_KEY='';

app.get('/', (req, res) => {
  res.send('Hi Warmly!');
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
