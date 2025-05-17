// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #343541; 
    color: #ffffff;
    overflow: hidden;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
