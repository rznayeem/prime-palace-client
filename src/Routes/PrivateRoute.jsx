import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;
