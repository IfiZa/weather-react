import React from "react";

import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className="SearchCity">
      <div className="card p-3">
        <form id="search-form">
          <input
            type="text"
            className="form-control"
            placeholder="Type a city name"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-light p-1 mt-2">
            Search
          </button>
          <button type="submit" className="btn btn-light p-1 mt-2">
            Current
          </button>
        </form>
      </div>
    </div>
  );
}
