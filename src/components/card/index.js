import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Buttons, CardStyle, Checkbox, Label } from './style';

const Card = ({
  nome,
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

      <h1>{nome}</h1>

      <div style={{ margin: '14px 0px' }}>
        <Label
          variant={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Label>
      </div>

      <p>
        Criado em: {createdAt && createdAt.toLocaleDateString()}
      </p>
    </CardStyle>
  )
}

export { Card }