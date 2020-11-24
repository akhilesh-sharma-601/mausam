import React, { useState } from "react";

import "./App.css";
//console.log(process.env.REACT_APP_KEY);


const api = {
  //key: "7263d85dbccfa8d66423dd26691c75d1",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const key = process.env.REACT_APP_KEY;

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://${api.base}weather?q=${query}&units=metric&APPID=${key}`)
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
      <h2> Mausam </h2>
      <main>
        <div className="searchbox">
          <input
            type="text"
            name="search"
            className="search-bar"
            placeholder="   search"
            className="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                <i class="fas fa-map-marker-alt"></i> {weather.name},{" "}
                {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
              <h4 className="weather-desc">{weather.weather[0].description}</h4>
            </div>
            <div className="description">
              <h4 className="max-temp">
                <i className="icon" class="fas fa-temperature-high"></i> max
                temp : {weather.main.temp_max} °c
              </h4>
              <h4 className="min-temp">
                <i className="icon" class="fas fa-temperature-low"></i> min temp
                : {weather.main.temp_min} °c
              </h4>
              <h4 className="humidity">
                <i className="icon" class="fas fa-tint-slash"></i> humidity :{" "}
                {weather.main.humidity} %
              </h4>
              <h4 className="wind">
                <i className="icon" class="fas fa-wind"></i> wind :{" "}
                {weather.wind.speed} mph
              </h4>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
        <p className="author">Developed By Akhilesh Sharma</p>
      <p className="provider">Powered By : Dark Sky </p>
        </div>
      </main>
     
    </div>
  );
}

export default App;
