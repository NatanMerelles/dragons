import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
  
  :root {
    font-size: 62.5%;

    @media (max-width: 720px){
      font-size: 55%;
    }

    @media (max-width: 450px){
      font-size: 50%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100vh;
  }
  
  body {
    background: ${props => props.theme.colors.primary};
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  body, 
  input,
  button,
  textarea {
    font: 500 1.6rem 'Poppins', sans-serif;
    color: ${props => props.theme.colors.color};
  }
  
  .container {
    width: 90vw;
    max-width: 700px;
  }
`;

export default GlobalStyle