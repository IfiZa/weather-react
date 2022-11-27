import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>Next 6 days</h3>
      <div className="weather-forecast">
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Sun 10/11</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                class="card-img-top"
                alt="Cloudy"
              />
              <p class="card-next-day-MinMax">15°C / 24°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Mon 11/11</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                class="card-img-top"
                alt="Cloudy"
              />
              <p class="card-next-day-MinMax">15°C / 25°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Tue 12/11</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                class="card-img-top"
                alt="Cloudy"
              />
              <p class="card-next-day-MinMax">18°C / 30°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Wed 13/11</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                class="card-img-top"
                alt="Cloudy"
              />
              <p class="card-next-day-MinMax">18°C / 30°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
