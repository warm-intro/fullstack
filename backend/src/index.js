const express = require('express');
const app = express();
const cors = require('cors');
const port = 3030;

app.use(cors());

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

const exampleLocations = [
  {
    name: 'New York, NY',
    longitude: -73.935242,
    latitude: 40.73061,
  },
  {
    name: 'New Haven, CT',
    longitude: -72.929916,
    latitude: 41.310726,
  },
  {
    name: 'Springfield, IL',
    longitude: -89.650002,
    latitude: 39.799999,
  },
  {
    name: 'Austin, TX',
    longitude: -97.73333,
    latitude: 30.266666,
  },
];
