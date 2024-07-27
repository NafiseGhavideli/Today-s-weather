import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);

  padding: 3rem;
  margin: 0 auto;
  border-radius: var(--border-radius-lg);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Container;
