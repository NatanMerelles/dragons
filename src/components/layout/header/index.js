import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGlobalContext } from '../../../contexts';

import { Container } from '../container';
import { Button } from '../../';
import { HeaderContent, HeaderStyle, Link, ButtonWrapper } from './style';

const Header = () => {
  const { signout } = useGlobalContext();

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