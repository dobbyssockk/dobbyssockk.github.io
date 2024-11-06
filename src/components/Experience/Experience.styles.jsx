import styled from "styled-components";

export const StyledResume = styled.div`
    padding: 20px 20px 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 60px;
    row-gap: 40px;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 320px);
        column-gap: 60px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
        grid-template-columns: repeat(2, 425px);
        column-gap: 80px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        padding: 0 65px 0 65px;
        column-gap: 145px;
    }
`;