import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 3rem;
  left: 2.5rem;
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
      <img
        src="https://img.icons8.com/?size=100&id=15811&format=png&color=000000"
        alt="reload"
      />
    </ButtonIcon>
  );
}

export default Button;
