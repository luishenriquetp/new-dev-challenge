import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensures full screen */
  width: 100vw;
  text-align: center;
`;

export const List = styled.ul`
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;