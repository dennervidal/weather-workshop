import { format, parse } from "date-fns";

export const getDayNames = (weather: any) => {
  return weather.forecast.forecastday.map((e: any) => {
    const data = new Date(e.date);
    const diaDaSemana = data.getDay();
    const dias = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ];
    return dias[diaDaSemana];
  });
};

export const formatToBrasiliaTime = (timeString: string) => {
  return format(parse(timeString, "h:mm a", new Date()), "HH:mm");
};
