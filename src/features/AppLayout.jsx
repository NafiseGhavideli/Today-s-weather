import { useSearch } from "../context/SearchContext";
import { useWeather } from "../context/WeatherContext";
import WeekDay from "./WeekDay";
import Today from "./Today";
import Container from "../ui/Container";
import Spinner from "../ui/Spinner";
import SearchBar from "../ui/SearchBar";

function AppLayout() {
  const { isLoadingCities } = useSearch();
  const { isLoading } = useWeather();
  return (
    <Container>
      {isLoadingCities ? (
        <SearchBar />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <Today />
          <WeekDay />
        </>
      )}
    </Container>
  );
}

export default AppLayout;
