import { useState, useEffect, useRef } from 'react';

import { DragonsAPI } from '../../../clients/DragonsAPI';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Modal, Form, Button } from '../../../components';
import { ButtonsWrapper, Dismiss } from './style';

const ModalEditDragon = ({
  dragonId,
  isLoading,
  onClose,
  onDragonUpdate
}) => {
  const [dragon, setDragon] = useState({});

  const dragonNameRef = useRef({});
  const dragonTypeRef = useRef({});

  useEffect(() => {
    if (dragonId) {
      DragonsAPI
        .findOne(dragonId)
        .then((result) => setDragon(result));
    }
  }, [dragonId])

  const handleCloseModal = () => {
    setDragon({});
    onClose();
  }

  const handleConfirmButton = () => {
    const name = dragonNameRef.current.value;
    const type = dragonTypeRef.current.value;
    const hasChangedName = name && name !== dragon.name;
    const hasChangedType = type && type !== dragon.type;


    if (hasChangedName || hasChangedType) {
      const newDragon = { name, type }

      onDragonUpdate({ dragonId, newDragon });
      handleCloseModal();
    }
  }

  return (
    <Modal isOpen={!!dragonId} >
      <Modal.Header>
        <div>
          <h3>
            Editar Dragão
          </h3>
        </div>

        <Dismiss onClick={handleCloseModal}>
          <FontAwesomeIcon
            icon={faTimes}
            fixedWidth
          />
        </Dismiss>
      </Modal.Header>
      <Modal.Body>
        <Form.Row>
          <Form.Label>
            Nome:
          </Form.Label>

          <Form.Input
            ref={dragonNameRef}
            type='text'
            defaultValue={dragon.name}
          />
        </Form.Row>

        <Form.Row>
          <Form.Label>
            Tipo:
          </Form.Label>

          <Form.Input
            ref={dragonTypeRef}
            type='text'
            defaultValue={dragon.type}
          />
        </Form.Row>
      </Modal.Body>
      <Modal.Footer>
        <ButtonsWrapper>
          <Button
            startIcon={
              <FontAwesomeIcon
                icon={isLoading ? faSpinner : faCheck}
                spin={isLoading}
              />
            }
            disabled={isLoading}
            variant='primary'
            onClick={handleConfirmButton}
          >
            Confirmar
          </Button>

          <Button
            variant='secondary'
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
        </ButtonsWrapper>
      </Modal.Footer>
    </Modal>
  )
}

export { ModalEditDragon }