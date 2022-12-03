import React from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />
        <hr />
        <Forecast />
      </div>

      <div className="hostingInfo">
        <a
          href="https://github.com/IfiZa/weather-react"
          alt="Github repository link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub open source code{" "}
        </a>
        by IfiZamb <br />
        Doodle vector by{" "}
        <a
          href="https://www.freepik.com/author/rawpixel-com"
          target="_blank"
          alt="Author link"
          className="vector-source"
          rel="noreferrer"
        >
          Rawpixel
        </a>
      </div>
    </div>
  );
}
