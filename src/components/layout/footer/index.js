import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: #1E1E1E;
  color: white;
`;

const Footer = () => {
  return (
    <FooterStyle>
      Development By: Natan Merelles
    </FooterStyle>
  )
}

export { Footer }