import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

/* 도시 이름 매핑 */
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
  강릉: "Gangneung",
  고양: "Goyang",
  과천: "Gwacheon",
  구리: "Guri",
  군산: "Gunsan",
  김해: "Gimhae",
  김포: "Gimpo",
  남양주: "Namyangju",
  목포: "Mokpo",
  미사리: "Misari",
  보령: "Boryeong",
  부천: "Bucheon",
  사천: "Sacheon",
  성남: "Seongnam",
  속초: "Sokcho",
  안동: "Andong",
  안산: "Ansan",
  안양: "Anyang",
  양산: "Yangsan",
  여수: "Yeosu",
  원주: "Wonju",
  익산: "Iksan",
  정읍: "Jeongeup",
  제천: "Jecheon",
  진주: "Jinju",
  천안: "Cheonan",
  춘천: "Chuncheon",
  태백: "Taebaek",
  파주: "Paju",
  포항: "Pohang",
  영등포: "Yeongdeungpo",
};

/* 날씨 상태 멘트  */
const getWeatherComment = (description: string) => {
  if (description.includes("비")) return "우산 필수 !!";
  if (description.includes("맑음")) return "햇살 가득한 하루☀️ ";
  if (description.includes("흐림") || description.includes("구름"))
    return "약간 우중충하네 ☁️";
  if (description.includes("눈")) return "우와 눈이 와요 ⛄";
  return "행복한 하루 보내길🍀✨";
};

/* 타입 정의 */
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

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

/* 메인 컴포넌트  */
function App() {
  /* 📌 상태 정의 */
  const [city, setCity] = useState("서울");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const cities = Object.keys(cityMap);
  const API_KEY = "be18980909483aae6aeb8c3edc66a9c4";

  /*날씨 API 호출 */
  const fetchWeather = async () => {
    const translatedCity = cityMap[city] || city;
    setIsLoading(true);
    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${translatedCity}&appid=${API_KEY}&units=metric&lang=kr`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${translatedCity}&appid=${API_KEY}&units=metric&lang=kr`
        ),
      ]);
      setWeather(currentRes.data);

      const now = new Date();
      const filtered = forecastRes.data.list.filter(
        (item: ForecastItem) => new Date(item.dt_txt) > now
      );
      setForecast(filtered.slice(0, 8));

      setErrorMsg("");
    } catch (err: any) {
      setWeather(null);
      setForecast([]);
      if (err.response?.status === 404) {
        setErrorMsg("검색 결과를 찾을 수 없습니다. 다시 입력해주세요.");
      } else {
        setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  /* 검색 엔터터 */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSuggestions([]);
      fetchWeather();
    }
  };

  /* 자동완성 기능 */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCity(input);
    const filtered = cities.filter((c) => c.includes(input));
    setSuggestions(input === "" ? [] : filtered);
  };

  const handleSuggestionClick = (selectedCity: string) => {
    setCity(selectedCity);
    setSuggestions([]);
    fetchWeather();
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  /*  렌더링 */
  return (
    <div className="container">
      <h1 className="header">오늘의 날씨는?</h1>

      {/*  검색창 */}
      <div className="search-box">
        <input
          type="text"
          placeholder="도시를 입력하세요"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            setSuggestions([]);
            fetchWeather();
          }}
          className="search-button"
        >
          🔍
        </button>

        {/* 자동완성창 */}
        {suggestions.length > 0 && (
          <ul className="suggestion-list">
            {suggestions.map((item) => (
              <li
                key={item}
                onClick={() => handleSuggestionClick(item)}
                className="suggestion-item"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 에러 메시지 or 로딩 상태 */}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {isLoading && !errorMsg && (
        <p className="loading">날씨 정보를 불러오는 중...</p>
      )}

      <div className="main-content">
        {/*  왼쪽 날씨상태 카드 */}
        {weather && (
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

        {/* 중앙 날씨 카드 */}
        {weather && (
          <div className="weather-card">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="날씨 아이콘"
            />
            <h3>
              {new Date().toLocaleDateString("ko-KR", {
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </h3>
            <p className="temperature">온도: {weather.main.temp}°C</p>
            <p className="feels-like">
              🌡️ 체감 온도: {weather.main.feels_like}°C
            </p>
            <div className="details-box">
              <p>💧습도: {weather.main.humidity}%</p>
              <p>🌀바람: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}

        {/* 오른쪽 시간별 카드 */}
        {forecast.length > 0 && (
          <div className="forecast-card">
            <h3>시간별 예보</h3>
            <div className="forecast-list">
              {forecast.map((item) => (
                <div key={item.dt} className="forecast-item">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="아이콘"
                  />
                  <span>{new Date(item.dt_txt).getHours()}시</span>
                  <span>{item.main.temp}°</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
