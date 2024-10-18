import styled from "styled-components";

export const StyledTitle = styled.div`
    position: relative;
    color: #000;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
    padding: ${(props) => props.padding ? '1px 0 0 12px' : 'unset'};

    &:before {
        content: '';
        position: absolute;
        top: -25%;
        left: ${(props) => (props.center ? '50%' : '0')};
        transform: ${(props) => (props.center ? 'translateX(-50%)' : 'none')};
        width: 36px;
        height: 36px;
        border-radius: 100%;
        background-color: #C0C0C0;
        z-index: -1;
    }

    z-index: 1;
`;