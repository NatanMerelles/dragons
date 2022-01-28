import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DragonLabel } from '../';
import { Buttons, CardStyle, Checkbox, IconButton, Name } from './style';

const Card = ({
  id,
  name,
  type = '',
  isSelecting,
  checked,
  onSelect,
  onEdit,
}) => {

  return (
    <CardStyle>
      <Buttons isSelecting={isSelecting}>
        <IconButton>
          <FontAwesomeIcon
            icon={faCog}
            onClick={onEdit}
            fixedWidth
          />
        </IconButton>

        <Checkbox
          type='checkbox'
          checked={checked}
          onChange={onSelect}
        />
      </Buttons>

      <Name as={Link} to={`/dragon/${id}`}>
        <h1>{name}</h1>
      </Name>

      <div style={{ margin: '14px 0px' }}>
        <DragonLabel
          variant={type.toLocaleLowerCase()}>
          {type}
        </DragonLabel>
      </div>
    </CardStyle>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  isSelecting: PropTypes.bool,
  checked: PropTypes.bool,
  onSelect: PropTypes.func,
  onEdit: PropTypes.func
};

Card.defaultProps = {
  id: '',
  name: '',
  type: '',
  isSelecting: false,
  checked: false,
  onSelect: () => { },
  onEdit: () => { }
};

export { Card }