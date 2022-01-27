import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { DragonsAPI } from '../../clients/DragonsAPI';

import { Header, Footer, Form, Panel } from '../../components';
import { useRef } from 'react';


const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 26px; 

  flex: 1;
`;

export const Title = styled.h1`
	margin-bottom: 48px;

	font-family: 'Archivo', sans-serif;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const createDragonFn = async (dragon) => await DragonsAPI.insert(dragon);

const CreateDragon = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const inputNameRef = useRef({});
  const inputTypeRef = useRef({});

  const { mutate: createDragon, isLoading } = useMutation(createDragonFn, {
    onMutate: async (dragon) => {
      await queryClient.cancelQueries(['dragons']);

      const previous = queryClient.getQueryData(['dragons']);

      queryClient.setQueryData(['dragons'], (old = []) => [...old, dragon]);

      return { previous }
    },
    onError: (err, data, context) => queryClient.setQueryData(['dragons'], context.previous),
    onSettled: () => queryClient.invalidateQueries(['dragons']),
  });

  const handleClickConfirmButton = () => {
    const name = inputNameRef.current.value;
    const type = inputTypeRef.current.value;

    if (name && type) {
      const dragon = {
        name,
        type,
        createdAt: new Date()
      }

      const callback = {
        onSuccess: () => {
          navigate("/");
        }
      }

      createDragon(dragon, callback);
    }
  }

  return (
    <PageWrapper>
      <Header></Header>

      <Content>

        <Panel>
          <Panel.Item>
            <Title>
              Novo Dragão
            </Title>

            <Form.Row>
              <Form.Label>
                Nome
              </Form.Label>

              <Form.Input ref={inputNameRef} type='text' />
            </Form.Row>

            <Form.Row>
              <Form.Label>
                Tipo
              </Form.Label>

              <Form.Input ref={inputTypeRef} type='text' />
            </Form.Row>

            <Form.Row>
              <ButtonWrapper>
                <Form.Button
                  startIcon={
                    <FontAwesomeIcon
                      icon={isLoading ? faSpinner : faCheck}
                      spin={isLoading}
                    />
                  }
                  disabled={isLoading}
                  onClick={handleClickConfirmButton}
                >
                  Cadastrar
                </Form.Button>
              </ButtonWrapper>
            </Form.Row>
          </Panel.Item>
        </Panel>

      </Content>

      <Footer></Footer>
    </PageWrapper>
  )
}

export { CreateDragon }