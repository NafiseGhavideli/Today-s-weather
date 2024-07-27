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
  font-size: 2.8rem;
  @media only screen and (max-width: 730px) {
    font-size: 2.2rem;
  }
`;

const Temperature = styled.p`
  color: var(--color-grey-700);
  font-size: 8rem;
  font-weight: 500;
`;
const Info = styled.p`
  color: var(--color-grey-500);
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Icon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
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
          alt="day or night"
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
