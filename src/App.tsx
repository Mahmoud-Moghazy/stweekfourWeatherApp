import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Current, ForecastDay, Hour, Location } from "./constans/interfaces";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import CurrentComponent from "./components/Current";

const API_KEY = "c1fb5f563197418db17125539242110";
const API_URL = "/api/v1/forecast.json";

const App: React.FC = () => {
  const [city, setCity] = useState<string>("cairo");
  const [current, setCurrent] = useState<Current | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [forecastDay, setForecastDay] = useState<Array<ForecastDay> | null>(
    null
  );
  const [hour, setHour] = useState<Array<Hour> | null>(null);
  const [isDay, setIsDay] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          q: city,
          days: 7,
          aqi: "yes",
          alerts: "no",
        },
      });

      if (response.status === 200) {
        setCurrent(response.data.current);
        setLocation(response.data.location);
        setForecastDay(response.data.forecast.forecastday || []); // Ensuring forecastday is set to an empty array if undefined
        setHour(response.data.forecast.forecastday?.[0]?.hour || []); // Ensuring hour is set to an empty array if undefined
        setIsDay(response.data.current.is_day);
        setError(null);
      }
    } catch (error) {
      // Ensure error is an Axios error before accessing response
      if (axios.isAxiosError(error)) {
        setError(error?.response?.data?.error?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <main className={`h-screen relative ${isDay ? "day" : "night"}`}>
      <div className="max-w-2xl mx-auto px-2 py-10 flex flex-col gap-5">
        <div className="flex justify-center">
          <input
            id="search_by_city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchWeather();
            }}
            className="bg-transparent border rounded-s-full border-e-0 py-2 px-5 outline-none text-white placeholder:text-neutral-200"
            placeholder="Enter a city"
          />
          <button
            className="text-white border rounded-e-full border-s-0 flex items-center justify-center py-2 px-4"
            onClick={fetchWeather}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {location && current && (<CurrentComponent location={location} current={current} />)}
        <div className="flex flex-col gap-y-5">
          {hour && <HourlyForecast hour={hour} />}
          {forecastDay && <DailyForecast forecastday={forecastDay} />}
        </div>
      </div>
    </main>
  );
};

export default App;
