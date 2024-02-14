import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=33c92b0552e0eea71460739025382726`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/weather-display"
          element={<WeatherDisplay weatherData={weatherData} />}
        />
        <Route
          path="/"
          element={<WeatherForm fetchWeather={fetchWeather} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
