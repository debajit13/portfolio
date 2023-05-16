import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
    }

    * {
        font-family: 'Poppins', sans-serif !important;
    }

    #root {
        height: 100vh;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
