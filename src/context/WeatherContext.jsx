/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getWeather } from "../services/apiWeather";
import { useSearch } from "./SearchContext";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { chosenLoc } = useSearch();

  useEffect(() => {
    async function Data() {
      setIsLoading(true);
      const data = await getWeather(chosenLoc);
      setWeather(data);
      setIsLoading(false);
    }
    Data();
  }, [chosenLoc]);

  function handleClick(i) {
    setIndex(() => {
      setIndex(i);
    });
  }
  return (
    <WeatherContext.Provider
      value={
        isLoading
          ? { isLoading }
          : {
              location: weather.name,
              timezone: weather.timezone,
              isday: weather.weatherData.current.is_day,
              current: weather.weatherData.minutely_15.temperature_2m.at(index),
              last_time: weather.weatherData.hourly.time.at(0).split("T").at(1),

              sunrise: weather.weatherData.daily.sunrise,
              sunset: weather.weatherData.daily.sunset,
              max: weather.weatherData.daily.temperature_2m_max,
              min: weather.weatherData.daily.temperature_2m_min,
              dates: weather.weatherData.daily.time,
              codes: weather.weatherData.daily.weather_code,

              uv_index: weather.weatherData.hourly.uv_index,
              time: weather.weatherData.minutely_15.time,
              hourly_temp: weather.weatherData.minutely_15.temperature_2m,
              wind_speed:
                weather.weatherData.minutely_15.wind_speed_10m.at(index),
              relative_humidity:
                weather.weatherData.minutely_15.relative_humidity_2m.at(index),
              precipitation_probability:
                weather.weatherData.minutely_15.precipitation.at(index),
              isDay: weather.weatherData.hourly.is_day.at(0),
              isLoading,
              index,
              handleClick,
            }
      }
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("WeatherContext was used outside of DarkModeProvider");
  return context;
}

export { useWeather, WeatherProvider };
