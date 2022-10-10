import { useEffect, useState} from "react"
import { Navigate } from 'react-router-dom';
import  app  from '../../firebase/firebase';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const ProtectedRouteAsignador = ({ children }) => {
  
  //states
  const[enableChecador, setEnableChecador] =useState()
  const[asignador, setAsignador]= useState()
 

  const auth = getAuth();
  const dato= auth.currentUser;
  
  if (dato!==null){
    console.log( "uid", dato.uid )
  }


  useEffect(()=>{
    const querydb=getFirestore();
    const queryDoc = doc(querydb, "users", dato.uid);
    getDoc(queryDoc).then(res => {
      setAsignador(res.data().asignador)
     console.log("Es asignador?:", res.data().asignador)
      

    } )
  },[]) 

//console.log(userRol);
 
if (asignador!=true) {
    return <Navigate to='./' />;
  }
  return children;
};

export default ProtectedRouteAsignador;

// setlectoresAsistencia(res.data().lectoresAsistencias)
// const[lectoresAsistencia, setlectoresAsistencia]=useState()



