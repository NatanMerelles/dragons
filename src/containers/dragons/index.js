import { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { DragonsAPI } from '../../clients/DragonsAPI';

import { Header, Footer, Container, Button, Card, FooterItems, Modal } from '../../components';
import { useGlobalContext } from '../../contexts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  padding: 26px; 

  flex: 1;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

const CardList = styled.ul`
  list-style: none;

  margin: 0 -12px;
`;

const getDragonsFn = async () => await DragonsAPI.find();

const Dragons = () => {
  const { signout } = useGlobalContext();
  const { data: dragons } = useQuery(['dragons'], getDragonsFn, { initialData: [] });
  console.log(dragons)
  const [selected, setSelected] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleSignout = () => {
    signout();
  }

  const handleCardEdit = (newCardId) => () => setEditing(newCardId);

  const handleCardSelect = (newCardId) => (e) => {
    const result = e.target.checked
      ? [...selected, newCardId]
      : selected.filter(cardId => cardId !== newCardId);

    setSelected(result);
  };

  const isSelecting = Boolean(selected.length);
  const handleConfirmSelecting = () => { }
  const handleDismissSelecting = () => setSelected([]);

  return (
    <PageWrapper>
      <Header onSignout={handleSignout} />

      <Content>
        <Container>
          <ContentTitle>
            <h2>Encontre seu Dragão:</h2>

            <Button size='small' onClick={() => setEditing(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </ContentTitle>

          <CardList>
            {
              dragons.map(({ id, ...props }) => (
                <Card
                  key={id}
                  onSelect={handleCardSelect(id)}
                  onEdit={handleCardEdit(id)}
                  isSelecting={isSelecting}
                  checked={selected.includes(id)}
                  {...props}
                />
              ))
            }
          </CardList>
        </Container>
      </Content>

      <FooterItems
        isOpen={isSelecting}
        countItems={selected.length}
        onConfirm={handleConfirmSelecting}
        onDismiss={handleDismissSelecting}
      />

      <Modal isOpen={editing} >
        <Modal.Header>
          <div>
            <h1>
              Editar Dragão
            </h1>
          </div>

          <div>
            <FontAwesomeIcon fixedWidth icon={faTimes} onClick={() => setEditing(false)} />
          </div>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

      <Footer />
    </PageWrapper>
  )
}

export { Dragons }