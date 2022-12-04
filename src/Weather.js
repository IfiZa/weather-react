import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import ExtraData from "./ExtraData.js";
import SearchCity from "./SearchCity.js";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
      realFeel: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row row-cols-1 row-cols-sm-2 g-2">
          <div className="col">
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col">
            <ExtraData data={weatherData} />
            <SearchCity />
          </div>
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
