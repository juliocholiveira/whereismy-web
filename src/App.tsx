import React, { useEffect, useState } from 'react';
import api from './services/api';
import logo from './logo.svg';
import './App.css';

function App() {

  let latitudeGeral: number;
  let longitudeGeral: number;

  async function sendPosition(user: string, latitude: number, longitude: number){
    latitudeGeral = latitude;
    longitudeGeral = longitude;

    await api.post('/location', {
      user,
      latitude,
      longitude
    });
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      sendPosition('curPos', latitude, longitude);
    },
    (err) => {
      alert(err);
    },
    {
      timeout: 30000,
    }
  );

  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    sendPosition('watPos', latitude, longitude);
  });

  setInterval(() => {
    sendPosition('ctrPos', latitudeGeral, longitudeGeral);
  }, 10000);

  return (
    <div className="App">
      <iframe src="https://www.w3schools.com"></iframe>
    </div>
  );
}

export default App;
