import styled from 'styled-components';

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: repeat(auto-fit, 300px);
    grid-auto-rows: 280px;
    justify-content: center;
    gap: 10px;
`;