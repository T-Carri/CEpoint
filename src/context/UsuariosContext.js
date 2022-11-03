import React, {createContext, useState, useContext, useEffect} from 'react'
import { getFirestore, update, FieldValue, get, query, where, collection, getDoc, onSnapshot, doc, updateDoc, arrayUnion} from "firebase/firestore"
import { db } from '../firebase/firebase';
const UsuariosContext = createContext( )
export default UsuariosContext;

export const UsuariosProvider = ({children}) => {
       
       const [Usuarios, setUsuarios] = useState([])  
       const [Userun, setUserun]=useState([]) 
       const [Actualizador, setActualizador] = useState('') 
  //obten todos los usuarios hacer un reducer para  
    const getUsuarios =async()=>{
        const q = query(collection(db, "users"))
        await onSnapshot(q, (query)=>{
         const data=[]
         query.forEach((doc)=>{
           data.push(doc.data())
         })
         console.log("usuarios", data)
         setUsuarios(data)
        })
      
      }

            //obtengo usuarios que no estan activados 
      const getUsersUnable = async()=>{
        const UU = query(collection(db, "users"),where("activo","==", false))
        await  onSnapshot(UU, (Q)=>{
          const dato=[]
      
          Q.forEach((element) => {
      
            dato.push(element.data())
            
          });
      
          setUserun(dato)
        })
      }
               //ver la forma de activar        
   
   const activateUser = async()=>{
    const AU = doc(db, "users", Actualizador)
    await updateDoc(AU,
      
      {
        activo: true
      })
   }
   
       return (
           <UsuariosContext.Provider value={{Usuarios, getUsuarios, getUsersUnable, Userun, setActualizador, activateUser}}>
           {children}
           </UsuariosContext.Provider>
     )
   }
   


