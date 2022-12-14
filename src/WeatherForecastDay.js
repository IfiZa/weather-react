import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function minTemp() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function maxTemp() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function nextDay() {
    const newDate = new Date(props.data.dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[newDate.getDay()];
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;

    return `${day} ${date}/${month}`;
  }

  return (
    <div>
      <div className="card text-center border-light mb-3 h-100 opacity-85">
        <div className="card-body">
          <h5 className="card-next-day">{nextDay()}</h5>
          <WeatherIcon code={props.data.weather[0].icon} size={40} />
          <p className="card-next-day-MinMax">
            {minTemp()}° / {maxTemp()}°
          </p>
        </div>
      </div>
    </div>
  );
}
