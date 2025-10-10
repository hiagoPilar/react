import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "acaa2e9a8cd13c5c84ff14d04c1bd152";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const data = await axios.get(url);

    console.log(data);
  }

  return (
    <>
      <h1>Clima Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
    </>
  );
}

export default App;
