import { useEffect, useState} from "react"
import { Navigate } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const ProtectedRouteAsignador = ({ children }) => {
  
  
  const[Usetor, setUsetor]= useState()
 

  const auth = getAuth();
  const dato= auth.currentUser;
  useEffect(()=>{
    const querydb=getFirestore();
    const queryDoc = doc(querydb, "users", dato.uid);
    getDoc(queryDoc).then(res => {
      setUsetor(res.data().usator)
  
   } )
  },[]) 


 
if (Usetor!=true) {
    return <Navigate to='./' />;
  }
  return children;
};

export default ProtectedRouteAsignador;



