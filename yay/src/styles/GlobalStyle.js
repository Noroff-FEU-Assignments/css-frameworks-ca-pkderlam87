import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    background: ${(props) => props.theme.backgroundColour}; 
    height: 100vh;
    font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyle;