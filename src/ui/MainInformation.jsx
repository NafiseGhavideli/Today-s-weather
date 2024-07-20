import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";
import Hourly from "../features/Hourly";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Location = styled.h1`
  text-align: center;
  color: var(--color-grey-700);
  margin-bottom: 0.5rem;
`;

const Temperature = styled.p`
  color: var(--color-grey-700);
  font-size: 10rem;
  font-weight: 500;
`;
const Info = styled.p`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function MainInformation() {
  const {
    isDay,
    location,
    timezone,
    current,
    max,
    min,
    hourly_temp,
    last_time,
  } = useWeather();
  return (
    <Box>
      <Location>
        {location}{" "}
        <Icon
          src={
            isDay
              ? "https://img.icons8.com/?size=100&id=648&format=png&color=000000"
              : "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
          }
        />
      </Location>
      <Info>{timezone}</Info>

      <Temperature>
        {current ? Math.round(current) : hourly_temp.at(2)}&deg;
      </Temperature>
      <Info>
        {Math.floor(min.at(0))}&#47;{Math.ceil(max.at(0))} Feels like{" "}
        {Math.round(current)}
        &deg;
      </Info>
      <Info>
        Last update at {last_time} {isDay ? "am" : "pm"}
      </Info>
      <Hourly />
    </Box>
  );
}

export default MainInformation;
