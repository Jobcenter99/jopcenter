"use client"
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Thermometer, Eye, Gauge } from 'lucide-react';

const WeatherViewer = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');

  // Mock weather data for demo (replace with real API call)
  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API call to OpenWeatherMap, etc.
      const mockData = {
        location: city || 'New York',
        temperature: Math.round(Math.random() * 30 + 5),
        description: ['Sunny', 'Partly Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
        humidity: Math.round(Math.random() * 40 + 40),
        windSpeed: Math.round(Math.random() * 15 + 5),
        pressure: Math.round(Math.random() * 50 + 1000),
        visibility: Math.round(Math.random() * 5 + 5),
        feelsLike: Math.round(Math.random() * 30 + 5),
        forecast: Array.from({ length: 5 }, (_, i) => ({
          day: ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'][i],
          high: Math.round(Math.random() * 25 + 15),
          low: Math.round(Math.random() * 15 + 5),
          condition: ['sunny', 'cloudy', 'rainy', 'snowy'][Math.floor(Math.random() * 4)]
        }))
      };
      
      setWeather(mockData);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (description) => {
    const desc = description?.toLowerCase() || '';
    if (desc.includes('sun')) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (desc.includes('rain')) return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (desc.includes('snow')) return <CloudSnow className="w-8 h-8 text-blue-200" />;
    return <Cloud className="w-8 h-8 text-gray-400" />;
  };

  const getForecastIcon = (condition) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;
      case 'snowy': return <CloudSnow className="w-5 h-5 text-blue-200" />;
      default: return <Cloud className="w-5 h-5 text-gray-400" />;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeather(location.trim());
    }
  };

  useEffect(() => {
    fetchWeather('New York'); // Default location
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">Weather Viewer</h1>
          <div className="flex gap-2">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-2 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white/50 outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        {/* Weather Content */}
        {weather && (
          <div className="p-6">
            {/* Current Weather */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{weather.location}</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  {getWeatherIcon(weather.description)}
                  <span className="text-5xl font-bold text-gray-800">{weather.temperature}°C</span>
                </div>
                <p className="text-xl text-gray-600 mb-2">{weather.description}</p>
                <p className="text-gray-500">Feels like {weather.feelsLike}°C</p>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-600">Humidity</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">{weather.humidity}%</span>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-600">Wind Speed</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">{weather.windSpeed} km/h</span>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-gray-600">Pressure</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">{weather.pressure} hPa</span>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium text-gray-600">Visibility</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">{weather.visibility} km</span>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5-Day Forecast</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {weather.forecast.map((day, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium text-gray-800 mb-2">{day.day}</p>
                    <div className="flex justify-center mb-2">
                      {getForecastIcon(day.condition)}
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-800">{day.high}°</p>
                      <p className="text-sm text-gray-500">{day.low}°</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && !weather && (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading weather data...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherViewer;