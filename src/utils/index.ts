import { format, parse } from "date-fns";
import type { ChartType, HourEntity, Weather } from "../types";

const DIAS = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export const getDayNames = (weather: any) => {
  return weather.forecast.forecastday.map((e: any) => {
    const data = new Date(e.date);
    const diaDaSemana = data.getDay();
    return DIAS[diaDaSemana];
  });
};

export const formatToBrasiliaTime = (timeString: string) => {
  return format(parse(timeString, "h:mm a", new Date()), "HH:mm");
};

export const getCurrentDayData = (
  weather: Weather,
  index: number,
  dataType: keyof Pick<HourEntity, "chance_of_rain" | "wind_kph" | "humidity">
) => {
  return (
    weather.forecast.forecastday?.[index]?.hour?.map(
      (hourData: HourEntity) => hourData[dataType]
    ) || []
  );
};

export const getYAxisTitle = (chartType: ChartType) => {
  switch (chartType) {
    case "bar":
      return "Chance de Chuva (%)";
    case "line":
      return "Velocidade do Vento (km/h)";
    case "area":
      return "Umidade (%)";
    default:
      return "";
  }
};

export const getChartOptions = (chartType: ChartType) => ({
  chart: { type: chartType, height: 250 },
  xaxis: {
    categories: Array.from(
      { length: 24 },
      (_, i) => `${String(i).padStart(2, "0")}:00`
    ),
    labels: { style: { fontSize: "10px" } },
  },
  yaxis: {
    title: { text: getYAxisTitle(chartType) },
  },
  dataLabels: { enabled: false },
  tooltip: { enabled: true, theme: "dark" },
});
