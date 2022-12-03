import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="card p-3 h-100">
          <h1>
            <span className="city">{weatherData.city}</span>
            <span className="country">{weatherData.country}</span>
          </h1>
          <small>
            {" "}
            Last updated: <span>Wed 30 Nov 2022, 16:23</span>{" "}
          </small>
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              className="icon-current"
            />
            <div>
              <strong className="temperature">{weatherData.temperature}</strong>
              <span className="unit"> °C</span>
            </div>
          </div>
          <ul>
            <li className="weather-description">{weatherData.description}</li>
            <br />
            <li className="min-max-temp">
              Min {weatherData.tempMin}°C / Max {weatherData.tempMax}°C
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "4d99823db795b130f19970ddc3b4eb81";
    const city = "Athens";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
