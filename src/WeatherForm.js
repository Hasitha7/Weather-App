import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherForm = ({ fetchWeather }) => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (lat.trim() && lon.trim() && isValidCoordinate(lat) && isValidCoordinate(lon)) {
      try {
        await fetchWeather(lat, lon);
        setErrorMessage('');
        navigate(`/weather-display?lat=${lat}&lon=${lon}`);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setErrorMessage('Error fetching weather data. Please try again.');
      }
    } else {
      setErrorMessage('Please enter valid latitude and longitude values.');
    }
  };

  const isValidCoordinate = (coord) => {
    return /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/.test(coord);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          style={{ marginBottom: '15px', padding: '10px', fontSize: '16px', width: '300px', backgroundColor: '#d3d3d3' }}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          style={{ marginBottom: '15px', padding: '10px', fontSize: '16px', width: '300px', backgroundColor: '#d3d3d3' }}
        />
        <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', borderRadius: '5px', border: 'none', fontSize: '18px', width: '320px' }}>Get Weather</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default WeatherForm;
