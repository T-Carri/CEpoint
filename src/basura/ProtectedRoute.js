/* import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext';
import UserContext from '../context/AuthContext';
const ProtectedRoute = ({ children }) => {
 // const { user } = useContext(UserContext);
const user =getAuth()
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute; */