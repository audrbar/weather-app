import axios from 'axios';

const URL = process.env.REACT_APP_WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (query) => {
    if (!API_KEY) {
        throw new Error('API key is not configured. Please add REACT_APP_WEATHER_API_KEY to your .env file');
    }

    if (!query || query.trim() === '') {
        throw new Error('Please enter a city name');
    }

    try {
        const { data } = await axios.get(URL, {
            params: {
                q: query.trim(),
                units: 'metric',
                APPID: API_KEY,
            }
        });

        return data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            switch (error.response.status) {
                case 404:
                    throw new Error('City not found. Please check the spelling and try again');
                case 401:
                    throw new Error('Invalid API key. Please check your configuration');
                default:
                    throw new Error('Unable to fetch weather data. Please try again later');
            }
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('Network error. Please check your internet connection');
        } else {
            // Something happened in setting up the request that triggered an Error
            throw error;
        }
    }
}
