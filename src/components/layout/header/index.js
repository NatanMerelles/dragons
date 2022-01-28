import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGlobalContext } from '../../../contexts';

import { Container } from '../container';
import { Button } from '../../';

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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
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

          <ButtonWrapper>
            <Button onClick={signout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          </ButtonWrapper>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  )
}

export { Header }