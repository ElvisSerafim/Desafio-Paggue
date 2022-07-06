import { createGlobalStyle, withTheme } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Montserrat', Sans-Serif;
    background-color: white;
    height: 100%;
    font-weight: 600;
  }
`;

export default Global;