import axios from "axios";
import { useState } from "react";
import type { Weather } from "../types";

export const useWeather = () => {
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const result = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`
      );
      setWeather(result.data);
    } catch (e) {
      setError("Erro ao buscar clima");
      console.error("Error:", e);
    }
  };

  return {
    error,
    weather,
    fetchWeather,
  };
};
