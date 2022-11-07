import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import UserContext from '../../context/AuthContext';
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;