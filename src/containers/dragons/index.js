import { useState } from 'react';
import produce from 'immer';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { DragonsAPI } from '../../clients/DragonsAPI';
import { useGlobalContext } from '../../contexts';

import {
  Header,
  Footer,
  Container,
  Button,
  Card,
  FooterItems
} from '../../components';
import { ModalEditDragon } from './modals';
import { PageWrapper, Content, ContentTitle, CardList } from './style';

const getDragonsFn = async () => await DragonsAPI.find();
const updateDragonFn = async ({ dragonId, newDragon }) => await DragonsAPI.update(dragonId, newDragon);
const removeDragonFn = async (dragonsIds) => await DragonsAPI.removeMany(dragonsIds);

const Dragons = () => {
  const { signout } = useGlobalContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: dragons } = useQuery(['dragons'], getDragonsFn, { initialData: [] });
  const [selected, setSelected] = useState([]);
  const [editing, setEditing] = useState(null);

  const { mutate: updateDragon } = useMutation(updateDragonFn, {
    onMutate: async ({ dragonId, newDragon }) => {
      await queryClient.cancelQueries(['dragons']);

      const previous = queryClient.getQueryData(['dragons']);

      queryClient.setQueryData(['dragons'], produce((draft) => {
        const dragon = draft.find((dragon) => dragon.id === dragonId);

        dragon.name = newDragon.name;
        dragon.type = newDragon.type;
      }));

      return { previous }
    },
    onError: (err, data, context) => queryClient.setQueryData(['dragons'], context.previous),
    onSettled: () => queryClient.invalidateQueries(['dragons']),
  })

  const { mutate: removeDragon } = useMutation(removeDragonFn, {
    onMutate: async (dragonsIds) => {
      await queryClient.cancelQueries(['dragons']);

      const previous = queryClient.getQueryData(['dragons']);

      queryClient.setQueryData(['dragons'], (old) => old.filter(dragon => !dragonsIds.includes(dragon.id)));

      return { previous }
    },
    onError: (err, data, context) => queryClient.setQueryData(['dragons'], context.previous),
    onSettled: () => queryClient.invalidateQueries(['dragons']),
  })

  const handleSignout = () => signout();
  const handleCardEdit = (newCardId) => () => setEditing(newCardId);
  const handleCardSelect = (newCardId) => (e) => {
    const result = e.target.checked
      ? [...selected, newCardId]
      : selected.filter(cardId => cardId !== newCardId);

    setSelected(result);
  };

  const handleConfirmSelecting = async () => {
    removeDragon(selected);
    setSelected([]);
  };

  const handleDismissSelecting = () => setSelected([]);
  const handleCloseModal = () => setEditing(null);
  const handleClickNewDragonButton = () => navigate("/dragon");

  const isSelecting = Boolean(selected.length);

  return (
    <PageWrapper>
      <Header onSignout={handleSignout} />

      <Content>
        <Container>
          <ContentTitle>
            <h2>Encontre seu Dragão:</h2>

            <Button
              variant='success'
              size='small'
              onClick={handleClickNewDragonButton}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </ContentTitle>

          <CardList>
            {
              dragons
                .sort((first, second) => new Intl.Collator().compare(first.name, second.name))
                .map(({ id, ...props }) => (
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

      <ModalEditDragon
        dragonId={editing}
        onClose={handleCloseModal}
        onDragonUpdate={updateDragon}
      />

      <Footer />
    </PageWrapper>
  )
}

export { Dragons }