import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  z-index: 1;
  padding: 26px;
  bottom: 0;
  left: 0;

  @media (max-width: 420px){
    flex-wrap: wrap;
    
    > :first-child {
      flex: 1 1 100%;
    }
  }
`;

const Item = styled.div`
  text-align: center;
  margin: 0 1.6rem;

  @media (max-width: 420px){
    margin: 1.2rem;
  }
`;

export { Wrapper, Item }
