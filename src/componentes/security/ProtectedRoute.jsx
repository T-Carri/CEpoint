import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/AuthContext';
import {  useLocation} from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to='/' state={{ from: location}} />;
  }
  return children;
};

export default ProtectedRoute;