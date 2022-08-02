import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: initial;
    }

    body{
    margin: 20px;
    background: #eee;
    font-family: 'Montserrat', sans-serif;
    }
`;