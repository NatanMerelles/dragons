import styled from 'styled-components';
import { Container } from '../container';
import { Button } from '../../';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderStyle = styled.header`
  background: #1E1E1E;
  padding: 15px;
`;

const Header = ({ onSignout = () => { } }) => {
  return (
    <HeaderStyle>
      <Container>
        <HeaderContent>
          <h1>
            DragonsRepo
          </h1>

          <div>
            <Button onClick={onSignout}>
              Sair
            </Button>
          </div>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  )
}

export { Header }