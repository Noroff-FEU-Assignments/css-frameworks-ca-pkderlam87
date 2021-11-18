import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    background: ${(props) => props.theme.colours.backgroundColour};
    background-repeat: no-repeat;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.theme.colours.darkGray}
    height: 100%;
}
`;

export default GlobalStyle;
