import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 30px 30px 25px 30px;
  border: 1px solid #000000;
  div {
    display: flex;
    align-items: center;
    width: 65px;
    height: 65px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 0;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
  }
`;
