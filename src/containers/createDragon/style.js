import styled from "styled-components";


const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 26px; 

  flex: 1;
`;

const Title = styled.h1`
	margin-bottom: 48px;

	font-family: 'Archivo', sans-serif;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Content, Title, ButtonWrapper }