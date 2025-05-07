import styled from "styled-components";

export const StyledAbout = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(245px, auto);
    gap: 40px;

    .descr {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      align-self: center;

      .text {
        color: #666;
        line-height: 1.6;
      }

      ul {
        list-style-type: disc;
        margin-bottom: 1rem;
        padding-left: 2rem;
      }
    }

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      grid-template-columns: 315px 380px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
      grid-template-columns: 400px 520px;
      column-gap: 40px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      grid-template-columns: 400px 570px;
      grid-template-rows: minmax(400px, auto);
      column-gap: 70px;
      row-gap: 40px;
    }
  }
`;
