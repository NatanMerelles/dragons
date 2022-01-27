import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Buttons, CardStyle, Checkbox, Label } from './style';

const Card = ({
  name,
  type = '',
  isSelecting,
  checked,
  onSelect,
  onEdit,
  onClick
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
          variant={type.toLocaleLowerCase()}>
          {type}
        </Label>
      </div>
    </CardStyle>
  )
}

export { Card }