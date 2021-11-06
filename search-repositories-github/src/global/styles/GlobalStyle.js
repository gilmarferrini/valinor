import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    background: var(--background);
  }

  body {
    -webkit-font-smoothing: antialiased;
    width: 70rem;
    max-width: 70rem;
    margin: 0 auto;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`