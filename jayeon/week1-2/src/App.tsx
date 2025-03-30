import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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

const getWeatherComment = (description: string) => {
  if (description.includes("비")) return "우산 챙겼어 ?";
  if (description.includes("맑음")) return "햇살 가득 좋은 하루!";
  if (description.includes("흐림") || description.includes("구름"))
    return "약간 우중충하네 ☁️";
  if (description.includes("눈")) return "우와 눈이 와요 ⛄";
  return "오늘도 행복한 하루 보내길 🌈";
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

  const fetchWeather = async () => {
    const translatedCity = cityMap[city] || city;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: translatedCity,
            appid: "be18980909483aae6aeb8c3edc66a9c4",
            units: "metric",
            lang: "kr",
          },
        }
      );

      setWeather(response.data);
      setErrorMsg("");
    } catch (error: any) {
      setWeather(null);
      if (error.response?.status === 404) {
        setErrorMsg("검색 결과를 찾을 수 없습니다. 다시 입력해주세요.");
      } else {
        setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
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

      <div className="main-content">
        {/* 왼쪽 - 날씨 카드2 */}
        {weather && !errorMsg && !isLoading && (
          <div className="left-card">
            <div className="frog-icon">🐸</div>
            <div className="speech-bubble">
              <p>
                <strong>상태:</strong> {weather.weather[0].description}
              </p>
              <p>{getWeatherComment(weather.weather[0].description)}</p>
            </div>
          </div>
        )}

        {/* 가운데 - 날씨 카드1 */}
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
                🌡️ 체감 온도: {weather.main.feels_like}°C
              </span>
            </p>

            <div className="details-box">
              <p>습도: {weather.main.humidity}%</p>
              <p>바람: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
