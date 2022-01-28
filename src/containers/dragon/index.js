import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { DragonsAPI } from "../../clients/DragonsAPI";

import {
  Header,
  Footer,
  Panel,
  PageWrapper,
  DragonLabel,
  Loading
} from "../../components";
import { Content, Name, Info } from './style';

const Dragon = () => {
  const { dragonId } = useParams();
  const navigate = useNavigate();

  const [dragon, setDragon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dragonId) {

      DragonsAPI
        .findOne(dragonId)
        .then((result) => {
          if (result && result.id) {
            setDragon(result);
            setIsLoading(false);
          } else {
            navigate('/');
          }
        })
        .catch(() => {
          navigate('/')
        })
    }
  }, [dragonId, navigate]);

  return (
    <PageWrapper>
      <Header>

      </Header>

      <Content>
        {
          isLoading
            ? <Loading />
            : (
              <Panel>

                <Panel.Item>
                  <Name>
                    {dragon.name}
                  </Name>

                  <Info>
                    Tipo: <DragonLabel>{dragon.type}</DragonLabel>
                  </Info>

                  <Info>
                    Criado Em: {dragon.createdAt && new Date(dragon.createdAt).toLocaleDateString()}
                  </Info>
                </Panel.Item>

              </Panel>
            )
        }
      </Content>

      <Footer>

      </Footer>
    </PageWrapper>
  )
}

export { Dragon }