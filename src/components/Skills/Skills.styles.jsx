import styled from "styled-components";

export const StyledList = styled.div`
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-template-rows: minmax(270px, auto);
    grid-auto-rows: minmax(270px, auto);
    gap: 13px;
`;