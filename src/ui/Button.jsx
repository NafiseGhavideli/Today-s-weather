import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 8%;
  left: 5%;
  background-color: var(--color-grey-100);
  border: none;
  cursor: pointer;
`;
function refreshPage() {
  window.location.reload();
}
function Button() {
  return (
    <ButtonIcon type="button" onClick={refreshPage}>
      <img src="https://img.icons8.com/?size=100&id=14917&format=png&color=000000" />
    </ButtonIcon>
  );
}

export default Button;
