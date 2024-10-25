import axios from "axios";
import { useState, type ChangeEvent } from "react";
import type { Suggestion } from "../types";
import { useFloatingLogic } from "./useFloatingLogic";

export const useHeader = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const { isOpen, setIsOpen, x, y, strategy, refs, getFloatingProps } =
    useFloatingLogic({
      placement: "bottom-start",
    });

  const fetchLocation = async (address: string) => {
    try {
      const result = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${address}&lang=pt`
      );
      setSuggestions(result.data.results ?? []);
      setError("");
    } catch (e) {
      setError("Erro ao buscar localização");
      console.error("Error:", e);
    }
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const _addr = e.target.value;
    setAddress(_addr);
    if (_addr.length > 2) {
      fetchLocation(_addr);
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setIsOpen(false);
    setAddress(suggestion.name);
  };

  const floatingStyle = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  };

  return {
    address,
    handleSuggestionClick,
    handleAddress,
    error,
    suggestions,
    isOpen,
    setIsOpen,
    refs,
    getFloatingProps,
    floatingStyle,
  };
};
