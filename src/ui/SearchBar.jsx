import styled from "styled-components";
import { useSearch } from "../context/SearchContext";

const SearchBox = styled.div`
  height: 20rem;
`;
const Input = styled.input`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
  font-size: 2rem;
`;
const SearchList = styled.ul`
  margin: 0 1.2rem;
  box-shadow: var(--shadow-md);
  cursor: pointer;
`;
const City = styled.li`
  color: var(--color-grey-600);
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-300);
  padding: 1rem 0;
  font-size: 1.2rem;
  text-align: center;
`;
function SearchBar() {
  const { cities, query, setQuery, setChosenLoc, setIsLoadingCities } =
    useSearch();
  return (
    <>
      <SearchBox>
        <Input
          type="search"
          value={query}
          placeholder={"Search a location"}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 2 && (
          <SearchList>
            {cities.map(
              (city, i) =>
                i < 4 && (
                  <City
                    onClick={() => {
                      setChosenLoc({
                        longitude: city.longitude,
                        latitude: city.latitude,
                        name: city.name,
                        timezone: city.timezone,
                      });
                      setIsLoadingCities(false);
                    }}
                    key={city.id}
                  >
                    {city.name}
                  </City>
                )
            )}
          </SearchList>
        )}
      </SearchBox>
    </>
  );
}

export default SearchBar;
