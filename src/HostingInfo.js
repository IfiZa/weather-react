import React from "react";

import "./HostingInfo.css";

export default function HostingInfo() {
  return (
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
  );
}
