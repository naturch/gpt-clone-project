import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #343541;
    color: white;
  }
`;

export default GlobalStyle;
