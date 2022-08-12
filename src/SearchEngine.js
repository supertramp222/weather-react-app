import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showTemp(response) {
    console.log(response.data);

    setWeather({
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      hum: response.data.main.humidity,
      desc: response.data.weather[0].description,
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoaded(true);
    let apiKey = "38c2f49f72047d7507fd93ab9ed5a5f3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="SerachEngine">
        {form}
        <ul>
          <li>Temperature: {weather.temp}°C</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.hum} %</li>
          <li>Description: {weather.desc}</li>
          <img src={weather.img} alt="Weather Icon" />
        </ul>
      </div>
    );
  } else {
    return <div className="SerachEngine">{form}</div>;
  }
}
