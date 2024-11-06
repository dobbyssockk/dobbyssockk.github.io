import styled from "styled-components";

export const StyledSubtitle = styled.div`
    color: #000;
    font-weight: 700;
    font-size: 24px;
    line-height: 60px;
    text-align: ${(props) => (props.center ? 'center' : 'left')};

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 28px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 36px;
    }
`;