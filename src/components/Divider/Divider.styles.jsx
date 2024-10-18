import styled from "styled-components";

export const StyledDivider = styled.div`
    width: 60px;
    height: 3px;
    background-color: #C0C0C0;
    margin: ${(props) => (props.center ? '25px auto 60px auto' : '4px 0 20px')};
`;