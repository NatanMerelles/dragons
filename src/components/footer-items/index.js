import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background: #42414d;
  width: 100%;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  position: fixed;
  padding: 26px;
  bottom: 0;
  left: 0;
`;

const Item = styled.div`
   margin: 0 16px;
`;

const FooterItems = ({ onConfirm, onDismiss, isOpen, countItems }) => {

  return (
    <Wrapper isOpen={isOpen}>
      <Item>
        Você selecionou {countItems} {countItems > 1 ? 'itens' : 'item'}
      </Item>

      <Item>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={onConfirm}
        />
      </Item>

      <Item>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onDismiss}
        />
      </Item>
    </Wrapper>
  )
}

export { FooterItems }