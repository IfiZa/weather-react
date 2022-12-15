import React from "react";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />
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
      </div>
    </div>
  );
}
