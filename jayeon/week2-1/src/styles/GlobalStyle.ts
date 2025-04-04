import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fefefe;
    color: #333;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
