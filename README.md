# Weather App 🌤️

A modern, responsive weather application built with React that allows users to search for current weather conditions in any city worldwide using the OpenWeatherMap API.

![React](https://img.shields.io/badge/React-18.1.0-blue.svg)
![Axios](https://img.shields.io/badge/Axios-0.27.2-purple.svg)
![License](https://img.shields.io/badge/License-Private-red.svg)

## 📋 Features

- **Real-time Weather Data**: Get current weather information for any city in the world
- **Search Functionality**: Search by city name with Enter key or Search button
- **Comprehensive Weather Details**:
  - Temperature in Celsius
  - "Feels like" temperature
  - Humidity percentage
  - Wind speed
  - Weather description and icon
- **Error Handling**: User-friendly error messages for invalid cities, network issues, and API errors
- **Loading States**: Visual feedback during API requests
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop and mobile devices
- **Beautiful UI**: Modern gradient background with semi-transparent weather cards and smooth animations
- **Environment Variables**: Secure API key configuration using environment variables
- **Input Validation**: Prevents empty searches and trims whitespace

## 🚀 Demo

The app displays:
- City name with country code
- Current temperature in Celsius
- "Feels like" temperature
- Humidity percentage
- Wind speed in m/s
- Weather icon representing current conditions
- Weather condition description
- Loading indicator during data fetch
- Error messages for failed requests

## 🛠️ Technologies Used

- **React 18.1.0** - Frontend framework
- **Axios 0.27.2** - HTTP client for API requests
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Custom styling with gradients and responsive design
- **Create React App** - Project scaffolding and build tools

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your OpenWeatherMap API key
# Get your free API key from: https://openweathermap.org/api
```

Your `.env` file should look like this:
```env
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔧 Configuration

**Setup Steps:**

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your API key to `.env`:
   ```env
   REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
   ```
4. Restart the development server if it's already running

**⚠️ Security Note**:
- Never commit `.env` files to version control
- The `.env` file is already included in `.gitignore`
- Use `.env.example` to document required variables without exposing secrets
- For production deployments, configure environment variables through your hosting platform

## 📁 Project Structure

```
weather-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── offline.html
│   ├── serviceworker.js
│   └── images/
├── src/
│   ├── api/
│   │   └── fetchWeather.js    # API integration with error handling
│   ├── App.js                  # Main component with state management
│   ├── App.css                 # Styling with animations
│   └── index.js                # Entry point
├── build/                      # Production build
├── .env                        # Environment variables (not in git)
├── .env.example                # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 💻 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
The build is optimized and minified for best performance.

### `npm run eject`
**Note: This is a one-way operation!**
Ejects the configuration files for full customization.

## 🎨 Usage

1. Enter a city name in the search box
2. Press Enter or click the Search button
3. View the comprehensive weather information:
   - City name and country code
   - Current temperature in Celsius
   - "Feels like" temperature
   - Humidity percentage
   - Wind speed
   - Weather icon and description
4. If the city is not found or there's an error, a helpful error message will be displayed

## 🌐 API Reference

The app uses the OpenWeatherMap Current Weather Data API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
  - `q`: City name
  - `units`: metric (for Celsius)
  - `APPID`: API key

## 📱 Responsive Design

The app includes media queries for optimal viewing on:
- Desktop computers (full-width layout)
- Tablets (adjusted padding)
- Mobile devices (< 600px width)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.

## 🔮 Future Enhancements

Potential improvements:
- [ ] 5-day weather forecast
- [ ] Geolocation support for automatic location detection
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Weather history and trends
- [ ] Multiple city comparison
- [ ] Dark/Light theme toggle
- [ ] Save favorite cities to localStorage
- [ ] More detailed weather metrics (pressure, visibility, UV index)
- [ ] Weather alerts and warnings
- [ ] Progressive Web App (PWA) features for offline support

## 📞 Contact

For questions or feedback, please open an issue in the repository.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Create React App](https://create-react-app.dev/) for the project setup
- Background image from [HD Wallpapers](https://www.hdwallpapers.in/)
- [Create React App](https://create-react-app.dev/) for the project setup
- Background image from [HD Wallpapers](https://www.hdwallpapers.in/)
