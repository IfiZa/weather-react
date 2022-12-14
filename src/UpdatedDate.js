import React from "react";

export default function UpdatedDate(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[props.date.getDay()];
  const date = props.date.getDate();
  const hours = String(props.date.getHours()).padStart(2, "0");
  const minutes = String(props.date.getMinutes()).padStart(2, "0");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[props.date.getMonth()];
  return (
    <div className="UpdatedDate">
      <small>
        {" "}
        Last updated:{" "}
        <span>
          {day} {date} {month}, {""} {hours}:{minutes}
        </span>{" "}
      </small>
    </div>
  );
}
