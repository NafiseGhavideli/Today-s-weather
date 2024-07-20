import AppLayout from "./features/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { WeatherProvider } from "./context/WeatherContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <WeatherProvider>
        <GlobalStyles />
        <AppLayout />
      </WeatherProvider>
    </SearchProvider>
  );
}

export default App;
