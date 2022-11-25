import React from "react";
import Weather from "./Weather.js";
import ExtraData from "./ExtraData.js";
import SearchCity from "./SearchCity.js";
import Forecast from "./Forecast.js";
import HostingInfo from "./HostingInfo.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 g-2">
          <div className="col">
            <Weather />
          </div>
          <div className="col">
            <ExtraData />
            <SearchCity />
          </div>
        </div>
        <hr />

        <Forecast />
      </div>
      <HostingInfo />
    </div>
  );
}
