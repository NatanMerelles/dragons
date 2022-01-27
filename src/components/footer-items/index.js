import styled from 'styled-components';
import { Button } from '../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
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
        Deseja excluir {countItems} {countItems > 1 ? 'itens selecionados' : 'item selecionado'}?
      </Item>

      <Item>
        <Button variant='primary' onClick={onConfirm}>
          Excluir
        </Button>
      </Item>

      <Item>
        <Button variant='secondary' onClick={onDismiss}>
          Cancelar
        </Button>
      </Item>
    </Wrapper>
  )
}

export { FooterItems }