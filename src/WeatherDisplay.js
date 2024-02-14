import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const WeatherDisplay = ({ weatherData }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get('lat');
  const lon = queryParams.get('lon');

  const pageStyle = {
    background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)',
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const backButtonStyle = {
    background: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const topicStyle = {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '30px'
  };

  const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '800px',
    marginTop: '20px',
  };

  const sideStyle = {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.1)',
    fontSize: '20px'
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    alignItems: 'center',  
    marginBottom: '10px',
  };

  const labelStyle = {
    color: '#ffffed',  
    fontWeight: 'bold',
    marginRight: '5px',  
    fontSize: '18px', 
  };

  const valueStyle = {
    color: '#ecf0f1',  
    fontWeight: 'bold',
    fontSize: '18px',  
  };

  const roundedBackground = {
    color: '#ffffed',
    background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  return (
    <div style={pageStyle}>
      <div style={topicStyle}>
        <h2>Weather Information</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
          <div style={roundedBackground}>
            <p style={{ margin: 0 , fontSize:'25px'}}>{`${lat}`}</p>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <div style={roundedBackground}>
              <p style={{ margin: 0, fontSize:'25px' }}>{`${lon}`}</p>
            </div>
          </div>
      </div>
      <div style={contentContainerStyle}>
        <div style={sideStyle}>
          {weatherData && (
            <>
              <p>
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <p>{weatherData.dt}</p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <p>{weatherData.main.temp}°C</p>
              <p>{weatherData.weather[0].main}</p>
            </>
          )}
        </div>
        <div style={sideStyle}>
          {weatherData && (
            <>
              <div style={rowStyle}>
                <span>
                  <p style={labelStyle}>Max</p>
                  <p style={valueStyle}>{weatherData.main.temp_max}°C</p>
                </span>
                <span>
                  <p style={labelStyle}>Low</p>
                  <p style={valueStyle}>{weatherData.main.temp_min}°C</p>
                </span>
              </div>
              <div style={rowStyle}>
                <span>
                  <p style={labelStyle}>Rain</p>
                  <p style={valueStyle}>{weatherData.clouds.all}%</p>
                </span>
                <span>
                  <p style={labelStyle}>Wind</p>
                  <p style={valueStyle}>{weatherData.wind.speed} mph</p>
                </span>
              </div>
              <div style={rowStyle}>
                <span>
                  <p style={labelStyle}>Sunrise</p>
                  <p style={valueStyle}>{weatherData.sys.sunrise}</p>
                </span>
                <span>
                  <p style={labelStyle}>Sunset</p>
                  <p style={valueStyle}>{weatherData.sys.sunset}</p>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <Link to="/" style={backButtonStyle}>
        Back
      </Link>
    </div>
  );
};

export default WeatherDisplay;
