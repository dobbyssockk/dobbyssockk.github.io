import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 18px 10px;
  background-color: black;
  border-bottom: 1px solid #444;
  z-index: 2;

  ul {
    display: flex;
    justify-content: space-around;
  }
`;