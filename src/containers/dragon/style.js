import styled from "styled-components";

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 26px; 

  flex: 1;
`;

const Name = styled.p`
  font-size: 4.8rem;
  margin-bottom: 2.6rem;

  @media(max-width: 600px){
    font-size: 3.2rem;
  }
`;

const Info = styled.p`
  font-size: 2.6rem;
  margin-bottom: 1.6rem;

  &:last-child {
    margin: 0;
  }

  @media(max-width: 600px){
    font-size: 2rem;
  }
`;

export { Content, Name, Info }