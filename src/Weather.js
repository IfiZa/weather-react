import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import ExtraData from "./ExtraData.js";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
      realFeel: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
      sunriseUnix: response.data.sys.sunrise * 1000,
      sunsetUnix: response.data.sys.sunset * 1000,
    });
  }

  function search() {
    const apiKey = "4d99823db795b130f19970ddc3b4eb81";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCitySubmit(event) {
    setCity(event.target.value);
  }

  function retrieveCurrentPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "4d99823db795b130f19970ddc3b4eb81";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrieveCurrentPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row row-cols-1 row-cols-sm-2 g-2">
          <div className="col">
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col">
            <ExtraData data={weatherData} />
            <div className="SearchCity">
              <div className="card p-3">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a city name"
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCitySubmit}
                  />
                  <button type="submit" className="btn btn-light p-1 mt-2">
                    Search
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light p-1 mt-2"
                    onClick={getCurrentLocation}
                  >
                    Current
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
