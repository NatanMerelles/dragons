import { useLocation, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts';

const PrivateContent = ({ children }) => {
  const location = useLocation();
  const global = useGlobalContext();

  if (global && !global.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export { PrivateContent }
