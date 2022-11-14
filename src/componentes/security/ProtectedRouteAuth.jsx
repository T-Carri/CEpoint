import React, {useContext, useEffect} from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRouteAuth = ({ children }) => {

 const navigate= Navigate()


useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken){
        navigate('/account')
    }
    if(!authToken){
        navigate('/')
    }
},[])
  
  return children;
};

export default ProtectedRouteAuth;   