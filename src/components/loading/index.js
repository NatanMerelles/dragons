import styled from "styled-components";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingStyle = styled(FontAwesomeIcon)`
  font-size: 2.2rem;
  color: ${props => props.theme.colors.color};
`;

const Loading = () => {
  return <LoadingStyle icon={faSpinner} spin />
}

export { Loading }