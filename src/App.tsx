import { Header } from "./components";
import { useWeather } from "./hooks";

function App() {
  const { weather, fetchWeather, error } = useWeather();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Header fetchWeather={fetchWeather} />
      {error && <span className="text-red-500">{error}</span>}

      {weather ? (
        <span>{JSON.stringify(weather)}</span>
      ) : (
        <h2 className="text-center mt-8 text-md">Nenhuma cidade selecionada</h2>
      )}
    </div>
  );
}

export default App;
