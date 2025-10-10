import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  // Verificação IMPORTANTE para evitar erro
  if (!weather5Days || !weather5Days.list) {
    return (
      <div className="weather-container">
        <p>Carregando previsão para os próximos 5 dias...</p>
      </div>
    );
  }

  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Previsão próximos 5 dias</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p>{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            <p>
              {Math.round(forecast.main.temp_min)}°C /{" "}
              {Math.round(forecast.main.temp_max)}°C
            </p>
            <p>{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5Days;
