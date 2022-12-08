import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const lat = props.coordinates.lat;
  const lon = props.coordinates.lon;
  const apiKey = "4d99823db795b130f19970ddc3b4eb81";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="weather-forecast">
        <div className="row row-cols-2  row-cols-md-4 g-2">
          <div className="col">
            <div className="card text-center border-light mb-3 h-100 opacity-85">
              <div className="card-body">
                <h5 className="card-next-day">Thu 01/12</h5>
                <WeatherIcon code="01d" size={40} />
                <p className="card-next-day-MinMax">15°C / 24°C</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center border-light mb-3 h-100 opacity-85">
              <div className="card-body">
                <h5 className="card-next-day">Fri 02/12</h5>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  className="card-img-top"
                  alt="Cloudy"
                />
                <p className="card-next-day-MinMax">15°C / 25°C</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center border-light mb-3 h-100 opacity-85">
              <div className="card-body">
                <h5 className="card-next-day">Sat 03/12</h5>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  className="card-img-top"
                  alt="Cloudy"
                />
                <p className="card-next-day-MinMax">18°C / 30°C</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center border-light mb-3 h-100 opacity-85">
              <div className="card-body">
                <h5 className="card-next-day">Sun 04/12</h5>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  className="card-img-top"
                  alt="Cloudy"
                />
                <p className="card-next-day-MinMax">18°C / 30°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
