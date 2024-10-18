import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    .section-container {
        width: 1140px;
        margin: 0 auto;
        padding-top: 120px;
    }

    .center {
        text-align: center;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    h3, h4, p {
        margin: 0;
    }
`;

export default GlobalStyle;