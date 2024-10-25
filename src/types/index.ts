export type Suggestion = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type WeatherData = {
  location: string;
  forecast: any;
};

export interface HeaderProps {
  fetchWeather: (latitude: number, longitude: number) => void;
}
