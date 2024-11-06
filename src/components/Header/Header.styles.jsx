import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 12px 8px;
  background-color: black;
  border-bottom: 1px solid #444;
  z-index: 2;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      margin: 10px 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 18px 10px;

    ul {
      flex-direction: row;
      justify-content: space-around;

      li {
        margin: 0;
      }
    }
  }
`;