import React from "react";

import "./ExtraData.css";

export default function ExtraData(props) {
  return (
    <div className="ExtraData">
      <div className="card p-3 mb-2">
        <div className="card-body p-0 text-center">
          <div className="row row-cols-2 row-cols-md-3 g-3">
            <div className="col">
              Real Feel
              <br />
              <span className="real-feel">28°C</span>
            </div>
            <div className="col">
              Humidity
              <br />
              <span className="humidity">70%</span>
            </div>
            <div className="col">
              Wind
              <br />
              <span className="wind">21 m/s</span>
            </div>
            <div className="col">
              Pressure
              <br />
              <span className="pressure">1000 hPa</span>
            </div>
            <div className="col">
              Sunrise
              <br />
              <span className="sunrise">06:10</span>
            </div>
            <div className="col">
              Sunset
              <br />
              <span className="sunset">20:59</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
