import React, { useState } from "react";

import "./App.css";

const api = {
  key: "7263d85dbccfa8d66423dd26691c75d1",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  const { query, setQuery } = useState("");
  const { weather, setWeather } = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="App">
      <h1> mosam App</h1>
      <main>
        <div className="searchbox">
          <input
            type="text"
            name="search"
            placeholder="   search"
            className="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">Agra</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{`30°c `}</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;