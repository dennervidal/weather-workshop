import { memo } from "react";
import { useWeatherForecast } from "../hooks";
import type { Weather } from "../types";
import { WeatherDayCard } from "./WeatherDayCard";

interface WeatherForecastProps {
  weather: Weather;
}

export const WeatherForecast = memo(({ weather }: WeatherForecastProps) => {
  const { selectedDay, handleDayClick, dayNames, sunriseTime, sunsetTime } =
    useWeatherForecast(weather);

  return (
    <div className="mt-8 pl-4 pr-4">
      <h2 className="text-2xl font-bold mb-4">Previsão para 7 dias</h2>
      <div className="flex gap-8 w-full">
        {Array.from({ length: 7 }).map((_, index) => (
          <WeatherDayCard
            key={index}
            index={index}
            selectedDay={selectedDay}
            dayName={dayNames[index]}
            onClick={handleDayClick}
            sunriseTime={sunriseTime}
            sunsetTime={sunsetTime}
            dayForecast={weather.forecast.forecastday?.[index]}
          />
        ))}
      </div>
    </div>
  );
});
