import styled from "styled-components";

export const StyledList = styled.div`
    display: grid;
    grid-template-rows: minmax(270px, auto);
    grid-auto-rows: minmax(270px, auto);
    grid-template-columns: repeat(auto-fit, 270px);
    padding: 0;
    justify-content: center;
    gap: 20px;
        
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        justify-content: space-around;
        gap: 13px;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
        grid-template-columns: repeat(auto-fit, 270px);
        justify-content: space-around;
        padding: 0 10px;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        grid-template-columns: repeat(4, 270px);
    }
`;