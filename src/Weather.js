import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card p-3 h-100">
        <h1>
          <span className="city">Brussels</span>
          <span className="country">BE</span>
        </h1>
        <small>
          {" "}
          Last updated: <span>Wed 09 Nov 2022, 16:23</span>{" "}
        </small>
        <div className="d-flex weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
            className="icon-current"
          />
          <div>
            <strong className="temperature">12</strong>
            <span className="unit"> °C</span>
          </div>
        </div>
        <ul>
          <li className="weather-description">Cloudy</li>
          <br />
          <li className="min-max-temp">Min 16°C / Max 28°C</li>
        </ul>
      </div>
    </div>
  );
}
