import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  @media only screen and (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media only screen and (max-width: 470px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  border: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);

  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  @media only screen and (max-width: 730px) {
    gap: 1rem;
    padding: 0.8rem 1.4rem;
  }
`;
const Lable = styled.p`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  align-items: center;
`;
const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function DetailsBox() {
  const {
    uv_index,
    wind_speed,
    precipitation_probability,
    relative_humidity,
    sunrise,
    sunset,
  } = useWeather();
  return (
    <Box>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=2383&format=png&color=000000" />
        <Lable>UV</Lable>
        {uv_index}
      </Detail>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=17481&format=png&color=000000" />
        <Lable>Humidity</Lable>
        {relative_humidity}
      </Detail>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=lDDjS4BvtYQu&format=png&color=000000" />
        <Lable>Sunrise</Lable>
        {sunrise.at(0).split("T").at(1)}
      </Detail>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=22560&format=png&color=000000" />
        <Lable>Precipitation</Lable>
        {precipitation_probability} %
      </Detail>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=105029&format=png&color=000000" />
        <Lable>Wind speed</Lable>
        {wind_speed} km/h
      </Detail>
      <Detail>
        <Image src="https://img.icons8.com/?size=100&id=1AuU19V2XAOV&format=png&color=000000" />
        <Lable>Sunset</Lable>
        {sunset.at(0).split("T").at(1)}
      </Detail>
    </Box>
  );
}

export default DetailsBox;
