import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function showTemp(response) {
    console.log(response.data);

    setWeather({
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      hum: response.data.main.humidity,
      desc: response.data.weather[0].description,
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "38c2f49f72047d7507fd93ab9ed5a5f3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Enter a city"
        aria-label="Search"
        autoFocus="on"
        onChange={updateCity}
      />
      <button className="btn-search" type="submit">
        Search
      </button>
      <button className="btn-secondary" type="button">
        Current
      </button>
    </form>
  );

  return (
    <div className="Weather">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="card">
              <div className="card-body">
                <div>{form}</div>

                <div className="prediction-container">
                  <div className="overview">
                    <text>{weather.temp}</text>
                    <h2>{weather.city}</h2>
                  </div>

                  <div className="row">
                    <div className="col-7">
                      <div className="clearfix weather-temperature">
                        <h1>{weather.temp}</h1>
                        <h3>°C</h3>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="weather-details">
                        <ul>
                          <li>Humidity: {weather.hum} %</li>
                          <li>Wind: {weather.wind} km/h</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="line"></div>

                  <div className="row">
                    <div className="col-12">
                      <div className="weather-description">
                        <div className="col-1">
                          <img
                            src={weather.img}
                            alt="partly cloudy"
                            className="float-left"
                            width="80px"
                          />
                        </div>
                        <div className="col-11">
                          <h3>{weather.desc}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="weather-forecast">
                    <div className="row">
                      <div className="col-2">
                        <div className="weather-forecast-date">
                          <text>
                            <strong>Thu</strong>
                          </text>
                        </div>
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="42"
                        />
                        <div className="weather-forecast-temperatures">
                          <text>
                            <strong>
                              <span className="weather-forecast-temperature-max">
                                18°
                              </span>
                            </strong>
                            <span className="weather-forecast-temperature-min">
                              12°
                            </span>
                          </text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
