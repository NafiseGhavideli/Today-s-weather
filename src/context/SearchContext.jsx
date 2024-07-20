/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getLocation } from "../services/apiWeather";

const SeachContext = createContext();

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [chosenLoc, setChosenLoc] = useState({
    name: "",
    latitude: "",
    longitude: "",
    timezone: "",
  });
  const [cities, setCities] = useState([]);
  const [isLoadingCities, setIsLoadingCities] = useState(true);

  useEffect(() => {
    async function Location() {
      setIsLoadingCities(true);
      if (query.length < 2) return;
      const data = await getLocation(query);
      setCities(data.results);
    }
    Location();
  }, [query]);

  return (
    <SeachContext.Provider
      value={{
        chosenLoc,
        cities: cities,
        query,
        setQuery,
        setChosenLoc,
        isLoadingCities,
        setIsLoadingCities,
      }}
    >
      {children}
    </SeachContext.Provider>
  );
}
function useSearch() {
  const context = useContext(SeachContext);
  if (context === undefined)
    throw new Error("WeatherContext was used outside of DarkModeProvider");
  return context;
}

export { SearchProvider, useSearch };
