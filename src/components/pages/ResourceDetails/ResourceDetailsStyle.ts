import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Ensures full screen */
  width: 100vw;
  text-align: center;
`;

export const DetailBox = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  text-align: center;
  color:yellow;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;