import { IoIosSearch } from "react-icons/io";
import { useHeader } from "../hooks";
import type { HeaderProps } from "../types";

export const Header = ({ fetchWeather }: HeaderProps) => {
  const {
    refs,
    setIsOpen,
    handleAddress,
    address,
    floatingStyle,
    isOpen,
    getFloatingProps,
    suggestions,
    handleSuggestionClick,
    error,
  } = useHeader({ fetchWeather });

  return (
    <header className="flex flex-row items-center p-4 bg-gray-800 rounded-lg relative justify-between">
      <h1 className="text-xl font-bold">Weather Forecast</h1>
      <div
        className="input input-bordered flex items-center gap-2 w-full max-w-[492px]"
        ref={refs.setReference}
      >
        <input
          onClick={() => setIsOpen((prev) => !prev)}
          type="text"
          placeholder="Pesquisa..."
          onChange={handleAddress}
          value={address}
          className="grow py-2 px-3 rounded"
        />
        <IoIosSearch className="text-gray-400 hover:text-white" />
      </div>
      {isOpen ? (
        <ul
          className="absolute z-10 bg-white text-black rounded mt-1 w-full max-w-[492px] shadow-lg"
          style={floatingStyle}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {`${suggestion.name}-${suggestion.country}`}
              </li>
            ))
          ) : (
            <span className="text-red-500">{error}</span>
          )}
        </ul>
      ) : null}
    </header>
  );
};
