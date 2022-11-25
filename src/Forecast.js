import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>Next 6 days</h3>
      <div className="weather-forecast">
        <div className="icon-forecast"></div>
      </div>
    </div>
  );
}
