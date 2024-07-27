/* eslint-disable react/prop-types */
import Day from "../ui/Day";
import { useWeather } from "../context/WeatherContext";
import styled from "styled-components";

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2rem;
  @media only screen and (max-width: 730px) {
    overflow: scroll;
    padding-bottom: 2rem;
  }
`;
const WeekDaysContainer = styled.div`
  @media only screen and (max-width: 730px) {
    width: 500px;
  }
  @media only screen and (max-width: 570px) {
    width: 400px;
  }
  @media only screen and (max-width: 470px) {
    width: 300px;
  }
`;

function WeekDay() {
  const { dates, max, min, codes } = useWeather();

  return (
    <WeekDaysContainer>
      <WeekDays>
        {dates.map((date, i) => (
          <Day
            key={i}
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            isToday={i === 0}
          />
        ))}
      </WeekDays>
    </WeekDaysContainer>
  );
}

export default WeekDay;
