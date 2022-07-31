import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto Mono", monospaced;
  }

  body {
    background-color: #222;
  }

  p, h1, h2, h3, h4, h5, h6 {
    color: #eee;
  }
`;
