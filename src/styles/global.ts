import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgrond: #f2f0f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

    --font-regular: 400;
    --font-semibold: 600;
    --font-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // tablets
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    // mobile
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--backgrond);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: var(--font-regular);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: var(--font-semibold);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

