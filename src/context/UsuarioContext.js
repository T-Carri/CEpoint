import React, {createContext, useContext, useState, useEffect} from 'react'
import { getFirestore, update, FieldValue, get, query, where, collection, getDoc, onSnapshot, doc, updateDoc, arrayUnion} from "firebase/firestore"
import { db } from '../firebase/firebase';
import UserContext from './AuthContext';

const UsuarioContext = createContext( )
export default UsuarioContext;

export const UsuarioContextProvider = ({children}) => {
    const {user} = useContext(UserContext)
// analizador de accesos asignacion, lectorAsistencia, usator
const [asignador, setAsignador]= useState()
const [lectorAsistencia, setLectorAsistencia]= useState()
const [Usator, setUsator]= useState()

const accessKey = async ()=>{
  
    const queryDoc = doc(db, "users", user.uid);
   await getDoc(queryDoc).then(res => {
      setAsignador(res.data().asignador)
     console.log("Es asignador?:", res.data().asignador)
     setLectorAsistencia(res.data().lectoreAsistencia)
     console.log("Es lector?:", res.data().lectoreAsistencia)
     setUsator(res.data().usator)
      
    } )
  }
  
   //esta funcion identifica rol de usuario
 const [UserRol, setUserRol] =useState()

 const getRol =async()=>{
  
  const queryDoc = doc(db, "users", user.uid);
 await getDoc(queryDoc).then(res => {
    setUserRol(res.data().rol)
    console.log( res.data().rol)
}    )
} 


  return (
  <UsuarioContext.Provider value={
    {           getRol,
        UserRol,
      asignador,
lectorAsistencia,
       Usator,  
       accessKey}
  }>
    {children}

  </UsuarioContext.Provider>
  )
}
