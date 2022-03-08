import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff7676;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }
  body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    font-family: "Anton", sans-serif;
    font-weight: lighter;
    color: #333;
  }
  h2 {
    font-size: 1.5rem;
    color: #333;
  }
  h3 {
    font-size: 1rem;
    color: #333;
  }
  p {
    font-size: 0.9rem;
    color: #696969;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
