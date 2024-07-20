import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";

const HourlyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;
const DetailsBox = styled.div`
  border: 1px solid var(--color-grey-200);
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: ${(props) =>
    props.$isselected ? `var(--shadow-md)` : `var(--shadow-sm)`};
  text-align: center;
  cursor: pointer;
`;
const Temp = styled.p`
  color: var(--color-grey-900);
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const Time = styled.p`
  font-size: 0.8rem;
  color: var(--color-grey-700);
`;
function Hourly() {
  const { handleClick, hourly_temp, time, index } = useWeather();
  const hours = Array.from({ length: 4 }, (_, i) => i);
  return (
    <HourlyBox>
      {hours.map((i) => (
        <DetailsBox
          key={i}
          onClick={() => handleClick(i)}
          $isselected={i === index}
        >
          <Temp>{Math.round(hourly_temp.at(i))}&deg;</Temp>
          <Time>{time.at(i).split("T").at(1)}</Time>
        </DetailsBox>
      ))}
    </HourlyBox>
  );
}

export default Hourly;
