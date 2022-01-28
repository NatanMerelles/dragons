import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  background: ${props => props.theme.colors.header};
  color: white;
  user-select: none;

  @media(max-width: 600px){
    flex-direction: column-reverse;

    > :last-child {
      margin-bottom: 1rem;
    }
  }
`;

const SwitchWrapper = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 0.8rem;

  @media(max-width: 600px){
    position: static;
  }
`;

export { FooterStyle, SwitchWrapper }