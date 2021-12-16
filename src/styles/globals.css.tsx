import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    font-family: 'Roboto';
    color: rgba(0, 0, 0, 0.85);
  }

  #__next {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};
