import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter' && query.trim()) {
      setLoading(true);
      setError('');

      try {
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery('');
      } catch (err) {
        setError(err.message || 'An error occurred while fetching weather data');
        setWeather({});
      } finally {
        setLoading(false);
      }
    }
  }

  const handleSearchClick = async () => {
    if (query.trim()) {
      setLoading(true);
      setError('');

      try {
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery('');
      } catch (err) {
        setError(err.message || 'An error occurred while fetching weather data');
        setWeather({});
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className='main-container'>
      <div className='search-container'>
        <input
          type='text'
          className='search'
          placeholder='Search for a city...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
          disabled={loading}
        />
        <button
          className='search-button'
          onClick={handleSearchClick}
          disabled={loading || !query.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className='error-message'>
          <p>{error}</p>
        </div>
      )}

      {loading && (
        <div className='loading'>
          <p>Loading weather data...</p>
        </div>
      )}

      {weather.main && !loading && (
        <div className='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className='info'>
            <img
              className='city-icon'
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className='additional-info'>
            <div className='info-item'>
              <span className='info-label'>Feels like:</span>
              <span className='info-value'>{Math.round(weather.main.feels_like)}°C</span>
            </div>
            <div className='info-item'>
              <span className='info-label'>Humidity:</span>
              <span className='info-value'>{weather.main.humidity}%</span>
            </div>
            <div className='info-item'>
              <span className='info-label'>Wind Speed:</span>
              <span className='info-value'>{weather.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
