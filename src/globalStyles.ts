import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  background-color: #333;
}
body {
  margin: 0;
  padding: 0 20px;
}

* {
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}
`;
