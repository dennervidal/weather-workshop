import { useState } from "react";
import type { Weather } from "../types";
import { formatToBrasiliaTime, getCurrentDayData, getDayNames } from "../utils";

export const useWeatherForecast = (weather: Weather) => {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayClick = (index: number) => setSelectedDay(index);

  const dayNames = getDayNames(weather);

  const sunriseTime = formatToBrasiliaTime(
    weather.forecast.forecastday?.[selectedDay]?.astro?.sunrise || ""
  );
  const sunsetTime = formatToBrasiliaTime(
    weather.forecast.forecastday?.[selectedDay]?.astro?.sunset || ""
  );

  const rainChanceData = getCurrentDayData(
    weather,
    selectedDay,
    "chance_of_rain"
  );

  const windSpeedData = getCurrentDayData(weather, selectedDay, "wind_kph");

  const humidityData = getCurrentDayData(weather, selectedDay, "humidity");

  return {
    selectedDay,
    handleDayClick,
    dayNames,
    sunriseTime,
    sunsetTime,
    rainChanceData,
    windSpeedData,
    humidityData,
  };
};
