import { useWeatherForecast } from "../hooks";
import type { Weather } from "../types";
import { WeatherChart } from "./WeatherChart";
import { WeatherDayCard } from "./WeatherDayCard";

interface WeatherForecastProps {
  weather: Weather;
}

export const WeatherForecast = ({ weather }: WeatherForecastProps) => {
  const {
    selectedDay,
    handleDayClick,
    dayNames,
    sunriseTime,
    sunsetTime,
    rainChanceData,
    humidityData,
    windSpeedData,
  } = useWeatherForecast(weather);

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-2xl font-bold">Previsão para 7 dias</h2>
      <div className="flex flex-row gap-4 w-full">
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
        <WeatherChart
          title="Chance de Chuva por Hora"
          data={rainChanceData}
          chartType="bar"
          className="flex-1"
        />
      </div>
      <div className="flex gap-x-4">
        <WeatherChart
          title="Velocidade do Vento por Hora"
          data={windSpeedData}
          chartType="line"
          className="flex-1"
        />
        <WeatherChart
          title="Umidade por Hora"
          data={humidityData}
          chartType="area"
          className="flex-1"
        />
      </div>
    </div>
  );
};
