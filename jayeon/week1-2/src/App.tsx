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
  const cityDict: { [key: string]: string } = {
    서울: "Seoul",
    부산: "Busan",
    대구: "Daegu",
    인천: "Incheon",
    광주: "Gwangju",
    대전: "Daejeon",
    울산: "Ulsan",
    수원: "Suwon",
    창원: "Changwon",
    고양: "Goyang",
  };
  const [city, setCity] = useState("서울");
  const [weather, setWeather] = useState<WeatherData | null>(null); //날씨 데이터 저장
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  const fetchWeather = () => {
    setIsLoading(true);
    const englishCity = cityDict[city] || city;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${englishCity}&appid=be18980909483aae6aeb8c3edc66a9c4&units=metric&lang=kr`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == "404") {
          setWeather(null);
          setErrorMsg(
            "검색 결과를 찾을 수 없습니다. 제대로 입력했는지 확인해주세요."
          );
        } else {
          setWeather(data);
          setErrorMsg("");
        }
      })
      .catch((err) => {
        setWeather(null);
        setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
        console.error("날씨 정보를 불러오는 중 오류 발생", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //페이지 로드시 첫 실행
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <header className="header">오늘의 날씨는?</header>

      <div className="search-box">
        <input
          type="text"
          placeholder="도시를 입력하세요 !"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search=box"
        />
      </div>
      {isLoading && <p className="loading">날씨 정보를 불러오는 중 ..</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      {weather && !errorMsg && !isLoading && (
        <div className="weather-card">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="날씨 아이콘"
          />
          <h2>{weather.name}</h2>
          <p>온도: {weather.main.temp}°C</p>
          <p>상태: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
