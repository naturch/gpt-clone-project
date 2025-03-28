import { useEffect, useState } from "react";
import "./App.css";

// 한국어 도시 이름 → 영어 도시 이름 매핑
const cityMap: Record<string, string> = {
  서울: "Seoul",
  부산: "Busan",
  대구: "Daegu",
  인천: "Incheon",
  광주: "Gwangju",
  대전: "Daejeon",
  울산: "Ulsan",
  세종: "Sejong",
  수원: "Suwon",
  창원: "Changwon",
  청주: "Cheongju",
  전주: "Jeonju",
  제주: "Jeju",
};

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

function App() {
  const [city, setCity] = useState("서울");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    const translatedCity = cityMap[city] || city;
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${translatedCity}&appid=be18980909483aae6aeb8c3edc66a9c4&units=metric&lang=kr`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          setWeather(null);
          setErrorMsg("검색 결과를 찾을 수 없습니다. 다시 입력해주세요.");
        } else {
          setWeather(data);
          setErrorMsg("");
        }
      })
      .catch(() => {
        setWeather(null);
        setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
      })
      .finally(() => setIsLoading(false));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="container">
      <h1 className="header">오늘의 날씨는?</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="도시를 입력하세요"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather} className="search-button">
          🔍
        </button>
      </div>

      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {isLoading && !errorMsg && (
        <p className="loading">날씨 정보를 불러오는 중...</p>
      )}

      {weather && !errorMsg && !isLoading && (
        <div className="weather-card">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="날씨 아이콘"
          />
          <h2>{weather.name}</h2>
          <p className="temperature">
            온도: {weather.main.temp}°C{" "}
            <span className="feels-like">
              {" "}
              🌡️체감 온도: {weather.main.feels_like}°C
            </span>
          </p>
          <p>상태: {weather.weather[0].description}</p>
          <div className="details-box">
            <p>습도: {weather.main.humidity}%</p>
            <p>바람: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
