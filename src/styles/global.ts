import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    -webkit-font-smoothing: antialiased !important;
    background: var(--color-background);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }
  button{
    cursor: pointer;
  }
  body, input, button, textarea{
    font-weight: 500;
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    color: var(--color-text-base);
  }

  h1,h2,h3,h4,h5,strong{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
  }

  body, html, #root{
    height: 100vh;
  }


  :root {
  --color-background: #EAEAEA;
  --color-primary: #E9B626;
  --color-secundary: #8A8462;
  --color-dark: #574F1E;

  --color-text-base: #574F1E;
  --color-text-secundary: #E7E2DD;
  --color-button-background: #E9B626;
  --color-button-text: #EAEAEA;
  --color-error: #c53030;
  --color-text-placeholder: #a8a8b3;
  --color-white: #fff;
  font-size: 60%;

}

@media(min-width: 700px){
  :root{
    font-size: 62.5%;
  }
}
`;
export default GlobalStyles;
