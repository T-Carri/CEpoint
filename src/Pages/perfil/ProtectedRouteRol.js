import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth,  } from '../../context/AuthContext';
import  app  from '../../firebase/firebase';
import { getFirestore, collection, doc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const ProtectedRouteRol = async({ children }) => {
    const auth= getAuth();
    const dato= auth.currentUser
    const db= getFirestore(app)
    const { user } = UserAuth();
const cityRef= db.collection('users').doc(dato.uid)
const doc =await cityRef.get().rol


  if (doc !='admin') {
    return <Navigate to='/client' />;
  }
  return children;
};

export default ProtectedRouteRol;