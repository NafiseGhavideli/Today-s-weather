import styled from "styled-components";
import Button from "../ui/Button";
import MainInformation from "../ui/MainInformation";
import DetailsBox from "../ui/DetailsBox";

const TodayBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
`;
function Today() {
  return (
    <TodayBox>
      <Button />
      <MainInformation />
      <DetailsBox />
    </TodayBox>
  );
}

export default Today;
