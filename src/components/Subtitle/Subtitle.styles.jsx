import styled from "styled-components";

export const StyledSubtitle = styled.div`
    color: #000;
    font-weight: 700;
    font-size: 36px;
    line-height: 60px;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
`;