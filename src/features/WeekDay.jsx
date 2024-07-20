import Day from "../ui/Day";
import { useWeather } from "../context/WeatherContext";
import styled from "styled-components";

const WeekDays = styled.div`
  display: flex;
  gap: 2rem;
`;

function WeekDay() {
  const { dates, max, min, codes } = useWeather();

  return (
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
  );
}

export default WeekDay;
