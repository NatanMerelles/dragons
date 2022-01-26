import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Buttons, CardStyle, Checkbox, Label } from './style';
import { capitalize } from '../../utils';

const Card = ({
  name,
  type = '',
  createdAt,
  isSelecting,
  checked,
  onSelect,
  onEdit
}) => {

  return (
    <CardStyle>
      <Buttons isSelecting={isSelecting}>
        <div>
          <FontAwesomeIcon
            icon={faCog}
            onClick={onEdit}
          />
        </div>

        <div>
          <Checkbox
            type='checkbox'
            checked={checked}
            onChange={onSelect}
          />
        </div>
      </Buttons>

      <h1>{name}</h1>

      <div style={{ margin: '14px 0px' }}>
        <Label
          variant={type}>
          {capitalize(type)}
        </Label>
      </div>

      <p>
        Criado em: {createdAt && new Date(createdAt).toLocaleDateString()}
      </p>
    </CardStyle>
  )
}

export { Card }