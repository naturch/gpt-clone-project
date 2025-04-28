import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
    --main-color: #6c63ff;
    --main-color-hover: #574bff;
    --bg-color: #fefefe;
    --font-color: #333;
    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    --border-radius: 6px;
    --font: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
    
    background-color: var(--bg-color);
    color: var(--font-color);

    @media (max-width: 768px) {
    font-size: 90%;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    cursor:pointer;
  }
`;

export default GlobalStyle;
