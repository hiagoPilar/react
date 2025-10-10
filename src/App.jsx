import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformations5Days from "./components/WeatherInformations5Days/WeatherInformations5Days";

function App() {
  const [weather, setWeather] = useState([]);
  const [weather5Days, setWeather5Days] = useState([]);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;

    const key = "acaa2e9a8cd13c5c84ff14d04c1bd152";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiData = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDays);

    setWeather5Days(apiInfoFiveDays.data);
    setWeather(apiData.data);
  }

  return (
    <div className="container">
      <h1>Clima Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
