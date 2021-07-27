import React from 'react';

const locations = [
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

function App() {
  return (
    <div>
      <h1>Welcome to Warmly</h1>
      <h2>Autocomplete dropdown examples</h2>
      <img
        alt="page"
        width="600"
        src="https://i.ibb.co/d2Jddbj/Screen-Shot-2020-11-17-at-10-03-47-PM.png"
      />
      <img
        alt="example"
        width="300"
        src="https://i.ibb.co/VqM30gg/Screen-Shot-2020-11-17-at-9-53-55-PM.png"
      />
      <img
        alt="example"
        width="300"
        src="https://i.ibb.co/yg139ZQ/Screen-Shot-2020-11-17-at-9-53-42-PM.png"
      />
    </div>
  );
}

export default App;
