import React from "react";
import UpdatedDate from "./UpdatedDate.js";
import WeatherIcon from "./WeatherIcon.js";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card p-3 h-100 weather-main">
        <h1>
          <span className="city">{props.data.city}</span>
          <span className="country">{props.data.country}</span>
        </h1>
        <UpdatedDate date={props.data.date} />
        <div className="d-flex weather-temperature">
          <WeatherIcon code={props.data.icon} />
          <div>
            <strong className="temperature">{props.data.temperature}</strong>
            <span className="unit"> °C</span>
          </div>
        </div>
        <ul>
          <li className="weather-description">{props.data.description}</li>
          <br />
          <li className="min-max-temp">
            Min {props.data.tempMin}°C / Max {props.data.tempMax}°C
          </li>
        </ul>
      </div>
    </div>
  );
}
