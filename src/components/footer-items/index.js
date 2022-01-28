import PropTypes from 'prop-types';
import { Button } from '../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Item } from './style';

const FooterItems = ({
  onConfirm,
  onDismiss,
  isOpen,
  isLoading,
  countItems
}) => {

  return (
    <Wrapper isOpen={isOpen}>
      <Item>
        Deseja excluir {countItems} {countItems > 1 ? 'itens selecionados' : 'item selecionado'}?
      </Item>

      <Item>
        <Button
          startIcon={
            <FontAwesomeIcon
              icon={isLoading ? faSpinner : faCheck}
              spin={isLoading}
            />
          }
          disabled={isLoading}
          variant='primary'
          aria-label='confirm'
          onClick={onConfirm}
        >
          Excluir
        </Button>
      </Item>
      <Item>
        <Button
          disabled={isLoading}
          variant='secondary'
          aria-label="dismiss"
          onClick={onDismiss}
        >
          Cancelar
        </Button>
      </Item>
    </Wrapper>
  )
}

FooterItems.propTypes = {
  countItems: PropTypes.number,
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  onConfirm: PropTypes.func,
  onDismiss: PropTypes.func
};

FooterItems.defaultProps = {
  countItems: 0,
  isOpen: false,
  isLoading: false,
  onConfirm: () => { },
  onDismiss: () => { }
};

export { FooterItems }