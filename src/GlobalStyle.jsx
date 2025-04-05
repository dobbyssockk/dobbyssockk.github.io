import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    main {
        display: flex;
        justify-content: center;
    }

    .section-container {
        width: 100%;
        padding: 180px 10px 0 10px;

        @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
            width: 720px;
            padding: 120px 0 0 0;
        }

        @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
            width: 960px;
        }

        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
            width: 1140px;
        }
    }

    .pd-btm {
        padding-bottom: 90px;
    }

    .center {
        text-align: center;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    img { 
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    h3, h4, p {
        margin: 0;
    }

    a {
        cursor: pointer;
    }
`;

export default GlobalStyle;
