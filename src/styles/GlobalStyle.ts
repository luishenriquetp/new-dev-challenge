import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Press Start 2P', sans-serif;
    background: url('https://wallpaperaccess.com/full/190992.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    text-align: center;
  }

  a {
    color: #ffe81f;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    text-shadow: 0px 0px 10px #ffe81f;
    transform: scale(1.1);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    text-shadow: 0px 0px 10px rgba(255, 232, 31, 0.8);
  }
`;
