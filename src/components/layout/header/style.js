import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

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

export { HeaderContent, HeaderStyle, Link, ButtonWrapper }