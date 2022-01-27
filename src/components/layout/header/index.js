import styled from 'styled-components';
import { Container } from '../container';
import { Button } from '../../';
import { Link as RouterLink } from 'react-router-dom';
import { useGlobalContext } from '../../../contexts';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: white;
  }
`;

const HeaderStyle = styled.header`
  background: ${props => props.theme.colors.header};
  padding: 15px;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
`;

const Header = ({ }) => {

  const { signout } = useGlobalContext()

  return (
    <HeaderStyle>
      <Container>
        <HeaderContent>
          <Link to='/' >
            <h1>
              DragonsRepo
            </h1>
          </Link>

          <div>
            <Button onClick={signout}>
              Sair
            </Button>
          </div>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  )
}

export { Header }