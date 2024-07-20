/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { formatDay } from "../helpers/formatDay";

const DayBox = styled.div`
  border: 1px solid var(--color-grey-200);
  padding: 2rem 3rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
`;
const Lable = styled.p`
  color: var(--color-grey-900);
`;

const Temps = styled.p`
  color: var(--color-grey-700);
`;

const Icon = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 1rem;
`;
// eslint-disable-next-line react/prop-types
function Day({ date, max, min, isToday, code }) {
  return (
    <DayBox>
      <Lable>{isToday ? "Today" : formatDay(date)}</Lable>
      <Icon src={getWeatherIcon(code)}></Icon>
      <Temps>
        {Math.floor(min)}&deg;&mdash;{Math.ceil(max)}&deg;
      </Temps>
    </DayBox>
  );
}

export default Day;
