import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>Next 6 days</h3>
      <div className="weather-forecast">
        <div className="icon-forecast"></div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Sun 07/08</h5>
              <img
                src="images\icons\cloud.png"
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
              <h5 class="card-next-day">Mon 08/08</h5>
              <img
                src="images\icons\clear-sky.png"
                class="card-img-top"
                alt="Clear Sky"
              />
              <p class="card-next-day-MinMax">15°C / 25°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Tue 09/08</h5>
              <img
                src="images\icons\sunny.png"
                class="card-img-top"
                alt="Sunny"
              />
              <p class="card-next-day-MinMax">18°C / 30°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center border-light mb-3 h-100 opacity-85">
            <div class="card-body">
              <h5 class="card-next-day">Wed 10/08</h5>
              <img
                src="images\icons\sunny.png"
                class="card-img-top"
                alt="Sunny"
              />
              <p class="card-next-day-MinMax">18°C / 30°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
