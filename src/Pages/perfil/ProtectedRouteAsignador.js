import { useEffect, useState} from "react"
import { Navigate } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const ProtectedRouteAsignador = ({ children }) => {
  
  
  const[asignador, setAsignador]= useState()
 

  const auth = getAuth();
  const dato= auth.currentUser;
  useEffect(()=>{
    const querydb=getFirestore();
    const queryDoc = doc(querydb, "users", dato.uid);
    getDoc(queryDoc).then(res => {
      setAsignador(res.data().asignador)
  
   } )
  },[]) 


 
if (asignador!==true) {
    return <Navigate to='./' />;
  }
  return children;
};

export default ProtectedRouteAsignador;



