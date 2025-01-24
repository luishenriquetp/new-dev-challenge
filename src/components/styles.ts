import styled, { keyframes } from "styled-components";

const crawl = keyframes`
  from {
    transform: perspective(300px) rotateX(20deg) translateY(100%);
    opacity: 1;
  }
  to {
    transform: perspective(300px) rotateX(25deg) translateY(-200%);
    opacity: 0;
  }
`;

export const PageContainer = styled.div`
  background-color: black;
  color: yellow;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
`;

export const CrawlText = styled.div`
  font-size: 1.5rem;
  width: 60%;
  margin: auto;
  text-align: justify;
  animation: ${crawl} 20s linear infinite;
`;

export const StarWarsTitle = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: yellow;
  text-shadow: 0 0 10px yellow;
  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 15px 0;
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled.a`
  color: cyan;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    text-shadow: 0 0 15px cyan;
  }
`;

export const Button = styled.button`
  background: black;
  border: 2px solid yellow;
  color: yellow;
  font-size: 1.2rem;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: yellow;
    color: black;
    box-shadow: 0 0 20px yellow;
  }
`;
