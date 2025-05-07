import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 2rem 1rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

export const StyledCategory = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: #c0c0c0;
  }
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  gap: 10px;
`;
