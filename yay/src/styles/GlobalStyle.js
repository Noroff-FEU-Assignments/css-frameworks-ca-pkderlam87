import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    background: ${(props) => props.theme.colours.backgroundColour}; 
    height: 100vh;
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.theme.colours.darkGray}
}
`;

export default GlobalStyle;