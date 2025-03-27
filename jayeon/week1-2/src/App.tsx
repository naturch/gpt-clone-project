import { useEffect, useState } from "react";
import "./App.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=be18980909483aae6aeb8c3edc66a9c4&units=metric&lang=kr`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("날씨 정보를 불러오는 중 오류 발생:", err));
  }, []);

  return (
    <div className="container">
      <header className="header">오늘의 날씨는?</header>

      <div className="search-box">
        <input type="text" placeholder="도시를 입력하세요..." disabled />
      </div>

      {weather ? (
        <div className="weather-card">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="날씨 아이콘"
          />
          <h2>{weather.name}</h2>
          <p>온도: {weather.main.temp}°C</p>
          <p>상태: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="loading">날씨 정보를 불러오는 중...</p>
      )}
    </div>
  );
}

export default App;
