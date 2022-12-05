import React from "react";
import UpdatedDate from "./UpdatedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card p-3 mb-2 weather-main">
        <h1>
          <span className="city">{props.data.city}</span>
          <span className="country">{props.data.country}</span>
        </h1>
        <UpdatedDate date={props.data.date} />
        <div className="d-flex weather-temperature">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="row cols-2">
          <ul className="col-6 col-md-7 ">
            <li className="weather-description">{props.data.description}</li>
            <br />
            <li className="min-max-temp">
              Min {props.data.tempMin}°C / Max {props.data.tempMax}°C
            </li>
          </ul>
          <ul className="col-6 col-md-5">
            <li className="humidity">
              Humidity:
              <span className="humidity">{props.data.humidity} %</span>
            </li>
            <br />
            <li className="wind">
              Wind:
              <span className="humidity">{props.data.wind} m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
