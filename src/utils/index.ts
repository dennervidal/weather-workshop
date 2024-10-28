import { format, parse } from "date-fns";

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
