import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DragonsAPI } from '../../../clients/DragonsAPI';

import { Modal, Form, Button } from '../../../components';
import { ButtonsWrapper } from './style';


const ModalEditDragon = ({ dragonId, onClose, onDragonUpdate }) => {
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

    if (name && type) {
      const newDragon = {
        ...dragon,
        name,
        type
      }

      onDragonUpdate({ dragonId, newDragon });
      handleCloseModal();
    }
  }

  return (
    <Modal isOpen={dragonId} >
      <Modal.Header>
        <div>
          <h3>
            Editar Dragão
          </h3>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleCloseModal}
            fixedWidth
          />
        </div>
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