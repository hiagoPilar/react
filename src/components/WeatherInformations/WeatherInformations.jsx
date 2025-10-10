import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  console.log(weather);

  // Verificação completa antes de renderizar os dados
  if (!weather || !weather.weather || !weather.weather[0]) {
    return (
      <div>
        <p>Digite uma cidade para ver as informações do clima</p>
      </div>
    );
  }

  return (
    <div className="weather-container">
      <h2>
        {weather.name}, {weather.sys?.country}
      </h2>

      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>

      <div>
        <p className="description">
          <strong>Condição:</strong> {weather.weather[0].description}
        </p>
      </div>

      <div className="details">
        <p>
          <strong>Sensação térmica:</strong>{" "}
          {Math.round(weather.main.feels_like)}
          °C
        </p>
        <p>
          <strong>Umidade:</strong> {weather.main.humidity}%
        </p>

        <p>
          <strong>Vento:</strong> {weather.wind?.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherInformations;
