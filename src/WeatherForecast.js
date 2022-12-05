import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="weather-forecast">
        <div className="row row-cols-2  row-cols-md-4 g-2">
          <div className="col">
            <div className="card text-center border-light mb-3 h-100 opacity-85">
              <div className="card-body">
                <h5 className="card-next-day">Thu 01/12</h5>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  className="card-img-top"
                  alt="Cloudy"
                />
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